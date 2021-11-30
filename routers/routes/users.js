const express = require("express");

const { register, logIn, getAllUsers } = require("./../controllers/users");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/logIn", logIn);
usersRouter.get("/allUsers", authentication, authorization, getAllUsers);

module.exports = usersRouter;
