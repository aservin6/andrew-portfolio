import {queryOptions} from '@tanstack/react-query'

import {hasSanityConfig, sanityClient} from './client'
import type {PortfolioData} from './types'

export const portfolioDataQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    artistName,
    initials,
    roleLabel,
    profileImage,
    favicon{
      asset->{
        url,
        mimeType,
        originalFilename
      }
    },
    contactEmail,
    instagramUrl,
    youtubeUrl
  },
  "photos": *[_type == "photo" && published == true] | order(orderRank){
    _id,
    title,
    image,
    caption
  },
  "films": *[_type == "filmProject" && published == true] | order(orderRank){
    _id,
    title,
    description,
    coverImage,
    videos,
    watchUrl,
    year,
    role,
    client
  }
}`

export async function fetchPortfolioData() {
  if (!hasSanityConfig || !sanityClient) {
    return {settings: null, photos: [], films: []}
  }

  return sanityClient.fetch<PortfolioData>(portfolioDataQuery)
}

export const portfolioDataQueryOptions = queryOptions({
  queryKey: ['portfolioData'],
  queryFn: fetchPortfolioData,
  staleTime: 1000 * 60 * 5,
})
