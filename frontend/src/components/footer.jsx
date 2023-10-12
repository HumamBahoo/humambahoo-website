import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

import {
  containerCSS,
  quickLinksCSS,
  emailButtonCSS,
  iconCSS,
  findMeCSS,
  technologiesCSS,
  copyrightsCSS,
} from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          siteTitle
          email
        }
      }
    }
  `);

  const { siteTitle, email } = data.site.siteMetadata;

  return (
    <footer>
      <div className={containerCSS}>
        <a
          href={`mailto:${email}`}
          className={emailButtonCSS}
        >
          Email Me <MdEmail className={iconCSS} />
        </a>

        <div className={quickLinksCSS}>
          <h2>Quick Links</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>

        <div className={findMeCSS}>
          <h2>Find Me</h2>

          <nav>
            <a
              href="https://www.github.com/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className={iconCSS} />
            </a>
            <a
              href="https://www.youtube.com/@humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare className={iconCSS} />
            </a>

            <a
              href="https://www.linkedin.com/in/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={iconCSS} />
            </a>
          </nav>
        </div>

        <div className={technologiesCSS}>
          <p>
            Built with <span>Gatsby</span> | Styled with <span>Sass</span> | Hosted on <span>Netlify</span>
          </p>
        </div>
      </div>
      <div className={copyrightsCSS}>
        <p>
          © {new Date().getFullYear()} <span>{siteTitle}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
