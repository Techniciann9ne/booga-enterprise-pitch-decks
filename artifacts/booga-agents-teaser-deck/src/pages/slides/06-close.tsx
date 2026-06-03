import BrandMark from "@/components/BrandMark";

export default function Close() {
  return (
    <div className="slide relative flex flex-col justify-between bg-bg px-[7vw] py-[6vh]">
      <div className="pointer-events-none absolute -right-[6vw] -top-[6vw] h-[28vw] w-[28vw] rounded-full bg-gradient-to-br from-lightgreen/50 via-accent/25 to-transparent blur-[2.5vw]" />

      <header className="relative z-10">
        <BrandMark variant="dark" />
      </header>

      <div className="relative z-10 max-w-[58vw]">
        <p className="mb-[2.5vh] text-[1vw] font-medium uppercase tracking-[0.3em] text-accent">
          See it for yourself
        </p>
        <h1 className="font-display text-[4.2vw] font-bold leading-[1.05] tracking-tight text-text">
          See it on <span className="text-accent">your own data.</span>
        </h1>
        <p className="mt-[3vh] max-w-[44vw] text-[1.5vw] font-light leading-snug text-muted">
          A 30-minute walkthrough on a sample of your documents — and you'll
          know.
        </p>
        <p className="mt-[4vh] font-display text-[1.4vw] font-medium text-deep">
          Autonomous workflows. Enterprise control. Built for scale.
        </p>

        <div className="mt-[3.5vh] flex flex-wrap items-center gap-[1vw] text-[1.05vw]">
          <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.4vh] text-accent">[Name]</span>
          <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.4vh] text-accent">[email]</span>
          <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.4vh] text-accent">[book a time]</span>
        </div>
      </div>

      <footer className="relative z-10 flex items-center gap-[1.2vw] text-[0.95vw] text-muted">
        <span className="font-medium text-text">Booga Enterprise</span>
        <span className="text-stone">·</span>
        <span className="text-muted">Detailed plans and pricing on request</span>
        <span className="text-stone">·</span>
        <span className="uppercase tracking-[0.2em] text-stone">Confidential</span>
      </footer>
    </div>
  );
}
