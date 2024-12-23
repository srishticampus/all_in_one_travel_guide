const { isEmailUnique } = require("../middleware/emailUnique");
const { hotelSignup, getAllHotels } = require("./hotel.controller");
const express = require('express');
const hotelRoutes = express.Router();

hotelRoutes.post("/signup", isEmailUnique, hotelSignup);
hotelRoutes.get("/getAllHotels", getAllHotels);
module.exports = hotelRoutes;