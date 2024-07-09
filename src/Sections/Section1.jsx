import React from "react";
import "./Section1.css";
import Video from "../component/Video";

function Section1() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="home">
      <div className="container">
        <Video />

        <div className="card">
          <h2 className="h2-collar text-[69px] -mb-[55px]">collarcard</h2>
          <h1 className=" ">CollarCard</h1>
          <p>
            A CollarCard is a credit card sized plastic card
            <br />
            that contains four high quality pop-out collar stays
            <br />
            that is stored in a man’s wallet.
          </p>
         <div className="btn">
         <button className="px-2 py-1 text-lg">Request A Quote</button>
         </div>
        </div>

        <div className="arrow" onClick={scrollToAbout}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Section1;
