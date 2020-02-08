import React from "react";

const experiencecontent = (
  <div
    style={{
      backgroundColor: "#60fe4b",
      borderRadius: "30px",
      padding: "20px"
    }}
  >
    <div className="centerAlignedText extra-large-PressStart">
      <div className="col">My Experiences</div>
    </div>

    <div
      className="container-fluid  PressStart"
      style={{ fontSize: "calc(15px + 5%)", marginTop: "6vh" }}
    >
      <div className="row canSelect selectedElement">
        <div className="col-7">• Lecturer - SFSU</div>{" "}
        <div className="col-5 ">Sept. 2019 - Present</div>
      </div>
      <div className="row canSelect">
        <div className="col-7">• Organiser - SF Hacks 2020</div>
        <div className="col-5 ">Oct. 2019 - Present</div>
        {/* ◦ Designed and developed a webpage using React.js(sfhacks.io)
        through wich we got 400 applications. ◦ Developed the structure and
        criteria for a fair judging system. ◦ Modeled an enriching prize
        distributing arrangement to be in compliance with the available
        resources. */}
      </div>
      <div className="row canSelect">
        <div className="col-7">• Math and Science Tutor - SFSU</div>
        <div className="col-5 ">Sept. 2019 - Present</div>
        {/* ◦ Lecturer for SCI 221 - supplemental course for Data
        Structures(Java). ◦ Helped over 100 students to pick up new programming
        languages and understand data structures(in Java, Python, and c++). */}
      </div>
      <div className="row canSelect">
        <div className="col-7">• SFE Intern - SpeedLegal</div>
        <div className="col-5 ">July 2019 - Sept. 2019</div>
        {/* ◦
        Automated parsing, extraction and scaling of features from PDF using
        python decreasing the time from hours to minutes. ◦ Experimented with
        different hyper parameters of CNN to find the best combination and
        increased the accuracy by 30%. ◦ Worked on creating alternate
        models(Regression and SVM) to predict and classify data from the PDF
        document. ◦ Developed and designed a web app using React.js to render
        the labeled information from the model. */}
      </div>
    </div>
  </div>
);

export default experiencecontent;
