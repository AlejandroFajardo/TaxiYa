const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnswersSchema= new Schema({
    idVehicle: {type: ObjectId, require: true},
    idPregunta: {type: ObjectId, require: true},
    answer: { type: any}
});

module.exports = mongoose.model('Answers', AnswersSchema);