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
        <div className="mx-auto flex w-2/3 flex-col items-start justify-center space-y-3 border">
          <div className="text-background absolute bottom-3/5 flex flex-col space-y-8 font-black">
            <h2 className="self-start text-8xl tracking-tighter">Contact Me</h2>
            <ul className="space-y-3">
              <li>/ example@gmail.com</li>
              <li>/ Instagram</li>
              <li>/ YouTube</li>
            </ul>
          </div>
          <div className="bg-background absolute bottom-0 left-0 flex h-1/2 w-screen items-center justify-center">
            <div className="text-foreground text-4xl font-black">
              Image Placeholder
            </div>
          </div>
          <PageIndicator pageTitle="Contact" pageNumber="03." theme="dark" />
        </div>
      </div>
    </section>
  );
}
