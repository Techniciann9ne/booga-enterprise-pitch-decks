export default function BrandMark({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const color = variant === "light" ? "text-bg" : "text-deep";
  return (
    <div className={`flex items-center gap-[0.9vw] ${color} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-[2vw] w-[2vw]"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="42" height="42" rx="13" />
        <rect x="56" y="2" width="42" height="42" rx="13" />
        <rect x="2" y="56" width="42" height="42" rx="13" />
        <circle cx="77" cy="77" r="21" />
      </svg>
      <span className="font-display text-[1.35vw] font-bold tracking-tight">
        Booga Enterprise
      </span>
    </div>
  );
}
