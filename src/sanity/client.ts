import {createClient} from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID

export const hasSanityConfig = Boolean(projectId)

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
      apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-05-20',
      useCdn: true,
    })
  : null

