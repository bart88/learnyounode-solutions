var http = require('http');

var portNumber = Number(process.argv[2]);

function convertUpperCase(data) {
  return data.toString().toUpperCase();
}

var server = http.createServer(function(request, response) {
  // get the request
  if(request.method !== 'POST') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.write('NOPE \n');
    response.end();
  }
  var buffer = '';

  response.writeHead(200, { 'content-type' : 'text/plain'});

  request.on('data', function(data) {
    buffer += data;
  });

  request.on('end', function() {
    response.write(convertUpperCase(buffer));
    response.end();
  });

});

server.listen(portNumber);
