// schemas/about/language.js

export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      validation: (Rule) => Rule.required().error('A language is required.'),
    },
    {
      name: 'proficiency',
      title: 'Proficiency',
      type: 'string',
      options: {
        list: [
          {title: 'Elementary Proficiency', value: 'Elementary Proficiency'},
          {title: 'Limited Working Proficiency', value: 'Limited Working Proficiency'},
          {title: 'Professional Working Proficiency', value: 'Professional Working Proficiency'},
          {title: 'Full Professional Proficiency', value: 'Full Professional Proficiency'},
          {title: 'Native or Bilingual Proficiency', value: 'Native or Bilingual Proficiency'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('A proficiency level is required.'),
    },
  ],
}
