var http = require('http');
var bufferList = require('bl');

var path = process.argv[2];

var request = http.get(path, function(response) {
    // set the encoding to string
    response.setEncoding('utf8');
    response.on('data', function(d) {
      console.log(d);
    });
});

request.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
