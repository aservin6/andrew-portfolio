import PageIndicator from "../ui/page-indicator";

export default function PhotographySection() {
  return (
    // Photo Section
    <div
      id="photos"
      className="relative flex min-h-screen md:items-center md:justify-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center space-y-3 px-1.5 md:w-full">
        <h2 className="text-foreground self-start pt-9 pb-3 text-3xl font-black tracking-tighter">
          Photography
        </h2>
        <div className="*:bg-foreground *:text-background mb-12 grid h-full w-full grid-cols-2 grid-rows-6 gap-1 text-3xl *:min-h-40 *:w-full">
          <div className="row-span-2">1</div>
          <div className="">2</div>
          <div className="col-start-1 row-start-3">3</div>
          <div className="col-start-2 row-span-2 row-start-2">4</div>
          <div className="row-span-2 row-start-4">5</div>
          <div className="row-start-4">6</div>
          <div className="col-start-1 row-start-6">7</div>
          <div className="col-start-2 row-span-2 row-start-5">8</div>
        </div>
      </div>
      <PageIndicator pageNumber={"02."} pageTitle={"Portfolio"} theme="light" />
    </div>
  );
}
