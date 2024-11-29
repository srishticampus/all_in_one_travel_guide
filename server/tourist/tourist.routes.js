const {
  touristSignup,
  touristSignupUploads
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

module.exports = { touristRoutes };
