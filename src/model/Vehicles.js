const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const VehiclesSchema = new mongoose.Schema({
    licensePlate: {type: String, require: true},
    owner: {type: Number, require: true},
    mobile: {type: Number, require: true},
    class: {type: String, require: true},
    model: {type: Number, require: true},
    brand: {type: String, require: true},
    preCheckList: {type: []},
});

const Vehicle = mongoose.model("Vehicles", VehiclesSchema);
module.exports = { Vehicle } ;
