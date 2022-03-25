//Rutas de chequeo properacional
const express = require("express");
const router = express.Router();

router.get('/precheck', (req, res) => {
    res.render('main_views/mainview');
});

module.exports = router;
