const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    console.log("llegue");
    const vehicle = req.app.locals.vehicles;
    const sections = req.app.locals.sections;
    const questions = req.app.locals.questions;
    console.log(questions);
    res.render('index', { vehiculos : vehicle });
    
});



module.exports = router;

