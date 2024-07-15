import React from 'react'
import back from "../assets/back.png"
import Heading from './Heading/Heading'

function Compare() {
  return (
    <>
    <div className="compare-container mt-10">
        <div className="left-compare">
  <img src={back} alt="" />
        </div>
        <div className="right-compare">
     <h2></h2>
     <h1></h1>

     <Heading subTitle={"Usage Rates"} title ={"Compare"}/>


     <span> Collar Cards
      <div className="progress"></div>
     </span>
        </div>
    </div>


    </>
  )
}

export default Compare
