//URLs para la auntenticacion del usuario
//Inicir y cerrar sesionconst express = require("express");
const express = require("express");
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.render('login/login');
});

router.get('/users/welcome', (req, res) => {
    res.render('welcome/welcome')
})

module.exports = router;
