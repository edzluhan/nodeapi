'use strict';
module.exports = function(app) {
  var user = require('./controllers/userController');
  var room = require('./controllers/roomController');
  var accommodation = require('./controllers/accommodationController');

  // user Routes
  app.route('/users')
    .get(user.list)
    .post(user.create);

  app.route('/users/:userId')
    .get(user.get)
    .put(user.update)
    .delete(user.delete);

  // room Routes
  app.route('/rooms')
    .get(room.list)
    .post(room.create);

  app.route('/rooms/:roomId')
    .get(room.get)
    .put(room.update)
    .delete(room.delete);

  // accommodation Routes
  app.route('/accommodations')
    .get(accommodation.list)
    .post(accommodation.create);

  app.route('/accommodations/:accommodationId')
    .get(accommodation.get)
    .put(accommodation.update)
    .delete(accommodation.delete);
};
