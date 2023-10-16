// schemas/portfolio/project.js

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project',
      validation: (Rule) => Rule.required().error('A title is required.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title.',
      options: {source: 'title'},
      validation: (Rule) => Rule.required().error('A slug is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'A brief description of the project',
      validation: (Rule) => Rule.required().error('A description is required.'),
    },

    {
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of technologies and tools used in this project.',
      options: {layout: 'tags'},
      validation: (Rule) => Rule.required().error('Technologies used is required.'),
    },
    {
      name: 'projectDetails',
      title: 'Project Details',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'A detailed description about the project.',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'The URL where the project is hosted.',
    },
    {
      name: 'repositoryUrl',
      title: 'Repository URL',
      type: 'url',
      description: 'The URL to the project repository.',
      validation: (Rule) => Rule.required().error('A repository URL is required.'),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Current status of the project',
      options: {list: ['Completed', 'In Progress', 'On Hold', 'Planned']},
      validation: (Rule) => Rule.required().error('Project status must be set.'),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date the project has been published.',
      validation: (Rule) => Rule.required().error('A date must be entered.'),
    },
  ],
}
