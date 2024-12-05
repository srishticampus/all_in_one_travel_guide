const {
  touristSignup,
  touristSignupUploads,
  getTouristById
} = require("./tourist.controller");
const express = require("express");
const { isEmailUnique } = require("../middleware/emailUnique");
const touristRoutes = express.Router();
touristRoutes.post(
  "/signup",
  touristSignupUploads,
  isEmailUnique,
  touristSignup
); 

touristRoutes.get('/getTourist/:id', getTouristById);

module.exports = { touristRoutes };
