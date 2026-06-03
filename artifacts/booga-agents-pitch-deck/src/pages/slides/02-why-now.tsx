export default function WhyNow() {
  return (
    <div className="slide relative grid grid-cols-2 gap-[5vw] bg-bg px-[7vw] py-[9vh]">
      <div className="flex flex-col justify-center">
        <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-accent">
          Why now
        </p>
        <h2 className="font-display text-[3.2vw] font-bold leading-[1.08] tracking-tight text-text">
          AI is finally good enough to do the work. Most enterprises still{" "}
          <span className="text-accent">can't use it.</span>
        </h2>
        <p className="mt-[3vh] max-w-[34vw] text-[1.3vw] font-light leading-snug text-muted">
          The tools are powerful. The barrier is trust, control, and knowledge
          that's everywhere but never usable.
        </p>

        <div className="mt-[4.5vh] flex flex-col gap-[2.2vh]">
          <div className="flex gap-[1.2vw]">
            <span className="font-display text-[1.4vw] font-bold text-stone">01</span>
            <p className="text-[1.15vw] leading-snug text-text">
              Generic AI assistants don't know your business — and you can't
              safely show them.
            </p>
          </div>
          <div className="flex gap-[1.2vw]">
            <span className="font-display text-[1.4vw] font-bold text-stone">02</span>
            <p className="text-[1.15vw] leading-snug text-text">
              Your most valuable knowledge is scattered across thousands of
              folders no one can search.
            </p>
          </div>
          <div className="flex gap-[1.2vw]">
            <span className="font-display text-[1.4vw] font-bold text-stone">03</span>
            <p className="text-[1.15vw] leading-snug text-text">
              "Build it ourselves" is a multi-year project most teams can't
              staff.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full rounded-[1.5vw] border border-stone/50 bg-white/60 p-[2.5vw]">
          <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.2em] text-muted">
            The capability–adoption gap
          </p>
          <svg viewBox="0 0 400 240" className="w-full" fill="none" aria-hidden="true">
            <line x1="30" y1="210" x2="390" y2="210" stroke="#bebebe" strokeWidth="1.5" />
            <line x1="30" y1="20" x2="30" y2="210" stroke="#bebebe" strokeWidth="1.5" />
            <path d="M30 200 C140 180 250 70 390 30" stroke="#00aa5b" strokeWidth="4" />
            <path d="M30 205 C150 200 260 190 390 175" stroke="#bebebe" strokeWidth="4" strokeDasharray="6 6" />
            <path d="M30 200 C140 180 250 70 390 30 L390 175 C260 190 150 200 30 205 Z" fill="#74e4b0" opacity="0.22" />
            <text x="300" y="55" fill="#145738" fontSize="15" fontWeight="600">AI capability</text>
            <text x="240" y="200" fill="#4f4f4f" fontSize="15" fontWeight="500">Enterprise adoption</text>
          </svg>
          <p className="mt-[2vh] text-[1vw] leading-snug text-muted">
            Capability has raced ahead. Adoption is stuck — because using it
            safely on real company knowledge is the hard part.
          </p>
        </div>
      </div>
    </div>
  );
}
