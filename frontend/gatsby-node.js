const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/projectTemplate.jsx");

  const queryResults = await graphql(`
    query PortfolioPage($maxDepth: Int = 2) {
      projectsList: allSanityProject {
        nodes {
          title
          slug {
            current
          }
          description
          technologiesUsed
          _rawProjectDetails(resolveReferences: { maxDepth: $maxDepth })
          liveUrl
          repositoryUrl
          status
          date
          _updatedAt
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
        technologiesUsed: node.technologiesUsed,
        projectDetails: node._rawProjectDetails,
        liveUrl: node.liveUrl,
        repositoryUrl: node.repositoryUrl,
        status: node.status,
        date: node.date,
        _updatedAt: node._updatedAt,
      },
    });
  });
};
