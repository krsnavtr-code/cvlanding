interface CareerSectionProps {
  universityName: string;
  programName: string;
  careerRoles: { title: string; description: string; avgSalary?: string }[];
}

export default function CareerSection({
  universityName,
  programName,
  careerRoles,
}: CareerSectionProps) {
  return (
    <section id="career" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Career Outlook
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            High-Impact Career Roles & Salary Scope
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Accelerate your career trajectory into executive and leadership positions with lucrative compensation packages.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerRoles.map((role, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#1565c0]/30"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1565c0] bg-blue-50 px-2.5 py-1 rounded-md">
                    Job Role
                  </span>
                  {role.avgSalary && (
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {role.avgSalary}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1565c0] transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
