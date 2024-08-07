import React from "react";
import "./Section1.css";
import Video from "../component/Video";
import Heading from "../component/Heading/Heading";

function Section1() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const aboutSection = document.getElementById("contact");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home">
      <Video />
      <div className="container mt-[90px]">


        <Heading  subTitle={"collarcard"} title={"CollarCard"} />



        <div className="collar-card-p ">
          <p className="text-lg text-center">
            A CollarCard is a credit card sized plastic card  that contains four
            high quality pop-out collar staysthat is stored in a man’s wallet.
          </p>
        </div>

        <div className="collar-card-btn mt-[30px]">
          <button onClick={scrollToContact} className="btn">Request A Quote</button>
        </div>

        <div className="arrow" onClick={scrollToAbout}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Section1;
