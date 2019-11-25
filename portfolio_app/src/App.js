import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Home from "./components/HomeScreen";
import About from "./components/AboutScreen";
import Project from "./components/ProjectScreen";
import Work from "./components/WorkScreen";
class App extends React.Component {
  state = {
    isOpen: false,
    rendeedele: <Work />
  };

  render() {
    const toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    const loadAbout = () => {
      this.setState({ rendeedele: <About /> });
    };
    const loadProject = () => {
      this.setState({ rendeedele: <Project /> });
    };
    const loadWork = () => {
      this.setState({ rendeedele: <Work /> });
    };
    return (
      <div className="app">
        <Navbar color="black" expand="md" style={{ color: "white" }}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={loadAbout}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={loadWork}>
                  Work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={loadProject}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="rendercomponent">{this.state.rendeedele}</div>
      </div>
    );
  }
}

export default App;
