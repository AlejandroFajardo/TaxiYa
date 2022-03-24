//URLs para la auntenticacion del usuario
//Inicir y cerrar sesionconst express = require("express");
const express = require("express");
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.render('login');
});

module.exports = router;
