const express = require("express");
const router = express.Router();
const CrollSchema = require("../models/croll.model");
const authorize = require("../utils/middlewares/auth");


// Get All Podcasts
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



// //importo las funciones que crearé
// const { getAllEstilosLibres, getEstiloLibreId} = require("../controller/libre.controller"); 

// //definimos métodos y método del controlador con las rutas (revisa carpeta controller)
// router.get("/", getAllEstilosLibres); 
// router.get("/:libreId", getEstiloLibreId); 


