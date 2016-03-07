var fs = require('fs');

module.exports = function(directory, filterString, callback) {
  var dir = directory;
  // ensure the arg is a string;
  var filter = filterString;
  fs.readdir(dir, function(err, files) {
    if (err) {
      callback(err, null);
    } else {
      var result = files.filter(function(file) {
        if(file.split('.'+filter).length > 1) return file;
      });
      callback(null, result);
    }
  });
}
