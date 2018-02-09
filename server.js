// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// Set up Port
var PORT = process.env.PORT || 3000;

// Set up Express
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Listen to sever
app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});