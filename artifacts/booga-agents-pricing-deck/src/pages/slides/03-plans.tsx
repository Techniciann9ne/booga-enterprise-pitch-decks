import Confidential from "@/components/Confidential";

export default function Plans() {
  return (
    <div className="slide relative flex flex-col bg-bg px-[6vw] py-[5vh]">
      <span className="absolute right-[6vw] top-[5vh]">
        <Confidential />
      </span>

      <p className="text-[0.9vw] font-medium uppercase tracking-[0.3em] text-accent">
        The three-step ladder
      </p>
      <h2 className="mt-[1vh] font-display text-[2.7vw] font-bold leading-[1.04] tracking-tight text-text">
        Three plans. Three clear reasons to step up.
      </h2>
      <p className="mt-[1.4vh] max-w-[72vw] text-[1.05vw] font-light leading-snug text-muted">
        Team = your data, isolated. Business = your data{" "}
        <span className="font-medium text-text">and</span> your compute.
        Enterprise = your data, your compute,{" "}
        <span className="font-medium text-text">and</span> the
        identity/security/governance bundle procurement signs off on.
      </p>

      <div className="mt-[3vh] overflow-hidden rounded-[1vw] border border-stone/50">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-white/70 text-text">
              <th className="w-[28%] px-[1.4vw] py-[1.5vh] text-[1vw] font-semibold">
                Plan
              </th>
              <th className="px-[1.2vw] py-[1.5vh] text-[1.1vw] font-bold">
                Team
              </th>
              <th className="px-[1.2vw] py-[1.5vh] text-[1.1vw] font-bold">
                Business
              </th>
              <th className="bg-lightgreen/20 px-[1.2vw] py-[1.5vh] text-[1.1vw] font-bold text-deep">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="text-[0.95vw] text-text">
            <tr className="border-t border-stone/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Price (USD / seat / month)
              </td>
              <td className="px-[1.2vw] py-[1.15vh] font-bold">$149</td>
              <td className="px-[1.2vw] py-[1.15vh] font-bold">$249</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] font-bold text-deep">
                $499
              </td>
            </tr>
            <tr className="border-t border-stone/40 bg-white/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Minimum seats
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">10</td>
              <td className="px-[1.2vw] py-[1.15vh]">25</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                25
              </td>
            </tr>
            <tr className="border-t border-stone/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Compute
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">Shared pool</td>
              <td className="px-[1.2vw] py-[1.15vh]">Dedicated workers</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                Dedicated, memory-optimized
              </td>
            </tr>
            <tr className="border-t border-stone/40 bg-white/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Cloud providers
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">Azure</td>
              <td className="px-[1.2vw] py-[1.15vh]">Azure</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                Azure · AWS · GCP
              </td>
            </tr>
            <tr className="border-t border-stone/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Deployment regions
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">2 (EU + US)</td>
              <td className="px-[1.2vw] py-[1.15vh]">6 (Azure)</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                21 (multi-cloud, mirrored)
              </td>
            </tr>
            <tr className="border-t border-stone/40 bg-white/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Compliance monitoring + advanced analytics
              </td>
              <td className="px-[1.2vw] py-[1.15vh] text-stone">—</td>
              <td className="px-[1.2vw] py-[1.15vh]">Yes</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                Yes
              </td>
            </tr>
            <tr className="border-t border-stone/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Intelligence memory (stored)
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">50,000</td>
              <td className="px-[1.2vw] py-[1.15vh]">250,000</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                1,000,000
              </td>
            </tr>
            <tr className="border-t border-stone/40 bg-white/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Included premium OCR pages / month
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">2,000</td>
              <td className="px-[1.2vw] py-[1.15vh]">10,000</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                50,000
              </td>
            </tr>
            <tr className="border-t border-stone/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                SSO / SCIM · customer-managed keys · SLA · CSM
              </td>
              <td className="px-[1.2vw] py-[1.15vh] text-stone">—</td>
              <td className="px-[1.2vw] py-[1.15vh] text-stone">—</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] font-semibold text-deep">
                Yes
              </td>
            </tr>
            <tr className="border-t border-stone/40 bg-white/40">
              <td className="px-[1.4vw] py-[1.15vh] font-medium text-muted">
                Support
              </td>
              <td className="px-[1.2vw] py-[1.15vh]">Standard</td>
              <td className="px-[1.2vw] py-[1.15vh]">Priority</td>
              <td className="bg-lightgreen/10 px-[1.2vw] py-[1.15vh] text-deep">
                Priority + SLA
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-[2vh] text-[0.8vw] leading-snug text-stone">
        Annual billing ≈ two months free (10× the monthly seat rate). Included
        premium OCR is per provider, per month; usage beyond the allowance is
        metered per page. List pricing in USD; Enterprise can be customized.
      </p>
    </div>
  );
}
