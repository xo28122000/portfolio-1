import React, { Component } from "react";
import { Redirect } from "react-router";

import "./style.css";

import Homecontent from "./homecontent";
import academiccontent from "./academiccontent";
import experiencecontent from "./experiencecontent";
import personallifecontent from "./personallifecontent";
import resumecontent from "./resumecontent";

class AboutScreen extends Component {
  state = { currentContent: Homecontent, actionListeneradded: false };
  render() {
    const findSelectedEle = eleList => {
      var i = 0;
      for (i = 0; i < eleList.length; i++) {
        if (eleList[i].classList.contains("selectedElement")) {
          break;
        }
      }
      return i;
    };

    const content1 = <div>hello here </div>;
    document.onkeyup = e => {
      if (this.state.currentContent === Homecontent) {
        var canSelectElements = document.getElementsByClassName("canSelect");
        var i = findSelectedEle(canSelectElements);
        if (e.code === "ArrowUp") {
          canSelectElements[i].classList.remove("selectedElement");

          if (i !== 0) {
            canSelectElements[i - 1].classList.add("selectedElement");
          } else {
            canSelectElements[canSelectElements.length - 1].classList.add(
              "selectedElement"
            );
          }
        } else if (e.code === "ArrowDown") {
          canSelectElements[i].classList.remove("selectedElement");

          if (i !== canSelectElements.length - 1) {
            canSelectElements[i + 1].classList.add("selectedElement");
          } else {
            canSelectElements[0].classList.add("selectedElement");
          }
        } else if (e.keyCode === 13) {
          if (i === 0) {
            this.setState({ currentContent: academiccontent });
          } else if (i === 1) {
            this.setState({ currentContent: experiencecontent });
          } else if (i === 2) {
            this.setState({
              currentContent: resumecontent
            });
          } else if (i === 3) {
            this.setState({ currentContent: personallifecontent });
          } else if (i === 4) {
            this.setState({ currentContent: <Redirect to="/project" /> });
          } else {
            this.setState({ currentContent: content1 });
          }
        } else if (e.key === "Escape") {
          this.setState({ currentContent: <Redirect to="/" /> });
        } else {
          console.log("use arrow keys and enter");
        }
      }
      if (e.key === "Escape") {
        if (this.state.currentContent !== Homecontent) {
          this.setState({ currentContent: Homecontent });
        }
      } else {
        console.log("use escape to go back");
      }
    };

    return (
      <div id="aboutRoot">
        <div className="container">
          <div
            style={{
              paddingTop: "25vh",
              paddingBottom: "20vh"
            }}
          >
            <div
              className="container-fluid"
              style={{
                backgroundColor: "#4bfee9",
                borderRadius: "30px",
                padding: "5px",
                minHeight: "200px",
                minWidth: "900px"
              }}
            >
              <div id="displayContent">{this.state.currentContent}</div>
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
