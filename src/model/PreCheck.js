const mongoose = require("mongoose");
const { Schema } = mongoose;

const PreCheckSchema = new Schema({
    idVehicle: { type },
    created: { type: Date, default: Date.now },
    idVehicule: {typpe: ObjectId, require: true},
    questionList: []
});

module.exports = mongoose.model("Prechecks", PreCheckSchema);