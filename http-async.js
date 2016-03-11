var http = require('http');
var bufferList = require('bl');
var urls = process.argv.slice(2);

// create a blank results array.
var results = new Array(urls.length);

for (var i = 0; i < urls.length; i++) {
  httpGet(urls[i], i);
}

function httpGet(url, index) {
  http.get(url, function(response) {
    response.pipe(bufferList(function(err, data){
      if(err) {
        return console.error(err);
      }
      results[index] = data.toString();
      checkRequests(results);
    }));
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
