import NavItem from "./NavItem";
import { navItems } from "./navItems";

export default function DesktopNav() {
  return (
    <div className="hidden sm:block">
      <ul className="flex items-center justify-between space-x-3 text-[0.625rem] sm:space-x-6 sm:text-sm">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} className="p-3" />
        ))}
      </ul>
    </div>
  );
}
