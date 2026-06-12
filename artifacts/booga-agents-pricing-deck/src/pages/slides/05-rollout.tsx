import Confidential from "@/components/Confidential";

export default function Rollout() {
  return (
    <div className="slide relative flex flex-col bg-bg px-[6vw] py-[5vh]">
      <span className="absolute right-[6vw] top-[5vh]">
        <Confidential />
      </span>

      <p className="text-[0.9vw] font-medium uppercase tracking-[0.3em] text-accent">
        What a rollout looks like
      </p>
      <h2 className="mt-[1vh] font-display text-[2.7vw] font-bold leading-[1.04] tracking-tight text-text">
        What a firm like yours would actually buy.
      </h2>
      <p className="mt-[1.4vh] max-w-[64vw] text-[1.05vw] font-light leading-snug text-muted">
        A worked example so you can self-locate.{" "}
        <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.7vw] py-[0.25vh] text-[0.95vw] text-accent">
          [legal example — swap for the prospect&apos;s sector]
        </span>{" "}
        A law firm connecting its SharePoint estate, processing scanned and
        multi-language archives, and running client-facing drafting agents.
      </p>

      <div className="mt-[3vh] grid grid-cols-[1.25fr_1fr] gap-[2vw]">
        <div className="rounded-[1.2vw] border border-accent/40 bg-lightgreen/15 p-[2vw]">
          <p className="text-[0.9vw] font-semibold uppercase tracking-[0.2em] text-accent">
            Recommended for you
          </p>
          <h3 className="mt-[0.8vh] font-display text-[1.9vw] font-bold text-deep">
            Enterprise
          </h3>
          <ul className="mt-[1.8vh] space-y-[1.3vh] text-[0.98vw] leading-snug text-text">
            <li>
              <span className="font-semibold">Data residency / region pinning</span>{" "}
              — pin workloads to the region policy requires.
            </li>
            <li>
              <span className="font-semibold">SSO / SCIM</span> — identity and
              provisioning your IT team manages.
            </li>
            <li>
              <span className="font-semibold">Customer-managed keys</span> —
              encryption your security review gates on.
            </li>
            <li>
              <span className="font-semibold">Contractual SLA + dedicated CSM</span>{" "}
              — and the highest document/memory limits.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[1.6vh]">
          <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
            <p className="text-[1.05vw] font-bold text-text">
              Step-down option: Business
            </p>
            <p className="mt-[0.8vh] text-[0.92vw] leading-snug text-muted">
              If SSO and customer-managed keys aren&apos;t day-one requirements
              and Azure regions suffice — revisit Enterprise as the rollout
              scales.
            </p>
          </div>
          <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
            <p className="text-[1.05vw] font-bold text-text">Seats</p>
            <p className="mt-[0.8vh] text-[0.92vw] leading-snug text-muted">
              Start with the core practice group, then expand firm-wide. Seat
              minimums frame contract value — not a usage cap.
            </p>
          </div>
          <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
            <p className="text-[1.05vw] font-bold text-text">Heavy documents</p>
            <p className="mt-[0.8vh] text-[0.92vw] leading-snug text-muted">
              Scanned and large archives are handled — premium OCR included per
              tier, metered beyond. It scales with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
