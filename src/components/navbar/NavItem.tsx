export default function NavItem({
  className,
  href,
  label,
  number,
}: {
  className: string;
  href: string;
  label: string;
  number: string;
}) {
  return (
    <li>
      <a href={href} className={`${className} transition-opacity hover:opacity-50`}>
        <span className="text-accent font-light">{number} </span>
        <span className="font-black">{label}</span>
      </a>
    </li>
  );
}
