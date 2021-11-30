const express = require("express");

const { createTodo, getAllTodos } = require("./../controllers/todos");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.status(200).json("todos router");
});

todosRouter.post("/create", authentication, createTodo);
todosRouter.get("/allTodos", authentication, authorization, getAllTodos);

module.exports = todosRouter;