// Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'sequelizeBurgers'
});

// Connect
connection.connect(function(err) {
    if (err) {
        console.log('Error connecting: ' + err);
        return;
    }
    console.log('Connected as id ' + connection.threadId)
})

// Export connection
module.exports = connection;