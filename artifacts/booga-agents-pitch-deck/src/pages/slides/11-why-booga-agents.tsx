export default function WhyBoogaAgents() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        Why Booga Agents vs. the alternatives
      </p>
      <h2 className="font-display text-[2.9vw] font-bold leading-[1.08] tracking-tight text-text">
        The build-vs-buy-vs-risk decision — <span className="text-accent">settled.</span>
      </h2>
      <p className="mt-[2vh] max-w-[58vw] text-[1.15vw] font-light leading-snug text-muted">
        Generic copilots don't know your business. Building it yourself takes
        years. Point tools don't talk to each other. Booga Agents is one
        platform, in your control.
      </p>

      <div className="mt-[4.5vh] overflow-hidden rounded-[1.2vw] border border-stone/50">
        <div className="grid grid-cols-5 bg-white/70 text-[0.95vw] font-semibold text-muted">
          <div className="p-[1.2vw]" />
          <div className="p-[1.2vw] text-center">Generic AI copilots</div>
          <div className="p-[1.2vw] text-center">Build it yourself</div>
          <div className="p-[1.2vw] text-center">Point tools</div>
          <div className="bg-deep p-[1.2vw] text-center text-bg">Booga Agents</div>
        </div>

        <div className="grid grid-cols-5 border-t border-stone/40 text-[1vw]">
          <div className="p-[1.2vw] font-medium text-text">Knows your documents</div>
          <div className="p-[1.2vw] text-center text-muted">No</div>
          <div className="p-[1.2vw] text-center text-muted">Maybe, eventually</div>
          <div className="p-[1.2vw] text-center text-muted">Partly</div>
          <div className="bg-lightgreen/15 p-[1.2vw] text-center font-semibold text-accent">✓ Yes</div>
        </div>
        <div className="grid grid-cols-5 border-t border-stone/40 bg-white/40 text-[1vw]">
          <div className="p-[1.2vw] font-medium text-text">Your data stays yours</div>
          <div className="p-[1.2vw] text-center text-muted">No</div>
          <div className="p-[1.2vw] text-center text-muted">Yes</div>
          <div className="p-[1.2vw] text-center text-muted">Varies</div>
          <div className="bg-lightgreen/15 p-[1.2vw] text-center font-semibold text-accent">✓ Yes</div>
        </div>
        <div className="grid grid-cols-5 border-t border-stone/40 text-[1vw]">
          <div className="p-[1.2vw] font-medium text-text">Time to value</div>
          <div className="p-[1.2vw] text-center text-muted">Fast but shallow</div>
          <div className="p-[1.2vw] text-center text-muted">Years</div>
          <div className="p-[1.2vw] text-center text-muted">Medium</div>
          <div className="bg-lightgreen/15 p-[1.2vw] text-center font-semibold text-accent">Weeks</div>
        </div>
        <div className="grid grid-cols-5 border-t border-stone/40 bg-white/40 text-[1vw]">
          <div className="p-[1.2vw] font-medium text-text">One governed platform</div>
          <div className="p-[1.2vw] text-center text-muted">No</div>
          <div className="p-[1.2vw] text-center text-muted">You maintain it</div>
          <div className="p-[1.2vw] text-center text-muted">No</div>
          <div className="bg-lightgreen/15 p-[1.2vw] text-center font-semibold text-accent">✓ Yes</div>
        </div>
      </div>
    </div>
  );
}
