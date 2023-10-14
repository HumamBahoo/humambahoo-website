import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Introduction from "../components/introduction";

import { homepageCSS, toTopCSS } from "./index.module.scss";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import { MdArrowUpward } from "react-icons/md";

const HomePage = ({ data }) => {
  const introductionDetails = data.introduction;

  const aboutDetails = {
    workExperienceList: data.workExperienceList.nodes,
    educationList: data.educationList.nodes,
    skillsSetList: data.skillsSetList.nodes,
    languageList: data.languageList.nodes,
  };

  const projectsList = data.projectsList.nodes;

  return (
    <Layout>
      <div className={homepageCSS}>
        {/* Introduction */}
        <section id="introduction">
          <Introduction details={introductionDetails} />
        </section>

        {/* About */}
        <section id="about">
          <About details={aboutDetails} />
        </section>

        {/* Back to the top */}
        <Link
          to={"/#home"}
          className={toTopCSS}
        >
          <MdArrowUpward />
        </Link>

        {/* Portfolio */}
        <section id="portfolio">
          <Portfolio details={projectsList} />
        </section>

        {/* Back to the top */}
        <Link
          to={"/#home"}
          className={toTopCSS}
        >
          <MdArrowUpward />
        </Link>
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

    projectsList: allSanityProject(sort: { _createdAt: ASC }) {
      nodes {
        title
        slug {
          current
        }
        description
        technologiesUsed
      }
    }
  }
`;

export const Head = () => <title>Humam Bahoo - Home</title>;
