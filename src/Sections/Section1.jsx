import React from "react";
import "./Section1.css";
import Video from "../component/Video";

function Section1() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home">
      <div className="container">
        <Video />

        <div className="collar-card-container">
          <h2 className="h1-collar">collarcard</h2>
          <h2 className="h2-collar">CollarCard</h2>
        </div>

        <div className="collar-card-p">
          <p className="text-lg">
            A CollarCard is a credit card sized plastic card  that contains four
            high quality pop-out collar staysthat is stored in a man’s wallet.
          </p>
        </div>

        <div className="collar-card-btn">
          <button className="btn">Request A Quote</button>
        </div>

        <div className="arrow" onClick={scrollToAbout}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Section1;
