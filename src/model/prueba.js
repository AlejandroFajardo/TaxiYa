const mongoose = require('mongoose');

const pruebas = new mongoose.Schema({
    nombre: {type: String, require: true},
});

const prueba = mongoose.model("prueba", pruebas, "prueba");
module.exports = { prueba } ;