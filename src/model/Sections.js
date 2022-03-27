const mongoose = require('mongoose');
const { Schema } = mongoose;

const SectionsSchema = new Schema({
    sectionName: {type: String, require: true},
    questionList: []
});

const sections = mongoose.model("Sections", SectionsSchema);
module.exports = { sections } ;