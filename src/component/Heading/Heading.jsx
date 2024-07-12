import React from "react";

function Heading(props) {
    const {subTitle, title} = props
  return (

    <div className="collar-card-container">
      <h2 className="h1-collar">{subTitle}</h2>
      <h2 className="h2-collar">{title}</h2>
    </div>
  );
}

export default Heading;
