import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: `${process.env.SANITY_STUDIO_DATASET_PRODUCTION}-workspace`,
    title: 'Production Workspace',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_PRODUCTION,
    basePath: `/${process.env.SANITY_STUDIO_DATASET_PRODUCTION}`,

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: `${process.env.SANITY_STUDIO_DATASET_DEVELOPMENT}-workspace`,
    title: 'Development Workspace',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_DEVELOPMENT,
    basePath: `/${process.env.SANITY_STUDIO_DATASET_DEVELOPMENT}`,

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
])
