export default function AppendixIntegrations() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[1.5vh] text-[0.85vw] font-medium uppercase tracking-[0.3em] text-stone">
        Appendix A2
      </p>
      <h2 className="font-display text-[2.6vw] font-bold leading-[1.1] tracking-tight text-text">
        Integrations &amp; <span className="text-accent">connectors.</span>
      </h2>
      <p className="mt-[2vh] max-w-[56vw] text-[1.15vw] font-light leading-snug text-muted">
        Booga Agents meets your stack where it lives — with deep connectors and an
        open API for everything else.
      </p>

      <div className="mt-[5vh] grid grid-cols-2 gap-[3vw]">
        <div>
          <h3 className="mb-[2vh] text-[0.9vw] font-semibold uppercase tracking-[0.2em] text-muted">Connectors</h3>
          <div className="flex flex-wrap gap-[0.8vw]">
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">SharePoint / Microsoft 365</span>
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">Salesforce</span>
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">NetSuite</span>
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">Slack</span>
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">Generic REST / webhook</span>
            <span className="rounded-full border border-stone/60 bg-white/60 px-[1.1vw] py-[0.5vh] text-[1vw] text-text">Third-party legal data APIs</span>
          </div>
          <div className="mt-[2.5vh]">
            <span className="rounded-md border border-dashed border-accent/50 bg-lightgreen/15 px-[0.8vw] py-[0.4vh] text-[0.9vw] text-deep">
              [Confirm exact connector wording with the product team before print]
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[1.6vw]">
          <div className="rounded-[1vw] border-2 border-accent/50 bg-lightgreen/15 p-[1.8vw]">
            <p className="font-display text-[2.6vw] font-bold leading-none text-deep">600+</p>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">documented REST endpoints to build against.</p>
          </div>
          <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.8vw]">
            <p className="font-display text-[2.6vw] font-bold leading-none text-deep">11</p>
            <p className="mt-[1vh] text-[1.05vw] leading-snug text-muted">plugins extend agents across systems and data sources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
