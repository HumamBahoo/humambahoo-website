import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOpenInBrowser } from "react-icons/md";

import {
  introCSS,
  photoContainerCSS,
  photoCSS,
  summaryCSS,
  detailsCSS,
  resumeBtnCSS,
  iconCSS,
} from "./introduction.module.scss";

const Introduction = ({ details }) => {
  const fullName = details.fullName;
  const summary = details.about;
  const resumeUrl = details.resume.asset.url;
  const personalPhoto = details.picture.asset.gatsbyImageData;

  return (
    <section className={introCSS}>
      <section className={photoContainerCSS}>
        <GatsbyImage
          image={personalPhoto}
          alt={`${fullName} - Photo`}
          className={photoCSS}
        />
      </section>

      <section className={summaryCSS}>
        <div className={detailsCSS}>
          <h3>Hello, I'm...</h3>
          <h2>{fullName}</h2>
          <p>{summary}</p>
        </div>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={resumeBtnCSS}
        >
          My Resume <MdOpenInBrowser className={iconCSS} />
        </a>
      </section>
    </section>
  );
};

export default Introduction;
