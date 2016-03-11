var bufferList = require('bl');
var http = require('http');

var path = process.argv[2];

var request = http.get(path, function(response) {
  response.setEncoding('utf8');
  // create a buffer
  var bl = new bufferList();

  response.on('data', function(d) {
    // append to the existing buffer
    bl.append(new Buffer(d));
  });
  // req.end() has been fired. 
  response.on('end', function(d) {
    console.log(bl.length);
    console.log(bl.toString());
  });
});
