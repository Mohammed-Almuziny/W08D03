const express = require("express");

const { createRole, getRole } = require("./../controllers/roles");
const authentication = require("./../middlewares/authentication");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", createRole);
rolesRouter.get("/getRole", authentication, getRole);

module.exports = rolesRouter;
