import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  !['general', 'artist', 'event', 'about', 'frontpage', 'tickets'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .child(
          S.editor()
            .title('General')
            .id('general')
            .schemaType('general')
            .documentId('general')
        ),
      S.listItem()
        .title('Front page')
        .child(
          S.editor()
            .title('Front page')
            .id('frontpage')
            .schemaType('frontpage')
            .documentId('frontpage')
        ),
      S.listItem()
        .title('Artists')
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Other events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Info')
        .child(
          S.editor()
            .title('Info')
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Tickets')
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
