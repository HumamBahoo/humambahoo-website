import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import { notFoundCSS, wrapperCSS, titleCSS, messageCSS, buttonCSS } from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={notFoundCSS}>
        <div className={wrapperCSS}>
          <h2 className={titleCSS}>404: Page Not Found</h2>
          <p className={messageCSS}>Sorry, the page you are looking for does not exist.</p>

          <Link
            to="/"
            className={buttonCSS}
          >
            Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Humam Bahoo - Not Found</title>;
