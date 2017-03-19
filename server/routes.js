// routes.js
var delay = require('express-delay');
var dateFormat = require('dateformat');
var fs = require('fs');
var now = dateFormat(new Date(), "yyyy_mm_dd_hh_MM_ss");
var logfile = fs.createWriteStream( __dirname + '/logs/API_Events_' + now + '.log', {flags : 'a'});
logfile.write("CaseID, Activity, Resource, Timestamp\n");

module.exports = function(app){

//app.use(delay(0, 5000));

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api

app.get('/api/', function(req, res) {
    res.json({ message: 'Hooray! Welcome to our IoT API!' });   
});


	for ( i = 0 ; i < _calls.endpoints.length ; i++ ) { 

		var endpoint = _calls.endpoints[i];
		
		app.get( _conf.context + endpoint.url, function (req, res) {
				
				console.log("\nEndpoint: " + req.originalUrl);
				
				var endpoint = _utils.findEndpoint( _calls.endpoints, req.originalUrl);
				
				var delay = endpoint.staticInterval;
				if ( endpoint.randomInterval ) delay = _utils.randomFloat( endpoint.responseDelay[0] , endpoint.responseDelay[1] );
						
				console.log("Endpoint: " + JSON.stringify( endpoint ));
				
				function replyBack() {
						
						var returnCode = endpoint.staticStatus;
						if ( endpoint.randomStatus ) returnCode = _calls.returnStatus[  _utils.randomInterval( 0, _calls.returnStatus.length-1 ) ];
						
						console.log( "Response Code: " + returnCode );
						console.log( "Response Delay: " + delay + " seconds \n" )
						
						var eventEntry = [];
						
						var partner = _utils.randomInterval(1,10);						
						var Case = "Partner_" + partner;				
						var User = "User_" + _utils.randomInterval(1,5) + "@acme_" + partner + ".com";
												
						eventEntry.push( Case ); eventEntry.push( req.originalUrl );
						eventEntry.push( User ); eventEntry.push( new Date().getTime() / 1000 );					
						
						logfile.write( eventEntry.toString() + "\n" );						
						
						eventEntry = [];
						
						//var pollCycle = endpoint.staticInterval;
						//if ( endpoint.randomInterval ) pollCycle = _utils.randomInterval( 0, endpoint )
						//console.log( JSON.stringify( pollCycle , null, 4) )
							
						res.status(returnCode).json({ name: 'BMC TrueSight EUEM IoT API Monitoring', phone: '+351123456789' });   
				
				}
				
				setTimeout( replyBack , delay * 1000); 
			
		  });

	}

}