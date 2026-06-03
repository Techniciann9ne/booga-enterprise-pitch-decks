export default function Spine({
  active,
}: {
  active?: "connect" | "understand" | "act";
}) {
  const step = (key: "connect" | "understand" | "act", label: string) => (
    <span
      className={
        active === key
          ? "text-accent font-semibold"
          : "text-muted/70 font-normal"
      }
    >
      {label}
    </span>
  );
  return (
    <div className="inline-flex items-center gap-[0.7vw] rounded-full border border-stone/70 bg-white/50 px-[1.3vw] py-[0.55vw] text-[0.95vw] backdrop-blur">
      <span className="mr-[0.3vw] text-[0.7vw] font-medium uppercase tracking-[0.25em] text-deep/60">
        Trust
      </span>
      {step("connect", "Connect")}
      <span className="text-stone">→</span>
      {step("understand", "Understand")}
      <span className="text-stone">→</span>
      {step("act", "Act")}
    </div>
  );
}
