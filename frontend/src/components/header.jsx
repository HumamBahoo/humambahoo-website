import React from "react";
import { Link } from "gatsby";

import { containerCSS, navbarCSS, logoCSS } from "./header.module.scss";

const Header = () => {
  return (
    <header className={containerCSS}>
      <div className={logoCSS}>
        <Link to="/">
          <h1>
            H<span>B</span>
          </h1>
        </Link>
      </div>

      <nav className={navbarCSS}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
