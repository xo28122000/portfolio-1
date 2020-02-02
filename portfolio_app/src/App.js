import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";
import { TransitionGroup } from "react-transition-group";
import HomeScreen from "./screens/homescreen";
import AboutScreen from "./screens/aboutscreen";
import ProjectScreen from "./screens/projectscreen";
import ContactScreen from "./screens/contactscreen";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <TransitionGroup>
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
        </TransitionGroup>
      </Router>
    );
  }
}

export default App;
