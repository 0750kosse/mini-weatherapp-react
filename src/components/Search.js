import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    const { apiKey, url } = this.props.config.api.weather;
    const city = event.target.city.value;
    let weather;

    return fetch(`${url}${city}&APPID=${apiKey}`)
      .then(function(weatherResponse) {
        return weatherResponse.json();
      })
      .then(weatherData => {
        console.log(weatherData);
        //console.log(this.state.weather);
        return weatherData;
      })
      .then(weatherData => {
        const { apiKey, url } = this.props.config.api.unsplash;
        weather = weatherData;
        return fetch(`${url}${weatherData.description}&client_id=${apiKey}`);
      })
      .then(function(imageResponse) {
        return imageResponse.json();
      })
      .then(imageData => {
        //console.log(this.state.images);
        this.props.receiver(weather, imageData);
      })
      .catch(error => {
        console.log(error);
      });
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
