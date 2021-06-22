//include the model (aka DB connection)
var db = require('../models/dbConnection'); 

//create class
var Strain = {
//function to query all items
getAllUsers: function (req, res) {

    var results = db.query('SELECT * from users', function (error, results, fields) {
        //if error, print blank results
        if (error) {
            var apiResult = {};
            apiResult= [];
            res.json(apiResult);
        }
        
        //make results 
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        var apiResult = {};
        
        //add our JSON results to the data table
        apiResult = resultJson;
        
        //send JSON to Express
        res.json(apiResult);
    });
},

getAllShops: function (req, res) {

    var results = db.query('SELECT * from shops', function (error, results, fields) {
        //if error, print blank results
        if (error) {
            var apiResult = {};
            apiResult= [];
            res.json(apiResult);
        }
        
        //make results 
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        var apiResult = {};
        
        //add our JSON results to the data table
        apiResult = resultJson;
        
        //send JSON to Express
        res.json(apiResult);
    });
}
};
module.exports = Strain;