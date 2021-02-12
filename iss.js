/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = function(callback) {

  const url = 'https://api.ipify.org?format=json';
  request(url, (error, resp, body) => {
    if (error) {
      callback(`Error Message: ${error}`,null);
    }
    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  
  });
  // use request to fetch IP address from JSON API
};

module.exports = { fetchMyIP };