import React from "react";

const resumecontent = (
  <div
    style={{
      backgroundColor: "#60fe4b",
      borderRadius: "30px",
      padding: "20px"
    }}
  >
    <div className="centerAlignedText extra-large-PressStart">
      <div className="col">Resume</div>
    </div>

    <div
      className="row   PressStart"
      style={{ fontSize: "calc(15px + 5%)", marginTop: "6vh" }}
    >
      <div className="col centerAlignedText">
        <a href="/files/Shah_Jainam.pdf" download="Shah_Jainam.pdf">
          {" >> Click here to download << "}
        </a>
      </div>
    </div>
  </div>
);

export default resumecontent;
