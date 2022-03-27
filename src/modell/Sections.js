const mongoose = require('mongoose');
const { Schema } = mongoose;

const SectionsSchema = new Schema({
    sectionName: {type: String, require: true},
    questionList: []
});

module.exports = mongoose.model('Sections', SectionsSchema);