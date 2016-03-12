var http = require('http');
var url = require('url');

var portNumber = Number(process.argv[2]);

var definedRoutes = {
  "/api/parsetime" : function parseTime(time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  },
  "/api/unixtime" : function unixtime(time) {
    return {
      "unixtime" : time.getTime()
    };
  }
};

var server = http.createServer(function(req, res) {
  // get the request
  if(req.method !== 'GET') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('NOPE \n');
    res.end();
  }

 // parse the url
 var parsedURL = url.parse(req.url, true);
 if(definedRoutes[parsedURL.pathname]) {
    // route exists cool - make a date.
    var time = new Date(parsedURL.query.iso);

    res.writeHead(200, { 'content-type' : 'application/json'});
    res.write(JSON.stringify(definedRoutes[parsedURL.pathname](time)));
 } else {
   // route doesn't exist
   res.writeHead(404);

 }
 res.end();
});

server.listen(portNumber);
