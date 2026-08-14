import { useRef, useState } from "react";

import type { FilmProject } from "@/sanity/types";
import FilmVideoActions from "./FilmVideoActions";
import FilmVideoCarousel from "./FilmVideoCarousel";
import FilmVideoDetails from "./FilmVideoDetails";
import FilmVideoPlayer from "./FilmVideoPlayer";
import {
  getAllFilmVideos,
  getVideoDetails,
  type FilmVideoItem,
} from "./filmUtils";

export default function FilmProjectCard({ films }: { films: FilmProject[] }) {
  const videos = getAllFilmVideos(films);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState(videos[0]);
  const selectedDescription =
    selectedItem.video.description ?? selectedItem.film.description;
  const selectedDetails = getVideoDetails(
    selectedItem.video,
    selectedItem.film,
  );

  function scrollSelectedTabIntoStartPosition(tab: HTMLElement) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const carouselRect = carousel.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const isFullyVisible =
      tabRect.left >= carouselRect.left && tabRect.right <= carouselRect.right;

    if (!isFullyVisible) {
      carousel.scrollTo({
        left: tab.offsetLeft - carousel.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  function selectVideo(item: FilmVideoItem, tab: HTMLButtonElement) {
    setSelectedItem(item);
    scrollSelectedTabIntoStartPosition(tab);
  }

  function selectAdjacentVideo(direction: "previous" | "next") {
    const selectedIndex = videos.findIndex(
      (item) =>
        item.film._id === selectedItem.film._id &&
        item.video.url === selectedItem.video.url,
    );
    const nextIndex =
      direction === "next"
        ? (selectedIndex + 1) % videos.length
        : (selectedIndex - 1 + videos.length) % videos.length;
    const nextItem = videos[nextIndex];
    const nextTab = carouselRef.current?.children[nextIndex];

    setSelectedItem(nextItem);

    if (nextTab instanceof HTMLElement) {
      scrollSelectedTabIntoStartPosition(nextTab);
    }
  }

  return (
    <article className="mb-12 grid w-full gap-3">
      <div className="grid h-full w-full gap-1.5 p-1.5">
        <FilmVideoPlayer
          film={selectedItem.film}
          selectedVideo={selectedItem.video}
        />
        <FilmVideoCarousel
          carouselRef={carouselRef}
          selectedItem={selectedItem}
          videos={videos}
          onSelect={selectVideo}
        />
        <FilmVideoActions
          onSelectNext={() => selectAdjacentVideo("next")}
          onSelectPrevious={() => selectAdjacentVideo("previous")}
        />
      </div>
      <FilmVideoDetails
        description={selectedDescription}
        details={selectedDetails}
        title={selectedItem.video.title}
      />
    </article>
  );
}
