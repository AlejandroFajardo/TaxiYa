const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  userAccount: { type: String, required: true },
  password: { type: String, required: true },
  userName: { type: String, required: true },
  lastName: { type: String, required: true },
  document: { type: String, required: true },
  direction: { type: String, required: false },
  phone: { type: Number, required: false },
  city: { type: String, required: false },
  firtsLog: { type: Boolean, required: false },
  vehicleList: [],
  userRol: { type: String, required: true },
});

const users = mongoose.model("users", User, "Users");
module.exports = { users };
