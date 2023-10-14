import React from "react";
import { Link } from "gatsby";

import { headerCSS, wrapperCSS, logoCSS, navCSS } from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerCSS}>
      <div className={wrapperCSS}>
        <div className={logoCSS}>
          <Link to="/">
            <h1>
              H<span>B</span>
            </h1>
          </Link>
        </div>

        <nav className={navCSS}>
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#portfolio">Portfolio</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
