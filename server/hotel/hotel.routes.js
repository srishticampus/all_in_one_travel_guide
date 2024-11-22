const { isEmailUnique } = require("../middleware/emailUnique");
const { hotelSignup } = require("./hotel.controller");
const express = require('express');
const hotelRoutes = express.Router();

hotelRoutes.post("/signup", isEmailUnique, hotelSignup);

module.exports = hotelRoutes;