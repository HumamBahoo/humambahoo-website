import React from "react";

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
    <div>
      <h3>
        {program}, {degree}
      </h3>

      <h4>
        {school} - {location}
      </h4>

      <h4>
        <time>
          {startDate} - {completionDate}
        </time>
      </h4>

      {gpaOrSelectedCoursesExist && (
        <ul>
          {gpa !== null && <li>GPA: {gpa.toFixed(1)}/4.0</li>}

          {_rawSelectedCourses !== null && (
            <li>
              Highlighted Courses:
              <ul>
                {_rawSelectedCourses.map((course, idx) => {
                  const { name, code, url } = course;

                  return (
                    <li key={idx}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {code}
                      </a>
                      {` - ${name}`}
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
