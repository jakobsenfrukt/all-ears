import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {structure} from './deskStructure.js'
import {schemaTypes} from './schemas/schema.js'

export default defineConfig({
  name: 'default',
  title: 'all-ears',
  projectId: 'cn8daclv',
  dataset: 'production',
  plugins: [structureTool({structure}), ...(isDev ? [visionTool()] : [])],
  schema: {
    types: schemaTypes,
  },
})
