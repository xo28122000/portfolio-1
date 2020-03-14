import React, { Component } from "react";

import "./Mario.css";

class Mario extends Component {
  state = { playerLeftPosition: 50, playerBottomPosition: 20 };
  render() {
    const movementSpeed = 15;
    const runchars = ["./marioRun/marioRun2", "./marioRun/marioRun3"];
    document.onkeydown = e => {
      const marioPlayer = document.getElementById("marioPlayer");

      // console.log(e.code === "ArrowLeft" && e.code === "ArrowUp");
      if (e.code === "ArrowLeft") {
        if (this.state.playerLeftPosition - movementSpeed >= 0) {
          marioPlayer.style.transform = "";
          // marioPlayer.style.backgroundImage = "url(" + runchars[0] + ")";
          this.setState({
            playerLeftPosition: this.state.playerLeftPosition - movementSpeed
          });
        }
      } else if (e.code === "ArrowRight") {
        if (
          this.state.playerLeftPosition + 85 <=
          marioPlayer.offsetParent.offsetWidth
        ) {
          marioPlayer.style.transform = "scaleX(-1)";
          this.setState({
            playerLeftPosition: this.state.playerLeftPosition + movementSpeed
          });
        }
      } else if (e.code === "ArrowUp") {
        var middlePos = marioPlayer.offsetParent.offsetWidth / 2;

        if (
          this.state.playerLeftPosition >= middlePos - 35 &&
          this.state.playerLeftPosition <= middlePos + 35
        ) {
          console.log("came here");
          this.props.changePrompt();
        } else {
          console.log("came here instead");
        }
        this.setState({
          playerBottomPosition: 50
        });
        setTimeout(() => {
          this.setState({
            playerBottomPosition: 20
          });
        }, 300);
      }
    };
    // this.props.changePrompt();
    return (
      <div id="marioRoot" className="container-fluid" style={{}}>
        <div id="blockRegion"></div>
        <div id="playerRegion"></div>
        <div
          id="marioPlayer"
          style={{
            left: this.state.playerLeftPosition,
            right: "auto",
            bottom: String(this.state.playerBottomPosition) + "%"
            // backgroundImage: `url(require("marioChar.png"))`
          }}
        ></div>
        <div id="groundRegion"></div>
      </div>
    );
  }
}

export default Mario;
