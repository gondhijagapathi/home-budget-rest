'use strict';
module.exports = function(app) {
  var controll = require('../controllers/HomeBudgetController');

  
  app.route('/users').get(controll.getAllUsers).post(controll.postUsers);

  app.route('/shops').get(controll.getAllShops).post(controll.postShops);

  app.route('/categories').get(controll.getAllCategories).post(controll.postCategories);

  app.route('/subCategories').get(controll.getAllSubCategories).post(controll.postSubCategories);

  app.route('/items').get(controll.getAllItems).post(controll.postItems);
    
};