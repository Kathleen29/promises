/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
const firstline = require('firstline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(err, results){
    if (err) {
      callback(err, results);
    } else {
      results = Buffer.from(results).toString().split('').splice(0, results.indexOf('\n')).join('');
      return callback(err, results);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function(err, res, body) {
    if(err) {
      callback(err, res);
    } else {
      callback(err, res.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
