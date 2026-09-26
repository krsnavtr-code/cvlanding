"use client";

import Link from "next/link";
import Image from "next/image";
import CompliantFooter from "@/app/components/CompliantFooter";

export default function OnlineManipalMbaThankYou({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "onlinemanipalmba",
}: {
  subdomain?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17243a] font-sans flex flex-col justify-between selection:bg-[#e85923] selection:text-white">
      {/* Top Header */}
      <header className="bg-white border-b border-[#eae6f5] shadow-xs">
        <div className="w-[min(1160px,92%)] mx-auto h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/MUJ-logo.webp"
                alt="Manipal University Jaipur"
                width={160}
                height={45}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </Link>
            <div className="h-7 w-px bg-slate-200 hidden sm:block"></div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black text-[#1e1742] leading-tight">
                College<span className="text-[#e85923]">Vihar</span>
              </span>
              <span className="text-[10px] text-emerald-700 font-bold">
                Authorized Admission Partner
              </span>
            </div>
          </div>
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
        <div className="bg-white rounded-[28px] border border-[#e4e8ef] shadow-[0_20px_60px_rgba(16,45,99,0.08)] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-[#102d63] via-[#f7a51c] to-[#102d63]"></div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl sm:text-5xl font-black mb-6 border border-emerald-200 shadow-xs">
            ✓
          </div>

          <span className="inline-block px-3.5 py-1 bg-amber-50 text-amber-800 text-xs font-black rounded-full border border-amber-200 uppercase tracking-wider mb-3">
            Application Received · Manipal University Jaipur
          </span>

          <h1 className="text-2xl sm:text-4xl font-black text-[#102d63] tracking-tight mb-3">
            Thank You for Inquiring!
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-xl mx-auto leading-relaxed mb-8">
            Your admission enquiry for{" "}
            <strong className="text-[#17243a]">
              Online Manipal MBA (Manipal University Jaipur)
            </strong>{" "}
            has been successfully submitted. Our senior MBA counsellor will contact you shortly with full course curriculum, Coursera access details, and fee options.
          </p>

          {/* Next Steps Roadmap */}
          <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-7 border border-[#e2e7ee] text-left max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#102d63] mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#102d63] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#102d63]">
                    Counsellor Consultation Call
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Connect with an academic advisor to discuss 14+ specialisations, fee structure, and no-cost EMI starting from ₹7,290/mo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#102d63] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#102d63]">
                    Scholarship & Category Concession
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Verify Defense / Alumni / Merit concessions and complete digital document verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#102d63] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#102d63]">
                    MUJ Student Portal & Coursera Activation
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Receive your official student ID, LMS credentials, and free access to thousands of Coursera certifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/919266585858?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Online%20Manipal%20MBA%20and%20need%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#20c76a] hover:bg-[#1bb35e] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Connect on WhatsApp</span>
              <span>💬</span>
            </a>

            <a
              href="tel:+919266585858"
              className="inline-flex items-center gap-2 bg-[#102d63] hover:bg-[#0c2044] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Call Manipal Advisor</span>
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

      {/* Compliant Footer */}
      <CompliantFooter
        universityName="Manipal University Jaipur (Online Manipal)"
        universityShortName="Online Manipal"
        programName="Online MBA"
        partnershipType="manipal"
        theme="navy"
      />
    </div>
  );
}
