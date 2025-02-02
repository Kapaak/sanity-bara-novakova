import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {csCZLocale} from '@sanity/locale-cs-cz'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'bara-novakova',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    structureTool({
      structure,
    }),
    media(),
    visionTool(),
    csCZLocale(),
  ],

  schema: {
    types: schemaTypes,
  },
})
