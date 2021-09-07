//require express 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//create a connection with mongoose to your database and add the new files to remove errors
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//create a variable to store your express function
const app = express();

//require static files using express
app.use(express.static('public'));

//create body-parser middleware
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function() {
    console.log('We are now listening for request');
});
