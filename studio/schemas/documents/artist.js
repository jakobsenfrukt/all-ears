export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'nationality',
      title: 'Nationality',
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
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
    },
    {
      name: 'concertStart',
      title: 'Concert start',
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
    },
  },
}
