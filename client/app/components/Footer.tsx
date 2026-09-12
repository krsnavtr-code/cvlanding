interface FooterProps {
  universityName: string;
  programName: string;
}

export default function Footer({ universityName, programName }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="w-[min(1240px,94%)] mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white">
              College<span className="text-[#ef3e35]">Vihar</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-semibold">{universityName} Guide</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400 font-medium">
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
            <a href="#counselling" className="hover:text-white transition-colors">
              Enquire Now
            </a>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-2 text-[11px] leading-relaxed text-slate-400">
          <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">
            Important Statutory Disclaimer:
          </p>
          <p>
            <strong>College Vihar</strong> is an independent digital education counselling and career guidance platform. This webpage is created exclusively for informational and counselling guidance regarding <strong>{universityName} {programName}</strong> and is NOT the official portal of the university.
          </p>
          <p>
            All academic admissions, fee policies, degree awards, course delivery, and examination schedules are governed exclusively by the respective university and statutory authorities (UGC-DEB / AICTE). College Vihar does not guarantee admission or employment outcomes.
          </p>
        </div>

        <div className="text-center text-slate-400 text-[11px]">
          &copy; {new Date().getFullYear()} College Vihar. All rights reserved. Powered for Subdomain Architecture.
        </div>
      </div>
    </footer>
  );
}
