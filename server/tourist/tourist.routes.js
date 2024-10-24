const {
  touristSignup,
  touristSignupUploads,
  touristLogin,
  vieUserById,
  editUserById,
  viewUsers,
  delUserById,
  forgotPassword,
  addPlace,
  viewMyPlceasByCustId,
} = require("./tourist.controller");
const express = require("express");
const { isEmailUnique } = require("../middleware/emailUnique");
const touristRoutes = express.Router();

touristRoutes.post(
  "/tourist/signup",
  touristSignupUploads,
  isEmailUnique,
  touristSignup
); 
touristRoutes.post("/tourist/login", touristLogin);
touristRoutes.post("/viewUsers", viewUsers);
touristRoutes.post("/editUserById/:id", editUserById);
touristRoutes.post("/viewUserById/:id", vieUserById);
touristRoutes.post("/viewUserById/:id", addPlace);
touristRoutes.post("/forgotPassword", forgotPassword);
touristRoutes.post("/delUserById/:id", delUserById);
touristRoutes.post("/viewMyPlceasByCustId/:id", viewMyPlceasByCustId);

module.exports = { touristRoutes };
