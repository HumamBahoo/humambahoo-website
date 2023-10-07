// schemas/homepage.js

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required('A full name is required'),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: (Rule) => Rule.required('An introduction is required'),
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subTitle: 'introduction',
    },
  },
}
