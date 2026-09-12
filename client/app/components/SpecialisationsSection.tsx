interface SpecialisationsSectionProps {
  universityName: string;
  programName: string;
  specialisations: { title: string; description: string }[];
}

export default function SpecialisationsSection({
  universityName,
  programName,
  specialisations,
}: SpecialisationsSectionProps) {
  return (
    <section id="specialisations" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Career Tracks
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Available Specialisations & Electives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Choose from a wide variety of futuristic specialisations tailored for high-growth sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {specialisations.map((spec, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#1565c0]/40"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1565c0] flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-[#1565c0] group-hover:text-white transition-colors">
                  ✦
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-[#1565c0] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Specialisation
                </span>
                <a
                  href="#counselling"
                  className="text-xs font-bold text-[#1565c0] hover:text-[#0d47a1] flex items-center gap-1"
                >
                  Apply <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-blue-50/70 border border-blue-100 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            💡 Need help choosing the best specialisation for your career profile?
          </p>
          <a
            href="#counselling"
            className="inline-block mt-2 text-xs font-bold text-[#1565c0] hover:underline"
          >
            Talk to an Academic Counsellor →
          </a>
        </div>
      </div>
    </section>
  );
}
