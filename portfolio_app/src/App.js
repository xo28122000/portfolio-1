import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomeScreen from "./screens/homescreen";
import AboutScreen from "./screens/aboutscreen";
import ProjectScreen from "./screens/projectscreen";
import ContactScreen from "./screens/contactscreen";

function App() {
  // let location = useLocation();
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

export default App;
