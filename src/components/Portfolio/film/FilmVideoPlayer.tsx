import { getVideoEmbedUrl } from "@/lib/videoEmbed";
import { imageSrcSet, imageUrl } from "@/sanity/image";
import type { FilmProject, FilmVideo } from "@/sanity/types";

export default function FilmVideoPlayer({
  film,
  selectedVideo,
}: {
  film: FilmProject;
  selectedVideo: FilmVideo;
}) {
  const embedUrl = getVideoEmbedUrl(selectedVideo.url);

  return (
    <div className="bg-foreground text-background aspect-video w-full overflow-hidden">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={`${selectedVideo.title} video player`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <img
          src={imageUrl(film.coverImage, 1200)}
          srcSet={imageSrcSet(film.coverImage, [640, 900, 1200, 1600, 2000])}
          sizes="(min-width: 72rem) 72rem, 100vw"
          alt={film.coverImage.alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
