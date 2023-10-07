if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    // title, url, desc
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
