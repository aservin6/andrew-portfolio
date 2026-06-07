const youtubeWatchPattern = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
const youtubeShortsPattern = /youtube\.com\/shorts\/([^&?/]+)/
const vimeoPattern = /vimeo\.com\/(?:.*\/)?(\d+)/

export function getVideoEmbedUrl(url: string) {
  const youtubeMatch = url.match(youtubeWatchPattern) ?? url.match(youtubeShortsPattern)

  if (youtubeMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  const vimeoMatch = url.match(vimeoPattern)

  if (vimeoMatch?.[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  return null
}
