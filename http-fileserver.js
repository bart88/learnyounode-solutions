var http = require('http');
var fs = require('fs');

var portNumber = Number(process.argv[2]);
var fileName = process.argv[3];

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })  
  fs.createReadStream(fileName)
    .pipe(response);
});

// Listen on the port number provided.
server.listen(portNumber);
