import React from "react";

import { containerCSS } from "./skillSet.module.scss";

const SkillSet = ({ data }) => {
  const { category, skillsList } = data;

  return (
    <div className={containerCSS}>
      <h3>{category}</h3>

      <p>
        {skillsList.map((skill, idx) => {
          if (skillsList.length === idx + 1) {
            return <span key={idx}>and {skill}.</span>;
          } else {
            return <span key={idx}>{skill}, </span>;
          }
        })}
      </p>
    </div>
  );
};

export default SkillSet;
