import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'photo'}),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'A short internal name for this photo. This helps identify it in Sanity.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Upload the photo for the gallery. Portrait, landscape, and square images are all okay.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Required accessibility description. Example: Black and white studio portrait.',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      description: 'Optional note about the photo. This may be used later if captions/lightbox are added.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Turn this on to show the photo on the live website. Turn it off to hide it without deleting it.',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'image.alt',
      media: 'image',
    },
  },
})
