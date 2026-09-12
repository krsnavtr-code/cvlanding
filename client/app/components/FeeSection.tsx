interface FeeSectionProps {
  universityName: string;
  programName: string;
  feeDetails: {
    totalFee: string;
    semesterFee?: string;
    annualFee?: string;
    emiStarting?: string;
    description: string;
  };
}

export default function FeeSection({
  universityName,
  programName,
  feeDetails,
}: FeeSectionProps) {
  return (
    <section id="fees" className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[min(1240px,94%)] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#f7a51c] bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 inline-block mb-3">
            Affordable Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Transparent Fee Structure & EMI Options
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Invest in your future with flexible payment options, zero-cost EMI, and government scholarship support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Per Semester */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Semester Payment Plan
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-2 mb-1">
                {feeDetails.semesterFee || "Affordable"}
              </div>
              <p className="text-xs text-slate-400">
                Pay semester-wise with zero pressure before every term begins.
              </p>
            </div>

            <ul className="my-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Exam fee included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> LMS & digital books access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Direct university receipts
              </li>
            </ul>

            <a
              href="#counselling"
              className="w-full block text-center py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              Choose Semester Plan
            </a>
          </div>

          {/* Card 2: Full Total Program Fee (Featured) */}
          <div className="bg-linear-to-b from-[#1565c0] to-[#0d47a1] border-2 border-amber-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f7a51c] text-slate-950 font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Total Course Fee
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white mt-2 mb-1">
                {feeDetails.totalFee}
              </div>
              <p className="text-xs text-blue-100">
                Comprehensive fee covering all academic sessions, assessments & degrees.
              </p>
            </div>

            <ul className="my-6 space-y-2.5 text-xs sm:text-sm text-white">
              <li className="flex items-center gap-2">
                <span className="text-[#f7a51c] font-bold">★</span> 100% Online degree from {universityName}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f7a51c] font-bold">★</span> 24/7 E-Library & Live Masterclasses
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f7a51c] font-bold">★</span> Virtual Placement Assistance & Drives
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f7a51c] font-bold">★</span> Alumni Status & Networking
              </li>
            </ul>

            <a
              href="#counselling"
              className="w-full block text-center py-3.5 bg-[#f7a51c] hover:bg-[#f58220] text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Avail Scholarship & Apply
            </a>
          </div>

          {/* Card 3: No-Cost EMI */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                0% Interest EMI Facility
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#f7a51c] mt-2 mb-1">
                {feeDetails.emiStarting || "From ₹5,000/mo"}
              </div>
              <p className="text-xs text-slate-400">
                Easy monthly installments with no hidden charges or extra interest.
              </p>
            </div>

            <ul className="my-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Quick instant digital approval
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Zero paperwork hassle
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Flexible 12 to 24 month tenures
              </li>
            </ul>

            <a
              href="#counselling"
              className="w-full block text-center py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              Check EMI Eligibility
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center mt-8 max-w-2xl mx-auto">
          *Fees are subject to university revisions and applicable taxes. Special concession policies are available for Defense, MUJ/Amity Alumni, and Merit students.
        </p>
      </div>
    </section>
  );
}
