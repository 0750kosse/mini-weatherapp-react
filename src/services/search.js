// const config = {
//   api: {
//     weather: {
//       apiKey: "b7aecc81c3f01e1eadcb367a666606c4",
//       city: "London",
//       url: "https://api.openweathermap.org/data/2.5/weather?q="
//     },
//     unsplash: {
//       apiKey:
//         "217d39354a152114b5bb4e0f77e4ca3c7ecdbe155bb9d43580e11138def7915a",
//       url: "https://api.unsplash.com/search/photos?query="
//     }
//   }
// };

function Search(config, resource, query) {
  this.weatherConfig = config.api.weather;
  this.unsplashConfig = config.api.unsplash;
}

Search.prototype._getWeatherURL = function(city) {
  const { apiKey, url } = this.weatherConfig;
  return `${url}${city}&APPID=${apiKey}`;
};

Search.prototype._getImageURL = function(weather) {
  const { apiKey, url } = this.unsplashConfig;
  return `${url}${weather}&clientid=${apiKey}`;
};

Search.prototype.fetchWeather = function(city) {
  return fetch(this._getWeatherURL(city))
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(weatherData => {
      const description = weatherData...
      return description
    })
    .then(weatherTerm => {
      fetch(this._getImageURL(weatherTerm))
    })
    .then(weatherData => {
      const allData = weatherData...
      
    });
};

export default search;
