import React from "react";

const Homecontent = (
  <div
    style={{
      backgroundColor: "#60fe4b",
      borderRadius: "30px",
      padding: "20px"
    }}
  >
    <div className="centerAlignedText extra-large-PressStart">
      <div className="col">Hello, I'm Jainam</div>
    </div>

    <div
      className="row  PressStart"
      style={{ fontSize: "calc(15px + 5%)", marginTop: "6vh" }}
    >
      <div className="col">
        {"// I"} <br />
        {"// code"} <br />
        {"// live in SF,"} CA
        <br />
        {"// study CS @ SFSU"}
        <br />
        {"// am interested in"}
        <br />
        {"// Web Dev & Computer Vision"}
      </div>
      {/* ["Academics","Experiences","Resume","Personal","Next"] */}
      <div className="col">
        <div className="canSelect selectedElement">
          <div
            id="Academics"
            style={{
              padding: "5px",
              display: "inline-block"
            }}
          >
            > My Academics
            <br />
          </div>
        </div>
        <div className="canSelect">
          <div
            id="Experiences"
            style={{ padding: "5px", display: "inline-block" }}
          >
            > My Experiences
            <br />
          </div>
        </div>
        <div className="canSelect">
          <div
            id="Resume"
            style={{ padding: "5px", display: "inline-block", color: "black" }}
          >
            > My Resume
            <br />
          </div>
        </div>
        <div className="canSelect">
          <div
            id="Personal"
            style={{ padding: "5px", display: "inline-block" }}
          >
            > About my personal life
            <br />
          </div>
        </div>
        <div className="canSelect">
          <div id="Next" style={{ padding: "5px", display: "inline-block" }}>
            > Next: Projects
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Homecontent;
