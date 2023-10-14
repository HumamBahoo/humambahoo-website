import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Introduction from "../components/introduction";

import { homepageCSS, aboutCSS, portfolioCSS } from "./index.module.scss";

const HomePage = ({ data }) => {
  const introductionDetails = data.introduction;

  return (
    <Layout>
      <div className={homepageCSS}>
        <Introduction details={introductionDetails} />

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
  query HomepageQuery {
    introduction: sanityHomepage {
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
