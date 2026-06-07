export default function PortfolioMessage({ message }: { message: string }) {
  return (
    <div className="text-accent mb-12 flex min-h-40 items-center justify-center border border-current p-6 text-center text-sm font-bold tracking-tighter">
      {message}
    </div>
  );
}
