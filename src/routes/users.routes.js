const express = require('express');

const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/login', userController.login);

router.get('/test', userController.test);

module.exports = router;