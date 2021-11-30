const express = require("express");

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.status(200).json("todos router");
});

module.exports = todosRouter;
