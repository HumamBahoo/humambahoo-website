import React from "react";

import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";

const ProjectTemplate = ({ pageContext }) => {
  const {
    title,
    description,
    image,
    youtubeVideo,
    technologiesUsed,
    body,
    liveUrl,
    repositoryUrl,
    status,
    tags,
    contributors,
    challenges,
    keyLearnings,
  } = pageContext;

  const videoId = youtubeVideo.split("?v=")[1];

  const date = new Date(pageContext.date).toLocaleString("default", { year: "numeric", month: "short" });

  return (
    <Layout>
      <div style={{ backgroundColor: "whitesmoke", border: "1px solid black" }}>
        <h3>{title}</h3>

        <div>
          <p>{description}</p>
          <p>Status: {status}</p>
          <p>Date: {date}</p>
        </div>

        <div>
          <a href={liveUrl}>Live URL</a> | <a href={repositoryUrl}>Repo URL</a>
        </div>

        <GatsbyImage
          image={image}
          alt={`${title} - Image`}
          style={{ width: 300 }}
        />

        <div>
          <h4>Technologies Used: </h4>
          <ul>
            {technologiesUsed.map((technology, idx) => (
              <li key={idx}>{technology}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Tags: </h4>
          <ul>
            {tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contributors: </h4>
          <ul>
            {contributors.map((contributor, idx) => (
              <li key={idx}>{contributor}</li>
            ))}
          </ul>
        </div>

        <PortableText value={body} />

        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="allowfullscreen"
          />
        </div>

        <div>
          <h4>Challenges</h4>
          <p>{challenges}</p>
        </div>

        <div>
          <h4>Learnings</h4>
          <p>{keyLearnings}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
