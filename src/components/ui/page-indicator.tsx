export default function PageIndicator({
  pageNumber,
  pageTitle,
  theme,
}: {
  pageNumber: string;
  pageTitle: string;
  theme: "dark" | "light";
}) {
  return (
    // Current Page Indicator
    <div className="absolute bottom-0 left-0 px-3 py-4 text-[0.625rem] select-none sm:text-sm">
      <div className="flex items-center space-x-1">
        <span className={"text-accent font-light"}>{pageNumber}</span>
        <span
          className={
            theme === "dark"
              ? "text-background font-black"
              : "text-foreground font-black"
          }
        >
          {pageTitle}
        </span>
      </div>
    </div>
  );
}
