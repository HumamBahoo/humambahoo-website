import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          H<span>B</span>
        </h1>
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </header>
  );
};

export default Header;
