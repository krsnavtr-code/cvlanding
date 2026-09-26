import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CompliantFooterProps {
  universityName?: string;
  universityShortName?: string;
  programName?: string;
  partnershipType?: "manipal" | "amity" | "ignou" | "general";
  theme?: "dark" | "navy" | "slate" | "white";
}

export default function CompliantFooter({
  universityName = "Online Manipal & Amity Online",
  universityShortName = "Partner Universities",
  programName = "Higher Education Degree Programmes",
  partnershipType = "general",
  theme = "dark",
}: CompliantFooterProps) {
  const isDark = theme !== "white";
  const bgClass =
    theme === "navy"
      ? "bg-[#0b1f44] text-[#c9d8ee] border-white/10"
      : theme === "slate"
      ? "bg-slate-950 text-slate-400 border-slate-800"
      : theme === "white"
      ? "bg-white text-slate-600 border-slate-200"
      : "bg-[#0c1322] text-slate-300 border-white/10";

  return (
    <footer className={`pt-12 pb-24 sm:pb-12 border-t text-xs ${bgClass} transition-colors`}>
      <div className="w-[min(1220px,94%)] mx-auto space-y-10">
        {/* Row 1: Brand, Partnership Badge, and Quick Policy Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Column 1: Brand & Role */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                College<span className="text-[#ef3e35]">Vihar</span>
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {partnershipType === "manipal"
                  ? "Authorized Admission Partner • Online Manipal"
                  : partnershipType === "amity"
                  ? "Authorized Admission Partner • Amity Online"
                  : partnershipType === "ignou"
                  ? "Independent Student Guidance Advisory"
                  : "Authorized Higher Education Advisory"}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              <strong>CollegeVihar</strong> is India&apos;s trusted educational counseling and university admissions advisory platform. We guide learners through UGC-DEB entitled online degrees with verified fee structures, zero-cost EMI assistance, and career-aligned specialisations.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-200">Registered Office:</strong> Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301 (Near Lohia Kia Sales)
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
                <span>
                  Helpline:{" "}
                  <a href="tel:+919266585858" className="text-emerald-400 font-bold hover:underline">
                    +91 9266585858
                  </a>
                </span>
                <span>•</span>
                <span>
                  Email:{" "}
                  <a href="mailto:info@collegevihar.com" className="text-blue-400 hover:underline">
                    info@collegevihar.com
                  </a>
                </span>
                <span>•</span>
                <span>Hours: Mon - Sat (9:30 AM - 6:30 PM)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Legal & Policy Pages (CLICKABLE) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-[11px]">
              Compliance &amp; Policy Pages
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#ef3e35]">›</span> About Us &amp; Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#ef3e35]">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#ef3e35]">›</span> Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#ef3e35]">›</span> Statutory Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#ef3e35]">›</span> Contact &amp; Grievance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Programmes */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase text-[11px]">
              Explore Online Degrees
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://onlinemanipalmba.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Online Manipal MBA (MUJ)
                </a>
              </li>
              <li>
                <a
                  href="https://onlinemanipalmca.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Online Manipal MCA (MUJ)
                </a>
              </li>
              <li>
                <a
                  href="https://onlinemanipalbba.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Online Manipal BBA (MUJ)
                </a>
              </li>
              <li>
                <a
                  href="https://amityonlinemba.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Amity University Online MBA
                </a>
              </li>
              <li>
                <a
                  href="https://amityonlinemca.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Amity University Online MCA
                </a>
              </li>
              <li>
                <a
                  href="https://amityonlinebba.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  Amity University Online BBA
                </a>
              </li>
              <li>
                <a
                  href="https://ignouonlinemba.collegevihar.com"
                  className="hover:text-white transition-colors"
                >
                  IGNOU Online MBA Advisory
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Mandatory Statutory Disclaimer Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-[11px] leading-relaxed text-slate-300 space-y-2.5">
          <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
            <span className="text-amber-400">⚠️</span>
            <span>Mandatory Statutory &amp; Partnership Disclaimer:</span>
          </div>

          {partnershipType === "manipal" ? (
            <p>
              <strong>CollegeVihar is an Authorized Admission &amp; Marketing Channel Partner for Online Manipal (Manipal University Jaipur).</strong> This landing page is an authorized counseling and admissions information portal. We are NOT Manipal University Jaipur directly. All degrees, syllabi, fee approvals, and academic delivery are governed exclusively by Manipal University Jaipur and statutory authorities (UGC-DEB, AICTE). Manipal University Jaipur and Online Manipal logos and trademarks belong to their respective university authorities. CollegeVihar does not guarantee admission or job placement.
            </p>
          ) : partnershipType === "amity" ? (
            <p>
              <strong>CollegeVihar is an Authorized Admission &amp; Marketing Channel Partner for Amity University Online.</strong> This landing page is an authorized counseling and admissions information portal. We are NOT Amity University directly. All degrees, syllabi, fee approvals, examinations, and accreditations (WASC, NAAC A+, UGC) are conferred solely by Amity University. Amity Online names, logos, and trademarks belong to their respective university authorities. CollegeVihar does not guarantee admission or job placement.
            </p>
          ) : partnershipType === "ignou" ? (
            <p>
              <strong>CollegeVihar is an Independent Student Counseling &amp; Career Guidance Advisory for IGNOU programmes.</strong> IGNOU (Indira Gandhi National Open University) is a central government university that does not authorize private commercial marketing agencies or franchises. This page provides prospective students with syllabus details, eligibility advice, and navigation support to the official IGNOU portal (<code className="bg-black/30 px-1 py-0.5 rounded text-slate-200">ignou.ac.in</code>). IGNOU trademarks belong strictly to Indira Gandhi National Open University. CollegeVihar does not collect official university tuition fees or guarantee admission.
            </p>
          ) : (
            <p>
              <strong>CollegeVihar is an Authorized Admission &amp; Marketing Channel Partner for premier accredited universities</strong> including Online Manipal (Manipal University Jaipur) and Amity University Online, and acts as an independent guidance advisory for IGNOU distance learning programmes. All academic degrees, fee structures, and course deliveries are conferred solely by the respective universities and statutory bodies (UGC-DEB). All university trademarks belong exclusively to their respective institutions.
            </p>
          )}

          <p className="text-slate-400 text-[10px]">
            Statutory Notice: All university tuition fees must be deposited directly to the official accounts of the respective awarding university. CollegeVihar does not charge consultation fees to students and never collects unauthorized personal transfers.
          </p>
        </div>

        {/* Row 3: Bottom Copyright & Verification Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong>CollegeVihar</strong>. All Rights Reserved. Operated for Higher Education Counseling &amp; University Channel Partnership.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300">ISO 9001:2015 Process Aligned</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">100% Verified Admissions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
