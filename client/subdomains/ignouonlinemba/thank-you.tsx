"use client";

import Link from "next/link";
import Image from "next/image";

const WA_NUMBER = "919266585858";

export default function IgnouOnlineMbaThankYou({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "ignouonlinemba",
}: {
  subdomain?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#12233b] font-sans flex flex-col justify-between selection:bg-[#f3c64b] selection:text-[#071a36]">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-[#06192f] to-[#103963] shadow-md border-b border-white/10">
        <div className="w-[min(1160px,92%)] mx-auto h-[74px] flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ignou-logo.png"
              alt="IGNOU - The People’s University"
              width={220}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            ← Back to Program
          </Link>
        </div>
      </header>

      {/* Main Thank You Card */}
      <main className="w-[min(880px,92%)] mx-auto py-10 sm:py-16 my-auto">
        <div className="bg-white rounded-[28px] border border-[#e5ebf2] shadow-[0_20px_50px_rgba(7,26,54,0.08)] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          {/* Top Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#f3c64b] via-[#ffe79b] to-[#f3c64b]"></div>

          {/* Success Animated Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl sm:text-5xl font-black mb-6 border border-emerald-200 shadow-sm">
            ✓
          </div>

          <span className="inline-block px-3.5 py-1 bg-amber-50 text-amber-900 text-xs font-black rounded-full border border-amber-200 uppercase tracking-wider mb-3">
            Enquiry Received · January 2027 Admission Cycle
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-[#071a36] tracking-tight mb-3">
            Thank You for Your Enquiry!
          </h1>

          <p className="text-sm sm:text-base text-[#637289] max-w-xl mx-auto leading-relaxed mb-8">
            Your admission guidance request for{" "}
            <strong className="text-[#071a36]">
              IGNOU Online MBA (MBAOL)
            </strong>{" "}
            has been successfully registered. Our certified academic counsellor will contact you shortly with the syllabus, fee schedule, and application steps.
          </p>

          {/* What happens next roadmap */}
          <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-7 border border-[#e5ebf2] text-left max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#1768b6] mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#071a36] text-[#f3c64b] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#071a36]">
                    Counselor Verification & Profile Review
                  </h3>
                  <p className="text-xs text-[#637289] mt-0.5">
                    Our advisor will verify your graduation background (minimum 50% for General / 45% for Reserved) and discuss your preferred functional specialisation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#071a36] text-[#f3c64b] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#071a36]">
                    Fee & Curriculum Breakdown
                  </h3>
                  <p className="text-xs text-[#637289] mt-0.5">
                    Receive complete details about the ₹66,000 four-semester fee schedule, digital study materials, and examination guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#071a36] text-[#f3c64b] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#071a36]">
                    Admission Portal Guidance
                  </h3>
                  <p className="text-xs text-[#637289] mt-0.5">
                    Step-by-step assistance in filling the official IGNOU MBAOL online application before the registration deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Connect Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Hi, I submitted my enquiry for IGNOU Online MBA on CollegeVihar. Please share complete admission details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba5a] shadow-[0_8px_20px_rgba(37,211,102,0.25)] transition-all"
            >
              <span>💬</span> Chat on WhatsApp Now
            </a>

            <a
              href="tel:+919266585858"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#071a36] text-white hover:bg-[#0b2c55] shadow-[0_8px_20px_rgba(7,26,54,0.2)] transition-all"
            >
              <span>📞</span> Call +91 9266585858
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-[#637289] border-t border-[#e5ebf2] bg-white/50">
        <p className="max-w-xl mx-auto px-4">
          CollegeVihar is an independent career & admission advisory service assisting students with distance and online university programmes across India.
        </p>
      </footer>
    </div>
  );
}
