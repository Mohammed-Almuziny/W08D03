const express = require("express");

const {
  createTodo,
  getUserTodos,
  getTodoById,
  deleteTodo,
  getAllTodos,
} = require("./../controllers/todos");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const todosRouter = express.Router();

todosRouter.post("/create", authentication, createTodo);
todosRouter.get("/", authentication, getUserTodos);
todosRouter.post("/todoById", getTodoById);
todosRouter.delete("/delete/:id", authentication, deleteTodo);
todosRouter.get("/allTodos", authentication, authorization, getAllTodos);

module.exports = todosRouter;
