const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7d0e29f7f43da8e4825ceacf484dd9c4&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    // const { current } = body;
    // const { weather_descriptions, temperature, feelslike } = current;

    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Location not found!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. It feels linke ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
