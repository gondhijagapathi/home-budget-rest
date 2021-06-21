var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: '192.168.1.2',
        port: 3307,
        user: 'root',
        password: 'jagapathi',
        database: 'homedb',
        insecureAuth: true
    });

connection.connect();

module.exports = connection;