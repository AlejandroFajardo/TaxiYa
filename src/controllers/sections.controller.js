const section = require("../model/Sections");

const renderSections = async (req, res) => {
  const sections = await section.sections.find();
  req.app.locals.sections = sections;
  res.json(sections);
};
module.exports.renderSections = [renderSections];
