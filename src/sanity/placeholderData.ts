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
    watchUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videos: [
      {
        title: 'Main Film',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: widePlaceholderImage('VIDEO 01', '202020'),
        description: 'The primary cut selected for the portfolio feature.',
        year: 2026,
        role: 'Director',
        client: 'Sample Client',
      },
      {
        title: 'Director Cut',
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
        thumbnail: widePlaceholderImage('VIDEO 02', '2a2a2a'),
        description: 'An alternate edit highlighting pacing, mood, and extended visual sequences.',
        year: 2026,
        role: 'Director / Editor',
        client: 'Sample Client',
      },
      {
        title: 'Behind The Scenes',
        url: 'https://vimeo.com/76979871',
        thumbnail: widePlaceholderImage('VIDEO 03', '343434'),
        description: 'A process-focused companion video with production context and on-set moments.',
        year: 2025,
        role: 'Cinematographer',
        client: 'Production Sample',
      },
      ...Array.from({length: 9}, (_, index) => ({
        title: `Archive Cut ${index + 4}`,
        url: index % 2 === 0 ? 'https://www.youtube.com/watch?v=ysz5S6PUM-U' : 'https://vimeo.com/76979871',
        thumbnail: widePlaceholderImage(`VIDEO ${String(index + 4).padStart(2, '0')}`, index % 2 === 0 ? '202020' : '2a2a2a'),
        description: `Placeholder selector item ${index + 4} to test larger video collections.`,
        year: 2026,
        role: 'Filmmaker',
        client: 'Sample Client',
      })),
    ],
    year: 2026,
    role: 'Director',
    client: 'Sample Client',
  },
]

export function shouldUseDevPlaceholders() {
  return import.meta.env.DEV
}
