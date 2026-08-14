import type { FilmProject, FilmVideo } from "@/sanity/types";

export type FilmVideoItem = {
  film: FilmProject;
  video: FilmVideo;
};

export function getFilmVideos(film: FilmProject): FilmVideo[] {
  const mainVideo = {
    title: film.title,
    url: film.watchUrl,
    thumbnail: film.coverImage,
    description: film.description,
    year: film.year,
    role: film.role,
    client: film.client,
  };

  return [
    mainVideo,
    ...(film.videos ?? []).filter((video) => video.url !== film.watchUrl),
  ];
}

export function getAllFilmVideos(films: FilmProject[]): FilmVideoItem[] {
  return films.flatMap((film) =>
    getFilmVideos(film).map((video) => ({ film, video })),
  );
}

export function getVideoDetails(video: FilmVideo, film: FilmProject) {
  return [
    video.role ?? film.role,
    video.client ?? film.client,
    video.year ?? film.year,
  ]
    .filter(Boolean)
    .join(" / ");
}
