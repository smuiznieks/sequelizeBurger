var express = require('express');

// Import model
var burger = require('../models/burger');

// ROUTER
var router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(['burger_name'], [req.body.newBurger], function(result) {
        res.json({ id: result.id });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes
module.exports = router;