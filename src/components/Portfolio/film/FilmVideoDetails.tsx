export default function FilmVideoDetails({
  description,
  details,
  title,
}: {
  description: string;
  details: string;
  title: string;
}) {
  return (
    <div className="flex h-full flex-col space-y-6">
      <h3 className="mt-6 flex flex-col tracking-tighter md:mt-12">
        <span className="text-accent font-semibold">Title:</span>
        <span className="text-xl font-bold">{title}</span>
      </h3>
      <div className="mb-12 flex flex-col space-y-1.5 tracking-tighter">
        <span className="text-accent text-sm font-semibold">
          Description / Details
        </span>
        {details ? (
          <span className="text-xs font-bold normal-case">{details}</span>
        ) : null}
        <p className="text-sm font-semibold normal-case">{description}</p>
      </div>
    </div>
  );
}
