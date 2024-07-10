import React from "react";
import "./Patent.css";

function Patent() {
  return (
    <div className="about-container patents border">
      <div className="patent-card-div">
        <h1 className="h1-trademark ">Trademarks & Copywrites</h1>
        <h1 className="h1-patent">Patents</h1>
      </div>

      <div className="patent-card flex justify-between">
        <div className="left-card w-[45%] ">
          <p className="text-lg  ">
            We take our intellectual property rights seriously, and have
            not licensed the ability to make CollarCards to any other 
            company. If somebody other than us offers or produces
            CollarCards, please let us know immediately.
          </p>
        </div>

        <div className="right-card w-[50%]">
          <p className="text-lg">
            CollarCards are protected by the five following issued
            patents and trademarks:
          </p>
          <ul className="">
            <li>
              <span className="p-1">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              US D652,606 S
            </li>
            <li>
              <span className="">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              US D667,199 S
            </li>
            <li>
              <span className="">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              US D666,790 S
            </li>
            <li>
              <span className="">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              US D678,661 S
            </li>
            <li>
              <span className="">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              US D692,954 S
            </li>
          </ul>
        </div>
      </div>



      <div className="trademark-card flex gap-11 mt-10">
        <div className="left-trademark">
          <h1 className="text-2xl font-semibold">Trademarks:</h1>
          <p className="text-lg">
            CollarCard, LLC is the proud owner of the following registered
            trademarks:
          </p>
        </div>
        <div className="right-trademark">
          <p className="text-lg font-semibold">
            CollarCard Always in Your Wallet <br />
            Stays in Your Wallet <br />
            CollarCard – We Put Your Brand in a Man’s Wallet 24 Hours a Day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Patent;
