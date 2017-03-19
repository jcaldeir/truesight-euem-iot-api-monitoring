// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
_conf = require('./conf/config.js');
_calls = require('./conf/api.json');
_utils = require('./server/utils.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;        // set our port

app.use(function(req, res, next) {
	  res.header("Content-Type", "application/json");
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "*");
	  next();
});
	
require('./server/routes.js')(app);

// START THE SERVER
// =============================================================================
app.listen( _conf.server_port );
console.log('Magic happens on ' + _conf.server_host + ' at port : ' + _conf.server_port );