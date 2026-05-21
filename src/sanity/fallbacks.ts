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
  const [firstName, ...rest] = artistName.trim().split(/\s+/)

  return {
    firstName: firstName || fallbackSiteSettings.artistName.split(' ')[0],
    remainingName: rest.join(' ') || fallbackSiteSettings.artistName.split(' ')[1],
  }
}

export function emailHref(email: string) {
  return email === '#' ? '#' : `mailto:${email}`
}
