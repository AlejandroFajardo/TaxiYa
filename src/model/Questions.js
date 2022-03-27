const mongoose = require('mongoose');
const { model } = require('./Users');
const { Schema } = mongoose;

const QuestionsSchema = new Schema({
    idSection: {type: mongoose.Types.ObjectId, require: true},
    questionText: {type: String, require: true},
    recommendation: [],
    frequency: {type: Number, require: true},
    subquestion: {},
    correctAnswer: {type: String},
    options: []
});

const questions = mongoose.model("Questions", QuestionsSchema);
module.exports = { questions } ;