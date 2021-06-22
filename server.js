var express = require('express'),
  app = express(),
  port = process.env.PORT || 3010;

  app.use(express.json());
var routes = require('./api/routes/HomeBudgetRoutes'); //importing route
routes(app); //register the route

app.listen(port);

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting....");
});

console.log('Home-budget RESTful API server started on: ' + port);