import Spine from "@/components/Spine";

export default function Act() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <div className="flex items-start justify-between">
        <div className="max-w-[60vw]">
          <h2 className="font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
            Now your knowledge <span className="text-accent">works for you.</span>
          </h2>
          <p className="mt-[2.5vh] max-w-[52vw] text-[1.25vw] font-light leading-snug text-muted">
            Agents do real, repeatable work on top of your organized knowledge —
            described in plain English, running on their own.
          </p>
        </div>
        <Spine active="act" />
      </div>

      <div className="mt-[6vh] grid grid-cols-3 gap-[2vw]">
        <div className="flex flex-col rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="12" width="36" height="24" rx="3" />
            <path d="M6 15l18 12 18-12" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.5vw] font-bold text-text">Draft client replies, instantly</h3>
          <p className="mt-[1.2vh] flex-1 text-[1.05vw] leading-snug text-muted">
            An agent watches the inbox, finds the relevant precedent and history,
            and drafts an informed response for a lawyer to review.
          </p>
          <span className="mt-[2vh] inline-flex w-fit items-center rounded-full bg-lightgreen/25 px-[0.9vw] py-[0.4vh] text-[0.85vw] font-medium text-deep">
            hours → minutes
          </span>
        </div>

        <div className="flex flex-col rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="10" y="6" width="22" height="28" rx="3" />
            <rect x="18" y="14" width="22" height="28" rx="3" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.5vw] font-bold text-text">Draft documents from your own precedents</h3>
          <p className="mt-[1.2vh] flex-1 text-[1.05vw] leading-snug text-muted">
            Need an SPA? An agent drafts it from the most similar agreements in
            your archive.
          </p>
          <span className="mt-[2vh] inline-flex w-fit items-center rounded-full bg-lightgreen/25 px-[0.9vw] py-[0.4vh] text-[0.85vw] font-medium text-deep">
            days → hours
          </span>
        </div>

        <div className="flex flex-col rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="14" cy="24" r="6" />
            <circle cx="36" cy="12" r="5" />
            <circle cx="36" cy="36" r="5" />
            <path d="M19 21l12-6M19 27l12 6" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.5vw] font-bold text-text">Bring in outside data</h3>
          <p className="mt-[1.2vh] flex-1 text-[1.05vw] leading-snug text-muted">
            Agents connect to third-party legal data sources and fold the results
            into the work.
          </p>
          <span className="mt-[2vh] inline-flex w-fit items-center rounded-full bg-lightgreen/25 px-[0.9vw] py-[0.4vh] text-[0.85vw] font-medium text-deep">
            human-in-the-loop
          </span>
        </div>
      </div>

      <p className="mt-[4vh] text-[1vw] text-muted">
        <span className="font-semibold text-deep">Agents draft. Professionals decide.</span>{" "}
        You describe the task once, in plain English — it runs from then on.
      </p>
    </div>
  );
}
