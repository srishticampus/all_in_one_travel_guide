const express = require('express');
const { calculateTaxiFare, taxiRequets, getAllTaxiBookingByTouristId } = require('./taxiBooking.controller');
const taxiBookingRoutes = express.Router();

taxiBookingRoutes.post('/fare-calculation', calculateTaxiFare);
taxiBookingRoutes.post('/taxi-request', taxiRequets);
taxiBookingRoutes.get('/by-tourist-id/:id', getAllTaxiBookingByTouristId);
module.exports = taxiBookingRoutes;