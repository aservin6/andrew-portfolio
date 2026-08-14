import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "./client";
import type { SanityImage } from "./types";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

const fallbackImageUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#151515"/><path d="M0 0h1200v675H0z" fill="none" stroke="#cfcfcf" stroke-opacity=".3" stroke-width="2"/><text x="600" y="338" fill="#cfcfcf" font-family="Arial, sans-serif" font-size="32" text-anchor="middle">IMAGE UNAVAILABLE</text></svg>',
)}`;

function hasImageAsset(
  source: SanityImage | null | undefined,
): source is SanityImage & { asset: NonNullable<SanityImage["asset"]> } {
  return Boolean(source?.asset?._ref);
}

export function urlForImage(source: SanityImage | null | undefined) {
  if (!builder || !hasImageAsset(source)) {
    return undefined;
  }

  return builder.image(source).auto("format").fit("max");
}

export function imageUrl(
  source: SanityImage | null | undefined,
  width: number,
  quality = 85,
) {
  if (source?.placeholderUrl) {
    return source.placeholderUrl;
  }

  return (
    urlForImage(source)?.width(width).quality(quality).url() ?? fallbackImageUrl
  );
}

export function imageSrcSet(
  source: SanityImage | null | undefined,
  widths: number[],
  quality = 82,
) {
  if (source?.placeholderUrl || !hasImageAsset(source)) {
    return undefined;
  }

  return widths
    .map((width) => `${imageUrl(source, width, quality)} ${width}w`)
    .join(", ");
}
