import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useScrollTheme(): Theme {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "section[data-theme]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const sectionTheme = visible.target.getAttribute(
            "data-theme",
          ) as Theme;
          if (sectionTheme) setTheme(sectionTheme);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return theme;
}
