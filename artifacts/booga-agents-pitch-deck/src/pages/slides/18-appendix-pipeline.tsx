export default function AppendixPipeline() {
  return (
    <div className="slide relative flex flex-col justify-center bg-bg px-[7vw] py-[8vh]">
      <p className="mb-[1.5vh] text-[0.85vw] font-medium uppercase tracking-[0.3em] text-stone">
        Appendix A4
      </p>
      <h2 className="font-display text-[2.6vw] font-bold leading-[1.1] tracking-tight text-text">
        The document <span className="text-accent">pipeline.</span>
      </h2>
      <p className="mt-[2vh] max-w-[58vw] text-[1.15vw] font-light leading-snug text-muted">
        Every file, in every format, in your languages — turned into clean,
        searchable, organized knowledge with human review.
      </p>

      <div className="mt-[6vh] flex items-stretch gap-[1vw]">
        <div className="flex-1 rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <span className="text-[0.8vw] font-bold uppercase tracking-[0.18em] text-accent">01 Ingest</span>
          <p className="mt-[1.2vh] text-[1.05vw] leading-snug text-text">Born-digital PDFs, scanned files, legacy Office docs, emails.</p>
        </div>
        <div className="flex items-center font-display text-[1.6vw] font-light text-accent">→</div>
        <div className="flex-1 rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <span className="text-[0.8vw] font-bold uppercase tracking-[0.18em] text-accent">02 Extract</span>
          <p className="mt-[1.2vh] text-[1.05vw] leading-snug text-text">Multilingual OCR turns even decades-old scans into clean text.</p>
        </div>
        <div className="flex items-center font-display text-[1.6vw] font-light text-accent">→</div>
        <div className="flex-1 rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <span className="text-[0.8vw] font-bold uppercase tracking-[0.18em] text-accent">03 Organize</span>
          <p className="mt-[1.2vh] text-[1.05vw] leading-snug text-text">Auto-categorization discovers natural groupings across the estate.</p>
        </div>
        <div className="flex items-center font-display text-[1.6vw] font-light text-accent">→</div>
        <div className="flex-1 rounded-[1vw] border-2 border-accent/50 bg-lightgreen/15 p-[1.6vw]">
          <span className="text-[0.8vw] font-bold uppercase tracking-[0.18em] text-deep">04 Review</span>
          <p className="mt-[1.2vh] text-[1.05vw] leading-snug text-text">Your team approves categories — humans stay in control.</p>
        </div>
        <div className="flex items-center font-display text-[1.6vw] font-light text-accent">→</div>
        <div className="flex-1 rounded-[1vw] border border-stone/50 bg-white/60 p-[1.6vw]">
          <span className="text-[0.8vw] font-bold uppercase tracking-[0.18em] text-accent">05 Search</span>
          <p className="mt-[1.2vh] text-[1.05vw] leading-snug text-text">Everything becomes searchable knowledge agents can act on.</p>
        </div>
      </div>

      <p className="mt-[5vh] text-[1vw] text-muted">
        New documents flow through the same pipeline automatically — the knowledge
        base stays current with no manual filing.
      </p>
    </div>
  );
}
