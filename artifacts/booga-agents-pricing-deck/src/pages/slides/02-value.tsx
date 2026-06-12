import Confidential from "@/components/Confidential";

export default function Value() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <span className="absolute right-[7vw] top-[6vh]">
        <Confidential />
      </span>

      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        The value frame
      </p>
      <h2 className="font-display text-[3.2vw] font-bold leading-[1.06] tracking-tight text-text">
        Price it against the hours it gives back.
      </h2>
      <p className="mt-[2.5vh] max-w-[52vw] text-[1.3vw] font-light leading-snug text-muted">
        A single senior professional&apos;s loaded hour against one Booga Agents
        seat. Save even a few expert hours per person each month and the seat
        pays for itself many times over.
      </p>

      <div className="mt-[5vh] grid grid-cols-[1fr_auto_1fr] items-center gap-[2.5vw]">
        <div className="rounded-[1.4vw] border border-stone/50 bg-white/60 p-[2.2vw]">
          <p className="text-[0.95vw] font-semibold uppercase tracking-[0.2em] text-deep">
            Value created
          </p>
          <div className="mt-[2vh] space-y-[1.6vh] text-[1.2vw] leading-snug text-text">
            <p>
              One senior professional hour ≈{" "}
              <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-accent">
                [€X]
              </span>
            </p>
            <p>
              Booga Agents saves ≈{" "}
              <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-accent">
                [N]
              </span>{" "}
              hours / person / month
            </p>
            <p className="font-semibold">
              Monthly value ≈{" "}
              <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-accent">
                [€X × N]
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-deep">
          <svg
            viewBox="0 0 80 80"
            className="h-[5vw] w-[5vw] text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M40 12v56" />
            <path d="M16 24h48" />
            <path d="M16 24l-8 18a12 12 0 0 0 16 0z" />
            <path d="M64 24l-8 18a12 12 0 0 0 16 0z" />
            <path d="M28 68h24" />
          </svg>
          <span className="mt-[1.2vh] text-[0.85vw] font-semibold uppercase tracking-[0.2em] text-muted">
            Weigh it
          </span>
        </div>

        <div className="rounded-[1.4vw] border border-stone/50 bg-white/60 p-[2.2vw]">
          <p className="text-[0.95vw] font-semibold uppercase tracking-[0.2em] text-deep">
            Seat cost
          </p>
          <div className="mt-[2vh] space-y-[1.6vh] text-[1.2vw] leading-snug text-text">
            <p>
              Booga Agents seat ≈{" "}
              <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-accent">
                [tier price]
              </span>{" "}
              / seat / month
            </p>
            <p>Team $149 · Business $249 · Enterprise $499</p>
            <p className="font-semibold text-accent">
              Payback:{" "}
              <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-accent">
                [ratio]
              </span>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-[4vh] text-[0.95vw] italic text-muted">
        A model the buyer fills in with their own assumptions — conservative
        defaults, no claims we can&apos;t support.
      </p>
    </div>
  );
}
