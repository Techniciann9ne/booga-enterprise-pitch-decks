export default function AppendixAgents() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[1.5vh] text-[0.85vw] font-medium uppercase tracking-[0.3em] text-stone">
        Appendix A3
      </p>
      <h2 className="font-display text-[2.6vw] font-bold leading-[1.1] tracking-tight text-text">
        How agents are built. <span className="text-accent">Describe it, don't build it.</span>
      </h2>
      <p className="mt-[2vh] max-w-[58vw] text-[1.15vw] font-light leading-snug text-muted">
        You write the task once, in plain English. The platform turns it into a
        running workflow — no code, no integration project.
      </p>

      <div className="mt-[5vh] flex items-center gap-[2vw]">
        <div className="w-[30vw] rounded-[1vw] border border-stone/50 bg-white/70 p-[1.8vw]">
          <p className="mb-[1.2vh] text-[0.8vw] font-semibold uppercase tracking-[0.2em] text-muted">Plain English</p>
          <p className="text-[1.15vw] leading-snug text-text">
            "When a client email arrives, find the matter history and relevant
            precedents, then draft a reply for review."
          </p>
        </div>

        <svg viewBox="0 0 80 24" className="w-[5vw] shrink-0 text-accent" fill="none" aria-hidden="true">
          <path d="M4 12 H68 M68 12 l-10 -7 M68 12 l-10 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="flex-1 rounded-[1vw] border-2 border-accent/50 bg-lightgreen/15 p-[1.8vw]">
          <p className="mb-[1.6vh] text-[0.8vw] font-semibold uppercase tracking-[0.2em] text-accent">Running workflow</p>
          <div className="flex flex-col gap-[1.2vh]">
            <div className="flex items-center gap-[0.8vw]"><span className="flex h-[1.6vw] w-[1.6vw] items-center justify-center rounded-full bg-deep text-[0.85vw] font-bold text-bg">1</span><span className="text-[1.05vw] text-text">Trigger on inbox</span></div>
            <div className="flex items-center gap-[0.8vw]"><span className="flex h-[1.6vw] w-[1.6vw] items-center justify-center rounded-full bg-deep text-[0.85vw] font-bold text-bg">2</span><span className="text-[1.05vw] text-text">Retrieve matter history &amp; precedents</span></div>
            <div className="flex items-center gap-[0.8vw]"><span className="flex h-[1.6vw] w-[1.6vw] items-center justify-center rounded-full bg-deep text-[0.85vw] font-bold text-bg">3</span><span className="text-[1.05vw] text-text">Draft grounded reply with citations</span></div>
            <div className="flex items-center gap-[0.8vw]"><span className="flex h-[1.6vw] w-[1.6vw] items-center justify-center rounded-full bg-accent text-[0.85vw] font-bold text-bg">4</span><span className="text-[1.05vw] font-medium text-deep">Route to lawyer for review</span></div>
          </div>
        </div>
      </div>

      <p className="mt-[4vh] text-[1vw] text-muted">
        Agents draft. Professionals decide. Every step is logged and reviewable.
      </p>
    </div>
  );
}
