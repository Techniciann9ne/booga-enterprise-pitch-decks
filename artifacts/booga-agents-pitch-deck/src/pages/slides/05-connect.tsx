import Spine from "@/components/Spine";

export default function Connect() {
  return (
    <div className="slide relative grid grid-cols-2 gap-[5vw] bg-bg px-[7vw] py-[8vh]">
      <div className="flex flex-col justify-center">
        <div className="mb-[3vh]">
          <Spine active="connect" />
        </div>
        <h2 className="font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
          We come to your data. Your data{" "}
          <span className="text-accent">doesn't come to us.</span>
        </h2>
        <p className="mt-[2.5vh] max-w-[36vw] text-[1.25vw] font-light leading-snug text-muted">
          Connect Booga Agents to SharePoint and Microsoft 365 in minutes.
          One-way. Read-only. Your system of record never changes.
        </p>

        <div className="mt-[4vh] flex flex-col gap-[2vh]">
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">One-way by design.</span> SharePoint
              stays the source of truth; Booga Agents keeps a read-only mirror. We
              never write back.
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">Thousands of folders, automatically.</span>{" "}
              Point Booga Agents at your document estate; it stays up to date on a
              schedule.
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">No migration project.</span> Nothing
              moves, nothing is re-platformed, nothing is exposed to the public
              internet.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full rounded-[1.5vw] border border-stone/50 bg-white/60 p-[2.5vw]">
          <div className="flex items-center justify-between gap-[1vw]">
            <div className="flex-1 rounded-[1vw] border border-stone/60 bg-bg p-[1.6vw] text-center">
              <p className="font-display text-[1.3vw] font-bold text-text">SharePoint</p>
              <p className="mt-[0.6vh] text-[0.85vw] text-muted">Microsoft 365</p>
              <p className="mt-[1.4vh] text-[0.8vw] font-medium uppercase tracking-[0.18em] text-deep">
                Source of truth
              </p>
            </div>
            <div className="flex flex-col items-center px-[0.5vw]">
              <svg viewBox="0 0 80 24" className="w-[5vw] text-accent" fill="none" aria-hidden="true">
                <path d="M4 12 H68 M68 12 l-10 -7 M68 12 l-10 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mt-[0.8vh] flex items-center gap-[0.3vw] text-[0.78vw] font-medium text-deep">
                <svg viewBox="0 0 24 24" className="h-[0.9vw] w-[0.9vw]" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                Read-only
              </span>
            </div>
            <div className="flex-1 rounded-[1vw] border-2 border-accent/60 bg-lightgreen/15 p-[1.6vw] text-center">
              <p className="font-display text-[1.3vw] font-bold text-deep">Booga Agents</p>
              <p className="mt-[0.6vh] text-[0.85vw] text-muted">Read-only mirror</p>
              <p className="mt-[1.4vh] text-[0.8vw] font-medium uppercase tracking-[0.18em] text-accent">
                Working layer
              </p>
            </div>
          </div>
          <p className="mt-[2.5vh] text-center text-[0.95vw] text-muted">
            One-way sync. Your records are never modified.
          </p>
        </div>
      </div>
    </div>
  );
}
