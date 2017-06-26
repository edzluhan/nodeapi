var bodyParser= require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('link-to-mongodb', (err, database) => {
//   // ... start the server
// })