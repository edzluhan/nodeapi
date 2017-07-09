require('dotenv').config();

var express = require('express'),
    mongoose = require('mongoose'),
    User = require('./api/models/User'),
    Room = require('./api/models/Room'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express(),
    port = process.env.PORT,
    mongodbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri);

// use cors
// https://github.com/expressjs/cors
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' does not exist'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
