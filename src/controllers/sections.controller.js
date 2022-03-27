const section = require("../model/Sections");

const renderSections = async (req, res) => {
  const sections = await section.sections.find();
  req.app.locals.sections = sections;
  res.redirect("/api/index/");
  
};
module.exports.renderSections = [renderSections];