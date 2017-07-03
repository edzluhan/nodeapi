'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoomSchema = new Schema({
  roomNumber: {
    type: Number,
    Required: 'enter the number of the room'
  },
  category: {
    type: String,
    Required: 'enter the category of the room'
  },
  price: {
    type: Number,
    Required: 'enter the price of the room'
  },
  description: {
    type: String,
    Required: 'enter the description of the room'
  }
});

module.exports = mongoose.model('Room', RoomSchema);
