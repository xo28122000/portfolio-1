import React, { Component } from "react";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 1s ${pulseAnimation};
`;

class Work extends Component {
  state = {};
  render() {
    return (
      <div className="mainbody">
        <div className="helloworld">
          <div className="helloworldbody workbody">
            <div classname="workbody">
              <PulseDiv>
                This is Work Page
                <br />
              </PulseDiv>
              <Toast>
                <ToastHeader>Reactstrap</ToastHeader>
                <ToastBody>
                  This is a toast on a white background — check it out!
                </ToastBody>
              </Toast>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
