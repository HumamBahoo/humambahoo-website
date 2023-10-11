import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Project from "../components/portfolio/project";

export const query = graphql`
  query PortfolioPage {
    projectsList: allSanityProject {
      nodes {
        title
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], width: 350)
          }
        }
      }
    }
  }
`;

const PortfolioPage = ({ data }) => {
  const projectsList = data.projectsList.nodes;

  return (
    <Layout>
      {projectsList.map((project, idx) => (
        <Project
          key={idx}
          data={project}
        />
      ))}
    </Layout>
  );
};

export default PortfolioPage;
