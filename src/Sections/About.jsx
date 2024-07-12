import React from "react";
import "./About.css";
import artwork from "../assets/artwork.png";
import email from "../assets/email.png";
import card from "../assets/card.png";
import back from "../assets/back.png"
import Heading from "../component/Heading/Heading";

function About() {
  return (
    < >
    <div id="about">
      <div className="about-container mt-10">
      
<Heading subTitle={"Know who we are"} title ={"CollarCard"}  />
        <div className="para-about mt-6">
          <p className ="text-lg">
            A CollarCard is a credit card sized plastic card that contains four
            high quality pop-out collar stays that is stored in a man’s
            wallet. We invented CollarCards to address and fix the common
            problem of men forgetting  their collar stays when they leave
            the house, when they are traveling, or for any occasion when they
            are wearing a dress shirt. CollarCards are a great
            promotional product for any company – we have a 100% usage 
            rate and can put any brand in a man’s wallet.
          </p>
        </div>

        <div className="about-card">
          <div className="card-one">
            <ul>
              <li className="text-lg">
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and  effective
                promotional products in the marketplace for men.
              </li>

              <li className="text-lg">
                <span></span>
                <i class="fa-solid fa-chevron-right"></i>
                CollarCards have a nearly 100% usage rate – which means
                we can put your brand in a man’s  wallet 24 hours a day.
              </li>

              <li className="text-lg">
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                Our low price point makes CollarCards one of  the most
                cost-effective promotional products on the market.
              </li>
            </ul>
          </div>

          <div className="card-two">
            <ul>
              <li className="text-lg">
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards are one of the most unique and  effective
                promotional products in the marketplace for men.
              </li>

              <li className="text-lg">
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                CollarCards have a nearly 100% usage rate – which means
                we can put your brand in a man’s wallet 24 hours a day.
              </li>

              <li className="text-lg">
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                Our low price point makes CollarCards one of  the most
                cost-effective promotional products on the market.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ordering mt-6">
        <div className="">
          <h2 className="order-h2 text-6xl">Know how to order</h2>
          <h1 className="order-h1 text-5xl">Ordering is Simple</h1>
        </div>

        <div className="ordering-card-container">
          <div className="ordering-card">
            <img src={artwork} alt="" />
            <p className="text-lg">
              Send us your high-resolution artwork for the front of your 
              CollarCard and the text you  would like printed on the back of each
              collar stay on your  CollarCard (email, website,  and/or phone
              number.)
            </p>
          </div>

          <div className="ordering-card">
            <img src={email} alt="" />
            <p className="text-lg">
              We will promptly create proofs  and email them to you for
              your  approval.
            </p>
          </div>

          <div className="ordering-card">
            <img src={card} alt="" />
            <p className="text-lg">
              Once you approve and send payment, we will start to  produce your
              order. Our typical turnaround time is very fast– usually only two
              weeks from  the date of your order.
            </p>
          </div>
        </div>
      </div>



{/* compare-container */}

      
</div>
      
    </>
  );
}

export default About;
