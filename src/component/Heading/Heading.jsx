import React from "react";

function Heading(props) {
    const {subTitle, title, style} = props
  return (

    <div className= { style ? style :" collar-card-container text-center "  }>
      <h2 className="h1-collar font-semibold"  >{subTitle}</h2>
      <h2 className="h2-collar font-semibold">{title}</h2>
    </div>
  );
}

export default Heading;
