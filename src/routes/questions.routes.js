const express = require('express');

const questionsController = require('../controllers/question.controller');

const router = express.Router();

router.get("/get-questions", questionsController.renderQuestions);

module.exports = router;