//utils/utils.js

var exports = module.exports = {};

exports.random = function() {
  
  return Math.random().toFixed(3);
}


exports.randomInterval = function(min,max) {
  
  return Math.floor(exports.random()*(max-min+1)+min);
}


exports.randomFloat = function(min,max) {
  
  return Math.min( max, exports.random()*(max-min+1)+min ).toFixed(3);
  
}


exports.findEndpoint = function(arr, value) {
  var i, x;
  for (i in arr) {
    x = arr[i];
    if (  ( _conf.context + x.url) == value ) { 

	    //console.log( JSON.stringify( x, null, 4) )
	    return x; //parseInt(i); 	
		
    }
  }
}



