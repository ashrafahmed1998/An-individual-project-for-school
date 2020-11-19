import React, { Component } from "react";
import "./tech.scss";
import TechContent from "./tech-content/TechContent";

export class TechStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Stack: [
        {
          id: 0,
          name: "Frontend",
          desciption: "React",
        },
        {
          id: 1,
          name: "Backend",
          desciption: "Firebase Cloud Provider",
        },
        {
          id: 2,
          name: "Styling",
          desciption: "Scss/css",
        },
      ],
    };
  }
  render() {
    const { Stack } = this.state;
    return (
      <div className="tech-container">
        <div className="tech-content-container">
          {Stack.map((s) => (
            <TechContent key={s.id} s={s} />
          ))}
        </div>
      </div>
    );
  }
}

export default TechStack;
