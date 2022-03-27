const mongoose = require("mongoose");
const { Schema } = mongoose;

const PreCheckSchema = new Schema({
    created: { type: Date, default: Date.now },
    idVehicule: {typpe: mongoose.Types.ObjectId, require: true},
    questionList: []
});

module.exports = mongoose.model("Prechecks", PreCheckSchema);