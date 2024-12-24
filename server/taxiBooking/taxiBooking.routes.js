const express = require('express');
const { calculateTaxiFare } = require('./taxiBooking.controller');
const taxiBookingRoutes = express.Router();

taxiBookingRoutes.post('/fare-calculation', calculateTaxiFare);
module.exports = taxiBookingRoutes;