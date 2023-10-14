import React from "react";

import {
  workExperienceCSS,
  summaryCSS,
  titleCSS,
  employerCSS,
  periodsCSS,
  achievementsCSS,
  achievementCSS,
} from "./workExperience.module.scss";

const WorkExperience = ({ details }) => {
  const { jobTitle, jobType, location, employer, isPresent, achievements } = details;

  const startDate = new Date(details.startDate).toLocaleString("default", { year: "numeric", month: "short" });
  const endDate = new Date(details.endDate).toLocaleString("default", { year: "numeric", month: "short" });

  return (
    <div className={workExperienceCSS}>
      <div className={summaryCSS}>
        <h3 className={titleCSS}>
          {jobTitle}
          {jobType !== "Full-Time" && ` (${jobType})`}
        </h3>

        <h4 className={employerCSS}>
          {employer} - {location}
        </h4>

        <h4 className={periodsCSS}>
          <time>
            {startDate} - {isPresent ? "Present" : endDate}
          </time>
        </h4>
      </div>

      {achievements.length > 0 && (
        <ul className={achievementsCSS}>
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className={achievementCSS}
            >
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperience;
