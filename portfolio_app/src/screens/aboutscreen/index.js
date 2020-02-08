import React, { Component } from "react";
import { Redirect } from "react-router";

import "./style.css";

import Homecontent from "./homecontent";
import academiccontent from "./academiccontent";
import experiencecontent from "./experiencecontent";
import personallifecontent from "./personallifecontent";

class AboutScreen extends Component {
  state = {
    currentContent: Homecontent,
    actionListeneradded: false,
    blinkText: "Use Arrow keys to navigate, enter to view and esc to go back"
  };
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

    const arrowNavigation = e => {
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
      }
      return i;
    };

    const content1 = (
      <div>>>>>>>>>>>>>>>>>>>>-------- ERROR -------->>>>>>>>>>>>>>>>>>></div>
    );
    const navigatorText =
      "Use Arrow keys to navigate, enter to view and esc to go back";
    const escapeText = "Use esc to go back";

    document.onkeyup = e => {
      if (this.state.currentContent === Homecontent) {
        var i = arrowNavigation(e);
        if (e.keyCode === 13) {
          if (i === 0) {
            this.setState({
              currentContent: academiccontent,
              blinkText: escapeText
            });
          } else if (i === 1) {
            this.setState({
              currentContent: experiencecontent,
              blinkText: navigatorText
            });
          } else if (i === 2) {
            window.open(
              "https://xo28122000.github.io/portfolio/files/Shah_Jainam.pdf",
              "_blank"
            );
          } else if (i === 3) {
            this.setState({
              currentContent: personallifecontent,
              blinkText: escapeText
            });
          } else if (i === 4) {
            this.setState({ currentContent: <Redirect to="/project" /> });
          } else {
            this.setState({ currentContent: content1, blinkText: escapeText });
          }
        } else if (e.key === "Escape") {
          this.setState({ currentContent: <Redirect to="/" /> });
        } else {
          console.log("use arrow keys and enter");
        }
      } else if (this.state.currentContent === experiencecontent) {
        var i = arrowNavigation(e);
        if (e.keyCode === 13) {
          if (true) {
          } else {
            this.setState({ currentContent: content1 });
          }
        } else if (e.key === "Escape") {
          if (this.state.currentContent !== Homecontent) {
            this.setState({
              currentContent: Homecontent,
              blinkText: navigatorText
            });
          } else {
            console.log("use escape to go back");
          }
        } else {
          console.log("use arrow keys and enter");
        }
      }
      if (e.key === "Escape") {
        if (this.state.currentContent !== Homecontent) {
          this.setState({
            currentContent: Homecontent,
            blinkText: navigatorText
          });
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
              paddingBottom: "15vh"
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
        <div
          id="instruction"
          className="PressStart blinking"
          style={{
            position: "fixed",
            width: "100%",

            bottom: "1vh",
            color: "#000",
            height: "5vh",
            textAlign: "center"
          }}
        >
          {this.state.blinkText}
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
