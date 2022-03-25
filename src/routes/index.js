//En este archivo van las urls de la aplicacion principal
//Caulquier ruta que cualquiera pueda acceder

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('layouts/main');
});

router.get('/about', (req, res) => {
  res.send("about");
});

module.exports = router;
