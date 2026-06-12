import BrandMark from "@/components/BrandMark";
import Confidential from "@/components/Confidential";

export default function Cover() {
  return (
    <div className="slide relative flex flex-col justify-between bg-bg px-[7vw] py-[6vh]">
      {/* green-glass motif, right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42vw] overflow-hidden">
        <div className="absolute -right-[8vw] top-[14vh] h-[34vw] w-[34vw] rounded-full bg-gradient-to-br from-lightgreen/70 via-accent/40 to-deep/30 blur-[2vw]" />
        <div className="absolute right-[10vw] top-[40vh] h-[18vw] w-[18vw] rounded-[3vw] border border-white/40 bg-gradient-to-br from-white/50 to-lightgreen/30 backdrop-blur-sm" />
        <div className="absolute right-[3vw] top-[26vh] h-[12vw] w-[12vw] rounded-[2.4vw] border border-white/50 bg-gradient-to-tr from-accent/30 to-white/40 backdrop-blur" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <BrandMark variant="dark" />
        <Confidential />
      </header>

      <div className="relative z-10 max-w-[56vw]">
        <p className="mb-[2.5vh] text-[1vw] font-medium uppercase tracking-[0.3em] text-accent">
          Enterprise AI Automation &amp; Analytics Platform
        </p>
        <h1 className="font-display text-[4.6vw] font-bold leading-[1.04] tracking-tight text-text">
          Booga Agents —{" "}
          <span className="text-accent">Plans &amp; Pricing.</span>
        </h1>
        <p className="mt-[3.5vh] text-[1.6vw] font-light leading-snug text-muted">
          Prepared for{" "}
          <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.3vh] font-normal text-accent">
            [Prospect]
          </span>
          ,{" "}
          <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.3vh] font-normal text-accent">
            [date]
          </span>
          .
        </p>
      </div>

      <footer className="relative z-10 flex items-center gap-[1.5vw] text-[1vw] text-muted">
        <span className="font-medium text-text">Booga Agents</span>
        <span className="text-stone">·</span>
        <span className="text-muted">
          Autonomous workflows. Enterprise control. Built for scale.
        </span>
      </footer>
    </div>
  );
}
