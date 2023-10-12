import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Project from "../components/portfolio/project";

import { containerCSS } from "./portfolio.module.scss";

export const query = graphql`
  query PortfolioPage {
    projectsList: allSanityProject(sort: { _createdAt: ASC }) {
      nodes {
        title
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
      <div className={containerCSS}>
        {projectsList.map((project, idx) => (
          <Project
            key={idx}
            data={project}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PortfolioPage;
