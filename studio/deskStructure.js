import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  !['general', 'artist', 'venue', 'about'].includes(listItem.getId())

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
        .title('Artists')
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Venues')
        .schemaType('venue')
        .child(S.documentTypeList('venue').title('Venues')),
      S.listItem()
        .title('Practical info')
        .child(
          S.editor()
            .title('Practical info')
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
