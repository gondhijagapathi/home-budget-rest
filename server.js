var express = require('express'),
  app = express(),
  port = process.env.PORT || 3010;

var routes = require('./api/routes/HomeBudgetRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Home-budget RESTful API server started on: ' + port);