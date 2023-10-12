import React from "react";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { containerCSS } from "./project.module.scss";

const Project = ({ data }) => {
  const { title, description } = data;
  const slug = data.slug.current;
  const image = data.image.asset.gatsbyImageData;

  return (
    <Link
      to={`/portfolio/${slug}`}
      className={containerCSS}
    >
      <GatsbyImage
        image={image}
        alt={`${title} - Image`}
      />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Project;
