import React from "react";

import {
  educationCSS,
  summaryCSS,
  programCSS,
  schoolCSS,
  periodsCSS,
  detailsCSS,
  gpaCSS,
  coursesCSS,
  courseDetailsCSS,
  courseCSS,
  courseLinkCSS,
} from "./education.module.scss";

const Education = ({ details }) => {
  const { school, degree, program, gpa, location, _rawSelectedCourses } = details;

  const startDate = new Date(details.startDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
  });

  const completionDate = new Date(details.completionDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
  });

  const gpaOrSelectedCoursesExist = gpa !== null || _rawSelectedCourses !== null;

  return (
    <div className={educationCSS}>
      <div className={summaryCSS}>
        <h3 className={programCSS}>
          {program}, {degree}
        </h3>

        <h4 className={schoolCSS}>
          {school} - {location}
        </h4>

        <h4 className={periodsCSS}>
          <time>
            {startDate} - {completionDate}
          </time>
        </h4>
      </div>

      {gpaOrSelectedCoursesExist && (
        <ul className={detailsCSS}>
          {gpa !== null && (
            <li className={gpaCSS}>
              <span>GPA:</span> {gpa.toFixed(1)}/4.0
            </li>
          )}

          {_rawSelectedCourses !== null && (
            <li className={coursesCSS}>
              <p>Highlighted Courses:</p>

              <ul className={courseDetailsCSS}>
                {_rawSelectedCourses.map((course, idx) => {
                  const { name, code, url } = course;

                  return (
                    <li
                      key={idx}
                      className={courseCSS}
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={courseLinkCSS}
                      >
                        {code} - {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Education;
