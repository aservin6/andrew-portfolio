import PageIndicator from "./ui/page-indicator";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-theme="light"
      className="text-foreground bg-background min-h-screen"
    >
      <div
        id="photos"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex w-2/3 flex-col items-center justify-center space-y-3">
          <h2 className="text-foreground self-start text-3xl font-black tracking-tighter">
            Photography
          </h2>
          <div className="*:bg-foreground grid w-full grid-cols-3 gap-3 *:h-80 *:w-full">
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

      <div
        id="videos"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex w-2/3 flex-col items-center justify-center space-y-12">
          <h2 className="text-foreground self-start text-3xl font-black tracking-tighter">
            Film
          </h2>
          <div className="grid w-full grid-cols-[1fr_2fr] gap-10">
            <div className="flex h-1/3 flex-col justify-between py-3">
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
            <div className="grid h-[52rem] w-full grid-rows-[3fr_1fr] gap-3 bg-neutral-400 p-3">
              <div className="bg-neutral-800"></div>
              <div className="bg-neutral-800"></div>
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
