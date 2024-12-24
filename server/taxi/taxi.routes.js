const express = require("express");
const taxiRoutes = express.Router();

const { signup } = require("./taxi.controller");
const { isEmailUnique } = require("../middleware/emailUnique");

taxiRoutes.post("/signup", isEmailUnique, signup);

module.exports = taxiRoutes;
