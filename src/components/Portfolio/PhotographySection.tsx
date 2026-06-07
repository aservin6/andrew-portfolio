import { imageSrcSet, imageUrl } from "@/sanity/image";
import {
  placeholderPhotos,
  shouldUseDevPlaceholders,
} from "@/sanity/placeholderData";
import type { Photo } from "@/sanity/types";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import PageIndicator from "../ui/page-indicator";
import PortfolioMessage from "./PortfolioMessage";

const photoAspectClasses = [
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-square",
  "aspect-[2/3]",
  "aspect-[5/4]",
  "aspect-[16/10]",
  "aspect-[3/4]",
  "aspect-[1/1.15]",
  "aspect-[4/3]",
  "aspect-[5/7]",
];

export default function PhotographySection() {
  const { data, isPending, isError } = usePortfolioData();
  const sanityPhotos = data?.photos ?? [];
  const photos =
    sanityPhotos.length === 0 && shouldUseDevPlaceholders()
      ? placeholderPhotos
      : sanityPhotos;

  return (
    // Photo Section
    <div
      id="photos"
      className="relative flex min-h-screen md:items-center md:justify-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center space-y-3 px-2 sm:px-4 md:w-full lg:px-6 xl:px-0">
        <h2 className="text-foreground self-start pt-9 pb-3 text-3xl font-black tracking-tighter">
          Photography
        </h2>
        {isPending ? (
          <PortfolioMessage message="Loading photography..." />
        ) : isError ? (
          <PortfolioMessage message="Unable to load photography right now." />
        ) : photos.length === 0 ? (
          <PortfolioMessage message="Photography coming soon." />
        ) : (
          <div className="mb-12 columns-2 gap-1.5 sm:columns-3 md:columns-3 md:gap-2 lg:columns-4 xl:columns-4">
            {photos.map((photo, index) => (
              <PhotoGridItem key={photo._id} photo={photo} index={index} />
            ))}
          </div>
        )}
      </div>
      <PageIndicator pageNumber={"02."} pageTitle={"Portfolio"} theme="light" />
    </div>
  );
}

function PhotoGridItem({ photo, index }: { photo: Photo; index: number }) {
  const aspectClass = photoAspectClasses[index % photoAspectClasses.length];

  return (
    <figure
      className={`bg-foreground mb-1.5 break-inside-avoid overflow-hidden md:mb-2 ${aspectClass}`}
    >
      <img
        src={imageUrl(photo.image, 700)}
        srcSet={imageSrcSet(photo.image, [360, 540, 700, 900, 1200])}
        sizes="(min-width: 80rem) 42rem, (min-width: 48rem) 50vw, 100vw"
        alt={photo.image.alt}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}
