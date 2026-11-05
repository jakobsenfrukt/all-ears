import HomeIcon from '@sanity/icons/Home'
import CogIcon from '@sanity/icons/Cog'
import MicrophoneIcon from '@sanity/icons/Microphone'
import CalendarIcon from '@sanity/icons/Calendar'
import InfoOutlineIcon from '@sanity/icons/InfoOutline'
import TagIcon from '@sanity/icons/Tag'

const hiddenDocTypes = listItem =>
  !['general', 'artist', 'event', 'about', 'frontpage', 'tickets'].includes(listItem.getId())

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.editor()
            .title('Settings')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Front page')
        .icon(HomeIcon)
        .child(
          S.editor()
            .title('Front page')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Artists')
        .icon(MicrophoneIcon)
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Other events')
        .icon(CalendarIcon)
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Info')
        .icon(InfoOutlineIcon)
        .child(
          S.editor()
            .title('Info')
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Tickets')
        .icon(TagIcon)
        .child(
          S.editor()
            .title('Tickets')
            .id('tickets')
            .schemaType('tickets')
            .documentId('tickets')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
