export default {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'social',
      type: 'social',
      title: 'Social'
    }
  ]
}
