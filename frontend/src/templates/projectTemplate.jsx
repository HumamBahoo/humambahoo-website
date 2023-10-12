import React from "react";

import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";

import { Link } from "gatsby";

import { MdArrowBack } from "react-icons/md";

import { FaExternalLinkAlt, FaGitAlt } from "react-icons/fa";

import {
  containerCSS,
  backButtonCSS,
  contentCSS,
  introCSS,
  summaryCSS,
  descriptionCSS,
  technologiesCSS,
  technologyCSS,
  basicInfoCSS,
  linksCSS,
  gitButtonCSS,
  liveUrlButtonCSS,
  projectImageCSS,
  portableTextCSS,
  videoCSS,
  tagsCSS,
  tagCSS,
} from "./projectTemplate.module.scss";

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

  const date = new Date(pageContext.date).toLocaleString("default", {
    day: "2-digit",
    year: "numeric",
    month: "short",
  });

  let videoId;
  if (youtubeVideo) {
    videoId = youtubeVideo.split("?v=")[1];
  }

  return (
    <Layout>
      <div className={containerCSS}>
        {/* All Projects Button */}
        <Link
          to="/portfolio"
          className={backButtonCSS}
        >
          <MdArrowBack /> All Projects
        </Link>

        {/* Project Content */}
        <div className={contentCSS}>
          {/* Summary Info */}
          <div className={summaryCSS}>
            {/* Intro */}
            <div className={introCSS}>
              {/* Title */}
              <h3>{title}</h3>

              {/* Description */}
              <div className={descriptionCSS}>
                <p>{description}</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className={basicInfoCSS}>
              <p>
                {date} - {status}
              </p>

              {contributors.length > 0 && (
                <p>
                  By{" "}
                  {contributors.map((contributor, idx) => {
                    if (contributors.length === idx + 1) {
                      return <span key={idx}>and {contributor}</span>;
                    } else {
                      return <span key={idx}>{contributor}, </span>;
                    }
                  })}
                </p>
              )}
            </div>

            {/* Links */}
            <div className={linksCSS}>
              {/* Repo */}
              <a
                href={repositoryUrl}
                className={gitButtonCSS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo URL
                <FaGitAlt />
              </a>

              {/* Live URL */}
              {liveUrl && (
                <a
                  href={liveUrl}
                  className={liveUrlButtonCSS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live URL
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>

            {/* Tech */}
            <div className={technologiesCSS}>
              {technologiesUsed.map((technology, idx) => (
                <p
                  key={idx}
                  className={technologyCSS}
                >
                  {technology}
                </p>
              ))}
            </div>

            {/* Project Image */}
            <div className={projectImageCSS}>
              <GatsbyImage
                image={image}
                alt={`${title} - Image`}
              />
            </div>
          </div>

          {/* Project Details */}
          {body && (
            <div className={portableTextCSS}>
              <PortableText value={body} />
            </div>
          )}

          {/* Project Video */}
          {videoId && (
            <div className={videoCSS}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen="allowfullscreen"
              />
            </div>
          )}

          {/* Challenges */}
          {challenges && <p>{challenges}</p>}

          {/* Learning  */}
          {keyLearnings && <p>{keyLearnings}</p>}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className={tagsCSS}>
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className={tagCSS}
              >
                #{tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
