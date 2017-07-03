require('dotenv').config();

var express = require('express'),
	mongoose = require('mongoose'),
	User = require('./api/models/User'),
	bodyParser = require('body-parser');
	app = express(),
	port = process.env.PORT,
	mongodbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' does not exist'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
