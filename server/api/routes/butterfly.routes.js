const express = require("express");
const router = express.Router();
const ButterflySchema = require("../models/butterfly.model");
// const authorize = require("../utils/middlewares/auth");


// Get All styles
// router.route('/butterfly').get(authorize, (req, res, next) => {
router.route('/butterfly').get( (req, res, next) => {
    ButterflySchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

module.exports = router;