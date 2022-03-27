const mongoose = require('mongoose');
const { model } = require('./Users');
const { Schema } = mongoose;

const QuestionsSchema = new Schema({
    idSection: {type: String, require: true},
    questionText: {type: String, require: true},
    recommendation: {type: String},
    subquestion: {},
    correctAnswer: {type: any},
    options: []
});

module.exports = mongoose.mongo.model('Questions', QuestionsSchema);