import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super();

    // Use the props passed to App here (hint: look at ../index.js)
  }

  render() {
    return <Header title="El tiempo" />;
  }
}

App.defaultProps = {};

export default App;
