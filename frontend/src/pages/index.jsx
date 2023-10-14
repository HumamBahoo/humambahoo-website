import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Introduction from "../components/introduction";

import { homepageCSS, aboutCSS, portfolioCSS } from "./index.module.scss";
import About from "../components/about";

const HomePage = ({ data }) => {
  const introductionDetails = data.introduction;

  const aboutDetails = {
    workExperienceList: data.workExperienceList.nodes,
    educationList: data.educationList.nodes,
    skillsSetList: data.skillsSetList.nodes,
    languageList: data.languageList.nodes,
  };

  return (
    <Layout>
      <div className={homepageCSS}>
        <Introduction details={introductionDetails} />

        {/* About */}
        <div
          id="about"
          className={aboutCSS}
        >
          <About details={aboutDetails} />
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

    workExperienceList: allSanityWorkExperience(sort: { startDate: DESC }) {
      nodes {
        isPresent
        jobTitle
        jobType
        location
        startDate
        achievements
        employer
        endDate
      }
    }
    educationList: allSanityEducation(sort: { startDate: DESC }) {
      nodes {
        school
        degree
        program
        startDate
        completionDate
        gpa
        location
        _rawSelectedCourses(resolveReferences: { maxDepth: 1 })
      }
    }
    skillsSetList: allSanitySkillsSet(sort: { _createdAt: ASC }) {
      nodes {
        category
        skillsList
      }
    }
    languageList: allSanityLanguage(sort: { _createdAt: ASC }) {
      nodes {
        language
        proficiency
      }
    }
  }
`;

export const Head = () => <title>Humam Bahoo - Home</title>;
