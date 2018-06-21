import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    const { apiKey, url } = this.props.config.api.weather;
    const city = event.target.city.value;

    return fetch(`${url}${city}&APPID=${apiKey}`)
      .then(function(weatherResponse) {
        return weatherResponse.json();
      })
      .then(weatherData => {
        //console.log(weatherData);
        this.setState({
          weather: weatherData
          // weather: {
          //   location: this.city,
          //   description: weatherData.weather[0].description,
          //   temp: weatherData.main.temp
          // }
        });
        //console.log(this.state.weather);
        return weatherData;
      })
      .then(weatherData => {
        const { apiKey, url } = this.props.config.api.unsplash;
        return fetch(
          `${url}${this.state.weather.description}&client_id=${apiKey}`
        )
          .then(function(imageResponse) {
            return imageResponse.json();
          })
          .then(imageData => {
            this.setState({
              images: imageData
              //weather: Object.assign(this.state.weather, { imgs })
            });
            //console.log(this.state.images);
            this.props.receiver(this.state.weather, this.state.images);
          });
      })
      .catch(error => console.log(error));
    
  }

  render() {
    return (
      <div className="controls">
        <form className="search" id="search" onSubmit={this.handleSearch}>
          <label className="search__label" htmlFor="search-tf">
            City
          </label>
          <input
            className="search__input"
            id="search-tf"
            name="city"
            placeholder="Enter city name"
            autoComplete="city"
          />
          <button type="submit" className="btn search__btn">
            Go
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
