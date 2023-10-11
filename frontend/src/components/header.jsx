import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>
            H<span>B</span>
          </h1>
        </Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
