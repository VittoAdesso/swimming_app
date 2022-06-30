const express = require("express");
const router = express.Router();
const CrollSchema = require("../models/croll.model");
const authorize = require("../utils/middlewares/auth");


// Get All stykes
router.route('/croll').get(authorize, (req, res, next) => {
    CrollSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

module.exports = router;
