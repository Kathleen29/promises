/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var  pf = require('./promisification.js');
var getProfile = pf.getGitHubProfileAsync
var  pc = require('./promiseConstructor.js');
var pluck = pc.pluckFirstLineFromFileAsync;
var wf = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluck(readFilePath)
  .then((username) => getProfile(username))
  .then((text) => wf(writeFilePath, JSON.stringify(text)));
};


// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
