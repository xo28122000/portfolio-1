import React, { Component } from "react";
import "./style.css";
class AboutScreen extends Component {
  state = {};
  render() {
    return (
      <div id="aboutRoot" className="container">
        <div
          style={{ height: "46vh", marginTop: "27vh", marginBottom: "27vh" }}
        >
          <div className="centerAlignedText extra-large-PressStart" style={{}}>
            <div className="col">Hello, I'm Jainam</div>
          </div>

          <div
            className="row  PressStart"
            style={{ fontSize: "calc(15px + 5%)", marginTop: "6vh" }}
          >
            <div className="col" style={{}}>
              // I <br />
              // code <br />
              // live in SF, CA
              <br />
              // study CS @ SFSU
              <br />
              // am interested in
              <br />
              // Web Dev & Computer Vision
            </div>
            <div className="col" style={{}}>
              <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                My Academics <br />
              </div>
              <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                My Experiences
                <br />
              </div>
              <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                My Resume
                <br />
              </div>
              <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                More about my personal life
                <br />
              </div>
              <div style={{ marginBottom: "5px", marginTop: "5px" }}>
                Next: Projects
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutScreen;

//  {/* thinsg to display:
// //               who am i,
// //               where im from,
// //               what are my interests,
// //               what have i studied
// //               where have i worked
// //               */}
