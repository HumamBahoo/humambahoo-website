// schema/about/education/index.js

export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: (Rule) => Rule.required().error('A school is required.'),
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (Rule) => Rule.required().error('A degree is required.'),
    },
    {
      name: 'program',
      title: 'Program',
      type: 'string',
      validation: (Rule) => Rule.required().error('A program is required.'),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('A start date is required.'),
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('A completion date is required.'),
    },
    {
      name: 'gpa',
      title: 'GPA',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('A location is required.'),
    },
    {
      name: 'selectedCourses',
      title: 'Selected Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'course'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'program',
      subtitle: 'school',
    },
  },
}
