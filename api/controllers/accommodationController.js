'use strict';

var mongoose = require('mongoose'),
    Accommodation = mongoose.model('Accommodation');

exports.list = function(req, res) {
  Accommodation.find({}, function(err, accommodation) {
    if (err) {
      res.send(err);
    }
    res.json(accommodation);
  });
};

exports.create = function(req, res) {
  var newAccommodation = new Accommodation(req.body);
  newAccommodation.save(function(err, accommodation) {
    if (err) {
      res.send(err);
    }
    res.json(accommodation);
  });
};

exports.get = function(req, res) {
  Accommodation.findById(req.params.accommodationId, function(err, accommodation) {
    if (err) {
      res.send(err);
    }
    res.json(accommodation);
  });
};

exports.update = function(req, res) {
  Accommodation.findOneAndUpdate({_id: req.params.accommodationId}, req.body, {new: true}, function(err, accommodation) {
    if (err) {
      res.send(err);
    }
    res.json(accommodation);
  });
};

exports.delete = function(req, res) {
  Accommodation.remove({
    _id: req.params.accommodationId
  }, function(err, accommodation) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Accommodation successfully deleted' });
  });
};
