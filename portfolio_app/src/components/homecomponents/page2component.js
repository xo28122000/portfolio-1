import React, { Component } from "react";

class Page1component extends Component {
  state = {};
  render() {
    return (
      <div
        id="page2"
        className="container-fluid vanishElement"
        style={{ opacity: "0" }}
      >
        <div className="row">
          I'm a computer Science student
          <br />
          I'm based in San Francisco
          <br />
          I'm currently interested in Web development and Coputer Vision
        </div>
      </div>
    );
  }
}

export default Page1component;
