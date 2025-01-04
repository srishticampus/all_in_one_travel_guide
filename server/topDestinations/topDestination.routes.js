const express = require("express");
const {
  destinationImages,
  addTouristPlace,
  getAllDestination,
} = require("./topDestinatations.controller");
const destinationRoutes = express.Router();

destinationRoutes.post("/add", destinationImages, addTouristPlace);
destinationRoutes.get("/get-all", getAllDestination);

module.exports = destinationRoutes;
