import PageIndicator from "./ui/page-indicator";

export default function Portfolio() {
  return (
    // Portfolio Section
    <section
      id="portfolio"
      data-theme="light"
      className="text-foreground bg-background min-h-screen"
    >
      {/* Photo Showcase  */}
      <div
        id="photos"
        className="relative flex min-h-screen items-center justify-center border-2 border-red-500"
      >
        <div className="mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-center space-y-3 border-2 border-blue-500 md:w-full">
          <h2 className="text-foreground self-start text-3xl font-black tracking-tighter">
            Photography
          </h2>
          <div className="*:bg-foreground grid w-full grid-cols-3 gap-3 *:h-32 *:w-full md:*:h-80">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <PageIndicator
          pageNumber={"02."}
          pageTitle={"Portfolio"}
          theme="light"
        />
      </div>
      {/* Video Showcase */}
      <div
        id="videos"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-12">
          <h2 className="text-foreground self-start text-3xl font-black tracking-tighter">
            Film
          </h2>
          {/* Video Title & Description */}
          <div className="grid w-full grid-cols-[1fr_2fr] gap-16">
            <div className="flex h-full max-h-1/2 flex-col justify-between py-3">
              <h3 className="flex flex-col">
                <span className="text-accent font-semibold">Title:</span>
                <span className="text-xl font-bold">Lorem Ipsum Dolor Sit</span>
              </h3>
              <div className="flex flex-col space-y-3">
                <span className="text-accent font-semibold">
                  Description / Details
                </span>
                <p className="text-sm font-semibold tracking-tighter normal-case">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus viverra posuere justo ut volutpat. Sed et placerat
                  est, vitae lacinia sapien. Vivamus condimentum ipsum turpis,
                  et vulputate tortor egestas vel. Quisque dignissim semper
                  rhoncus.{" "}
                </p>
              </div>
            </div>
            {/* Video w/ Carousel */}
            <div className="grid h-full max-h-3/4 w-full grid-rows-[1fr_1fr] gap-3 bg-neutral-400 p-3">
              <div>
                <video width={"100%"} controls autoPlay={false}>
                  <source src={undefined} type="video/mp4" />
                </video>
              </div>
              <div className="flex gap-3 font-bold">
                <div className="flex w-full items-center justify-center border bg-neutral-500">
                  <span>Carousel Item</span>
                </div>
                <div className="flex w-full items-center justify-center border bg-neutral-500">
                  <span>Carousel Item</span>
                </div>
                <div className="flex w-full items-center justify-center border bg-neutral-500">
                  <span>Carousel Item</span>
                </div>
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
    </section>
  );
}
