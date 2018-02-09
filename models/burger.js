// Import ORM
var orm = require('../config/orm');

// Call functions using specific input for the ORM
var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    insertOne: function(newBurger, callback) {
        orm.insertOne(newBurger, function(res) {
            callback(res);
        });
    },
    updateOne: function(id, callback) {
        orm.updateOne(id, function(res) {
            callback(res);
        });
    }
};

// Export the database functions
module.exports = burger;