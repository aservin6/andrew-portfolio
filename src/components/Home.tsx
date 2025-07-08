export default function Home() {
  return (
    <section className="text-background relative min-h-screen">
      <div className="absolute top-1/6 w-full">
        <div className="xs:text-6xl xs:max-w-lg xs:px-4 relative z-50 mx-auto flex max-w-xs flex-col px-1 text-5xl font-black sm:top-20 sm:max-w-5xl sm:text-9xl lg:max-w-7xl lg:text-[10rem]">
          <span>Andrew</span>
          <span className="ml-auto">Perez</span>
        </div>
        <div className="relative right-4 bottom-4 ml-auto w-2/3 sm:right-20 sm:bottom-4 sm:w-full sm:max-w-md lg:max-w-lg">
          <img src="/andrew-profile.jpg" className="w-full" />
          <span className="text-accent text-[0.625rem] font-light sm:text-base">
            Filmmaker / Photographer
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 px-3 py-4 text-[0.625rem] sm:text-sm">
        <span className="text-accent font-light">01.</span>
        <span className="font-black">Home</span>
      </div>
    </section>
  );
}
