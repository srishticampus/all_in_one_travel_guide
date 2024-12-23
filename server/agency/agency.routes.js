const { isEmailUnique } = require("../middleware/emailUnique");
const { agencySignup, getAllAgencies } = require("./agency.controller");
const express = require('express');
const agencyRoutes = express.Router();

agencyRoutes.post("/signup", isEmailUnique, agencySignup);
agencyRoutes.get("/getAllAgencies", getAllAgencies);

module.exports = agencyRoutes;