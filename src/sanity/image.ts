import imageUrlBuilder from '@sanity/image-url'

import {sanityClient} from './client'
import type {SanityImage} from './types'

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source: SanityImage) {
  return builder?.image(source).auto('format').fit('max')
}

export function imageUrl(source: SanityImage, width: number, quality = 85) {
  if (source.placeholderUrl) {
    return source.placeholderUrl
  }

  return urlForImage(source)?.width(width).quality(quality).url() ?? ''
}

export function imageSrcSet(source: SanityImage, widths: number[], quality = 82) {
  if (source.placeholderUrl || !builder) {
    return undefined
  }

  return widths
    .map((width) => `${imageUrl(source, width, quality)} ${width}w`)
    .join(', ')
}
