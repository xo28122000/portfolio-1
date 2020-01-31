import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
class HomeScreen extends Component {
  state = {
    backgroundColor: "#ffffff",
    projectsTextColor: "#000000",
    aboutTextColor: "#000000",
    contactTextColor: "#000000"
  };
  componentDidMount = () => {
    const projectText = document.getElementById("projectText");
    const aboutText = document.getElementById("aboutText");
    const contactText = document.getElementById("contactText");
    projectText.onmouseover = () => {
      this.setState({
        backgroundColor: "RGBA(0, 0, 0, 1)",
        aboutTextColor: "RGBA(255, 255, 255, 0.1)",
        contactTextColor: "RGBA(255, 255, 255, 0.1)",
        projectsTextColor: "#ffffff"
      });
    };
    projectText.onmouseleave = () => {
      this.setState({
        backgroundColor: "#ffffff",
        aboutTextColor: "#000000",
        projectsTextColor: "#000000",
        contactTextColor: "#000000"
      });
    };
    aboutText.onmouseover = () => {
      this.setState({
        backgroundColor: "RGBA(0, 0, 0, 1)",
        projectsTextColor: "RGBA(255, 255, 255, 0.1)",
        aboutTextColor: "#ffffff",
        contactTextColor: "RGBA(255, 255, 255, 0.1)"
      });
    };
    aboutText.onmouseleave = () => {
      this.setState({
        backgroundColor: "#ffffff",
        aboutTextColor: "#000000",
        projectsTextColor: "#000000",
        contactTextColor: "#000000"
      });
    };
    contactText.onmouseover = () => {
      this.setState({
        backgroundColor: "RGBA(0, 0, 0, 1)",
        projectsTextColor: "RGBA(255, 255, 255, 0.1)",
        aboutTextColor: "RGBA(255, 255, 255, 0.1)",
        contactTextColor: "#ffffff"
      });
    };
    contactText.onmouseleave = () => {
      this.setState({
        backgroundColor: "#ffffff",
        projectsTextColor: "#000000",
        aboutTextColor: "#000000",
        contactTextColor: "#000000"
      });
    };
  };
  render() {
    return (
      <div
        id="homeroot"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <div className="container-fluid" style={{ height: "100%" }}>
          <div className="row align-items-center row-division extra-large-letters ">
            <div className="col" style={{ textAlign: "start" }}>
              <NavLink to="/project">
                <div
                  className="buttonText"
                  id="projectText"
                  style={{ color: this.state.projectsTextColor }}
                >
                  PROJECTS
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row align-items-center row-division extra-large-letters ">
            <div className="col" style={{ textAlign: "center" }}>
              <NavLink to="/about">
                <div
                  className="buttonText"
                  id="aboutText"
                  style={{ color: this.state.aboutTextColor }}
                >
                  ABOUT
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row align-items-center row-division extra-large-letters ">
            <div className="col" style={{ textAlign: "end" }}>
              <NavLink to="/contact">
                <div
                  className="buttonText"
                  id="contactText"
                  style={{ color: this.state.contactTextColor }}
                >
                  CONTACT
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row align-items-end footer-row">
            <div className="col" style={{ textAlign: "end" }}>
              Jainam Shah
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
