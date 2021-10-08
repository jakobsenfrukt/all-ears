export default {
  name: 'about',
  type: 'document',
  title: 'Practical info',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'lead',
      title: 'Intro',
      type: 'lead'
    },
    {
      name: 'practical',
      title: 'Practical',
      type: 'body',
    },
    {
      name: 'about',
      title: 'About',
      type: 'body',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'body',
    }
  ]
}
