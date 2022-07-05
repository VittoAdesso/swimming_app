const express = require("express");
const router = express.Router();
const FrogSchema = require("../models/frog.model");
const authorize = require("../utils/middlewares/auth");


// Get All styles
router.route('/frog').get(authorize, (req, res, next) => {
    FrogSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

module.exports = router;