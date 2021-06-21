'use strict';
module.exports = function(app) {
  var controll = require('../controllers/HomeBudgetController');

  // todoList Routes
  app.route('/users')
    .get(controll.getAllUsers);
    
};