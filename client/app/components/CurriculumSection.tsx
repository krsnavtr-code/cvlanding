"use client";

import { useState } from "react";

interface CurriculumSectionProps {
  universityName: string;
  programName: string;
  curriculum: { semester: string; description: string; subjects?: string[] }[];
}

export default function CurriculumSection({
  universityName,
  programName,
  curriculum,
}: CurriculumSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-white">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Course Structure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Industry-Oriented Semester Curriculum
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Explore the comprehensive subject roadmap designed by premier academicians and industry experts.
          </p>
        </div>

        {/* Semester Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {curriculum.map((sem, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === i
                  ? "bg-[#102d63] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {sem.semester}
            </button>
          ))}
        </div>

        {/* Active Semester Content Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1565c0]">
                Curriculum Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {curriculum[activeTab]?.semester}
              </h3>
            </div>
            <a
              href="#counselling"
              className="text-xs sm:text-sm font-bold text-[#1565c0] bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs hover:bg-slate-100"
            >
              Download Full Syllabus PDF
            </a>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
            {curriculum[activeTab]?.description}
          </p>

          {curriculum[activeTab]?.subjects && curriculum[activeTab].subjects!.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Subjects & Modules
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {curriculum[activeTab].subjects!.map((subj, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-md bg-blue-50 text-[#1565c0] flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span>{subj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
