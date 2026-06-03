export default function AppendixFAQ() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[1.5vh] text-[0.85vw] font-medium uppercase tracking-[0.3em] text-stone">
        Appendix A5
      </p>
      <h2 className="font-display text-[2.6vw] font-bold leading-[1.1] tracking-tight text-text">
        FAQ &amp; <span className="text-accent">objection handling.</span>
      </h2>
      <p className="mt-[2vh] max-w-[58vw] text-[1.05vw] font-light leading-snug text-muted">
        Answers to be supplied and approved by Booga Enterprise — placeholders
        below, never invented.
      </p>

      <div className="mt-[4.5vh] grid grid-cols-2 gap-[1.6vw]">
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Does our data train your models?</h3>
          <p className="mt-[1.2vh]">
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.3vh] text-[0.95vw] text-deep">[Approved answer]</span>
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">What if we lose connectivity?</h3>
          <p className="mt-[1.2vh]">
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.3vh] text-[0.95vw] text-deep">[Approved answer]</span>
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Can we self-host?</h3>
          <p className="mt-[1.2vh]">
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.3vh] text-[0.95vw] text-deep">[Approved answer]</span>
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">How long to onboard?</h3>
          <p className="mt-[1.2vh]">
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.3vh] text-[0.95vw] text-deep">[Approved answer]</span>
          </p>
        </div>
      </div>
    </div>
  );
}
