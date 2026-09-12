interface WhyChooseSectionProps {
  universityName: string;
  programName: string;
  whyChoose: { title: string; description: string }[];
}

export default function WhyChooseSection({
  universityName,
  programName,
  whyChoose,
}: WhyChooseSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Key Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose {universityName} {programName}?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Gain an industry-aligned online qualification recognized by top global corporations and higher education bodies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#1565c0]/30"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1565c0] font-black text-sm flex items-center justify-center mb-4 group-hover:bg-[#1565c0] group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#1565c0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
