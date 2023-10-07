import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  },
  graphql: [
    {
      id: process.env.SANITY_STUDIO_DATASET_PRODUCTION,
      workspace: `${process.env.SANITY_STUDIO_DATASET_PRODUCTION}-workspace`,
    },
    {
      id: process.env.SANITY_STUDIO_DATASET_DEVELOPMENT,
      workspace: `${process.env.SANITY_STUDIO_DATASET_DEVELOPMENT}-workspace`,
    },
  ],
})
