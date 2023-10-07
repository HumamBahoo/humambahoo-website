// schemas/about/skillsSet.js

export default {
  name: 'skillsSet',
  title: 'Skills Set',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required().error('A category is required.'),
    },
    {
      name: 'skillsList',
      title: 'Skills List',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).error('At least one skill is required.'),
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}
