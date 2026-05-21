import { imageSrcSet, imageUrl } from "@/sanity/image";
import {
  placeholderFilms,
  shouldUseDevPlaceholders,
} from "@/sanity/placeholderData";
import type { FilmProject } from "@/sanity/types";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import { ExternalLink } from "lucide-react";
import PageIndicator from "../ui/page-indicator";

export default function FilmSection() {
  const { data, isPending, isError } = usePortfolioData();
  const sanityFilms = data?.films ?? [];
  const films =
    sanityFilms.length === 0 && shouldUseDevPlaceholders()
      ? placeholderFilms
      : sanityFilms;

  return (
    // Video Section
    <div
      id="videos"
      className="relative flex min-h-screen md:items-center md:justify-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center space-y-3 self-start px-2 sm:px-4 md:w-full md:self-auto lg:px-0">
        <h2 className="text-foreground self-start pt-9 pb-3 text-3xl font-black tracking-tighter">
          Film
        </h2>
        {isPending ? (
          <PortfolioMessage message="Loading film projects..." />
        ) : isError ? (
          <PortfolioMessage message="Unable to load film projects right now." />
        ) : films.length === 0 ? (
          <PortfolioMessage message="Film projects coming soon." />
        ) : (
          <div className="grid w-full grid-flow-row gap-12">
            {films.map((film) => (
              <FilmProjectCard key={film._id} film={film} />
            ))}
          </div>
        )}

        <PageIndicator
          pageNumber={"02."}
          pageTitle={"Portfolio"}
          theme="light"
        />
      </div>
    </div>
  );
}

function FilmProjectCard({ film }: { film: FilmProject }) {
  const details = [film.role, film.client, film.year].filter(Boolean).join(" / ");

  return (
    <article className="mb-12 grid w-full gap-3">
      {/* Film Cover Photo */}
      <div className="grid h-full w-full grid-rows-[2fr_1fr] gap-1.5 bg-neutral-400 p-1.5">
        <div className="bg-foreground text-background h-48 w-full overflow-hidden md:h-96 lg:h-[32rem]">
          <img
            src={imageUrl(film.coverImage, 1200)}
            srcSet={imageSrcSet(film.coverImage, [640, 900, 1200, 1600, 2000])}
            sizes="(min-width: 72rem) 72rem, 100vw"
            alt={film.coverImage.alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid h-full grid-cols-3 gap-1.5 text-xs font-bold">
          {film.stills.slice(0, 3).map((still) => (
            <div
              key={still.asset?._ref ?? still.alt}
              className="bg-foreground text-background h-24 w-full overflow-hidden sm:h-28 md:h-40"
            >
              <img
                src={imageUrl(still, 500)}
                srcSet={imageSrcSet(still, [240, 360, 500, 700])}
                sizes="(min-width: 72rem) 24rem, 33vw"
                alt={still.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="mt-3">
          <a
            className="flex items-center space-x-1.5 text-sm tracking-tighter hover:underline"
            href={film.watchUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Watch Here</span>
            <span>
              <ExternalLink className="size-5" />
            </span>
          </a>
        </div>
      </div>
      {/* Film Title & Description */}
      <div className="flex h-full flex-col space-y-6">
        <h3 className="mt-6 flex flex-col tracking-tighter md:mt-12">
          <span className="text-accent font-semibold">Title:</span>
          <span className="text-xl font-bold">{film.title}</span>
        </h3>
        <div className="mb-12 flex flex-col space-y-1.5 tracking-tighter">
          <span className="text-accent text-sm font-semibold">
            Description / Details
          </span>
          {details ? (
            <span className="text-xs font-bold normal-case">{details}</span>
          ) : null}
          <p className="text-sm font-semibold normal-case">{film.description}</p>
        </div>
      </div>
    </article>
  );
}

function PortfolioMessage({ message }: { message: string }) {
  return (
    <div className="text-accent mb-12 flex min-h-40 items-center justify-center border border-current p-6 text-center text-sm font-bold tracking-tighter">
      {message}
    </div>
  );
}
