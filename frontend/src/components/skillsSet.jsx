import React from "react";

import { skillsSetCSS, categoryCSS, skillsCSS, skillCSS } from "./skillsSet.module.scss";

const SkillsSet = ({ details }) => {
  const { category, skillsList } = details;

  return (
    <div className={skillsSetCSS}>
      <h3 className={categoryCSS}>{category}</h3>

      <div className={skillsCSS}>
        {skillsList.map((skill, idx) => (
          <p
            key={idx}
            className={skillCSS}
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsSet;
