//include the model (aka DB connection)
var db = require('../models/dbConnection'); 

//create class
var Strain = {
//function to query all items
getAllUsers: function (req, res) {

        var results = db.query('SELECT * from users', function (error, results, fields) {
            //if error, print blank results
            if (error) {
                // console.log(error);
                var apiResult = {};
                
                apiResult.meta = {
                    table: "users",
                    type: "collection",
                    total: 0
                }
                //create an empty data table
                apiResult.data = [];
                
                //send the results (apiResult) as JSON to Express (res)
                //Express uses res.json() to send JSON to client
                //you will see res.send() used for HTML
                res.json(apiResult);
            }
            
            //make results 
            var resultJson = JSON.stringify(results);
            resultJson = JSON.parse(resultJson);
            var apiResult = {};

                
           // create a meta table to help apps
           //do we have results? what section? etc
            apiResult.meta = {
                table: "users",
                type: "collection",
                total: 1,
                total_entries: 0
            }
            
            //add our JSON results to the data table
            apiResult = resultJson;
            
            //send JSON to Express
            res.json(apiResult);
        });
    },
};
module.exports = Strain;