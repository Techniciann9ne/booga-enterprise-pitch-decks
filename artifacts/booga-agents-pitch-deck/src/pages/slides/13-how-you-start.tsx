export default function HowYouStart() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        How you start
      </p>
      <h2 className="font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        Start where you are. Scale <span className="text-accent">when you're ready.</span>
      </h2>
      <p className="mt-[2.5vh] max-w-[56vw] text-[1.25vw] font-light leading-snug text-muted">
        Three plans, built around a simple ladder — your data isolated, then your
        own compute, then full enterprise identity and governance.
      </p>

      <div className="mt-[6vh] grid grid-cols-3 items-end gap-[2vw]">
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw]">
          <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-muted">Step 01</span>
          <h3 className="mt-[1.4vh] font-display text-[1.8vw] font-bold text-text">Team</h3>
          <p className="mt-[1.4vh] text-[1.1vw] leading-snug text-muted">Your data, isolated.</p>
        </div>
        <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[2vw] pb-[4vh]">
          <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-muted">Step 02</span>
          <h3 className="mt-[1.4vh] font-display text-[1.8vw] font-bold text-text">Business</h3>
          <p className="mt-[1.4vh] text-[1.1vw] leading-snug text-muted">
            Your data <span className="font-semibold text-text">and</span> your
            dedicated compute.
          </p>
        </div>
        <div className="rounded-[1.2vw] border-2 border-accent/60 bg-lightgreen/15 p-[2vw] pb-[6vh]">
          <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-accent">Step 03</span>
          <h3 className="mt-[1.4vh] font-display text-[1.8vw] font-bold text-deep">Enterprise</h3>
          <p className="mt-[1.4vh] text-[1.1vw] leading-snug text-muted">
            Your data, your compute, <span className="font-semibold text-text">and</span> the
            identity, security, and governance bundle procurement signs off on.
          </p>
        </div>
      </div>

      <p className="mt-[4vh] text-[1.05vw] text-muted">
        Detailed plans &amp; pricing available on request.
      </p>
    </div>
  );
}
