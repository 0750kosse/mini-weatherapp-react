import React from "react";
import Header from "./Header";
// import search from "../services/search";
import Photo from "./Photo";
import Search from "./Search";
import Thumbs from "./Thumbs";
import Info from "./Info";

class App extends React.Component {
  constructor(props) {
    super();
    // this.search = new search();
    this.state = { conf: "" };

    // console.log(this.state({ config: search(config, "weather", "barcelona") }));
    // Use the props passed to App here (hint: look at ../index.js)
  }

  onComponentDidMount() {}

  handleFetch(event) {
    this.setState({ conf: search(config, "weather", "barcelona") });
  }

  render() {
    return (
      <div>
        <Header title="El tiempo" />
        <Photo />
        <Info />
        <Thumbs />
        <Search />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
