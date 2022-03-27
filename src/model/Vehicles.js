const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiclesSchema = new Schema({
    licensePlate: {type: String, require: true},
    owner: {type: Number, require: true},
    mobile: {type: Number, require: true},
    class: {type: String, require: true},
    model: {type: Number, require: true},
    brand: {type: String, require: true},
    preCheckList: {type: []},
});

module.exports = mongoose.model("Vehicles", VehiclesSchema);
