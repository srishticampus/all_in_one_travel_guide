const { isEmailUnique } = require("../middleware/emailUnique");
const { agencySignup } = require("./agency.controller");
const express = require('express');
const agencyRoutes = express.Router();

agencyRoutes.post("/signup", isEmailUnique, agencySignup);

module.exports = agencyRoutes;