const express = require("express");

const { createTodo } = require("./../controllers/todos");
const authentication = require("./../middlewares/authentication");

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.status(200).json("todos router");
});

todosRouter.post("/create", authentication, createTodo);

module.exports = todosRouter;
