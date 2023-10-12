import React from "react";
import Header from "./header";
import Footer from "./footer";

import { containerCSS, wrapperCSS } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={containerCSS}>
      <Header />

      <div className={wrapperCSS}>
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
