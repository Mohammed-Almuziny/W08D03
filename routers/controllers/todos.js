const { model } = require("mongoose");
const todosModel = require("./../../db/models/todos");

const createTodo = (req, res) => {
  try {
    const { name } = req.body;

    const newTodo = new todosModel({
      name,
      ref: req.token.id,
    });

    newTodo
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { createTodo };
