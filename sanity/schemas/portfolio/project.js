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
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'A representative image of the project.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('An image is required.'),
    },
    {
      name: 'youtubeVideo',
      title: 'YouTube Video',
      type: 'url',
      description: 'A YouTube video URL demonstration for the project.',
      validation: (Rule) =>
        Rule.custom((url) => {
          let isValidUrl = true
          let errorMsg = null

          // If URL is not empty it should be a valid URL for a youtube video:
          if (url) {
            try {
              const urlObj = new URL(url)

              if (urlObj.hostname !== 'www.youtube.com') {
                isValidUrl = false
                errorMsg = 'Not a valid YouTube URL.'
              } else if (!urlObj.searchParams.get('v') || urlObj.pathname !== '/watch') {
                isValidUrl = false
                errorMsg = 'Not a valid YouTube URL for a video.'
              }

              isValidUrl = true
            } catch (err) {
              isValidUrl = false
            }
          }

          return errorMsg == null ? isValidUrl : errorMsg
        }),
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
      name: 'body',
      title: 'Body',
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
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Relevant tags related to the project.',
      options: {layout: 'tags'},
    },
    {
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Names of contributors or team members.',
      options: {layout: 'tags'},
    },

    {
      name: 'challenges',
      title: 'Challenges',
      type: 'text',
      description: 'Challenges have been faced during this project and how they were addressed.',
    },
    {
      name: 'keyLearnings',
      title: 'Key Learnings',
      type: 'text',
      description: 'Key learnings or takeaways from the project.',
    },
  ],
}
