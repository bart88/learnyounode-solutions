var fs = require('fs');
var dir = process.argv[2];
// ensure the arg is a string;
var filter = process.argv[3];
fs.readdir(dir, function(err, files) {
  files.filter(function(value){
    if(value.split('.'+filter).length > 1) console.log(value);
  });
});
