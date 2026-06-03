export default function Outcome() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[9vh]">
      <div className="flex items-baseline gap-[1vw]">
        <p className="text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
          One outcome
        </p>
        <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vw] text-[0.85vw] text-accent">
          [legal — swap for the recipient's team]
        </span>
      </div>
      <h2 className="mt-[2vh] max-w-[62vw] font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        A client email at 9:02. A drafted, grounded reply by{" "}
        <span className="text-accent">9:15.</span>
      </h2>

      <div className="mt-[6vh] grid grid-cols-[1fr_auto_1fr] items-stretch gap-[2vw]">
        <div className="rounded-[1.4vw] border border-stone/50 bg-white/60 p-[2.4vw]">
          <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-muted">9:02 — Before</span>
          <p className="mt-[1.6vh] font-display text-[1.6vw] font-bold leading-tight text-text">
            A client question lands.
          </p>
          <p className="mt-[1.4vh] text-[1.1vw] leading-snug text-muted">
            The answer is somewhere in the matter history and a dozen old
            precedents. Finding it by hand takes the rest of the morning.
          </p>
        </div>

        <div className="flex items-center font-display text-[2.6vw] font-light text-accent">→</div>

        <div className="rounded-[1.4vw] border-2 border-deep/30 bg-lightgreen/15 p-[2.4vw]">
          <span className="text-[0.85vw] font-bold uppercase tracking-[0.2em] text-deep">9:15 — After</span>
          <p className="mt-[1.6vh] font-display text-[1.6vw] font-bold leading-tight text-text">
            A drafted reply, ready to review.
          </p>
          <p className="mt-[1.4vh] text-[1.1vw] leading-snug text-muted">
            Agents pull the relevant history and precedents, draft a grounded
            response, and hand it to a lawyer to review and send.
          </p>
        </div>
      </div>

      <p className="mt-[4vh] text-[1.05vw] font-light text-muted">
        The work happens in minutes. The judgment stays with your people.
      </p>
    </div>
  );
}
