const request = require('request');

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/fd138bd6e7baeef789288eb226b512de/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Forecast.io service!');
      } else if (response.statusCode === 400) {
        callback('Unable to fetch weather !');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      }
    },
  );
};

module.exports.getWeather = getWeather;
