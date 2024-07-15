import React from "react";
import "./Patent.css";
import Heading from "../component/Heading/Heading";

function Patent() {
  return (
    <div className="about-container patents p-4 md:p-8">
      <div className="patent-card-div">
        <h1 className="h1-trademark">Trademarks & Copywrites</h1>
        <h1 className="h1-patent">Patents</h1>
      </div>

      {/* <Heading subTitle= {"Trademarks & Copywrites"} title={"Patents"} /> */}

      


      <div className="patent-card flex flex-col md:flex-row justify-between">
        <div className="left-card md:w-[45%] mb-4 md:mb-0">
          <p className="text-base md:text-lg">
            We take our intellectual property rights seriously, and have
            not licensed the ability to make CollarCards to any other 
            company. If somebody other than us offers or produces
            CollarCards, please let us know immediately.
          </p>
        </div>

        <div className="right-card md:w-[50%]">
          <p className="text-base md:text-lg">
            CollarCards are protected by the five following issued
            patents and trademarks:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="mr-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              US D652,606 S
            </li>
            <li>
              <span className="mr-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              US D667,199 S
            </li>
            <li>
              <span className="mr-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              US D666,790 S
            </li>
            <li>
              <span className="mr-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              US D678,661 S
            </li>
            <li>
              <span className="mr-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              US D692,954 S
            </li>
          </ul>
        </div>
      </div>

      <div className="trademark-card flex flex-col md:flex-row justify-between mt-10">
        <div className="left-trademark md:w-[45%] mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold">Trademarks:</h1>
          <p className="text-base md:text-lg">
            CollarCard, LLC is the proud owner of the <br /> following registered
            trademarks: 
          </p>
        </div>
        <div className="right-trademark md:w-[50%] mt-3 md:mt-0">
          <p className="text-base md:text-lg font-semibold mt-1">
            CollarCard Always in Your Wallet <br />
            Stays in Your Wallet <br />
            CollarCard – We Put Your Brand in a Man’s Wallet 24 Hours <br /> a Day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Patent;
