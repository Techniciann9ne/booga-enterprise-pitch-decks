export default function BuiltOnTrust() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
        Built on trust
      </p>
      <h2 className="font-display text-[3vw] font-bold leading-[1.08] tracking-tight text-text">
        Your data. Your stack. <span className="text-accent">Your rules.</span>
      </h2>
      <p className="mt-[2.5vh] max-w-[56vw] text-[1.25vw] font-light leading-snug text-muted">
        Enterprise isolation, governance, and audit aren't an add-on — they're
        the foundation.
      </p>

      <div className="mt-[5vh] grid grid-cols-2 gap-[1.8vw]">
        <div className="flex gap-[1.4vw] rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <svg viewBox="0 0 40 40" className="h-[2.4vw] w-[2.4vw] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="6" width="24" height="8" rx="2" /><rect x="8" y="16" width="24" height="8" rx="2" /><rect x="8" y="26" width="24" height="8" rx="2" /></svg>
          <div>
            <h3 className="font-display text-[1.4vw] font-bold text-text">Isolated by architecture</h3>
            <p className="mt-[0.8vh] text-[1.05vw] leading-snug text-muted">
              Your own database, your own search index, your own region — not a
              shared table with your name on a row.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.4vw] rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <svg viewBox="0 0 40 40" className="h-[2.4vw] w-[2.4vw] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="18" width="22" height="15" rx="2" /><path d="M13 18v-4a7 7 0 0 1 14 0" /></svg>
          <div>
            <h3 className="font-display text-[1.4vw] font-bold text-text">One-way and read-only at the source</h3>
            <p className="mt-[0.8vh] text-[1.05vw] leading-snug text-muted">
              Your systems of record are never modified.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.4vw] rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <svg viewBox="0 0 40 40" className="h-[2.4vw] w-[2.4vw] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 6h13l6 6v22H11z" /><path d="M15 20l3 3 6-6" /></svg>
          <div>
            <h3 className="font-display text-[1.4vw] font-bold text-text">Audited end to end</h3>
            <p className="mt-[0.8vh] text-[1.05vw] leading-snug text-muted">
              Every meaningful action is recorded and reportable — GDPR, ISO
              27001, and more, on demand.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.4vw] rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
          <svg viewBox="0 0 40 40" className="h-[2.4vw] w-[2.4vw] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="14" cy="16" r="6" /><path d="M14 22v12M14 22l8-2" /><circle cx="28" cy="14" r="3" /></svg>
          <div>
            <h3 className="font-display text-[1.4vw] font-bold text-text">Governed access</h3>
            <p className="mt-[0.8vh] text-[1.05vw] leading-snug text-muted">
              Roles, permissions, and oversight built in from day one.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[4vh] flex items-center gap-[1.5vw]">
        <span className="text-[0.85vw] font-medium uppercase tracking-[0.2em] text-muted">
          Compliance reporting for
        </span>
        <span className="text-[1.05vw] font-semibold tracking-wide text-deep">SOX</span>
        <span className="text-stone">·</span>
        <span className="text-[1.05vw] font-semibold tracking-wide text-deep">GDPR</span>
        <span className="text-stone">·</span>
        <span className="text-[1.05vw] font-semibold tracking-wide text-deep">HIPAA</span>
        <span className="text-stone">·</span>
        <span className="text-[1.05vw] font-semibold tracking-wide text-deep">ISO 27001</span>
        <span className="text-stone">·</span>
        <span className="text-[1.05vw] font-semibold tracking-wide text-deep">PCI DSS</span>
      </div>
    </div>
  );
}
