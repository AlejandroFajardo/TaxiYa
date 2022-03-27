const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:JqYt3gPhxyl0uh7f@cluster0.bfhhr.mongodb.net/TaxiYaDB?retryWrites=true&w=majority')
    .then(console.log("DB is connect"))
    .catch(err => console.error(err));

