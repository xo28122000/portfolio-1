import React, { Component } from "react";
import Mario from "./Mario";
import "./project.css";
class ProjectScreen extends Component {
  state = {};
  render() {
    return (
      <div id="projectRoot">
        <div id="instructionArea"></div>
        <div id="gameArea">
          <Mario />
        </div>
      </div>
    );
  }
}

export default ProjectScreen;
