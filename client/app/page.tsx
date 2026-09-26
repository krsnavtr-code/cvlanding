import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CompliantFooter from "./components/CompliantFooter";

export const metadata: Metadata = {
  title: "CollegeVihar | Authorized University Admission Partner for Online Manipal & Amity Online",
  description:
    "CollegeVihar is India's trusted higher education advisory platform and authorized admission & marketing channel partner for Online Manipal (MUJ) and Amity University Online, with expert guidance for IGNOU.",
};

const PARTNER_PROGRAMS = [
  {
    university: "Online Manipal (Manipal University Jaipur)",
    partnerStatus: "Authorized Admission & Marketing Partner",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    programs: [
      {
        name: "Online MBA (Master of Business Administration)",
        url: "https://onlinemanipalmba.collegevihar.com",
        desc: "NAAC A+ UGC-DEB entitled degree with 13 in-demand career specialisations and Coursera certifications.",
        fees: "₹1,75,000 Total (0% EMI Available)",
      },
      {
        name: "Online MCA (Master of Computer Applications)",
        url: "https://onlinemanipalmca.collegevihar.com",
        desc: "Cloud computing, Full Stack, and AI-focused curriculum designed for software industry roles.",
        fees: "₹1,58,000 Total (0% EMI Available)",
      },
      {
        name: "Online BBA (Bachelor of Business Administration)",
        url: "https://onlinemanipalbba.collegevihar.com",
        desc: "Foundational business management degree for 10+2 graduates with global career electives.",
        fees: "₹1,35,000 Total (0% EMI Available)",
      },
    ],
  },
  {
    university: "Amity University Online",
    partnerStatus: "Authorized Admission & Marketing Partner",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    programs: [
      {
        name: "Amity Online MBA",
        url: "https://amityonlinemba.collegevihar.com",
        desc: "Globally accredited (WASC, QS Ranked) online MBA with Harvard Business Publishing simulations.",
        fees: "₹1,99,000 Total (Scholarships up to 45%)",
      },
      {
        name: "Amity Online MCA",
        url: "https://amityonlinemca.collegevihar.com",
        desc: "Advanced software engineering, cyber security, and machine learning degree pathways.",
        fees: "₹1,70,000 Total (0% EMI Available)",
      },
      {
        name: "Amity Online BBA",
        url: "https://amityonlinebba.collegevihar.com",
        desc: "Industry-aligned undergraduate degree with digital marketing and finance specialisations.",
        fees: "₹1,45,000 Total (0% EMI Available)",
      },
    ],
  },
  {
    university: "IGNOU (Indira Gandhi National Open University)",
    partnerStatus: "Independent Student Guidance Advisory",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
    programs: [
      {
        name: "IGNOU Online MBA Guidance Portal",
        url: "https://ignouonlinemba.collegevihar.com",
        desc: "AICTE-recognized central university MBA advisory, syllabus clarification, and Samarth portal submission guidance.",
        fees: "₹62,000 Total (Affordable Govt Fee Structure)",
      },
    ],
  },
];

