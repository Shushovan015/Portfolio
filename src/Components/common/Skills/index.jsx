import React from "react";
import { skillsData } from "../../../Constants/jsonData";

const Skills = () => {
  return (
    <div className="skill-grid">
      {skillsData.map((items) => (
        <div className="contact-card is-flex is-align-center is-start is-gap-15 mb-15">
          <div className="is-square is-square_sm">{items.icon}</div>
          <div className="personal-card-content">
            <p className=" mb-05 is-capitalize fw-600 fs-lg">
              {items.iconName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
