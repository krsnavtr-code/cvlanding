import LeadForm from "./LeadForm";

interface HeroSectionProps {
  subdomain: string;
  universityName: string;
  universityShortName: string;
  programName: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroFacts: string[];
  stats: { label: string; value: string }[];
  accreditations: string[];
}

export default function HeroSection({
  subdomain,
  universityName,
  universityShortName,
  programName,
  badge,
  heroTitle,
  heroSubtitle,
  heroFacts,
  stats,
  accreditations,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative bg-linear-to-b from-[#0e244d] via-[#102d63] to-[#0c2044] text-white pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[min(1240px,94%)] mx-auto relative z-10">
        {/* Accreditations Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f7a51c] text-slate-900 text-xs font-black rounded-full uppercase tracking-wider">
            {badge}
          </span>
          {accreditations.slice(0, 4).map((acc, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-slate-200 text-xs font-semibold rounded-full backdrop-blur-xs border border-white/10"
            >
              <span className="text-[#f7a51c]">✓</span> {acc}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-amber-400 font-bold text-sm tracking-wide uppercase">
                {universityName}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black leading-tight tracking-tight text-white">
                {heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {heroSubtitle}
              </p>
            </div>

            {/* Key Bullet Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 py-2">
              {heroFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ●
                  </span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-xs"
                >
                  <div className="text-base sm:text-lg font-black text-[#f7a51c]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Explore Syllabus & Fees</span>
                <span>↓</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Admissions Advisor Online Now</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Lead Capture Form */}
          <div className="lg:col-span-5">
            <LeadForm
              subdomain={subdomain}
              universityName={universityName}
              programName={programName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
