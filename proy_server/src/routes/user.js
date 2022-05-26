const express = require("express");
const UserController = require("../services/jwt");

const api = express.Router();

api.post("/signup", UserController.signUp);
api.post("/signin", UserController.signUp);

module.exports = api;