import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      description: 'The full name displayed on the homepage. Example: Andrew Perez.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials / Logo Text',
      description: 'Short text shown in the top-left navigation. Keep this short, usually 2–4 characters.',
      type: 'string',
      validation: (rule) => rule.required().max(8),
    }),
    defineField({
      name: 'roleLabel',
      title: 'Role Label',
      type: 'string',
      description: 'Short description shown near the homepage profile image. Example: Filmmaker / Photographer.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      description: 'Portrait/profile image shown on the homepage. Vertical or square images work best.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Describe the profile image for accessibility. Example: Portrait of Andrew Perez.',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      description: 'Optional browser favicon. Accepted formats: .ico, .png, .svg, .gif, .jpg, or .webp.',
      type: 'file',
      options: {
        accept: '.ico,.png,.svg,.gif,.jpg,.jpeg,.webp,image/x-icon,image/vnd.microsoft.icon,image/png,image/svg+xml,image/gif,image/jpeg,image/webp',
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      description: 'Email address shown in the contact section.',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      description: 'Full Instagram profile link, including https://.',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      description: 'Full YouTube channel/profile link, including https://.',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {
      title: 'artistName',
      subtitle: 'roleLabel',
      media: 'profileImage',
    },
  },
})
