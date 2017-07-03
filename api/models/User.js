'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'enter the name of the user'
  },
  email: {
    type: String,
    Required: 'enter the email of the user'
  },
  birthdate: {
    type: Date,
    Required: 'enter the user birthdate'
  },
  rg: {
    type: Number,
    Required: 'enter the user RG'
  }
});

module.exports = mongoose.model('User', UserSchema);
