'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccommodationSchema = new Schema({
  category: {
    type: String,
    Required: 'enter the category of the accommodation'
  },
  price: {
    type: Number,
    Required: 'enter the price of the accommodation'
  },
  description: {
    type: String,
    Required: 'enter the description of the accommodation'
  }
});

module.exports = mongoose.model('Accommodation', AccommodationSchema);
