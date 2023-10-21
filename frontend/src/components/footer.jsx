import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

import {
  footerCSS,
  wrapperCSS,
  emailBtnCSS,
  emailIconCSS,
  otherDetailsCSS,
  socialCSS,
  socialIconCSS,
  techCSS,
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
    <footer className={footerCSS}>
      <div className={wrapperCSS}>
        <a
          href={`mailto:${email}`}
          className={emailBtnCSS}
        >
          Email Me <MdEmail className={emailIconCSS} />
        </a>

        <div className={socialCSS}>
          <nav>
            <a
              href="https://www.github.com/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className={socialIconCSS} />
            </a>
            <a
              href="https://www.youtube.com/@humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare className={socialIconCSS} />
            </a>

            <a
              href="https://www.linkedin.com/in/humambahoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={socialIconCSS} />
            </a>
          </nav>
        </div>

        <div className={otherDetailsCSS}>
          <div className={techCSS}>
            <p>
              Built with <span>Gatsby</span> | Styled with <span>Sass</span> | Hosted on <span>Netlify</span>
            </p>
          </div>

          <div className={copyrightsCSS}>
            <p>
              © {new Date().getFullYear()} <span>{siteTitle}</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
