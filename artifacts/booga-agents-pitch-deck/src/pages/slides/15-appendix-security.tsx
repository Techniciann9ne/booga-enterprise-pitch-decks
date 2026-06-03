export default function AppendixSecurity() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[1.5vh] text-[0.85vw] font-medium uppercase tracking-[0.3em] text-stone">
        Appendix A1
      </p>
      <h2 className="font-display text-[2.6vw] font-bold leading-[1.1] tracking-tight text-text">
        Security &amp; <span className="text-accent">isolation.</span>
      </h2>
      <p className="mt-[2vh] max-w-[56vw] text-[1.15vw] font-light leading-snug text-muted">
        Isolation isn't a setting you switch on — it's how every tenant is built.
      </p>

      <div className="mt-[5vh] grid grid-cols-3 gap-[1.6vw]">
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Per-tenant isolation</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">Your own database, your own vector index, your own region — never a shared store.</p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Customer-managed keys</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">Hold your own encryption keys; revoke access on your terms.</p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Private networking</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">No exposure to the public internet; connect within your own network boundary.</p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">One-way read-only sync</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">Your systems of record are mirrored, never modified or written back.</p>
        </div>
        <div className="rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-text">Audit retention</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">Every meaningful action recorded, with a 7-year default retention window.</p>
        </div>
        <div className="rounded-[1vw] border-2 border-accent/50 bg-lightgreen/15 p-[1.6vw]">
          <h3 className="font-display text-[1.3vw] font-bold text-deep">Compliance reporting</h3>
          <p className="mt-[1vh] text-[1vw] leading-snug text-muted">Reporting support for SOX, GDPR, HIPAA, ISO 27001 and PCI DSS, on demand.</p>
        </div>
      </div>
    </div>
  );
}
