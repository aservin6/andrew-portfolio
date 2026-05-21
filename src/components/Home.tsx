import { getSiteSettings, splitArtistName } from "@/sanity/fallbacks";
import { urlForImage } from "@/sanity/image";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import { RxDoubleArrowDown } from "react-icons/rx";
import PageIndicator from "./ui/page-indicator";

export default function Home() {
  const { data } = usePortfolioData();
  const settings = getSiteSettings(data?.settings);
  const { firstName, remainingName } = splitArtistName(settings.artistName);
  const profileImageSrc = settings.profileImage
    ? urlForImage(settings.profileImage).width(700).quality(85).url()
    : "/andrew-profile.jpg";

  return (
    <section
      id="home"
      data-theme="dark"
      className="text-background relative z-20 flex min-h-screen items-center justify-center overflow-hidden px-3 py-20 sm:px-6"
    >
      {/* Flex Layout */}
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center space-y-3 sm:w-5/6 sm:space-y-0 lg:flex">
          {/* Client Name Header */}
          <div className="relative z-50 mx-auto flex w-fit max-w-full flex-col justify-center -space-y-1 text-[clamp(3.5rem,14vw,10rem)] leading-[0.9] font-black sm:-space-y-2 md:-space-y-3 lg:text-[10rem]">
            <span className="whitespace-nowrap tracking-tighter">{firstName}</span>
            <span className="whitespace-nowrap tracking-tighter">{remainingName}</span>
          </div>
          <div className="relative my-3 flex w-full flex-col items-center space-y-6 sm:my-6 sm:flex sm:h-auto sm:flex-row sm:justify-evenly">
            {/* Call to Action */}
            <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:mt-12 sm:w-auto sm:flex-col sm:space-y-4 sm:self-start">
              <button className="bg-foreground text-background border-background border-2 p-2 text-xs font-bold tracking-tighter uppercase transition-opacity hover:opacity-50 sm:w-full md:text-base">
                Contact Me
              </button>
              <button className="bg-background text-foreground border-background border-2 p-2 text-xs font-bold tracking-tighter uppercase transition-opacity hover:opacity-50 sm:w-full md:text-base">
                View Portfolio
              </button>
            </div>
            {/* Client Portrait */}
            <div className="relative flex max-w-[min(22rem,85vw)] flex-col-reverse sm:flex-col md:max-w-xs lg:max-w-sm">
              <img
                src={profileImageSrc}
                alt={settings.profileImage?.alt ?? settings.artistName}
                className="max-h-72 w-auto object-contain sm:max-h-80 md:max-h-full"
              />
              <span className="text-accent text-[0.625rem] font-light sm:text-xs md:text-base">
                {settings.roleLabel}
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
