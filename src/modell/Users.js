const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userAccount: { type: String, required: true },
  password: { type: String, required: true },
  userRol: { type: String, required: true },
  userName: { type: String, required: true },
  lastName: { type: String, required: true },
  document: { type: String, required: true},
  direction: { type: String, required: false },
  phone: { type: Number, required: false },
  city: { type: String, required: false },
  vehicleList: [],
});

module.exports = mongoose.model("Users", UserSchema);
