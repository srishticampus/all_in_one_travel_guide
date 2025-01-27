const { isEmailUnique } = require("../middleware/emailUnique");
const {
  hotelSignup,
  getAllHotels,
  getHotelDataById,
  editHotel,
  activateHotel,
  deActivateHotel,
} = require("./hotel.controller");
const express = require("express");
const hotelRoutes = express.Router();

hotelRoutes.post("/signup", isEmailUnique, hotelSignup);
hotelRoutes.get("/getAllHotels", getAllHotels);
hotelRoutes.get("/getHotelById/:id", getHotelDataById);
hotelRoutes.patch("/updateHotel/:id", editHotel);
hotelRoutes.patch("/activate/:id", activateHotel);
hotelRoutes.patch("/deActivate/:id", deActivateHotel);
module.exports = hotelRoutes;
