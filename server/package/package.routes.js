const {
  packagePhoto,
  addPackage,
  getPackageByAgencyId,
  getAllPackages,
} = require("../package/package.controller");
const express = require("express");
const packageRoutes = express.Router();
packageRoutes.post("/add-package", packagePhoto, addPackage);
packageRoutes.get("/", getAllPackages);
packageRoutes.get("/agency/:agencyId", getPackageByAgencyId);
module.exports = packageRoutes;
