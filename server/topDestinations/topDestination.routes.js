const express = require("express");
const { destinationImages, addTouristPlace } = require("./topDestinatations.controller");
const destinationRoutes = express.Router();

destinationRoutes.post("/add", destinationImages, addTouristPlace);

module.exports = destinationRoutes;