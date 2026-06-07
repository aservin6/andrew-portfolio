import type { FilmProject, FilmVideo } from "@/sanity/types";

export type VideoScrollDirection = "previous" | "next";

export function getFilmVideos(film: FilmProject): FilmVideo[] {
  return film.videos && film.videos.length > 0
    ? film.videos
    : [
        {
          title: film.title,
          url: film.watchUrl,
          thumbnail: film.coverImage,
          description: film.description,
          year: film.year,
          role: film.role,
          client: film.client,
        },
      ];
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
