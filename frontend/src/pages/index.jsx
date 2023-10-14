import React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOpenInBrowser } from "react-icons/md";

import {
  homepageCSS,
  introCSS,
  photoContainerCSS,
  photoCSS,
  summaryCSS,
  detailsCSS,
  resumeBtnCSS,
  iconCSS,
  aboutCSS,
  portfolioCSS,
} from "./index.module.scss";

const HomePage = ({ data }) => {
  const fullName = data.homepage.fullName;
  const introduction = data.homepage.introduction;
  const resumeUrl = data.homepage.resume.asset.url;
  const personalPhoto = data.homepage.picture.asset.gatsbyImageData;

  return (
    <Layout>
      <div className={homepageCSS}>
        {/* Introduction */}
        <div className={introCSS}>
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
              <p>{introduction}</p>
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
        </div>

        {/* About */}
        <div
          id="about"
          className={aboutCSS}
        >
          <h1>About</h1>
        </div>

        {/* Portfolio */}
        <div
          id="portfolio"
          className={portfolioCSS}
        >
          <h1>Portfolio</h1>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query MyQuery {
    homepage: sanityHomepage {
      fullName
      introduction
      resume {
        asset {
          url
        }
      }
      picture {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export const Head = () => <title>Humam Bahoo - Home</title>;
