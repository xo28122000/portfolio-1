import React from "react";

const academiccontent = (
  <div
    style={{
      backgroundColor: "#60fe4b",
      borderRadius: "30px",
      padding: "20px"
    }}
  >
    <div className="centerAlignedText extra-large-PressStart">
      <div className="col">My Academics</div>
    </div>

    <div
      className="row  PressStart"
      style={{ fontSize: "calc(15px + 5%)", marginTop: "6vh" }}
    >
      <div className="row">
        <div className="col-3">>> Coursework:</div>
        <div className="col-9">
          Web Development(React.js, Express.js, MYSQL, HTML, CSS, JS),
          <br />
          Programming methodology & memory management(C++), Data Structures,
          Discrete Math,
          <br /> Probability & Statistics, Linear Algebra,
          <br /> Machine Structures(MIPS)
          <br />
        </div>
        <div className="col-12" style={{ marginTop: "20px" }} />
        <div className="col-3">>>Dean’s List:</div>
        <div className="col-9">Fall 2018, Spring 2019, Fall 2019</div>
      </div>
    </div>
  </div>
);

export default academiccontent;
