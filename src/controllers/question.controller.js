const question = require("../model/Questions");

const renderQuestions = async (req, res) => {
  const questions = await question.questions.find();
  req.app.locals.questions = questions;
  res.json(questions);
};
module.exports.renderQuestions = [renderQuestions];
