const express = require("express");
const {
  destinationImages,
  addTouristPlace,
  getAllDestination,
  deleteDestination,
  getDestinationById,
} = require("./topDestinatations.controller");
const destinationRoutes = express.Router();

destinationRoutes.post("/add", destinationImages, addTouristPlace);
destinationRoutes.get("/get-all", getAllDestination);
destinationRoutes.delete("/:id", deleteDestination);
destinationRoutes.get("/:id", getDestinationById);

module.exports = destinationRoutes;
