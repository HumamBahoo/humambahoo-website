import React from "react";

import { languageCSS, titleCSS, proficiencyCSS } from "./language.module.scss";

const Language = ({ details }) => {
  const { language, proficiency } = details;

  return (
    <div className={languageCSS}>
      <h3 className={titleCSS}>{language}</h3>
      <p className={proficiencyCSS}>{proficiency}</p>
    </div>
  );
};

export default Language;
