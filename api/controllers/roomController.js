'use strict';

var mongoose = require('mongoose'),
    Room = mongoose.model('Room');

exports.list = function(req, res) {
  Room.find({}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.create = function(req, res) {
  var newRoom = new Room(req.body);
  newRoom.save(function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.get = function(req, res) {
  Room.findById(req.params.roomId, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.update = function(req, res) {
  Room.findOneAndUpdate({_id: req.params.roomId}, req.body, {new: true}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.delete = function(req, res) {
  Room.remove({
    _id: req.params.roomId
  }, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Room successfully deleted' });
  });
};
