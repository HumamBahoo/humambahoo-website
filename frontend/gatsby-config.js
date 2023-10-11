if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    siteTitle: "Humam Bahoo",
    siteUrl: "https://www.humambahoo.com",
    siteDescription: "A personal portfolio website for Humam Bahoo",
    email: "humam.bahoo@gmail.com",
    linkedIn: `https://www.linkedin.com/in/HumamBahoo/`,
    gitHub: `https://www.github.com/HumamBahoo`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
  ],
};
