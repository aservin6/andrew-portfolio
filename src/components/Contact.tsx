import { ExternalLink } from "lucide-react";
import PageIndicator from "./ui/page-indicator";

export default function Contact() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="text-background min-h-screen"
    >
      <div
        id="contact"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-start justify-center">
          <div className="text-background absolute bottom-1/2 flex flex-col space-y-8 font-black">
            <h2 className="self-start text-6xl tracking-tighter md:text-8xl">
              Contact Me
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="#">/ example@gmail.com</a>
              </li>
              <li className="flex items-center space-x-1.5">
                <a href="#">/ Instagram</a>
                <ExternalLink className="size-5" />
              </li>
              <li className="flex items-center space-x-1.5">
                <a href="#">/ YouTube</a>
                <ExternalLink className="size-5" />
              </li>
            </ul>
          </div>
          <div className="bg-background absolute bottom-0 left-0 flex h-1/3 w-screen items-center justify-center">
            <div className="text-foreground text-center text-4xl font-black">
              Image Placeholder
            </div>
          </div>
          <PageIndicator pageTitle="Contact" pageNumber="03." theme="light" />
        </div>
      </div>
    </section>
  );
}
