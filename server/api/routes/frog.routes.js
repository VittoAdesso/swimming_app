const express = require("express");
const router = express.Router();
const BackSchema = require("../models/back.model");
const authorize = require("../utils/middlewares/auth");


// Get All styles
router.route('/back').get(authorize, (req, res, next) => {
    BackSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

module.exports = router;