const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Vehicles = new mongoose.Schema({
    licensePlate: {type: String, require: true},
    owner: {type: String, require: true},
    mobile: {type: Number, require: true},
    class: {type: String, require: true},
    model: {type: Number, require: true},
    brand: {type: String, require: true},
    preCheckList: {type: []},
});

const vehicles = mongoose.model("vehicles", Vehicles);
module.exports = { vehicles } ;
