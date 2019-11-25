import React, { Component } from "react";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const PulseDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="mainbody">
        <div className="helloworld">
          <div className="helloworldbody centertext">
            <div className="center" id="centerdtext">
              <PulseDiv>This is Project Page</PulseDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
