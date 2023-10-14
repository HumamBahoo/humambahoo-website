import { Link } from "gatsby";
import React from "react";

import { projectCSS, titleCSS, descCSS, techWrapperCSS, techUsedCSS, techCSS } from "./project.module.scss";

const Project = ({ details }) => {
  const { title, description, slug, technologiesUsed } = details;

  return (
    <Link
      to={`/portfolio/${slug}`}
      className={projectCSS}
    >
      <h3 className={titleCSS}>{title}</h3>

      <p className={descCSS}>{description}</p>

      <div className={techWrapperCSS}>
        <section className={techUsedCSS}>
          {technologiesUsed.map((tech, idx) => (
            <p
              key={idx}
              className={techCSS}
            >
              {tech}
            </p>
          ))}
        </section>
      </div>
    </Link>
  );
};

export default Project;
