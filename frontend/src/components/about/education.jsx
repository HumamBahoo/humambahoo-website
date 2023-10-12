import React from "react";

import { containerCSS, periodsCSS, linkCSS, detailsCSS, gpaCSS, coursesCSS } from "./education.module.scss";

const Education = ({ data }) => {
  const { school, degree, program, gpa, location, _rawSelectedCourses } = data;

  const startDate = new Date(data.startDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
  });

  const completionDate = new Date(data.completionDate).toLocaleString("default", {
    year: "numeric",
    month: "short",
  });

  const gpaOrSelectedCoursesExist = gpa !== null || _rawSelectedCourses !== null;

  return (
    <div className={containerCSS}>
      <h3>
        {program}, {degree}
      </h3>

      <h4>
        {school} - {location}
      </h4>

      <h4 className={periodsCSS}>
        <time>
          {startDate} - {completionDate}
        </time>
      </h4>

      {gpaOrSelectedCoursesExist && (
        <ul className={detailsCSS}>
          {gpa !== null && (
            <li className={gpaCSS}>
              <span>GPA:</span> {gpa.toFixed(1)}/4.0
            </li>
          )}

          {_rawSelectedCourses !== null && (
            <li className={coursesCSS}>
              <p>
                <span>Highlighted Courses:</span>
              </p>

              <ul>
                {_rawSelectedCourses.map((course, idx) => {
                  const { name, code, url } = course;

                  return (
                    <li key={idx}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkCSS}
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
