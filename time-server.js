var net = require('net');
var portNumber = Number(process.argv[2]);

function addLeading(date) {
  if(date < 10 ) {
    return "0" + date;
  }
  return date;
}

var server = net.createServer(function(socket) {
  console.log('client connected');
  var date = new Date();
  "YYYY-MM-DD hh:mm"
  var dateResponse = date.getFullYear() + "-" + addLeading(date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" +addLeading(date.getMinutes());
  socket.write(dateResponse.trim() + '\r\n');
  socket.end();
});

server.listen(portNumber, function() {
  console.log('server bound');
});
