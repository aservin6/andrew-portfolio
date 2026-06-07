import {
  placeholderFilms,
  shouldUseDevPlaceholders,
} from "@/sanity/placeholderData";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import PageIndicator from "../ui/page-indicator";
import FilmProjectCard from "./film/FilmProjectCard";
import PortfolioMessage from "./PortfolioMessage";

export default function FilmSection() {
  const { data, isPending, isError } = usePortfolioData();
  const sanityFilms = data?.films ?? [];
  const films =
    sanityFilms.length === 0 && shouldUseDevPlaceholders()
      ? placeholderFilms
      : sanityFilms;

  return (
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
