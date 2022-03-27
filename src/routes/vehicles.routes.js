const express = require('express');


const vehiclesController = require('../controllers/vehicles.controller.js');

const router = express.Router();

router.get("/vehicles", vehiclesController.renderPrueba);

module.exports = router;