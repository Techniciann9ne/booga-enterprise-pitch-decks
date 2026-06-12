export default function Confidential({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[0.85vw] font-semibold uppercase tracking-[0.32em] text-stone ${className}`}
    >
      Confidential
    </span>
  );
}
