import {queryOptions} from '@tanstack/react-query'

import {sanityClient} from './client'
import type {PortfolioData} from './types'

export const portfolioDataQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    artistName,
    initials,
    roleLabel,
    profileImage,
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
    stills,
    watchUrl,
    year,
    role,
    client
  }
}`

export async function fetchPortfolioData() {
  return sanityClient.fetch<PortfolioData>(portfolioDataQuery)
}

export const portfolioDataQueryOptions = queryOptions({
  queryKey: ['portfolioData'],
  queryFn: fetchPortfolioData,
  staleTime: 1000 * 60 * 5,
})
