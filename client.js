// client.js

// BASE SETUP
// =============================================================================
var _client = require('./client/rest.js'); 
_api = require('./conf/api.json');
_conf = require('./conf/config.js');
_utils = require('./server/utils.js');


// START THE CLIENT
// =============================================================================
function poll()

{
			
	try {
		
			var callNumber = _utils.randomInterval( 0, _api.endpoints.length-1 )
		
			console.log("\n\nEndpoint [" + callNumber + "]: " + _api.endpoints[callNumber].name)
			console.log( JSON.stringify( _api.endpoints[callNumber] ))
			
			_client.call( _api.endpoints[callNumber].url, _api.endpoints[callNumber].staticInterval );
		
		} catch(err) { console.log(err); }
	
	
	setTimeout( poll, _api.endpoints[callNumber].staticInterval * 1000 );
			
}

poll();
