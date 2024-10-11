const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../Back_Calc/controllers/calculadoraControllers.js');

router
    .post('/sumar', calculadoraControllers.sumar)
    .post('/restar', calculadoraControllers.restar)
    .post('/multiplicar', calculadoraControllers.multiplicar)

module.exports = router;