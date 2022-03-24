//Rutas de chequeo properacional
const express = require("express");
const router = express.Router();

router.get('/precheck', (req, res) => {
    res.send('Chequeo preoperacional');
});

module.exports = router;
