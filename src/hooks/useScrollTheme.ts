import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useScrollTheme(): Theme {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]"),
    );
    let frameId: number | null = null;

    function updateTheme() {
      frameId = null;

      const nav = document.querySelector<HTMLElement>("nav");
      const navRect = nav?.getBoundingClientRect();
      const sampleY = navRect ? navRect.top + navRect.height / 2 : 0;
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= sampleY && rect.bottom > sampleY;
      });
      const sectionTheme = activeSection?.getAttribute("data-theme") as
        | Theme
        | null;

      if (sectionTheme) {
        setTheme(sectionTheme);
      }
    }

    function scheduleUpdate() {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateTheme);
      }
    }

    updateTheme();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return theme;
}
