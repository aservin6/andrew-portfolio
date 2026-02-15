import { RxDoubleArrowDown } from "react-icons/rx";
import PageIndicator from "./ui/page-indicator";

export default function Home() {
  return (
    <section
      id="home"
      data-theme="dark"
      className="text-background relative z-20 flex min-h-screen items-center justify-center"
    >
      {/* Flex Layout */}
      <div className="flex items-center justify-center">
        <div className="absolute flex h-5/6 w-5/6 flex-col items-center justify-center space-y-3 sm:space-y-0 lg:flex lg:max-w-5xl">
          {/* Client Name Header */}
          <div className="relative z-50 mx-auto flex w-fit flex-col justify-center -space-y-2 text-6xl font-black sm:text-8xl md:-space-y-4 md:text-9xl lg:text-[10rem]">
            <span className="tracking-tighter">Andrew</span>
            <span className="tracking-tighter">Perez</span>
          </div>
          <div className="relative my-3 flex w-full flex-col items-center space-y-6 sm:my-6 sm:flex sm:h-auto sm:flex-row sm:justify-evenly">
            {/* Call to Action */}
            <div className="flex w-full items-center justify-center space-x-3 sm:mt-12 sm:w-auto sm:flex-col sm:space-y-4 sm:space-x-0 sm:self-start">
              <button className="bg-foreground text-background border-background border-2 p-2 text-xs font-bold tracking-tighter uppercase transition-opacity hover:opacity-50 sm:w-full md:text-base">
                Contact Me
              </button>
              <button className="bg-background text-foreground border-background border-2 p-2 text-xs font-bold tracking-tighter uppercase transition-opacity hover:opacity-50 sm:w-full md:text-base">
                View Portfolio
              </button>
            </div>
            {/* Client Portrait */}
            <div className="relative flex flex-col-reverse sm:flex-col md:max-w-xs lg:max-w-sm">
              <img
                src="/andrew-profile.jpg"
                className="max-h-80 w-auto md:max-h-full"
              />
              <span className="text-accent text-[0.625rem] font-light sm:text-xs md:text-base">
                Filmmaker / Photographer
              </span>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <RxDoubleArrowDown className="text-2xl" />
        </div>
      </div>

      <PageIndicator pageNumber={"01."} pageTitle={"Home"} theme="dark" />
    </section>
  );
}
