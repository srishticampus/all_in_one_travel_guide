const express = require("express");
const taxiRoutes = express.Router();

const {
  signup,
  getAllTaxies,
  getTaxiById,
  updateTaxiProfile,
  activateTaxi,
  deActivateTaxi,
} = require("./taxi.controller");
const { isEmailUnique } = require("../middleware/emailUnique");

taxiRoutes.post("/signup", isEmailUnique, signup);
taxiRoutes.get("/get-all-taxies", getAllTaxies);
taxiRoutes.get("/getTaxiById/:id", getTaxiById);
taxiRoutes.patch("/update-taxi-by-id/:id", updateTaxiProfile);
taxiRoutes.patch("/activate/:id", activateTaxi);
taxiRoutes.patch("/deActivate/:id", deActivateTaxi);

module.exports = taxiRoutes;
