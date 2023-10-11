import React from "react";

import { Link, graphql, useStaticQuery } from "gatsby";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

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
      <a href={`mailto:${email}`}>
        Email Me <MdEmail />
      </a>

      <div>
        <h2>Quick Links</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
      </div>

      <div>
        <h2>Find Me</h2>

        <nav>
          <a
            href="https://www.github.com/humambahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.youtube.com/@humambahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutubeSquare />
          </a>

          <a
            href="https://www.linkedin.com/in/humambahoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </nav>

        <p>
          Built with <span>Gatsby</span> | Styled with <span>Tailwind CSS</span> | Hosted on <span>Netlify</span>
        </p>
      </div>

      <p>
        © {new Date().getFullYear()} <span>{siteTitle}</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
