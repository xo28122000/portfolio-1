import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomeScreen from "./screens/homescreen";
import AboutScreen from "./screens/aboutscreen";
import ProjectScreen from "./screens/projectscreen";
import ContactScreen from "./screens/contactscreen";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/project">
            <ProjectScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
