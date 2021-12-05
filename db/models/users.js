const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roles",
    default: "61a4fa77caeed24e3975dd7b",
  },
});

module.exports = mongoose.model("users", users);
