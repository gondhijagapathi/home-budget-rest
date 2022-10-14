'use strict';
module.exports = function(app) {
  var controll = require('../controllers/HomeBudgetController');

  app.route('/').get(controll.getMatrix)

  app.route('/users').get(controll.getAllUsers).post(controll.postUsers);

  app.route('/categories').get(controll.getAllCategories).post(controll.postCategories);

  app.route('/subCategories/:id').get(controll.getAllSubCategories).post(controll.postSubCategories);

  app.route('/spendings').post(controll.postSpendings).get(controll.getAllSpendings);

  app.route('/spendings/delete/:id').post(controll.deleteSpendings);
};