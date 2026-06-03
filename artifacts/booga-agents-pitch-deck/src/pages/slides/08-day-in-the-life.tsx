export default function DayInTheLife() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[9vh]">
      <div className="flex items-center gap-[1vw]">
        <p className="text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
          A day in the life
        </p>
        <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.2vh] text-[0.85vw] text-accent">
          [legal example]
        </span>
      </div>
      <h2 className="mt-[2vh] max-w-[64vw] font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        One week at a law firm, with{" "}
        <span className="text-accent">Booga Agents.</span>
      </h2>
      <p className="mt-[2.5vh] max-w-[56vw] text-[1.25vw] font-light leading-snug text-muted">
        From a client email at 9:02 to a reviewed draft by 9:15 — here's what
        changes.
      </p>

      <div className="relative mt-[8vh]">
        <div className="absolute left-0 right-0 top-[1.1vw] h-[0.2vw] bg-stone/60" />
        <div className="relative grid grid-cols-4 gap-[2vw]">
          <div className="flex flex-col items-start">
            <div className="h-[2.2vw] w-[2.2vw] rounded-full border-[0.3vw] border-accent bg-bg" />
            <span className="mt-[2vh] font-display text-[1.5vw] font-bold text-deep">9:02</span>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">
              A client email arrives. The agent pulls the matter history and
              relevant precedents.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="h-[2.2vw] w-[2.2vw] rounded-full border-[0.3vw] border-accent bg-bg" />
            <span className="mt-[2vh] font-display text-[1.5vw] font-bold text-deep">9:08</span>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">
              A grounded draft reply appears in the lawyer's queue, with
              citations to the source documents.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="h-[2.2vw] w-[2.2vw] rounded-full border-[0.3vw] border-accent bg-bg" />
            <span className="mt-[2vh] font-display text-[1.5vw] font-bold text-deep">9:15</span>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">
              The lawyer edits and sends. The insight is remembered for next
              time.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="h-[2.2vw] w-[2.2vw] rounded-full border-[0.3vw] border-deep bg-bg" />
            <span className="mt-[2vh] font-display text-[1.5vw] font-bold text-deep">Overnight</span>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">
              Last night's new SharePoint documents were already read, organized,
              and made searchable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
