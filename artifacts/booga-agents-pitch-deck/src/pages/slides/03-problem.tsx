export default function Problem() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[9vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        The problem
      </p>
      <h2 className="max-w-[60vw] font-display text-[3.2vw] font-bold leading-[1.08] tracking-tight text-text">
        Your knowledge is your edge. Today it's{" "}
        <span className="text-accent">trapped.</span>
      </h2>
      <p className="mt-[2.5vh] max-w-[52vw] text-[1.3vw] font-light leading-snug text-muted">
        Decades of documents, precedents, and client history — locked in
        folders, unsearchable, re-created by hand every week.
      </p>

      <div className="mt-[6vh] grid grid-cols-3 gap-[2vw]">
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="10" y="20" width="28" height="20" rx="3" />
            <path d="M16 20v-5a8 8 0 0 1 16 0v5" />
            <circle cx="24" cy="30" r="2.5" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.6vw] font-bold text-text">Trapped</h3>
          <p className="mt-[1.2vh] text-[1.1vw] leading-snug text-muted">
            The answer exists in SharePoint, but no one can find it in time.
          </p>
        </div>

        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="24" cy="24" r="14" />
            <path d="M24 16v8l5 3" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.6vw] font-bold text-text">Expensive</h3>
          <p className="mt-[1.2vh] text-[1.1vw] leading-snug text-muted">
            Your highest-paid people spend hours searching and drafting instead
            of advising.
          </p>
        </div>

        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <svg viewBox="0 0 48 48" className="h-[2.6vw] w-[2.6vw] text-accent" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M24 8 8 16v10c0 9 7 13 16 16 9-3 16-7 16-16V16L24 8Z" />
            <path d="M24 20v8" />
            <circle cx="24" cy="33" r="1.6" fill="currentColor" />
          </svg>
          <h3 className="mt-[2vh] font-display text-[1.6vw] font-bold text-text">Risky</h3>
          <p className="mt-[1.2vh] text-[1.1vw] leading-snug text-muted">
            Every workaround — forwarding files, pasting into a public chatbot —
            is an exposure waiting to happen.
          </p>
        </div>
      </div>
    </div>
  );
}
