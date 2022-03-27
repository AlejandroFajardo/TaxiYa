const mongoose = require("mongoose");
const { Schema } = mongoose;

const AlertsSchema = new Schema({
  idAnswer: { type: ObjectId, require: true },
  textAlert: { type: String, require: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Alerts", AlertsSchema);