export default function RootHomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col selection:bg-[#ef3e35] selection:text-white">
      {/* 1. Top Compliance Announcement Bar */}
      <div className="bg-[#0b1f44] text-white py-2 px-4 text-xs font-semibold border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              CollegeVihar is an Authorized Admission &amp; Marketing Channel Partner for Online Manipal &amp; Amity University Online
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs mx-auto sm:mx-0">
            <span>Student Helpline:</span>
            <a href="tel:+919266585858" className="text-[#f5c84b] hover:underline font-bold">
              +91 9266585858
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0a2540] to-[#155ca4] flex items-center justify-center text-white font-black text-xl shadow-xs">
              CV
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none">
                <span className="text-[#0066ff]">College</span><span className="text-[#ee4231]">Vihar</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Higher Education Advisory
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <a href="#partners" className="hover:text-blue-700 transition-colors">
              University Partners
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Corporate Office
            </a>
            <Link
              href="/disclaimer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Statutory Disclaimer
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919266585858"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <span>📞</span> +91 9266585858
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-[#ef3e35] text-white hover:bg-[#d6342c] transition-colors shadow-xs"
            >
              Get Free Counseling
            </a>
          </div>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-[#edf2f7] border-b border-slate-200 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>✓</span> Authorized University Channel Partner Platform
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              India&apos;s Trusted Higher Education Advisory &amp; Authorized Admission Partner
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Compare accredited UGC-DEB entitled online degrees from premier institutions. Get verified fee breakdowns, zero-cost EMI assistance, and unbiased counseling from verified academic advisors.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-xs">
                <div className="text-lg font-black text-[#0a2540]">25,000+</div>
                <div className="text-[11px] text-slate-500 font-medium">Students Advised</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-xs">
                <div className="text-lg font-black text-emerald-600">100% Free</div>
                <div className="text-[11px] text-slate-500 font-medium">Student Counseling</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-xs">
                <div className="text-lg font-black text-blue-600">0% EMI</div>
                <div className="text-[11px] text-slate-500 font-medium">Flexible Financing</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-xs">
                <div className="text-lg font-black text-amber-600">UGC-DEB</div>
                <div className="text-[11px] text-slate-500 font-medium">Entitled Degrees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. University Partnerships Section */}
      <section id="partners" className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Authorized University Partner Portals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore dedicated programme portals maintained by CollegeVihar in its official authorized partner or independent advisory capacity:
            </p>
          </div>

          <div className="space-y-10">
            {PARTNER_PROGRAMS.map((group, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {group.university}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct enrollment &amp; academic counseling facilitated through CollegeVihar
                    </p>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${group.badgeColor}`}
                  >
                    {group.partnerStatus}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {group.programs.map((prog, pIdx) => (
                    <div
                      key={pIdx}
                      className="border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 bg-slate-50/50"
                    >
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 text-base leading-snug">
                          {prog.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {prog.desc}
                        </p>
                        <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                          {prog.fees}
                        </div>
                      </div>

                      <a
                        href={prog.url}
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0a2540] hover:bg-[#155ca4] text-white transition-colors"
                      >
                        Explore Programme Details →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Identity & About Us Summary */}
      <section id="about" className="py-14 sm:py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                Business Transparency &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                About CollegeVihar &amp; Corporate Identity
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>CollegeVihar</strong> operates as a registered higher education advisory and official digital enrollment channel partner for accredited higher education institutions. We provide students with transparent, verifiable information on admission deadlines, fee installment plans, scholarship schemes, and UGC-DEB entitlements.
              </p>
              <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2 text-xs text-slate-700">
                <div>
                  <strong>Corporate Headquarters:</strong> Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301, India (Near Lohia Kia Sales)
                </div>
                <div>
                  <strong>Primary Helpline:</strong> +91 9266585858 | <strong>Email:</strong> info@collegevihar.com
                </div>
                <div>
                  <strong>Support Hours:</strong> Monday to Saturday: 9:30 AM to 6:30 PM IST
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold pt-2">
                <Link href="/about-us" className="text-blue-700 hover:underline">
                  Read Full Company Profile →
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/disclaimer" className="text-blue-700 hover:underline">
                  View Statutory Disclaimers →
                </Link>
              </div>
            </div>

            {/* Statutory Notice Card */}
            <div className="bg-white border-2 border-amber-300 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase">
                <span>⚠️</span>
                <span>Statutory Partner &amp; Non-University Disclaimer</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                CollegeVihar is NOT a university, college, or degree-awarding body. We operate strictly as an educational consultancy and authorized admissions channel partner for accredited universities.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
                <li>
                  <strong>Online Manipal (MUJ):</strong> Authorized Admission &amp; Marketing Channel Partner.
                </li>
                <li>
                  <strong>Amity University Online:</strong> Authorized Admission &amp; Marketing Channel Partner.
                </li>
                <li>
                  <strong>IGNOU:</strong> Independent Academic Counseling &amp; Process Guidance Advisory.
                </li>
                <li>
                  All degrees are awarded exclusively by the respective accredited universities.
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-100 flex gap-3 text-xs">
                <Link
                  href="/privacy-policy"
                  className="text-slate-600 hover:text-slate-900 underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-600 hover:text-slate-900 underline"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/contact-us"
                  className="text-slate-600 hover:text-slate-900 underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact & Free Counseling Lead Section */}
      <section id="contact" className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <span>📞</span> 100% Free Admissions Counseling
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Have Questions About Online Degree Admissions?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Speak directly with a verified senior admissions counselor at CollegeVihar to check your eligibility, calculate net semester fees, and explore scholarship opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919266585858"
              className="px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              Call Helpline: +91 9266585858
            </a>
            <a
              href="https://wa.me/919266585858?text=Hi%2C%20I%20want%20guidance%20for%20online%20degree%20programmes."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#25d366] text-white shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Visit Corporate Office
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Universal Compliant Footer */}
      <CompliantFooter
        universityName="Online Manipal, Amity Online &amp; IGNOU"
        partnershipType="general"
        theme="dark"
      />
    </div>
  );
}
