const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/projectTemplate.jsx");

  const queryResults = await graphql(`
    query PortfolioPage {
      projectsList: allSanityProject {
        nodes {
          title
          slug {
            current
          }
          description
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          youtubeVideo
          technologiesUsed
          _rawBody
          liveUrl
          repositoryUrl
          status
          date
          tags
          contributors
          challenges
          keyLearnings
        }
      }
    }
  `);

  queryResults.data.projectsList.nodes.forEach((node) => {
    createPage({
      // path to page
      path: `/portfolio/${node.slug.current}`,
      // template to be used
      component: projectTemplate,
      // data to be injected into page as props
      context: {
        title: node.title,
        description: node.description,
        image: node.image.asset.gatsbyImageData,
        youtubeVideo: node.youtubeVideo,
        technologiesUsed: node.technologiesUsed,
        body: node._rawBody,
        liveUrl: node.liveUrl,
        repositoryUrl: node.repositoryUrl,
        status: node.status,
        date: node.date,
        tags: node.tags,
        contributors: node.contributors,
        challenges: node.challenges,
        keyLearnings: node.keyLearnings,
      },
    });
  });
};
