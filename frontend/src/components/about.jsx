import React from "react";

import WorkExperience from "./workExperience";
import Education from "./education";
import SkillsSet from "./skillsSet";
import Language from "./language";

import { aboutCSS, componentCSS, componentHeaderCSS, componentContentCSS } from "./about.module.scss";

const About = ({ details }) => {
  const { workExperienceList, educationList, skillsSetList, languageList } = details;

  return (
    <div className={aboutCSS}>
      {/* Work Experience */}
      {workExperienceList.length > 0 && (
        <section className={componentCSS}>
          <h2 className={componentHeaderCSS}>Work Experience</h2>

          <div className={componentContentCSS}>
            {workExperienceList.map((experience, idx) => (
              <WorkExperience
                key={idx}
                details={experience}
              />
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {educationList.length > 0 && (
        <section className={componentCSS}>
          <h2 className={componentHeaderCSS}>Education</h2>

          <div className={componentContentCSS}>
            {educationList.map((education, idx) => (
              <Education
                key={idx}
                details={education}
              />
            ))}
          </div>
        </section>
      )}

      {/* Technical Knowledge and Skills */}
      {skillsSetList.length > 0 && (
        <section className={componentCSS}>
          <h2 className={componentHeaderCSS}>Technical Knowledge and Skills</h2>

          <div className={componentContentCSS}>
            {skillsSetList.map((skillSet, idx) => (
              <SkillsSet
                key={idx}
                details={skillSet}
              />
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languageList.length > 0 && (
        <section className={componentCSS}>
          <h2 className={componentHeaderCSS}>Languages</h2>

          <div className={componentContentCSS}>
            {languageList.map((language, idx) => (
              <Language
                key={idx}
                details={language}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
