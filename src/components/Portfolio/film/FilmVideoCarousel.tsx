import type { RefObject } from "react";

import { imageSrcSet, imageUrl } from "@/sanity/image";
import type { FilmVideoItem } from "./filmUtils";

export default function FilmVideoCarousel({
  carouselRef,
  selectedItem,
  videos,
  onSelect,
}: {
  carouselRef: RefObject<HTMLDivElement | null>;
  selectedItem: FilmVideoItem;
  videos: FilmVideoItem[];
  onSelect: (item: FilmVideoItem, tab: HTMLButtonElement) => void;
}) {
  return (
    <div
      ref={carouselRef}
      className="flex gap-1.5 overflow-x-auto pb-2 text-xs font-bold [scrollbar-width:thin]"
    >
      {videos.map((item, index) => (
        <FilmVideoTab
          key={`${item.film._id}-${item.video._key ?? item.video.url}-${index}`}
          index={index}
          isSelected={
            item.film._id === selectedItem.film._id &&
            item.video.url === selectedItem.video.url
          }
          item={item}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function FilmVideoTab({
  index,
  isSelected,
  item,
  onSelect,
}: {
  index: number;
  isSelected: boolean;
  item: FilmVideoItem;
  onSelect: (item: FilmVideoItem, tab: HTMLButtonElement) => void;
}) {
  const thumbnail = item.video.thumbnail ?? item.film.coverImage;

  return (
    <button
      type="button"
      className={`group w-44 shrink-0 overflow-hidden border-2 text-left tracking-tighter uppercase transition-colors sm:w-56 lg:w-64 ${
        isSelected
          ? "border-foreground bg-foreground/15 text-foreground"
          : "border-foreground text-foreground hover:bg-foreground/10 bg-transparent"
      }`}
      onClick={(event) => onSelect(item, event.currentTarget)}
    >
      <span className="flex items-end justify-between gap-3 p-2">
        <span className="text-accent text-[0.625rem] font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate text-right text-xs leading-none sm:text-sm">
          {item.video.title}
        </span>
      </span>
      <span className="block aspect-video w-full overflow-hidden">
        <img
          src={imageUrl(thumbnail, 500)}
          srcSet={imageSrcSet(thumbnail, [280, 400, 560, 720])}
          sizes="(min-width: 64rem) 16rem, 14rem"
          alt={thumbnail.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </span>
    </button>
  );
}
