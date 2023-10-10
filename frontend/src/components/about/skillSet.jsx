import React from "react";

const SkillSet = ({ data }) => {
  const { category, skillsList } = data;

  return (
    <div className="skill-set">
      <h3>{category}</h3>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
