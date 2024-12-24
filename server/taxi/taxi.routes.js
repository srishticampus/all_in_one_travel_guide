const express = require("express");
const taxiRoutes = express.Router();

const { signup, getAllTaxies } = require("./taxi.controller");
const { isEmailUnique } = require("../middleware/emailUnique");

taxiRoutes.post("/signup", isEmailUnique, signup);
taxiRoutes.get("/get-all-taxies", getAllTaxies);

module.exports = taxiRoutes;
