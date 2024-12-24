const express = require("express");
const {
  calculateTaxiFare,
  taxiRequets,
  getAllTaxiBookingByTouristId,
  getAllTaxiBookings,
  getAllPendingTaxiBookings,
  acceptReqById,
} = require("./taxiBooking.controller");
const taxiBookingRoutes = express.Router();

taxiBookingRoutes.post("/fare-calculation", calculateTaxiFare);
taxiBookingRoutes.post("/taxi-request", taxiRequets);
taxiBookingRoutes.get("/by-tourist-id/:id", getAllTaxiBookingByTouristId);
taxiBookingRoutes.get("/getAllTaxiBookings", getAllTaxiBookings);
taxiBookingRoutes.get("/getAllPendingTaxiBookings", getAllPendingTaxiBookings);
taxiBookingRoutes.patch("/accept/:id", acceptReqById);
module.exports = taxiBookingRoutes;
