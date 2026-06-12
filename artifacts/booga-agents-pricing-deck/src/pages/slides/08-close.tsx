import BrandMark from "@/components/BrandMark";
import Confidential from "@/components/Confidential";

export default function Close() {
  return (
    <div className="slide relative flex flex-col justify-between bg-bg px-[7vw] py-[6vh]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[38vw] overflow-hidden">
        <div className="absolute -right-[8vw] top-[20vh] h-[30vw] w-[30vw] rounded-full bg-gradient-to-br from-lightgreen/60 via-accent/30 to-deep/25 blur-[2vw]" />
      </div>

      <header className="relative z-10 flex items-center justify-between">
        <BrandMark variant="dark" />
        <Confidential />
      </header>

      <div className="relative z-10 max-w-[58vw]">
        <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
          Start small, scale up
        </p>
        <h2 className="font-display text-[3vw] font-bold leading-[1.06] tracking-tight text-text">
          One platform, from individual to{" "}
          <span className="text-accent">Enterprise.</span>
        </h2>
        <p className="mt-[2.5vh] max-w-[50vw] text-[1.25vw] font-light leading-snug text-muted">
          The same platform runs from Booga One up through Enterprise with no
          re-platforming — upgrades are entitlement changes, not migrations.
        </p>

        <div className="mt-[5vh]">
          <p className="text-[0.9vw] font-semibold uppercase tracking-[0.2em] text-deep">
            Next step
          </p>
          <p className="mt-[1.2vh] text-[1.3vw] leading-snug text-text">
            A short scoping call to confirm Enterprise terms and data residency.
          </p>
          <div className="mt-[2.5vh] flex flex-wrap items-center gap-[1vw] text-[1.1vw]">
            <span className="font-semibold text-text">
              Dr. Mario Baburić, Founder &amp; CEO, Booga Enterprise
            </span>
            <span className="text-stone">·</span>
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.3vh] text-accent">
              [email]
            </span>
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.9vw] py-[0.3vh] text-accent">
              [book a time]
            </span>
          </div>
        </div>
      </div>

      <footer className="relative z-10 flex items-center gap-[1.5vw] text-[1vw] text-muted">
        <span className="font-medium text-text">Booga Agents</span>
        <span className="text-stone">·</span>
        <span className="uppercase tracking-[0.2em] text-stone">
          Plans &amp; Pricing
        </span>
      </footer>
    </div>
  );
}
