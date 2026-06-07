import { useRef, useState } from "react";

import type { FilmProject, FilmVideo } from "@/sanity/types";
import FilmVideoActions from "./FilmVideoActions";
import FilmVideoCarousel from "./FilmVideoCarousel";
import FilmVideoDetails from "./FilmVideoDetails";
import FilmVideoPlayer from "./FilmVideoPlayer";
import {
  getFilmVideos,
  getVideoDetails,
  type VideoScrollDirection,
} from "./filmUtils";

export default function FilmProjectCard({ film }: { film: FilmProject }) {
  const videos = getFilmVideos(film);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const selectedDescription = selectedVideo.description ?? film.description;
  const selectedDetails = getVideoDetails(selectedVideo, film);

  function scrollSelectedTabIntoStartPosition(tab: HTMLButtonElement) {
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

  function scrollVideoTabs(direction: VideoScrollDirection) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left:
        direction === "next"
          ? carousel.clientWidth * 0.8
          : -carousel.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  function selectVideo(video: FilmVideo, tab: HTMLButtonElement) {
    setSelectedVideo(video);
    scrollSelectedTabIntoStartPosition(tab);
  }

  return (
    <article className="mb-12 grid w-full gap-3">
      <div className="grid h-full w-full gap-1.5 p-1.5">
        <FilmVideoPlayer film={film} selectedVideo={selectedVideo} />
        <FilmVideoCarousel
          carouselRef={carouselRef}
          film={film}
          selectedVideo={selectedVideo}
          videos={videos}
          onSelect={selectVideo}
        />
        <FilmVideoActions
          selectedVideo={selectedVideo}
          onScroll={scrollVideoTabs}
        />
      </div>
      <FilmVideoDetails
        description={selectedDescription}
        details={selectedDetails}
        title={selectedVideo.title}
      />
    </article>
  );
}
