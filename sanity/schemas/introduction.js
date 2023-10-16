// schemas/introduction.js

export default {
  name: 'introduction',
  title: 'Introduction',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required('A full name is required'),
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      validation: (Rule) => Rule.required('An about summary is required'),
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
