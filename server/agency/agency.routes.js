const { isEmailUnique } = require("../middleware/emailUnique");
const {
  agencySignup,
  getAllAgencies,
  getAgencyById,
  updateAgencyById,
  deActivateAgency,
  activateAgency,
} = require("./agency.controller");
const express = require("express");
const agencyRoutes = express.Router();

agencyRoutes.post("/signup", isEmailUnique, agencySignup);
agencyRoutes.get("/getAllAgencies", getAllAgencies);
agencyRoutes.get("/getAgencyById/:id", getAgencyById);
agencyRoutes.get("/updateAgency/:id", updateAgencyById);
agencyRoutes.patch("/deActivate/:id", deActivateAgency);
agencyRoutes.patch("/activate/:id", activateAgency);
module.exports = agencyRoutes;
