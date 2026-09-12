interface CtaBannerProps {
  universityName: string;
  programName: string;
  badge: string;
}

export default function CtaBanner({
  universityName,
  programName,
  badge,
}: CtaBannerProps) {
  return (
    <section className="py-16 md:py-20 bg-linear-to-r from-[#0e244d] via-[#102d63] to-[#0c2044] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[min(1240px,94%)] mx-auto relative z-10 text-center max-w-3xl">
        <span className="inline-block px-3 py-1 bg-[#f7a51c] text-slate-950 font-black text-xs uppercase tracking-wider rounded-full mb-4">
          {badge}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Ready to Elevate Your Career with {universityName}?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-3 mb-8 leading-relaxed">
          Take the first step today. Get unbiased counselling on syllabus, fee discounts, No-Cost EMI, and application assistance from certified counsellors.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#counselling"
            className="inline-flex items-center gap-2 bg-[#f7a51c] hover:bg-[#f58220] text-slate-950 font-black text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform active:scale-[0.99]"
          >
            <span>Claim Free Counselling & EMI Offers</span>
            <span>→</span>
          </a>
          <a
            href="#counselling"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-xs transition-all"
          >
            <span>Download Brochure</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
