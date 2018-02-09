// Set up MySQL connection
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'burgers_DB'
    });
};

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