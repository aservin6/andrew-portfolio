export type SanityImage = {
  _type: 'image'
  asset?: {
    _type: 'reference'
    _ref: string
  }
  alt: string
  crop?: unknown
  hotspot?: unknown
  placeholderUrl?: string
}

export type SanityFile = {
  asset?: {
    url: string
    mimeType?: string
    originalFilename?: string
  }
}

export type SiteSettings = {
  artistName: string
  initials: string
  roleLabel: string
  profileImage?: SanityImage
  favicon?: SanityFile
  contactEmail: string
  instagramUrl: string
  youtubeUrl: string
}

export type Photo = {
  _id: string
  title: string
  image: SanityImage
  caption?: string
}

export type FilmVideo = {
  _key?: string
  title: string
  url: string
  thumbnail?: SanityImage
  description?: string
  year?: number
  role?: string
  client?: string
}

export type FilmProject = {
  _id: string
  title: string
  description: string
  coverImage: SanityImage
  videos?: FilmVideo[]
  watchUrl: string
  year?: number
  role?: string
  client?: string
}

export type PortfolioData = {
  settings: SiteSettings | null
  photos: Photo[]
  films: FilmProject[]
}
