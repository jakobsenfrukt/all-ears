export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {value: 'smallears', title: 'Small Ears'},
          {value: 'talks', title: 'All Ears Talks'}
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('Slug is a required field. Click the Generate button to create a slug.')
    },
    {
      name: 'startTime',
      title: 'Start time',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'bodyEn',
      title: 'English description',
      type: 'body',
    },
    {
      name: 'bodyNo',
      title: 'Norwegian description',
      type: 'body',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category'
    },
  },
}
