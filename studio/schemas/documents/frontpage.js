export default {
  name: 'frontpage',
  type: 'document',
  title: 'Front page',
  fields: [
    {
      name: 'lineup',
      type: 'array',
      title: 'Lineup',
      of: [{
        type: 'reference',
        to: [
          {type: 'artist'}
        ]
      }],
      validation: Rule => Rule.unique()
    },
    {
      title: 'Social sharing image',
      name: 'ogimg',
      type: 'image'
    }
  ]
}
