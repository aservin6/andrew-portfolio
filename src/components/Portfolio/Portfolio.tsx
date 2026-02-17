import FilmSection from "./FilmSection";
import PhotographySection from "./PhotographySection";

export default function Portfolio() {
  return (
    // Portfolio Section
    <section
      id="portfolio"
      data-theme="light"
      className="text-foreground bg-background min-h-screen"
    >
      <PhotographySection />
      <FilmSection />
    </section>
  );
}
