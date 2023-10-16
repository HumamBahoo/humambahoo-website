import React from "react";
import Header from "./header";
import Footer from "./footer";

import { layoutCSS, wrapperCSS, mainCSS } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div
      id="home"
      className={layoutCSS}
    >
      <Header />

      <main className={mainCSS}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
