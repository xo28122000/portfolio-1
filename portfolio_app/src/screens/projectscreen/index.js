import React, { Component } from "react";
import Mario from "./Mario";
import "./project.css";
class ProjectScreen extends Component {
  state = {};
  projects = [
    <p>
      Name: HealthDe.tech - Personal Health Detector - link:
      github.com/xo28122000/HealthDetect
      <br />◦ Developed a React.js front-end for users to sign up/in and upload
      a picture of the diseased body part.
      <br />◦ Trained CNN models to detect diseases using Tensorflow API and
      Google Cloud Platform.
      <br />◦ Deployed a restful flask server to use the trained models to
      predict the disease in pictures requested by the user.
      <br />
    </p>,
    `Name: Recovery Coach — MIT Health 2019
      <br /> title: Personalized physical rehab coach and research platform
      <br /> link: github.com/joshuaaguilar20/MIT-HealthHacks
      <br /> contribution:
      <br /> ◦ Developed a web app to increase the efficiency of physical
      therapy centers by giving the power of supervising to AI.
      <br /> ◦ Traced the movements of joints using poseNet and compared to the
      correct exercise pattern uploaded by the PT.
      <br />
      ◦ Won 3rd place in self care in chronic diseases track.
      <br />
   `,
    `Name: RideAid — HackMobility 2019\n
    title: Carpooling made simpler, safer and efficient\n
    link: github.com/helenamerk/hackmobility\n
    contribution:\n
  ◦ Developed a React Native app for user to start/join a pool and integrated the SmartCar’s API to verify and unlock the car.\n◦ Developed a data processing back-end to clean and serve the data to front-end after fetching it from a PostgreSQL database.\n◦ Won the Shell Grand Prize and an award for the best use of Smartcar API.
  `
  ];
  render() {
    const changePrompt = () => {
      console.log("changed the prompt");
    };
    return (
      <div id="projectRoot">
        <div id="instructionArea">
          <div
            id="instruction"
            className="PressStart blinking"
            style={{
              width: "100%",
              paddingTop: "20px",
              color: "#000",
              height: "5vh",
              textAlign: "center"
            }}
          >
            Use arrows to move and jump. hit POW.
          </div>
          <div
            className="PressStart"
            style={{
              width: "100%",
              paddingTop: "20px",
              fontSize: "10px"
              // color: "#000",
              // height: "5vh",
              // textAlign: "center"
            }}
          >
            {this.projects[0]}
          </div>
        </div>
        <div id="gameArea">
          <Mario changePrompt={changePrompt} />
        </div>
      </div>
    );
  }
}

export default ProjectScreen;
