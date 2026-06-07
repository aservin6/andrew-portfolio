import type { RefObject } from "react";

import { imageSrcSet, imageUrl } from "@/sanity/image";
import type { FilmProject, FilmVideo } from "@/sanity/types";

export default function FilmVideoCarousel({
  carouselRef,
  film,
  selectedVideo,
  videos,
  onSelect,
}: {
  carouselRef: RefObject<HTMLDivElement | null>;
  film: FilmProject;
  selectedVideo: FilmVideo;
  videos: FilmVideo[];
  onSelect: (video: FilmVideo, tab: HTMLButtonElement) => void;
}) {
  return (
    <div
      ref={carouselRef}
      className="flex gap-1.5 overflow-x-auto pb-2 text-xs font-bold [scrollbar-width:thin]"
    >
      {videos.map((video, index) => (
        <FilmVideoTab
          key={video._key ?? `${video.url}-${index}`}
          fallbackThumbnail={film.coverImage}
          index={index}
          isSelected={video.url === selectedVideo.url}
          video={video}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function FilmVideoTab({
  fallbackThumbnail,
  index,
  isSelected,
  video,
  onSelect,
}: {
  fallbackThumbnail: FilmProject["coverImage"];
  index: number;
  isSelected: boolean;
  video: FilmVideo;
  onSelect: (video: FilmVideo, tab: HTMLButtonElement) => void;
}) {
  const thumbnail = video.thumbnail ?? fallbackThumbnail;

  return (
    <button
      type="button"
      className={`group min-w-44 overflow-hidden border-2 text-left tracking-tighter uppercase transition-colors sm:min-w-56 lg:min-w-64 ${
        isSelected
          ? "border-background bg-background text-foreground"
          : "border-foreground bg-foreground text-background hover:border-background hover:bg-background hover:text-foreground"
      }`}
      onClick={(event) => onSelect(video, event.currentTarget)}
    >
      <span className="flex min-h-0 items-end justify-between gap-3 p-2">
        <span className="text-accent text-[0.625rem] font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate text-right text-xs leading-none sm:text-sm">
          {video.title}
        </span>
      </span>
      <span className="bg-foreground block aspect-video w-full overflow-hidden">
        <img
          src={imageUrl(thumbnail, 500)}
          srcSet={imageSrcSet(thumbnail, [280, 400, 560, 720])}
          sizes="(min-width: 64rem) 16rem, 14rem"
          alt={thumbnail.alt}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
            isSelected ? "opacity-100" : "opacity-70 grayscale"
          }`}
          loading="lazy"
          decoding="async"
        />
      </span>
    </button>
  );
}
