'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.list = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.create = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.get = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.delete = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User successfully deleted' });
  });
};
