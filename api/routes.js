'use strict';
module.exports = function(app) {
  var user = require('./controllers/userController');


  // user Routes
  app.route('/users')
    .get(user.list)
    .post(user.create);

  app.route('/users/:userId')
    .get(user.get)
    .put(user.update)
    .delete(user.delete);
};
