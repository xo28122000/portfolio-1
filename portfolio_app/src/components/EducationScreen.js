import React, { Component } from "react";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1s ${pulseAnimation};
`;

class Education extends Component {
  state = {};
  render() {
    return (
      <div className="mainbody">
        <div className="helloworld">
          <div className="helloworldbody centertext">
            <div className="center" id="centerdtext">
              <PulseDiv>This is Education Page</PulseDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
