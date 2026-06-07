import { emailHref, getSiteSettings } from "@/sanity/fallbacks";
import { ExternalLink } from "lucide-react";
import PageIndicator from "./ui/page-indicator";
import { usePortfolioData } from "@/sanity/usePortfolioData";

export default function Contact() {
  const { data } = usePortfolioData();
  const settings = getSiteSettings(data?.settings);

  return (
    <section
      id="contact"
      data-theme="dark"
      className="text-background min-h-screen"
    >
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-20 sm:px-6">
        <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col justify-center">
          <div className="text-background flex max-w-full flex-col space-y-8 self-start font-black">
            <h2 className="self-start text-[clamp(3.5rem,14vw,6rem)] leading-none tracking-tighter md:text-8xl">
              Contact Me
            </h2>
            <ul className="max-w-full space-y-3 text-sm wrap-break-word sm:text-base">
              <li>
                <a href={emailHref(settings.contactEmail)}>
                  / {settings.contactEmail}
                </a>
              </li>
              <li className="flex items-center space-x-1.5">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  / Instagram
                </a>
                <ExternalLink className="size-5" />
              </li>
              <li className="flex items-center space-x-1.5">
                <a href={settings.youtubeUrl} target="_blank" rel="noreferrer">
                  / YouTube
                </a>
                <ExternalLink className="size-5" />
              </li>
            </ul>
          </div>

          <PageIndicator pageTitle="Contact" pageNumber="03." theme="light" />
        </div>
      </div>
    </section>
  );
}
