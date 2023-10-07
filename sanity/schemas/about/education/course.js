// schema/about/education/course.js

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      validation: (Rule) => Rule.required().error('A code is required.'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('A name is required.'),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'name',
    },
  },
}
