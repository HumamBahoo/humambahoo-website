import React from "react";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Project = ({ data }) => {
  const { title, description } = data;
  const slug = data.slug.current;
  const image = data.image.asset.gatsbyImageData;

  return (
    <div>
      <GatsbyImage
        image={image}
        alt={`${title} - Image`}
      />

      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={`/portfolio/${slug}`}>Learn More</Link>
    </div>
  );
};

export default Project;
