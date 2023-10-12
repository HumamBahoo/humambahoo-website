import React from "react";
import Layout from "../components/layout";

import WorkExperience from "../components/about/workExperience";
import Education from "../components/about/education";
import SkillSet from "../components/about/skillSet";
import Language from "../components/about/language";

import { graphql } from "gatsby";

import { containerCSS } from "./about.module.scss";

const AboutPage = ({ data }) => {
  const workExperienceList = data.workExperienceList.nodes;
  const educationList = data.educationList.nodes;
  const skillsSetList = data.skillsSetList.nodes;
  const languageList = data.languageList.nodes;

  return (
    <Layout>
      <div className={containerCSS}>
        {/* Work Experience */}
        {workExperienceList.length > 0 && (
          <section>
            <h2>Work Experience</h2>
            {workExperienceList.map((experience, idx) => (
              <WorkExperience
                key={idx}
                data={experience}
              />
            ))}
          </section>
        )}

        {/* Education */}
        {educationList.length > 0 && (
          <section>
            <h2>Education</h2>
            {educationList.map((education, idx) => (
              <Education
                key={idx}
                data={education}
              />
            ))}
          </section>
        )}

        {/* Technical Knowledge and Skills */}
        {skillsSetList.length > 0 && (
          <section>
            <h2>Technical Knowledge and Skills</h2>
            {skillsSetList.map((skillSet, idx) => (
              <SkillSet
                key={idx}
                data={skillSet}
              />
            ))}
          </section>
        )}

        {/* Languages */}
        {languageList.length > 0 && (
          <section>
            <h2>Languages</h2>
            {languageList.map((language, idx) => (
              <Language
                key={idx}
                data={language}
              />
            ))}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
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
