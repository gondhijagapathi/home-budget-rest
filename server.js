const cors = require('cors');
var express = require('express');
  
app = express(),
port = process.env.PORT || 3010;

app.use(express.json());
app.use(cors({
  origin: '*'
}));

var routes = require('./api/routes/HomeBudgetRoutes'); //importing route
routes(app); //register the route

app.listen(port);

process.on('uncaughtException', function (err) {
  console.log('error occured');
});

console.log('Home-budget RESTful API server started on: ' + port);