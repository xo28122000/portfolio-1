import React, { Component } from "react";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1s ${pulseAnimation};
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="mainbody">
        <div className="helloworld">
          <div className="helloworldbody centertext">
            <div className="center" id="centerdtext">
              <PulseDiv>HELLO \n Welcome to Jainam's\n WORLD</PulseDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
