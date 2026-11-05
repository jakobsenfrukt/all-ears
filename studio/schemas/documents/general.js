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
      name: 'date',
      type: 'string',
      title: 'Festival date',
      descriptions: 'Displayed in the header on all pages.'
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
      description: 'If this is switched off, the program (including all artists and events) is hidden. Only the teaser text below is shown on the front page. Everything except info and social media is hidden from the menu.'
    },
    {
      name: 'teaserText',
      type: 'lead',
      title: 'Teaser text',
      description: 'Text shown on the front page if artists and events are hidden.'
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
