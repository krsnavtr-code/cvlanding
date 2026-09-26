import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  lastUpdated?: string;
  children: React.ReactNode;
  universityContext?: {
    name: string;
    relationship: "manipal" | "amity" | "ignou" | "general";
  };
}

export default function PolicyLayout({
  title,
  subtitle,
  badge = "Official Policy Document",
  lastUpdated = "March 2026",
  children,
  universityContext,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col selection:bg-[#ef3e35] selection:text-white">
      {/* Top Compliance Bar */}
      <div className="bg-[#0b1b36] text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              CollegeVihar – Authorized Admission & Marketing Channel Partner
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span>Helpline: <strong className="text-white font-semibold">+91 9266585858</strong></span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline">Email: <strong className="text-white font-semibold">info@collegevihar.com</strong></span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0a2540] to-[#155ca4] flex items-center justify-center text-white font-black text-lg shadow-sm">
                CV
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">
                  <span className="text-[#0066ff]">College</span><span className="text-[#ee4231]">Vihar</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                  Admissions Advisory
                </span>
              </div>
            </Link>

            {universityContext && (
              <>
                <span className="text-slate-300 text-lg hidden sm:inline">|</span>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-bold text-slate-700">
                    {universityContext.name}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600">
                    {universityContext.relationship === "ignou"
                      ? "Independent Student Guidance Partner"
                      : "Authorized Admission Partner"}
                  </span>
                </div>
              </>
            )}
          </div>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
            <Link
              href="/about-us"
              className="text-slate-600 hover:text-[#0a2540] transition-colors py-1"
            >
              About Us
            </Link>
            <Link
              href="/disclaimer"
              className="text-slate-600 hover:text-[#0a2540] transition-colors py-1"
            >
              Disclaimer
            </Link>
            <Link
              href="/contact-us"
              className="px-3.5 py-2 rounded-lg bg-[#0a2540] text-white hover:bg-[#155ca4] transition-colors text-xs font-bold shadow-xs"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Title Hero Banner */}
      <section className="bg-gradient-to-b from-white to-[#f1f5f9] border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold mb-4 uppercase tracking-wider">
            <span>📄</span> {badge}
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="flex items-center gap-4 text-xs text-slate-600 mt-4 pt-4 border-t border-slate-200">
            <span>Last Updated: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Entity: <strong>CollegeVihar (Educational Advisory Services)</strong></span>
          </div>
        </div>
      </section>

      {/* Document Content */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs leading-relaxed text-sm sm:text-[15px] text-slate-700 space-y-8">
            {children}
          </div>
        </div>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800 text-center sm:text-left">
            <div>
              <div className="text-lg font-black">
                <span className="text-[#0066ff]">College</span><span className="text-[#ee4231]">Vihar</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Authorized Admission & Marketing Partner for Premier Universities
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 font-semibold text-slate-300">
              <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="text-slate-400 text-[11px] leading-relaxed space-y-2">
            <p>
              <strong>Corporate Address:</strong> Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301, India (Near Lohia Kia Sales).
            </p>
            <p>
              <strong>Contact Helpline:</strong> +91 9266585858 | <strong>Email:</strong> info@collegevihar.com | <strong>Support:</strong> support@collegevihar.com
            </p>
            <p className="text-slate-400 pt-2">
              © {new Date().getFullYear()} CollegeVihar. All rights reserved. CollegeVihar is an authorized admission counseling & marketing channel partner for Online Manipal and Amity University Online, and provides independent guidance for IGNOU programmes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
