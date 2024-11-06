const express = require("express");
const authRoutes = express.Router();
const { login } = require("./auth.controller");
authRoutes.post("/login", login);

module.exports = {
    authRoutes
}