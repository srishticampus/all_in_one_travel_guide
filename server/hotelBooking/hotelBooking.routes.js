const express = require("express");
const {
  addHotelBooking,
  getBookingsByTouristId,
  getBookingsByAgencyId,
  getAllBookings,
  getBookingsByHotelId,
} = require("./hotelBooking.controller");
const hotelBookingRoutes = express.Router();
hotelBookingRoutes.post("/add-hotel-booking", addHotelBooking);
hotelBookingRoutes.get("/tourist/:touristId", getBookingsByTouristId);
hotelBookingRoutes.get("/hotel/:hotelId", getBookingsByHotelId);
hotelBookingRoutes.get("/agency/:agencyId", getBookingsByAgencyId);
hotelBookingRoutes.get("/all", getAllBookings);
module.exports = hotelBookingRoutes;
