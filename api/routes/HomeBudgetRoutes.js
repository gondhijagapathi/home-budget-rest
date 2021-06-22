'use strict';
module.exports = function(app) {
  var controll = require('../controllers/HomeBudgetController');

  
  app.route('/users').get(controll.getAllUsers);

  app.route('/shops').get(controll.getAllShops);
    
};