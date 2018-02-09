// Import MySQL connection
var connection = require('./connection');

// Methods to execute the necessary MySQL commands in the controllers. 

var orm = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(newBurger, callback) {
        connection.query('INSERT INTO burgers (burger_name) SET ?', newBurger, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(id, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [
            { devoured: true },
            { id: id }
        ], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

// Export the ORM object in module.exports
module.exports = orm;