//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//Import connection to db
const { connect } = require("./api/utils/database/connect");

// Express APIs, require files of routes 
const user = require('./api/routes/user.routes');
//fucntion to connect db
connect();

// Config express
const app = express();
//methods of express -- i want json and codify
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// cors == to see into port or url 
app.use(cors());

// Routes to use
app.use('/public', express.static('public'));

app.use('/api', user)

// Define port or used 5000
const port = process.env.PORT || 5200;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Managing errors
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});