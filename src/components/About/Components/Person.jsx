import React from "react";
import "../About.css";

const Person = ({ name, description, img, rtl }) => {
  return (
    <div className={`Person${rtl ? " rtl" : ""}`}>
      <img src={img} />
      <div className="Content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Person;
