import React from "react";
import TechStack from "../tech-stack/TechStack";
import "./about.scss";
const About = () => {
  return (
    <div className="about-container">
      <div className="top-section-container">
        <div className="about-left-container">
          <div className="about-title">
            <h3>Project Description</h3>
          </div>
          <div className="about-description">
            The project is about a food web app where the will be guidline to
            about how to cook any particular meal. There will be a helpful video
            as well as line to line process through written text.
          </div>
        </div>
        <div className="about-right-container">
          Images, Written text guidline, Pre cook process, cooking process
        </div>
      </div>
      <div className="bottom-section-container">
        <div className="bottom-section-container-title">Tech Stack</div>
        <div className="bottom-section-container-content">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default About;
