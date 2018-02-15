// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// Requiring our models for syncing
var db = require("./models");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
require('./routes/customer-api-routes.js')(app);
require('./routes/api-routes.js')(app);

// Listen to sever
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  });
});