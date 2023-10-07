const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/projectTemplate.jsx");

  const queryResults = await graphql(`
    //   TODO
  `);

  queryResults.data.projectsList.nodes.forEach((node) => {
    createPage({
      // TODO: add path, component, context
    });
  });
};
