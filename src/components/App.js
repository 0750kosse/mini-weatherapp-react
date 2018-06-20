import React from "react";
import Header from "./Header";
import search from "../services/search";

import Photo from "./Photo";

class App extends React.Component {
  constructor(props) {
    super();
    this.search = new search
    this.state = { conf: "" };

    // console.log(this.state({ config: search(config, "weather", "barcelona") }));
    // Use the props passed to App here (hint: look at ../index.js)
  }

  onComponentDidMount(){
    this.search.fetchWeather().then
  }

  handleFetch(event) {
    this.setState({ conf: search(config, "weather", "barcelona") });
  }

  render() {
    return <Header title="El tiempo" /><Photo />;
  }
}

App.defaultProps = {};

export default App;
