import BrandMark from "@/components/BrandMark";

export default function Cover() {
  return (
    <div className="slide relative flex flex-col justify-between bg-bg px-[7vw] py-[6vh]">
      {/* green-glass motif, right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42vw] overflow-hidden">
        <div className="absolute -right-[8vw] top-[14vh] h-[34vw] w-[34vw] rounded-full bg-gradient-to-br from-lightgreen/70 via-accent/40 to-deep/30 blur-[2vw]" />
        <div className="absolute right-[10vw] top-[40vh] h-[18vw] w-[18vw] rounded-[3vw] border border-white/40 bg-gradient-to-br from-white/50 to-lightgreen/30 backdrop-blur-sm" />
        <div className="absolute right-[3vw] top-[26vh] h-[12vw] w-[12vw] rounded-[2.4vw] border border-white/50 bg-gradient-to-tr from-accent/30 to-white/40 backdrop-blur" />
        <svg
          viewBox="0 0 400 400"
          className="absolute right-[2vw] top-[16vh] h-[26vw] w-[26vw] text-deep/25"
          fill="none"
          aria-hidden="true"
        >
          <path d="M40 80 H360 M40 160 H360 M40 240 H360 M80 40 V360 M160 40 V360 M240 40 V360 M320 40 V360" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="160" cy="160" r="6" className="fill-accent" />
          <circle cx="240" cy="240" r="6" className="fill-accent" />
          <circle cx="320" cy="160" r="6" className="fill-deep" />
          <circle cx="240" cy="80" r="6" className="fill-deep" />
          <path d="M160 160 L240 240 M240 240 L320 160 M240 240 L240 80" stroke="currentColor" strokeWidth="2" className="stroke-accent/60" />
        </svg>
      </div>

      <header className="relative z-10">
        <BrandMark variant="dark" />
      </header>

      <div className="relative z-10 max-w-[52vw]">
        <p className="mb-[2.5vh] text-[1vw] font-medium uppercase tracking-[0.3em] text-accent">
          Enterprise AI Automation &amp; Analytics Platform
        </p>
        <h1 className="font-display text-[4.4vw] font-bold leading-[1.05] tracking-tight text-text">
          Put your firm's knowledge to work — without it ever leaving{" "}
          <span className="text-accent">your control.</span>
        </h1>
        <p className="mt-[3.5vh] max-w-[40vw] text-[1.5vw] font-light leading-snug text-muted">
          Booga Agents — the enterprise platform that turns your documents into
          governed, working intelligence inside your own walls.
        </p>
      </div>

      <footer className="relative z-10 flex items-center gap-[1.5vw] text-[1vw] text-muted">
        <span className="font-medium text-text">
          Dr. Mario Baburić, Founder &amp; CEO, Booga Enterprise
        </span>
        <span className="text-stone">·</span>
        <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vw] text-accent">
          [Date]
        </span>
        <span className="text-stone">·</span>
        <span className="uppercase tracking-[0.2em] text-stone">Confidential</span>
      </footer>
    </div>
  );
}
