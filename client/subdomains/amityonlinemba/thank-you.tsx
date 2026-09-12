"use client";

import Link from "next/link";

export default function AmityOnlineMbaThankYou({
  subdomain = "amityonlinemba",
}: {
  subdomain?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17243a] font-sans flex flex-col justify-between selection:bg-[#ffc21c] selection:text-[#071f58]">
      {/* Top Header */}
      <header className="bg-[#1b325e] shadow-md">
        <div className="w-[min(1160px,92%)] mx-auto h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/amity-logo.jpg"
              alt="Amity University Online"
              className="h-10 w-auto object-contain rounded-md"
            />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-white/80 hover:text-white flex items-center gap-1"
          >
            ← Back to Program
          </Link>
        </div>
      </header>

      {/* Main Thank You Card */}
      <main className="w-[min(880px,92%)] mx-auto py-10 sm:py-16 my-auto">
        <div className="bg-white rounded-[28px] border border-[#e4e8ef] shadow-[0_20px_60px_rgba(27,50,94,0.08)] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          {/* Top Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-[#ffae13] via-[#ffd04a] to-[#ffae13]"></div>

          {/* Success Animated Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl sm:text-5xl font-black mb-6 border border-emerald-200 shadow-xs animate-in zoom-in-75 duration-300">
            ✓
          </div>

          <span className="inline-block px-3.5 py-1 bg-amber-50 text-amber-800 text-xs font-black rounded-full border border-amber-200 uppercase tracking-wider mb-3">
            Application Received · 2026 Batch
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-[#1b325e] tracking-tight mb-3">
            Thank You for Inquiring!
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed mb-8">
            Your admission enquiry for{" "}
            <strong className="text-[#17243a]">
              Amity University Online MBA
            </strong>{" "}
            has been successfully submitted. Our senior academic counsellor is
            reviewing your profile and will contact you shortly.
          </p>

          {/* What happens next roadmap */}
          <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-7 border border-[#e2e7ee] text-left max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#d98b00] mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Counselor Review & Call
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    An expert counselor will connect with you via phone/WhatsApp
                    to explain the syllabus, eligibility criteria, and fee
                    discounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Scholarship & 0% EMI Assessment
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Get instant eligibility checking for merit scholarships and
                    24-month zero-interest installment options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1b325e]">
                    Document Verification & LMS Access
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Submit digital copies of your graduation marksheets to
                    receive official enrollment credentials and start classes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Connect CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/919266585858?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Amity%20Online%20MBA%20and%20need%20immediate%20guidance."
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
              <span>Call Senior Advisor</span>
              <span>📞</span>
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#f1f4f9] hover:bg-[#e4e8f0] text-[#17243a] font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all"
            >
              <span>Return Back</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#071c46] text-[#dce7f7] py-6 border-t border-white/10 text-center text-xs text-[#aebed4]">
        <div className="w-[min(1160px,92%)] mx-auto space-y-2">
          <p>
            © {new Date().getFullYear()} College Vihar & Amity University Online
            Guidance Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
