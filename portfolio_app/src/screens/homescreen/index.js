import React, { Component } from "react";
import "./style.css";
class HomeScreen extends Component {
  state = {
    backgroundColor: "#ffffff",
    projectsTextColor: "whte",
    aboutTextColor: "whte",
    contactTextColor: "whte"
  };
  componentDidMount = () => {
    const projectText = document.getElementById("projectText");
    const aboutText = document.getElementById("aboutText");
    const contactText = document.getElementById("contactText");
    projectText.onmouseover = () => {
      this.setState({ backgroundColor: "#fff59d" });
    };
    projectText.onmouseleave = () => {
      this.setState({ backgroundColor: "#ffffff" });
    };
    aboutText.onmouseover = () => {
      this.setState({ backgroundColor: "#f59dff" });
    };
    aboutText.onmouseleave = () => {
      this.setState({ backgroundColor: "#ffffff" });
    };
    contactText.onmouseover = () => {
      this.setState({ backgroundColor: "#9dfff5" });
    };
    contactText.onmouseleave = () => {
      this.setState({ backgroundColor: "#ffffff" });
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
              <span id="projectText">PROJECTS</span>
            </div>
          </div>
          <div className="row align-items-center row-division extra-large-letters ">
            <div className="col" style={{ textAlign: "center" }}>
              <span id="aboutText">ABOUT</span>
            </div>
          </div>
          <div className="row align-items-center row-division extra-large-letters ">
            <div className="col" style={{ textAlign: "end" }}>
              <span id="contactText">CONTACT</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
