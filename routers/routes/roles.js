const express = require("express");

const { createRole, getRole } = require("./../controllers/roles");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", createRole);
rolesRouter.get("/getRole", authentication, authorization, getRole);

module.exports = rolesRouter;
