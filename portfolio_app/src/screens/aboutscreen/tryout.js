// import React, { Component } from "react";
// import "./style.css";
// import Page1component from "./../../components/homecomponents/page1component";
// import Page2component from "./../../components/homecomponents/page2component";
// class AboutScreen extends Component {
//   state = {
//     nextScroll: true,
//     currentPageindex: 0,
//     currentPage: <Page1component />
//   };
//   render() {
//     const pageScroller = (pageFrom, pageTo) => {
//       if (pageFrom == 0 && pageTo == 1) {
//         this.setState({ currentPageindex: this.state.currentPageindex + 1 });
//         document.getElementById("page1").setAttribute("style", "opacity: 0");
//         this.setState({ currentPage: <Page2component /> });
//         document.getElementById("page2").setAttribute("style", "opacity: 1");
//       } else if (pageFrom == 1 && pageTo == 0) {
//         this.setState({ currentPageindex: this.state.currentPageindex - 1 });
//         document.getElementById("page1").setAttribute("style", "opacity: 1");
//         this.setState({ currentPage: <Page1component /> });
//       }
//     };
//     const scrollStop = () => {
//       this.setState({ nextScroll: false });
//       setInterval(() => {
//         this.setState({ nextScroll: true });
//       }, 1500);
//     };
//     document.addEventListener(
//       "wheel",
//       e => {
//         if (this.state.nextScroll) {
//           if (e.wheelDelta < 0) {
//             // downscroll
//             pageScroller(
//               this.state.currentPageindex,
//               this.state.currentPageindex + 1
//             );

//             scrollStop();
//           } else if (e.wheelDelta > 0) {
//             // upscroll
//             pageScroller(
//               this.state.currentPageindex,
//               this.state.currentPageindex - 1
//             );
//             scrollStop();
//           }
//         }
//       },
//       true
//     );
//     return (
//       <div>
//         <div id="root">
//           {/* thinsg to display:
//               who am i, 
//               where im from, 
//               what are my interests,
//               what have i studied 
//               where have i worked 
//               */}
//           <div className="container">
//             <div
//               className="row align-items-center "
//               style={{ height: "100vh" }}
//             >
//               {this.state.currentPage}
//             </div>
//           </div>
//         </div>
//         <div className="container" style={{ alignItems: "end" }}>
//           <div className="row">
//             <div className="col" style={{ textAlign: "center" }}>
//               {"<<-  Scroll down  ->>"}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AboutScreen;
