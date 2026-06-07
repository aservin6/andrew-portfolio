import { emailHref, getSiteSettings } from "@/sanity/fallbacks";
import { Menu } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { SiInstagram, SiYoutube } from "react-icons/si";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavItem from "./NavItem";
import { navItems } from "./navItems";

export default function MobileMenu({
  settings,
}: {
  settings: ReturnType<typeof getSiteSettings>;
}) {
  return (
    <Sheet>
      <SheetTrigger className="p-1.5 hover:cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-foreground text-background border-accent uppercase">
        <SheetHeader>
          <SheetTitle className="text-background text-xl font-black tracking-tighter">
            Menu
          </SheetTitle>
          <MobileNavList />
        </SheetHeader>
        <SheetFooter>
          <MobileMenuFooter settings={settings} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavList() {
  return (
    <ul className="*:border-accent mt-6 flex flex-col gap-4 text-sm *:border-b *:pb-3 sm:space-x-10 sm:text-sm">
      {navItems.map((item) => (
        <NavItem key={item.href} {...item} className="block" />
      ))}
    </ul>
  );
}

function MobileMenuFooter({
  settings,
}: {
  settings: ReturnType<typeof getSiteSettings>;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl font-black tracking-tighter">
        {settings.initials}
      </div>
      <SocialLinks settings={settings} />
    </div>
  );
}

function SocialLinks({ settings }: { settings: ReturnType<typeof getSiteSettings> }) {
  const socialItems = [
    {
      href: emailHref(settings.contactEmail),
      label: "Email",
      icon: <MdEmail />,
    },
    {
      href: settings.instagramUrl,
      label: "Instagram",
      icon: <SiInstagram />,
    },
    {
      href: settings.youtubeUrl,
      label: "YouTube",
      icon: <SiYoutube />,
    },
  ];

  return (
    <div className="flex items-center gap-5 [&_a]:inline-flex [&_a]:items-center [&_svg]:size-6">
      {socialItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.label === "Email" ? undefined : "_blank"}
          rel={item.label === "Email" ? undefined : "noreferrer"}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
