// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')
const webpack = require('webpack')
const clientConfig = require('./client-config')

module.exports = function(api) {
  // Set from the Settings document in createManagedPages below.
  // Stays false until then, so artists are hidden if the value can't be read.
  let showArtists = false

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })

  // When showArtists is off, don't generate the artist and event pages at all.
  // The value is read at build time, so changing it requires a rebuild.
  api.createManagedPages(({ getCollection, removePagesByComponent }) => {
    const general = getCollection('SanityGeneral').findNode({ id: 'general' })
    showArtists = Boolean(general && general.showArtists)

    if (showArtists) return

    removePagesByComponent('src/pages/Artists.vue')
    removePagesByComponent('src/templates/SanityArtist.vue')
    removePagesByComponent('src/templates/SanityEvent.vue')
  })

  // A v-if only stops Lineup from rendering: its static query results would
  // still be compiled into the public JS. Swap it for an empty component
  // so the lineup data never ends up in the bundle.
  api.chainWebpack(config => {
    if (showArtists) return

    config
      .plugin('hide-lineup')
      .use(webpack.NormalModuleReplacementPlugin, [
        /components\/Lineup(\.vue)?$/,
        path.resolve(__dirname, 'src/components/LineupHidden.vue')
      ])
  })

  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })
}
