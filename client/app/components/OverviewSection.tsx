interface OverviewSectionProps {
  universityName: string;
  programName: string;
  overview: { label: string; value: string }[];
}

export default function OverviewSection({
  universityName,
  programName,
  overview,
}: OverviewSectionProps) {
  return (
    <section id="overview" className="py-16 md:py-20 bg-white">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Program Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {universityName} {programName} – Key Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Essential facts, recognition, eligibility, and learning mode at a glance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#102d63] text-white px-6 py-4 flex items-center justify-between font-bold text-sm sm:text-base">
            <span>Particular</span>
            <span>Program Details</span>
          </div>

          <div className="divide-y divide-slate-200">
            {overview.map((row, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-12 px-6 py-4 items-center gap-2 hover:bg-white transition-colors"
              >
                <div className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700">
                  {row.label}
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-900 font-semibold sm:font-medium">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#counselling"
            className="inline-flex items-center gap-2 bg-[#f7a51c] hover:bg-[#f58220] text-slate-900 font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Check Detailed Eligibility & Free Counselling</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
