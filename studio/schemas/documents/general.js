export default {
  name: 'general',
  type: 'document',
  title: 'Settings',
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
      name: 'showArtists',
      type: 'boolean',
      title: 'Show artists and events',
      description: 'If this is switched off, the program (including all artists and events) are hidden and only the teaser and info page is shown.'
    },
    {
      name: 'social',
      type: 'social',
      title: 'Social'
    }
  ],
  preview: {
    select: {},
    prepare() {
      return { title: "Settings" };
    },
  },
}
