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
      images: {},
      image: undefined,
      weather: undefined
    };

    this.receiver = this.receiver.bind(this);
    // Use the props passed to App here (hint: look at ../index.js)
  }
  receiver(weather, images) {
    this.setState({
      weather: weather,
      images: images,
      image: images.results[0]
    });
    console.log(this.state.images);
  }

  render() {
    return (
      <div>
        <Header title="El Tiempo" />
        <Photo image={this.state.image} />
        <Info />
        <Thumbs images={this.state.images.results} />
        <Search config={this.config} receiver={this.receiver} />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
