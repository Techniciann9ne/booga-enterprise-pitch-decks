export default function ItRemembers() {
  return (
    <div className="slide relative grid grid-cols-2 gap-[5vw] bg-deep px-[7vw] py-[8vh] text-bg">
      <div className="pointer-events-none absolute -left-[6vw] -top-[6vw] h-[26vw] w-[26vw] rounded-full bg-lightgreen/15 blur-[3vw]" />
      <div className="relative flex flex-col justify-center">
        <p className="mb-[2vh] text-[0.95vw] font-medium uppercase tracking-[0.3em] text-lightgreen">
          The moat
        </p>
        <h2 className="font-display text-[2.9vw] font-bold leading-[1.08] tracking-tight text-bg">
          Most software forgets you the moment you log out. Booga Agents{" "}
          <span className="text-lightgreen">doesn't.</span>
        </h2>
        <p className="mt-[2.5vh] max-w-[36vw] text-[1.25vw] font-light leading-snug text-bg/75">
          Booga Agents' Intelligence Layer captures the insights, decisions, and
          context behind the work — and brings them back when they're relevant.
        </p>

        <div className="mt-[4vh] flex flex-col gap-[2vh]">
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-lightgreen">✓</span>
            <p className="text-[1.1vw] leading-snug text-bg/90">
              Every analysis and agent run can leave a memory — confirmed in one
              click.
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-lightgreen">✓</span>
            <p className="text-[1.1vw] leading-snug text-bg/90">
              The platform connects those memories and surfaces them in context:
              "You flagged a concern about this clause last quarter."
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-lightgreen">✓</span>
            <p className="text-[1.1vw] leading-snug text-bg/90">
              The longer your firm uses Booga Agents, the more it knows your
              practice. <span className="font-semibold text-lightgreen">The value compounds.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 400 300" className="w-full" fill="none" aria-hidden="true">
          <line x1="20" y1="270" x2="390" y2="270" stroke="#74e4b0" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="40" y1="34" x2="60" y2="36" stroke="#74e4b0" strokeWidth="1.5" />
          <path d="M70 220 L120 180 M120 180 L150 200 M150 200 L200 140 M200 140 L250 160 M250 160 L300 90 M300 90 L340 110 M120 180 L160 120 M250 160 L290 200 M200 140 L240 90" stroke="#74e4b0" strokeWidth="1.5" strokeOpacity="0.55" />
          <circle cx="70" cy="220" r="6" fill="#74e4b0" />
          <circle cx="120" cy="180" r="7" fill="#74e4b0" />
          <circle cx="160" cy="120" r="6" fill="#74e4b0" />
          <circle cx="150" cy="200" r="6" fill="#74e4b0" />
          <circle cx="200" cy="140" r="8" fill="#74e4b0" />
          <circle cx="240" cy="90" r="7" fill="#74e4b0" />
          <circle cx="250" cy="160" r="8" fill="#74e4b0" />
          <circle cx="290" cy="200" r="6" fill="#74e4b0" />
          <circle cx="300" cy="90" r="9" fill="#00aa5b" />
          <circle cx="340" cy="110" r="10" fill="#00aa5b" />
          <text x="40" y="295" fill="#74e4b0" fontSize="13" opacity="0.7">Day one</text>
          <text x="300" y="295" fill="#74e4b0" fontSize="13" opacity="0.9">Compounding</text>
        </svg>
      </div>
    </div>
  );
}
