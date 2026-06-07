import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const filmProject = defineType({
  name: 'filmProject',
  title: 'Film Project',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'filmProject'}),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The film or project title shown on the website.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Short description/details shown under the project title.',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description: 'Main large image for this film project. Wide/landscape images work best.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Required accessibility description for the cover image.',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'watchUrl',
      title: 'Watch URL',
      type: 'url',
      description: 'Paste the full YouTube, Vimeo, or external watch link. Videos are not uploaded directly here.',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'videos',
      title: 'Additional Videos',
      description:
        'Optional video links shown as selectable items below the main player. Paste full YouTube or Vimeo URLs.',
      type: 'array',
      of: [
        defineField({
          name: 'video',
          title: 'Video',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail / Still Image',
              description: 'Still image shown in the video selector tab. Wide/landscape images work best.',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'number',
              validation: (rule) => rule.integer().min(1900).max(2100),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'client',
              title: 'Client',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
              media: 'thumbnail',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'year',
      title: 'Year',
      description: 'Optional project year. Example: 2024.',
      type: 'number',
      validation: (rule) => rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Optional role. Examples: Director, Cinematographer, Editor, Director / DP.',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      description: 'Optional client, brand, artist, or organization connected to the project.',
      type: 'string',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Turn this on to show the film project on the live website. Turn it off to hide it without deleting it.',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'role',
      media: 'coverImage',
    },
  },
})
