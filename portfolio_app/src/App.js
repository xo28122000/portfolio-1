import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import HomeScreen from "./screens/homescreen";
class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <HomeScreen />
      </div>
    );
  }
}

export default App;
