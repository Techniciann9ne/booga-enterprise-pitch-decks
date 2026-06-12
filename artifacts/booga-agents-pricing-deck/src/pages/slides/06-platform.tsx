import Confidential from "@/components/Confidential";

export default function Platform() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[6vw] py-[6vh]">
      <span className="absolute right-[6vw] top-[5vh]">
        <Confidential />
      </span>

      <p className="text-[0.9vw] font-medium uppercase tracking-[0.3em] text-accent">
        What every tier includes
      </p>
      <h2 className="mt-[1vh] font-display text-[2.7vw] font-bold leading-[1.04] tracking-tight text-text">
        Every plan is built on the same platform.
      </h2>
      <p className="mt-[1.4vh] max-w-[60vw] text-[1.05vw] font-light leading-snug text-muted">
        Even the entry tier is the full platform — what a team builds on Team
        runs unchanged on Enterprise.
      </p>

      <div className="mt-[3.5vh] grid grid-cols-3 gap-[1.6vw]">
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            Agents as the operating layer
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            Describe a workflow in plain English; the platform drafts, previews,
            and deploys it. One agent reaches every plugin you&apos;ve enabled.
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            An Intelligence Layer that remembers
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            Insights, decisions, and entities are captured, connected in a
            knowledge graph, and surfaced back proactively.
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            Tenant isolation by architecture
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            Your own data plane — storage plus vector index — with scoped audit
            and events. Separation by design, not middleware.
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            Enterprise integration surface
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            600+ documented REST endpoints, signed webhooks, a transactional
            event bus, and first-party connectors.
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            Governance built in
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            Audit and compliance tooling, multi-org management, enterprise
            reporting and scheduling — across all corporate tiers.
          </p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">
            Embeddable, branded bots
          </h3>
          <p className="mt-[1vh] text-[0.92vw] leading-snug text-muted">
            Publish customer-facing assistants grounded in your own knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
