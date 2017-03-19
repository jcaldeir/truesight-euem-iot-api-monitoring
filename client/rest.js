// client.js

var Client = require('node-rest-client').Client;
var client = new Client();

var exports = module.exports = {};

exports.call = function( apiEndpoint, delay ) {
				
	
 
    try {
			// direct way 
			client.get( "http://" + _conf.server_host + ":" + _conf.server_port + _conf.context + apiEndpoint , function (data, response) {
				
				console.log("Response : " + new Date().toISOString()  + " - " + JSON.stringify( data ));
				console.log("\nRunning again in : " + delay + " seconds\n\n\n");		
				
			});
		
	    } catch (err) { console.log (err); }
}
