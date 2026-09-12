"use client";

import Link from "next/link";

export default function AmityOnlineMcaThankYou({
  subdomain = "amityonlinemca",
}: {
  subdomain?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17243a] font-sans flex flex-col justify-between selection:bg-[#ffc21c] selection:text-[#071f58]">
      {/* Top Header */}
      <header className="bg-[#1b325e] shadow-md">
        <div className="w-[min(1160px,92%)] mx-auto h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
              <span className="text-xl font-black text-[#ffc21c] tracking-tight">
                AMITY
              </span>
              <span className="text-xs font-bold text-white ml-1.5 uppercase tracking-wider">
                ONLINE MCA
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-white/80 hover:text-white flex items-center gap-1"
          >
            ← Back to Program
          </Link>
        </div>
      </header>

      {/* Main Card */}
      <main className="w-[min(880px,92%)] mx-auto py-10 sm:py-16 my-auto">
        <div className="bg-white rounded-[28px] border border-[#e4e8ef] shadow-[0_20px_60px_rgba(27,50,94,0.08)] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-[#1565c0] via-[#ffae13] to-[#1565c0]"></div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl sm:text-5xl font-black mb-6 border border-emerald-200 shadow-xs">
            ✓
          </div>

          <span className="inline-block px-3.5 py-1 bg-blue-50 text-blue-800 text-xs font-black rounded-full border border-blue-200 uppercase tracking-wider mb-3">
            Enquiry Received · 2-Year Online MCA
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-[#1b325e] tracking-tight mb-3">
            Thank You for Inquiring!
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed mb-8">
            Your enquiry for{" "}
            <strong className="text-[#17243a]">
              Amity University Online MCA
            </strong>{" "}
            has been successfully recorded. Our technical education counsellor will contact you shortly with full syllabus and admission steps.
          </p>

          {/* Next Steps Roadmap */}
          <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-7 border border-[#e2e7ee] text-left max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#1565c0] mb-4">
              Next Steps in Your MCA Journey:
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Eligibility & Non-CS Bridge Verification
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    We evaluate your graduation degree and mathematics background to confirm AICTE direct admission eligibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Specialisation Selection (Cloud / AI / Full Stack)
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Choose the track that fits your tech career goals and software engineering focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Virtual Coding Lab & LMS Onboarding
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Receive your digital lab access and student portal login after document confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/919266585858?text=Hi%2C%20I%20just%20enquired%20for%20Amity%20Online%20MCA%20and%20need%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#20c76a] hover:bg-[#1bb35e] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Connect on WhatsApp</span>
              <span>💬</span>
            </a>

            <a
              href="tel:+919266585858"
              className="inline-flex items-center gap-2 bg-[#1b325e] hover:bg-[#0b2255] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Call Tech Counsellor</span>
              <span>📞</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#f1f4f9] hover:bg-[#e4e8f0] text-[#17243a] font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all"
            >
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#071c46] text-[#dce7f7] py-6 border-t border-white/10 text-center text-xs text-[#aebed4]">
        <div className="w-[min(1160px,92%)] mx-auto">
          © {new Date().getFullYear()} College Vihar & Amity University Online Guidance Portal.
        </div>
      </footer>
    </div>
  );
}
