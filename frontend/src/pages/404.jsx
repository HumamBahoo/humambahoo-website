import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import { containerCSS, messageCSS, linkCSS } from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={containerCSS}>
        <div className={messageCSS}>
          <h2>404: Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>

        <Link
          to="/"
          className={linkCSS}
        >
          Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
