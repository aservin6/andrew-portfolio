import { useScrollTheme } from "@/hooks/useScrollTheme";
import { getSiteSettings } from "@/sanity/fallbacks";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import { motion } from "motion/react";
import DesktopNav from "./navbar/DesktopNav";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
  const theme = useScrollTheme();
  const { data } = usePortfolioData();
  const settings = getSiteSettings(data?.settings);
  const textColor = theme === "dark" ? "#cfcfcf" : "#151515";
  const bgColor = theme === "dark" ? "#151515" : "#cfcfcf";

  return (
    <motion.nav
      initial={false}
      animate={{ color: textColor, backgroundColor: bgColor }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="text-background fixed z-40 w-full overflow-hidden uppercase"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] bg-[length:128px] bg-repeat opacity-[0.08]" />
      <div className="relative z-10 mx-auto flex w-full items-center justify-between px-3 py-1.5 sm:px-12">
        <Initials initials={settings.initials} />
        <div className="sm:hidden">
          <MobileMenu settings={settings} />
        </div>
        <DesktopNav />
      </div>
    </motion.nav>
  );
}

function Initials({ initials }: { initials: string }) {
  return (
    <div>
      <span className="pointer-events-none text-3xl font-black select-none sm:text-4xl">
        {initials}
      </span>
    </div>
  );
}
