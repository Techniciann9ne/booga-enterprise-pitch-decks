export default function MeetBoogaAgents() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        Meet Booga Agents
      </p>
      <h2 className="max-w-[62vw] font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        Booga Agents puts AI to work on your knowledge —{" "}
        <span className="text-accent">inside your own walls.</span>
      </h2>
      <p className="mt-[2.5vh] max-w-[58vw] text-[1.25vw] font-light leading-snug text-muted">
        Connect your documents. The platform organizes them automatically. Then
        agents do the real work — in an environment that's isolated, governed,
        and yours.
      </p>

      {/* Connect -> Understand -> Act inside a Trust border */}
      <div className="mt-[6vh] rounded-[1.6vw] border-2 border-deep/30 bg-white/40 p-[2.5vw]">
        <div className="mb-[2.5vh] flex items-center justify-between">
          <span className="text-[1vw] font-semibold uppercase tracking-[0.25em] text-deep">
            Trust
          </span>
          <span className="text-[0.9vw] text-muted">
            Isolated · governed · audited end to end
          </span>
        </div>
        <div className="flex items-stretch gap-[1.5vw]">
          <div className="flex-1 rounded-[1vw] bg-bg p-[1.8vw]">
            <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-accent">Connect</span>
            <p className="mt-[1.2vh] text-[1.15vw] font-medium leading-snug text-text">
              We come to your data — one-way and read-only.
            </p>
          </div>
          <div className="flex items-center font-display text-[2vw] font-light text-accent">→</div>
          <div className="flex-1 rounded-[1vw] bg-bg p-[1.8vw]">
            <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-accent">Understand</span>
            <p className="mt-[1.2vh] text-[1.15vw] font-medium leading-snug text-text">
              Documents become organized, searchable knowledge.
            </p>
          </div>
          <div className="flex items-center font-display text-[2vw] font-light text-accent">→</div>
          <div className="flex-1 rounded-[1vw] bg-bg p-[1.8vw]">
            <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-accent">Act</span>
            <p className="mt-[1.2vh] text-[1.15vw] font-medium leading-snug text-text">
              Agents do the real work, on your terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
