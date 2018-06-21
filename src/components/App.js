import React from "react";
import Header from "./Header";
// import search from "../services/search";
import Photo from "./Photo";
import Search from "./Search";
import Thumbs from "./Thumbs";
import Info from "./Info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.config = this.props.config;
    this.state = {
      weather: {}
    };

    this.receiver = this.receiver.bind(this);


    // Use the props passed to App here (hint: look at ../index.js)
  }
  receiver (weather,images) {
     console.log(weather, images);
  }

  componentDidMount() {
    // const { apiKey, url, city } = this.props.config.api.weather;
    // return fetch(`${url}${city}&APPID=${apiKey}`)
    //   .then(function(weatherResponse) {
    //     return weatherResponse.json();
    //   })
    //   .then(weatherData => {
    //     // console.log(weatherData);
    //     this.setState({
    //       weather: {
    //         location: weatherData.name,
    //         description: weatherData.weather[0].description,
    //         temp: weatherData.main.temp
    //       }
    //     });
    //     return weatherData;
    //   })
    //   .then(weatherData => {
    //     const { apiKey, url } = this.props.config.api.unsplash;
    //     return fetch(
    //       `${url}${this.state.weather.description}&client_id=${apiKey}`
    //     )
    //       .then(function(imageResponse) {
    //         return imageResponse.json();
    //       })
    //       .then(imageData => {
    //         const img = imageData.results[0].urls.regular;
    //         this.setState({
    //           weather: Object.assign(this.state.weather, { img })
    //         });
    //       });
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header title="El Tiempo" />
        <Photo image={this.state.weather.img} />
        <Info />
        <Thumbs />
        <Search config={this.config} receiver={this.receiver} />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
