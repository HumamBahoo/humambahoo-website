import React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOpenInBrowser } from "react-icons/md";

import { containerCSS, photoCSS, summaryCSS, resumeButtonCSS, iconCSS } from "./index.module.scss";

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

const HomePage = ({ data }) => {
  const fullName = data.homepage.fullName;
  const introduction = data.homepage.introduction;
  const resumeUrl = data.homepage.resume.asset.url;
  const personalPhoto = data.homepage.picture.asset.gatsbyImageData;

  return (
    <Layout>
      <div className={containerCSS}>
        <section className={photoCSS}>
          <GatsbyImage
            image={personalPhoto}
            alt={`${fullName} - Photo`}
          />
        </section>

        <section className={summaryCSS}>
          <div>
            <h3>Hello, I'm...</h3>
            <h2>{fullName}</h2>
            <p>{introduction}</p>
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={resumeButtonCSS}
          >
            My Resume <MdOpenInBrowser className={iconCSS} />
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
