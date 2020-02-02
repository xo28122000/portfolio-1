import React, { Component } from "react";

class Page1component extends Component {
  state = {};
  render() {
    return (
      <div id="page1" className="container-fluid vanishElement">
        <div className="row">
          <div
            className="col align-self-center"
            style={{ textAlign: "center" }}
          >
            <span className="extra-large-Cabin">I'm</span>{" "}
            <span className="extra-large-Pacifico">Jainam Shah</span>
          </div>
        </div>
        <div className="Cabin" style={{ opacity: "1" }}>
          <div className="row">
            <div
              className="col"
              style={{ textAlign: "end", paddingRight: "10vw" }}
            >
              From San Francisco
            </div>
          </div>
          <div className="row ">
            <div
              className="col"
              style={{ textAlign: "end", paddingRight: "10vw" }}
            >
              Studying computer science @SFSU
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              style={{ textAlign: "end", paddingRight: "10vw" }}
            >
              graduating 2021
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1component;
