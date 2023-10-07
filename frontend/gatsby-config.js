const isProd = process.env.NODE_ENV;

if (isProd !== "production") {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    // title, url, desc
  },
  plugins: [
    // gatsby plugins
  ],
};
