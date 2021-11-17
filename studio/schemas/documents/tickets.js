export default {
  name: 'tickets',
  type: 'document',
  title: 'Tickets',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'body',
      title: 'Content',
      type: 'body',
    }
  ]
}
