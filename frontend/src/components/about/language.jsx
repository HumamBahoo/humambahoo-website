import React from "react";

import { containerCSS } from "./language.module.scss";

const Language = ({ data }) => {
  const { language, proficiency } = data;

  return (
    <div className={containerCSS}>
      <h3>{language}</h3>
      <p>{proficiency}</p>
    </div>
  );
};

export default Language;
