import { ExternalLink } from "lucide-react";
import PageIndicator from "../ui/page-indicator";

export default function FilmSection() {
  return (
    // Video Section
    <div
      id="videos"
      className="relative flex min-h-screen md:items-center md:justify-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center space-y-3 self-start px-1.5 md:w-full md:self-auto">
        <h2 className="text-foreground self-start pt-9 pb-3 text-3xl font-black tracking-tighter">
          Film
        </h2>
        <div className="grid w-full grid-flow-row gap-3">
          {/* Film Cover Photo */}
          <div className="grid h-full w-full grid-rows-[2fr_1fr] gap-1.5 bg-neutral-400 p-1.5">
            <div className="bg-foreground text-background flex h-48 w-full items-center justify-center text-xl font-bold md:h-96 lg:h-[32rem]">
              <span>Cover Photo</span>
            </div>
            <div className="flex h-full space-x-1.5 text-xs font-bold">
              <div className="bg-foreground text-background flex w-full items-center justify-center text-center">
                <span>Carousel Item</span>
              </div>
              <div className="bg-foreground text-background flex w-full items-center justify-center text-center">
                <span>Carousel Item</span>
              </div>
              <div className="bg-foreground text-background flex w-full items-center justify-center text-center">
                <span>Carousel Item</span>
              </div>
            </div>
            <div className="mt-3">
              <a
                className="flex items-center space-x-1.5 text-sm tracking-tighter hover:underline"
                href="#"
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
              <span className="text-xl font-bold">Lorem Ipsum Dolor Sit</span>
            </h3>
            <div className="mb-12 flex flex-col space-y-1.5 tracking-tighter">
              <span className="text-accent text-sm font-semibold">
                Description / Details
              </span>
              <p className="text-sm font-semibold normal-case">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus viverra posuere justo ut volutpat. Sed et placerat
                est, vitae lacinia sapien. Vivamus condimentum ipsum turpis, et
                vulputate tortor egestas vel. Quisque dignissim semper
                rhoncus.{" "}
              </p>
            </div>
          </div>
        </div>

        <PageIndicator
          pageNumber={"02."}
          pageTitle={"Portfolio"}
          theme="light"
        />
      </div>
    </div>
  );
}
