import React from "react";

const WorkExperience = ({ data }) => {
  const { jobTitle, jobType, location, employer, isPresent, achievements } = data;

  const startDate = new Date(data.startDate).toLocaleString("default", { year: "numeric", month: "short" });
  const endDate = new Date(data.endDate).toLocaleString("default", { year: "numeric", month: "short" });

  return (
    <div>
      <h3>
        {jobTitle}
        {jobType !== "Full-Time" && ` (${jobType})`}
      </h3>

      <h4>
        {employer} - {location}
      </h4>

      <h4>
        <time>
          {startDate} - {isPresent ? "Present" : endDate}
        </time>
      </h4>

      {achievements.length > 0 && (
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperience;
