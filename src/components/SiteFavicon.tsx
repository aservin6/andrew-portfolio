import { useEffect } from "react";

import { getSiteSettings } from "@/sanity/fallbacks";
import { usePortfolioData } from "@/sanity/usePortfolioData";

export default function SiteFavicon() {
  const { data } = usePortfolioData();
  const settings = getSiteSettings(data?.settings);
  const favicon = settings.favicon?.asset;

  useEffect(() => {
    const link = getOrCreateFaviconLink();

    if (favicon?.url) {
      link.href = favicon.url;
      link.type = favicon.mimeType ?? getMimeTypeFromFilename(favicon.originalFilename);
      return;
    }

    link.href = createInitialsFavicon(settings.initials);
    link.type = "image/svg+xml";
  }, [
    favicon?.mimeType,
    favicon?.originalFilename,
    favicon?.url,
    settings.initials,
  ]);

  return null;
}

function getOrCreateFaviconLink() {
  const existingLink = document.querySelector<HTMLLinkElement>(
    "link[rel='icon']",
  );

  if (existingLink) {
    return existingLink;
  }

  const link = document.createElement("link");

  link.rel = "icon";
  document.head.append(link);

  return link;
}

function createInitialsFavicon(initials: string) {
  const safeInitials = escapeSvgText(initials || "AP");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#151515"/>
      <text
        x="50%"
        y="53%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#cfcfcf"
        font-family="Lexend Exa, Lexend Exa Variable, Arial Black, sans-serif"
        font-size="25"
        font-weight="900"
        letter-spacing="-1.5"
      >${safeInitials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getMimeTypeFromFilename(filename?: string) {
  if (!filename) {
    return "image/x-icon";
  }

  const extension = filename.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "svg":
      return "image/svg+xml";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "webp":
      return "image/webp";
    default:
      return "image/x-icon";
  }
}
