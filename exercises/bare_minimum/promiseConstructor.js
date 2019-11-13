/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var firstLine = require('firstline');

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFileAsync = function(filePath) {
//   // TODO
//   return new Promise(function(resolve, reject) {
//     var fl = firstLine(filePath);
//     fl.onerror = (err) => {
//       reject(err);
//     }
//       resolve(fl);
//   });
// };

var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, text) => {
      if (err) {
        reject(err);
      } else {
        console.log(text.toString());
        resolve(text.toString().split('\n')[0]);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise(function(resolve, reject) {
    request(url, function(err, res, body) {
      if (err) {
        return reject(err);
      } try {
        resolve(res.statusCode);
      } catch {
        reject(statusCode);
      }
    })
})
}

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
