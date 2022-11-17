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
    },
    {
      name: 'festivalpass',
      title: 'Festival pass',
      type: 'ticketItem',
    },
    {
      title: 'Day passes',
      name: 'daypasses',
      type: 'array',
      of: [{
        name: 'ticketItem',
        type: 'ticketItem',
      }],
    }
  ]
}
