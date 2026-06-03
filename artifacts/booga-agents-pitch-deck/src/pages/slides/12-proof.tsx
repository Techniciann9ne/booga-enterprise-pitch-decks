export default function Proof() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        Proof / outcomes
      </p>
      <h2 className="font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        What changes when the knowledge <span className="text-accent">works for you.</span>
      </h2>
      <div className="mt-[2.5vh] max-w-[58vw]">
        <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.8vw] py-[0.4vh] text-[1.05vw] font-light text-deep">
          [Design-partner reference — confirm wording &amp; logo permission. Default: "Built with a leading law firm as a design partner."]
        </span>
      </div>

      <div className="mt-[5vh] grid grid-cols-3 gap-[2vw]">
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <span className="font-display text-[3vw] font-bold leading-none text-lightgreen">"</span>
          <p className="mt-[-1vh] text-[1.15vw] font-medium leading-snug text-text">
            We replaced a multi-step weekly routine with a single sentence to an
            agent.
          </p>
        </div>
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <span className="font-display text-[3vw] font-bold leading-none text-lightgreen">"</span>
          <p className="mt-[-1vh] text-[1.15vw] font-medium leading-snug text-text">
            Our experts stopped re-drafting the same documents from scratch.
          </p>
        </div>
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <span className="font-display text-[3vw] font-bold leading-none text-lightgreen">"</span>
          <p className="mt-[-1vh] text-[1.15vw] font-medium leading-snug text-text">
            When a question comes in, the answer is already drafted — grounded in
            our own files.
          </p>
        </div>
      </div>

      <div className="mt-[4vh] flex items-center gap-[1vw]">
        <span className="text-[0.9vw] font-medium uppercase tracking-[0.2em] text-muted">
          Verified metric
        </span>
        <span className="rounded-md border border-dashed border-stone bg-white/60 px-[0.9vw] py-[0.4vh] text-[0.95vw] text-muted">
          [hours saved per week — add only if verified]
        </span>
        <span className="rounded-md border border-dashed border-stone bg-white/60 px-[0.9vw] py-[0.4vh] text-[0.95vw] text-muted">
          [faster turnaround % — add only if verified]
        </span>
      </div>
    </div>
  );
}
