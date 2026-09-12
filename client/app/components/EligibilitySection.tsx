interface EligibilitySectionProps {
  universityName: string;
  programName: string;
  eligibility: { title: string; description: string }[];
}

export default function EligibilitySection({
  universityName,
  programName,
  eligibility,
}: EligibilitySectionProps) {
  return (
    <section id="eligibility" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Admission Criteria
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Eligibility Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Check the basic educational criteria required for enrolling into {universityName} {programName}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eligibility.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#f7a51c] flex items-center justify-center font-black text-lg mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-xl mx-auto text-center">
          <a
            href="#counselling"
            className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Verify Your Profile with an Academic Expert</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
