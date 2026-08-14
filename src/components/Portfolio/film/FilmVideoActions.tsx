import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FilmVideoActions({
  onSelectNext,
  onSelectPrevious,
}: {
  onSelectNext: () => void;
  onSelectPrevious: () => void;
}) {
  return (
    <div className="flex justify-center gap-1.5">
      <CarouselButton direction="previous" onSelect={onSelectPrevious} />
      <CarouselButton direction="next" onSelect={onSelectNext} />
    </div>
  );
}

function CarouselButton({
  direction,
  onSelect,
}: {
  direction: "previous" | "next";
  onSelect: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      className="border-foreground text-foreground hover:bg-foreground hover:text-background border-2 p-2 transition-colors"
      aria-label={`Show ${direction} video`}
      onClick={onSelect}
    >
      <Icon className="size-4" />
    </button>
  );
}
