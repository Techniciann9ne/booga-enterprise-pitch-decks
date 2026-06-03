import Spine from "@/components/Spine";

export default function Understand() {
  return (
    <div className="slide relative grid grid-cols-2 gap-[5vw] bg-bg px-[7vw] py-[8vh]">
      <div className="flex flex-col justify-center">
        <div className="mb-[3vh]">
          <Spine active="understand" />
        </div>
        <h2 className="font-display text-[2.9vw] font-bold leading-[1.08] tracking-tight text-text">
          Thousands of documents become organized, searchable knowledge —{" "}
          <span className="text-accent">on their own.</span>
        </h2>
        <p className="mt-[2.5vh] max-w-[36vw] text-[1.25vw] font-light leading-snug text-muted">
          Booga Agents reads every file, in every format, in your languages —
          then proposes how to organize them. You just approve.
        </p>

        <div className="mt-[4vh] flex flex-col gap-[2vh]">
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">Reads everything.</span> Born-digital
              PDFs, scanned documents, legacy Office files, emails — even
              decades-old or multi-language archives become clean, searchable
              text.
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">Organizes itself.</span> The platform
              discovers natural groupings across your estate and suggests
              categories; your team reviews and approves.
            </p>
          </div>
          <div className="flex gap-[1vw]">
            <span className="mt-[0.3vh] text-accent">✓</span>
            <p className="text-[1.1vw] leading-snug text-text">
              <span className="font-semibold">Stays current.</span> New documents
              flow in and get processed automatically — no manual filing, ever.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid w-full grid-cols-2 gap-[1.5vw]">
          <div className="rounded-[1.2vw] border border-stone/50 bg-white/60 p-[1.8vw]">
            <p className="mb-[1.6vh] text-[0.85vw] font-medium uppercase tracking-[0.2em] text-muted">Before</p>
            <div className="flex flex-col gap-[0.8vh]">
              <div className="h-[1.5vh] w-[80%] rounded bg-stone/60" />
              <div className="h-[1.5vh] w-[55%] rounded bg-stone/60" />
              <div className="h-[1.5vh] w-[92%] rounded bg-stone/60" />
              <div className="h-[1.5vh] w-[40%] rounded bg-stone/60" />
              <div className="h-[1.5vh] w-[70%] rounded bg-stone/60" />
              <div className="h-[1.5vh] w-[60%] rounded bg-stone/60" />
            </div>
            <p className="mt-[1.8vh] text-[0.9vw] text-muted">Scattered, unsearchable files.</p>
          </div>
          <div className="rounded-[1.2vw] border-2 border-accent/50 bg-lightgreen/15 p-[1.8vw]">
            <p className="mb-[1.6vh] text-[0.85vw] font-medium uppercase tracking-[0.2em] text-accent">After</p>
            <div className="flex flex-col gap-[0.9vh]">
              <div className="flex items-center gap-[0.5vw]"><span className="text-accent">✓</span><span className="rounded bg-white px-[0.6vw] py-[0.2vh] text-[0.8vw] text-text">Contracts</span></div>
              <div className="flex items-center gap-[0.5vw]"><span className="text-accent">✓</span><span className="rounded bg-white px-[0.6vw] py-[0.2vh] text-[0.8vw] text-text">Precedents</span></div>
              <div className="flex items-center gap-[0.5vw]"><span className="text-accent">✓</span><span className="rounded bg-white px-[0.6vw] py-[0.2vh] text-[0.8vw] text-text">Client history</span></div>
              <div className="flex items-center gap-[0.5vw]"><span className="text-accent">✓</span><span className="rounded bg-white px-[0.6vw] py-[0.2vh] text-[0.8vw] text-text">Correspondence</span></div>
            </div>
            <div className="mt-[1.8vh] flex flex-wrap gap-[0.4vw]">
              <span className="rounded-full border border-deep/30 px-[0.6vw] py-[0.2vh] text-[0.72vw] text-deep">scanned</span>
              <span className="rounded-full border border-deep/30 px-[0.6vw] py-[0.2vh] text-[0.72vw] text-deep">legacy</span>
              <span className="rounded-full border border-deep/30 px-[0.6vw] py-[0.2vh] text-[0.72vw] text-deep">multi-language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
