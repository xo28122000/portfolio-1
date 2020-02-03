import React, { Component } from "react";
import "./style.css";
import homecontent from "./homecontent";
class AboutScreen extends Component {
  state = { currentContent: homecontent };
  render() {
    const findSelectedEle = eleList => {
      var i = 0;
      for (i = 0; i < eleList.length; i++) {
        if (eleList[i].id == "selectedElement") {
          break;
        }
      }
      return i;
    };

    const content1 = <div>hello here </div>;

    document.addEventListener("keyup", e => {
      if (e.code === "ArrowUp") {
        var canSelectElements = document.getElementsByClassName("canSelect");
        var i = findSelectedEle(canSelectElements);
        if (i != 0) {
          canSelectElements[i].id = "";
          canSelectElements[i - 1].id = "selectedElement";
        } else {
          canSelectElements[i].id = "";
          canSelectElements[canSelectElements.length - 1].id =
            "selectedElement";
        }
      } else if (e.code === "ArrowDown") {
        var canSelectElements = document.getElementsByClassName("canSelect");
        var i = findSelectedEle(canSelectElements);
        if (i != canSelectElements.length - 1) {
          canSelectElements[i].id = "";
          canSelectElements[i + 1].id = "selectedElement";
        } else {
          canSelectElements[i].id = "";
          canSelectElements[0].id = "selectedElement";
        }
      } else if (e.keyCode === 13) {
        var canSelectElements = document.getElementsByClassName("canSelect");
        var i = findSelectedEle(canSelectElements);
        this.setState({ currentContent: content1 });
      } else if (e.key === "Escape") {
        if (this.state.currentContent != homecontent) {
          this.setState({ currentContent: homecontent });
        }
      } else {
        console.log("use arrow keys and enter");
      }
    });
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
