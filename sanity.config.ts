import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {ClientGuide} from './sanity/components/ClientGuide'
import {schemaTypes} from './sanity/schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'replace-with-your-project-id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'andrew-portfolio',
  title: 'Andrew Portfolio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Client Guide').child(S.component(ClientGuide).title('Client Guide')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings'),
              ),
            S.divider(),
            orderableDocumentListDeskItem({
              type: 'photo',
              title: 'Photos',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'filmProject',
              title: 'Film Projects',
              S,
              context,
            }),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
