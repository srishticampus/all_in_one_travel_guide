const express = require("express");
const {
  addHotelBooking,
  getBookingsByTouristId,
  getAllBookings,
  getBookingsByHotelId,
  cancelBookingById,

} = require("./hotelBooking.controller");
const roomsBookingRoutes = express.Router();
roomsBookingRoutes.post("/add-hotel-booking", addHotelBooking);
roomsBookingRoutes.get("/tourist/:touristId", getBookingsByTouristId);
roomsBookingRoutes.get("/hotel/:hotelId", getBookingsByHotelId);
roomsBookingRoutes.get("/all", getAllBookings);
roomsBookingRoutes.patch("/cancelBookingById/:id", cancelBookingById);
module.exports = roomsBookingRoutes;
