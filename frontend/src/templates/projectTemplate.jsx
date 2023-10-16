import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { MdArrowBack } from "react-icons/md";
import { FaExternalLinkAlt, FaGitAlt } from "react-icons/fa";
import { PortableText } from "@portabletext/react";

import {
  projectTemplateCSS,
  arrowBackCSS,
  projectIntroCSS,
  titleCSS,
  descCSS,
  statusCSS,
  techUsedCSS,
  techCSS,
  urlsCSS,
  repoUrlCSS,
  liveSiteUrlCSS,
  linkIconCSS,
  gitIconCSS,
  projectDetailsCSS,
  imageCSS,
  linkCSS,
  ulCSS,
  olCSS,
} from "./projectTemplate.module.scss";

const portableTextComponent = {
  types: {
    image: ({ value }) => (
      <div
        className={imageCSS}
        style={{
          backgroundImage: `url(${value.asset.url})`,
          backgroundPosition: `${value.hotspot.x * 100}% ${value.hotspot.y * 100}%`,
        }}
      >
        <img
          src={value.asset.url}
          alt={value.altText || "Descriptive Image"}
          style={{ visibility: "hidden", position: "absolute" }}
        />
      </div>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href.startsWith("http") ? value.href : `https://${value.href}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkCSS}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={ulCSS}>{children}</ul>,
    number: ({ children }) => <ol className={olCSS}>{children}</ol>,
  },
};

const ProjectTemplate = ({ pageContext }) => {
  const { title, description, technologiesUsed, projectDetails, liveUrl, repositoryUrl, status } = pageContext;

  const date = new Date(pageContext.date).toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const updatedAt = new Date(pageContext._updatedAt).toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Layout>
      <div className={projectTemplateCSS}>
        {/* back to */}
        <Link
          to={"/#portfolio"}
          className={arrowBackCSS}
        >
          <MdArrowBack /> Back to portfolio
        </Link>

        {/* project introduction */}
        <div className={projectIntroCSS}>
          <h3 className={titleCSS}>{title}</h3>

          <p className={descCSS}>{description}</p>

          <div className={statusCSS}>
            <p>
              {status} - Published on {date} - Updated on {updatedAt}
            </p>
          </div>

          <div className={techUsedCSS}>
            {technologiesUsed.map((tech, idx) => (
              <p
                key={idx}
                className={techCSS}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        {/* url buttons */}
        <div className={urlsCSS}>
          {liveUrl && (
            <a
              href={liveUrl}
              className={liveSiteUrlCSS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
              <FaExternalLinkAlt className={linkIconCSS} />
            </a>
          )}

          {repositoryUrl && (
            <a
              href={repositoryUrl}
              className={repoUrlCSS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo URL
              <FaGitAlt className={gitIconCSS} />
            </a>
          )}
        </div>

        {/* project details */}
        {projectDetails && (
          <div className={projectDetailsCSS}>
            <PortableText
              value={projectDetails}
              components={portableTextComponent}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const Head = ({ pageContext }) => <title>Humam Bahoo - {pageContext.title}</title>;
