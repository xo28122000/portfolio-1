import React, { Component } from "react";
import "./style.css";
class AboutScreen extends Component {
  state = { nextScroll: true };
  render() {
    document.addEventListener(
      "wheel",
      e => {
        if (this.state.nextScroll) {
          if (e.wheelDelta < 0) {
            this.setState({ nextScroll: false });
            console.log("scrolled");
            setInterval(() => {
              this.setState({ nextScroll: true });
            }, 3000);
          }
        }

        // console.log(e.deltaY);
        // console.log(e.wheelDelta < 0);
      },
      true
    );
    return (
      <div>
        <div id="root">
          {/* thinsg to display:
              who am i, 
              where im from, 
              what are my interests,
              what have i studied 
              where have i worked 
              */}
          <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col align-self-center"
                    style={{ textAlign: "center" }}
                  >
                    <span className="extra-large-Cabin">I'm</span>{" "}
                    <span className="extra-large-Pacifico">Jainam Shah</span>
                  </div>
                </div>
                <div className="Cabin">
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
            </div>
          </div>
        </div>
        <div className="container" style={{ alignItems: "end" }}>
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              {"<<-  Scroll down  ->>"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutScreen;
