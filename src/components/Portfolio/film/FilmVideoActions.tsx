import type { FilmVideo } from "@/sanity/types";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { VideoScrollDirection } from "./filmUtils";

export default function FilmVideoActions({
  selectedVideo,
  onScroll,
}: {
  selectedVideo: FilmVideo;
  onScroll: (direction: VideoScrollDirection) => void;
}) {
  return (
    <div className="grid items-center gap-3 md:grid-cols-3">
      <a
        className="flex items-center space-x-1.5 justify-self-start text-sm tracking-tighter hover:underline"
        href={selectedVideo.url}
        target="_blank"
        rel="noreferrer"
      >
        <span>Open Selected Video</span>
        <span>
          <ExternalLink className="size-5" />
        </span>
      </a>
      <div className="hidden justify-center gap-1.5 md:flex">
        <CarouselButton direction="previous" onScroll={onScroll} />
        <CarouselButton direction="next" onScroll={onScroll} />
      </div>
    </div>
  );
}

function CarouselButton({
  direction,
  onScroll,
}: {
  direction: VideoScrollDirection;
  onScroll: (direction: VideoScrollDirection) => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      className="border-foreground text-foreground hover:bg-foreground hover:text-background border-2 p-2 transition-colors"
      aria-label={`Scroll videos ${direction === "previous" ? "left" : "right"}`}
      onClick={() => onScroll(direction)}
    >
      <Icon className="size-4" />
    </button>
  );
}
