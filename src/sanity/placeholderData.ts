import type {FilmProject, Photo, SanityImage} from './types'

function placeholderImage(label: string, background = '151515', foreground = 'cfcfcf'): SanityImage {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
      <rect width="1200" height="1600" fill="#${background}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#${foreground}" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="8">${label}</text>
    </svg>
  `

  return {
    _type: 'image',
    alt: `${label} placeholder`,
    placeholderUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
  }
}

function widePlaceholderImage(label: string, background = '151515', foreground = 'cfcfcf'): SanityImage {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
      <rect width="1600" height="900" fill="#${background}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#${foreground}" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="8">${label}</text>
    </svg>
  `

  return {
    _type: 'image',
    alt: `${label} placeholder`,
    placeholderUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
  }
}

export const placeholderPhotos: Photo[] = Array.from({length: 8}, (_, index) => ({
  _id: `placeholder-photo-${index + 1}`,
  title: `Photo ${index + 1}`,
  image: placeholderImage(`PHOTO ${index + 1}`, index % 2 === 0 ? '151515' : '2a2a2a'),
}))

export const placeholderFilms: FilmProject[] = [
  {
    _id: 'placeholder-film-1',
    title: 'Sample Film Project',
    description:
      'This is placeholder content showing how a film project will appear once real Sanity content is added.',
    coverImage: widePlaceholderImage('COVER'),
    stills: [
      widePlaceholderImage('STILL 1', '202020'),
      widePlaceholderImage('STILL 2', '2a2a2a'),
      widePlaceholderImage('STILL 3', '343434'),
    ],
    watchUrl: 'https://vimeo.com/',
    year: 2026,
    role: 'Director',
    client: 'Sample Client',
  },
]

export function shouldUseDevPlaceholders() {
  return import.meta.env.DEV
}
