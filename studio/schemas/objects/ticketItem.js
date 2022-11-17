export default {
  name: 'ticketItem',
  type: 'object',
  title: 'Ticket item',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Link text',
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'Paste the full URL, including https:// etc.'
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price'
    },
  ]
}
