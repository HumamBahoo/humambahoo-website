import React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdOpenInBrowser } from "react-icons/md";

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
      <section>
        <GatsbyImage
          image={personalPhoto}
          alt={`${fullName} - Photo`}
        />
      </section>

      <section>
        <h2>{fullName}</h2>

        <div>
          <h3>Hello...</h3>
          <p>{introduction}</p>
        </div>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume <MdOpenInBrowser />
        </a>
      </section>
    </Layout>
  );
};

export default HomePage;
