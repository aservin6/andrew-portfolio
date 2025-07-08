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

export default function Navbar() {
  return (
    <nav className="text-background fixed z-50 w-full uppercase">
      <div className="mx-auto flex w-full items-center justify-between px-3 py-1.5 sm:px-12">
        <div>
          <span className="pointer-events-none text-2xl font-black sm:text-4xl">
            AP
          </span>
        </div>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-between space-x-3 text-[0.625rem] sm:space-x-10 sm:text-sm">
            <li>
              <span className="text-accent font-light">01. </span>
              <span className="font-black">Home</span>
            </li>
            <li>
              {" "}
              <span className="text-accent font-light">02. </span>
              <span className="font-black">Portfolio</span>
            </li>
            <li>
              {" "}
              <span className="text-accent font-light">03. </span>
              <span className="font-black">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
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
              <span className="text-accent font-light">01. </span>
              <span className="font-black">Home</span>
            </li>
            <li>
              {" "}
              <span className="text-accent font-light">02. </span>
              <span className="font-black">Portfolio</span>
            </li>
            <li>
              {" "}
              <span className="text-accent font-light">03. </span>
              <span className="font-black">Contact</span>
            </li>
          </ul>
        </SheetHeader>
        <SheetFooter>
          <div className="flex items-center justify-between">
            <div className="text-lg font-black">AP</div>
            <div className="flex items-center gap-3 *:size-4">
              <MdEmail />
              <SiInstagram />
              <SiYoutube />
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
