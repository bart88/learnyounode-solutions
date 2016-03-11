var http = require('http');
var bufferList = require('bl');
var urls = process.argv.slice(2);

// create a blank results array.
var results = new Array(urls.length);

for (var i = 0; i < urls.length; i++) {
 (function(i){
    http.get(urls[i], function(response) {
      requestHandler(response, i, checkRequests)
    });
  })(i);
}

function requestHandler(request, requestNumber, callback) {
  var blist = new bufferList();
  request.setEncoding('utf8');
  request.on('data', function(data) {
    blist.append(new Buffer(data));
  });
  request.on('end', function() {
      results[requestNumber] = blist.toString();
      checkRequests(results)
  });
}

function checkRequests(results) {
  var count = 0;
  for (var i = 0; i < results.length; i++) {
    if(results[i]) {
      count++;
    }
  }
  if(count == results.length) {
     results.forEach(function(element) {
       console.log(element);
     });
  }
}
