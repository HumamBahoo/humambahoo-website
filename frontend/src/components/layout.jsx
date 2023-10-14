import React from "react";
import Header from "./header";
import Footer from "./footer";

import { layoutCSS, wrapperCSS, mainCSS } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layoutCSS}>
      <Header />

      <div className={wrapperCSS}>
        <main className={mainCSS}>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
