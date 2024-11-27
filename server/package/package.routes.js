const { packagePhoto, addPackage } = require("../package/package.controller");
const express = require("express");
const packageRoutes = express.Router();
packageRoutes.post("/add-package", packagePhoto, addPackage);
module.exports = packageRoutes;
