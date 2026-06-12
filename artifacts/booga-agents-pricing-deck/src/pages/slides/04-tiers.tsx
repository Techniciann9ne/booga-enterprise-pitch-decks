import Confidential from "@/components/Confidential";

export default function Tiers() {
  return (
    <div className="slide relative flex flex-col bg-bg px-[6vw] py-[5vh]">
      <span className="absolute right-[6vw] top-[5vh]">
        <Confidential />
      </span>

      <p className="text-[0.9vw] font-medium uppercase tracking-[0.3em] text-accent">
        Tier deep-dives
      </p>
      <h2 className="mt-[1vh] font-display text-[2.7vw] font-bold leading-[1.04] tracking-tight text-text">
        What each plan includes.
      </h2>

      <div className="mt-[3.5vh] grid grid-cols-3 gap-[1.8vw]">
        {/* Team */}
        <div className="flex flex-col rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.6vw] font-bold text-text">Team</h3>
          <p className="mt-[0.6vh] text-[1vw] italic leading-snug text-deep">
            Your data, isolated. Your agents, working.
          </p>
          <p className="mt-[1.6vh] text-[0.95vw] leading-snug text-muted">
            For teams putting agentic AI to work on their own isolated data
            without committing to dedicated infrastructure on day one.
          </p>
          <ul className="mt-[1.8vh] space-y-[1.2vh] text-[0.95vw] leading-snug text-text">
            <li>Dedicated data plane — your own storage and vector database.</li>
            <li>Full agent experience, Intelligence Layer up to 50,000 memories.</li>
            <li>Heavy documents auto-routed to premium OCR; 2,000 pages/mo.</li>
          </ul>
          <p className="mt-auto pt-[2vh] text-[1vw] font-semibold text-accent">
            Isolation + capability at an accessible entry point.
          </p>
          <p className="text-[1.1vw] font-bold text-text">
            $149 / seat / mo · 10-seat min
          </p>
        </div>

        {/* Business */}
        <div className="flex flex-col rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <h3 className="font-display text-[1.6vw] font-bold text-text">
            Business
          </h3>
          <p className="mt-[0.6vh] text-[1vw] italic leading-snug text-deep">
            Add your own compute. Run it all day.
          </p>
          <p className="mt-[1.6vh] text-[0.95vw] leading-snug text-muted">
            For departments with heavy, always-on document and automation
            workloads that warrant their own properly-sized compute.
          </p>
          <ul className="mt-[1.8vh] space-y-[1.2vh] text-[0.95vw] leading-snug text-text">
            <li>Everything in Team, plus dedicated workers for heavy files.</li>
            <li>Compliance monitoring, advanced analytics, full integrations.</li>
            <li>250,000 memories; 10,000 OCR pages/mo; priority support.</li>
          </ul>
          <p className="mt-auto pt-[2vh] text-[1vw] font-semibold text-accent">
            You stop sharing compute — throughput and scale step up together.
          </p>
          <p className="text-[1.1vw] font-bold text-text">
            $249 / seat / mo · 25-seat min
          </p>
        </div>

        {/* Enterprise */}
        <div className="flex flex-col rounded-[1.2vw] border border-accent/40 bg-lightgreen/15 p-[1.8vw]">
          <h3 className="font-display text-[1.6vw] font-bold text-deep">
            Enterprise
          </h3>
          <p className="mt-[0.6vh] text-[1vw] italic leading-snug text-deep">
            The plan procurement and security sign off on.
          </p>
          <p className="mt-[1.6vh] text-[0.95vw] leading-snug text-muted">
            For regulated, security-conscious organizations with identity,
            encryption, networking, residency, and SLA requirements.
          </p>
          <ul className="mt-[1.8vh] space-y-[1.2vh] text-[0.95vw] leading-snug text-text">
            <li>Everything in Business, plus SSO/SCIM and customer-managed keys.</li>
            <li>Azure · AWS · GCP across 21 mirrored regions; region pinning.</li>
            <li>Contractual SLA, dedicated CSM, highest limits (1M memories).</li>
          </ul>
          <p className="mt-auto pt-[2vh] text-[1vw] font-semibold text-accent">
            Everything a security review and procurement gate on — delivered.
          </p>
          <p className="text-[1.1vw] font-bold text-text">
            $499 / seat / mo · 25-seat min
          </p>
        </div>
      </div>
    </div>
  );
}
