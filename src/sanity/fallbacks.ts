import type {SiteSettings} from './types'

export const fallbackSiteSettings: SiteSettings = {
  artistName: 'Andrew Perez',
  initials: 'AP',
  roleLabel: 'Filmmaker / Photographer',
  contactEmail: 'example@gmail.com',
  instagramUrl: '#',
  youtubeUrl: '#',
}

export function getSiteSettings(settings?: SiteSettings | null) {
  return settings ?? fallbackSiteSettings
}

export function splitArtistName(artistName: string) {
  const nameParts = artistName.trim().split(/\s+/).filter(Boolean)

  return nameParts.length > 0 ? nameParts : fallbackSiteSettings.artistName.split(' ')
}

export function emailHref(email: string) {
  return email === '#' ? '#' : `mailto:${email}`
}
