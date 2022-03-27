const express = require('express');

const sectionsController = require('../controllers/sections.controller');

const router = express.Router();

router.get("/get-sections", sectionsController.renderSections);

module.exports = router;