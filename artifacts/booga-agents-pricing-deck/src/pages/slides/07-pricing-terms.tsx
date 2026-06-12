import Confidential from "@/components/Confidential";

export default function PricingTerms() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[7vh]">
      <span className="absolute right-[6vw] top-[5vh]">
        <Confidential />
      </span>

      <p className="text-[0.9vw] font-medium uppercase tracking-[0.3em] text-accent">
        Pricing &amp; terms
      </p>
      <h2 className="mt-[1vh] font-display text-[2.9vw] font-bold leading-[1.04] tracking-tight text-text">
        Pricing and terms.
      </h2>

      <div className="mt-[4vh] grid grid-cols-[1.4fr_1fr] gap-[2.5vw]">
        <div className="space-y-[1.8vh] text-[1.15vw] leading-snug text-text">
          <p>
            <span className="font-semibold text-deep">Per-seat, per-month</span>,
            billed monthly or annually. Annual ≈ two months free (10× the
            monthly rate).
          </p>
          <p>
            <span className="font-semibold text-deep">Seat minimums:</span> Team
            10 · Business 25 · Enterprise 25 — contract-value framing, not a hard
            usage cap.
          </p>
          <p>
            <span className="font-semibold text-deep">Included premium OCR</span>{" "}
            is per provider, per month; overage is metered per page — it scales
            with you, no surprise cost.
          </p>
          <p>
            <span className="font-semibold text-deep">Currency</span> shown is
            USD; localized pricing and currencies can be added on request.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-[1.2vw] border border-accent/40 bg-lightgreen/15 p-[2.2vw]">
          <p className="text-[0.9vw] font-semibold uppercase tracking-[0.2em] text-accent">
            Enterprise is a starting point
          </p>
          <p className="mt-[1.4vh] text-[1.15vw] leading-snug text-text">
            List price is where the conversation begins — Enterprise terms are
            customizable.
          </p>
          <p className="mt-[2vh] text-[1.05vw] font-semibold leading-snug text-deep">
            Enterprise terms, residency, and localized currency are confirmed in
            a short scoping call.
          </p>
        </div>
      </div>
    </div>
  );
}
