import React from "react";

const Language = ({ data }) => {
  const { language, proficiency } = data;

  return (
    <div className="language">
      <h3>{language}</h3>
      <p>{proficiency}</p>
    </div>
  );
};

export default Language;
