import React from "react";

import { portfolioCSS, titleCSS, containerCSS } from "./portfolio.module.scss";
import Project from "./project";

const Portfolio = ({ details }) => {
  return (
    <section className={portfolioCSS}>
      <h2 className={titleCSS}>Portfolio</h2>

      <div className={containerCSS}>
        {details.length > 0 ? (
          details.map((project, idx) => {
            const projectDetails = {
              title: project.title,
              description: project.description,
              slug: project.slug.current,
              technologiesUsed: project.technologiesUsed,
            };

            return (
              <Project
                key={idx}
                details={projectDetails}
              />
            );
          })
        ) : (
          <p>There are no projects added yet!</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
