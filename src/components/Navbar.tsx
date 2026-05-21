import { emailHref, getSiteSettings } from "@/sanity/fallbacks";
import { usePortfolioData } from "@/sanity/usePortfolioData";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "./ui/sheet";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useScrollTheme } from "@/hooks/useScrollTheme";
import { motion } from "motion/react";

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
      className="text-background fixed z-40 w-full uppercase"
    >
      <div className="mx-auto flex w-full items-center justify-between px-3 py-1.5 sm:px-12">
        <div>
          <span className="pointer-events-none text-2xl font-black select-none sm:text-4xl">
            {settings.initials}
          </span>
        </div>
        <div className="sm:hidden">
          <MobileMenu settings={settings} />
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-between space-x-3 text-[0.625rem] sm:space-x-6 sm:text-sm">
            <li>
              <a href="#home" className="p-3 transition-opacity hover:opacity-50">
                <span className="text-accent font-light">01. </span>
                <span className="font-black">Home</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="p-3 transition-opacity hover:opacity-50">
                <span className="text-accent font-light">02. </span>
                <span className="font-black">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="p-3 transition-opacity hover:opacity-50">
                <span className="text-accent font-light">03. </span>
                <span className="font-black">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

function MobileMenu({ settings }: { settings: ReturnType<typeof getSiteSettings> }) {
  return (
    <Sheet>
      <SheetTrigger className="p-1.5 hover:cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-foreground text-background border-accent uppercase">
        <SheetHeader>
          <SheetTitle className="text-background font-black">Menu</SheetTitle>

          <ul className="*:border-accent mt-4 flex flex-col gap-3 text-[0.625rem] *:border-b *:pb-2 sm:space-x-10 sm:text-sm">
            <li>
              <a href="#home" className="block transition-opacity hover:opacity-50">
                <span className="text-accent font-light">01. </span>
                <span className="font-black">Home</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="block transition-opacity hover:opacity-50">
                <span className="text-accent font-light">02. </span>
                <span className="font-black">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="block transition-opacity hover:opacity-50">
                <span className="text-accent font-light">03. </span>
                <span className="font-black">Contact</span>
              </a>
            </li>
          </ul>
        </SheetHeader>
        <SheetFooter>
          <div className="flex items-center justify-between">
            <div className="text-lg font-black">{settings.initials}</div>
            <div className="flex items-center gap-3 *:size-4">
              <a href={emailHref(settings.contactEmail)} aria-label="Email">
                <MdEmail />
              </a>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <SiInstagram />
              </a>
              <a
                href={settings.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <SiYoutube />
              </a>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
