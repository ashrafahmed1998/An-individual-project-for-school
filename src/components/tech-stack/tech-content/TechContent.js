import React from "react";
import "./techContnet.scss";
const TechContent = ({ s }) => {
  return (
    <div className="tech-stack-content">
      <div className="tech-stack-content-title">{s.name}</div>
      <div className="tech-stack-content-description">{s.desciption} </div>
    </div>
  );
};

export default TechContent;
