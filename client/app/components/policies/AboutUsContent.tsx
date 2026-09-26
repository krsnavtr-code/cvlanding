import React from "react";
import Link from "next/link";

export default function AboutUsContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          1. About CollegeVihar
        </h2>
        <p className="mb-3">
          <strong>CollegeVihar</strong> is one of India&apos;s premier educational consultancy and digital admission counseling platforms. We are dedicated to bridging the gap between ambitious learners and premier accredited universities offering flexible online and distance education degrees (including Online MBA, MCA, and BBA programmes).
        </p>
        <p>
          Headquartered in Noida, Uttar Pradesh, CollegeVihar has guided over 25,000+ working professionals, undergraduate aspirants, and international students towards UGC-DEB entitled higher education qualifications that empower their career growth.
        </p>
      </div>

      {/* Business Identity & Legal Information */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🏢</span> Corporate Business Identity &amp; Contact Details
        </h3>
        <p className="text-xs text-slate-600">
          In full compliance with statutory e-commerce and digital advertising consumer transparency standards, the official identity of the platform is detailed below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Platform &amp; Brand Name:
            </span>
            <span className="font-bold text-slate-900 text-sm">CollegeVihar</span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Nature of Business:
            </span>
            <span className="text-slate-800">
              Higher Education Advisory, Admission Guidance &amp; Authorized University Channel Partner
            </span>
          </div>
          <div className="space-y-1 md:col-span-2">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Registered Corporate Office:
            </span>
            <span className="text-slate-800 font-medium">
              Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301, India (Near Lohia Kia Sales)
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Student Helpline / Phone:
            </span>
            <a href="tel:+919266585858" className="text-blue-700 font-bold hover:underline">
              +91 9266585858
            </a>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Official Email Addresses:
            </span>
            <div className="text-slate-800">
              <a href="mailto:info@collegevihar.com" className="text-blue-700 hover:underline">info@collegevihar.com</a>
              {" • "}
              <a href="mailto:support@collegevihar.com" className="text-blue-700 hover:underline">support@collegevihar.com</a>
            </div>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Support Working Hours:
            </span>
            <span className="text-slate-800">
              Monday to Saturday: 9:30 AM – 6:30 PM IST (Sundays by appointment)
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Official Website:
            </span>
            <a href="https://collegevihar.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">
              https://collegevihar.com
            </a>
          </div>
        </div>
      </div>

      {/* Actual Affiliation & Partnership Clarification */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          2. University Partnerships &amp; Affiliation Disclosure
        </h2>
        <p className="mb-4">
          CollegeVihar believes in 100% honesty and transparency. We strictly clarify our specific and actual working relationships with university institutions so that prospective students and statutory bodies are fully aware of our exact capacity:
        </p>

        <div className="space-y-4">
          {/* Online Manipal */}
          <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="font-bold text-blue-950 text-base">
                Online Manipal (Manipal University Jaipur - MUJ)
              </h4>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                Authorized Channel Partner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>CollegeVihar is an Authorized Admission &amp; Digital Marketing Channel Partner</strong> for Online Manipal programmes (MBA, MCA, BBA). In this capacity, our academic advisors assist students with authentic fee schedules, eligibility verification, scholarship queries, and streamline application submission to Manipal University Jaipur.
            </p>
          </div>

          {/* Amity Online */}
          <div className="border border-amber-100 bg-amber-50/50 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="font-bold text-amber-950 text-base">
                Amity University Online
              </h4>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Authorized Admission Partner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>CollegeVihar is an Authorized Admission &amp; Marketing Channel Partner</strong> for Amity University Online programmes (MBA, MCA, BBA). Our counsellors assist learners with curriculum breakdowns, career track specializations, no-cost EMI paperwork, and direct admission coordination with Amity University Online.
            </p>
          </div>

          {/* IGNOU */}
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h4 className="font-bold text-slate-900 text-base">
                IGNOU (Indira Gandhi National Open University)
              </h4>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                Independent Guidance Advisory
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Important Transparency Notice:</strong> IGNOU is a central open university established by an Act of Parliament that does not appoint private marketing agencies or authorized commercial franchises. CollegeVihar functions strictly as an <strong>Independent Career Guidance &amp; Information Advisory</strong>. We provide prospective students with syllabus clarification, eligibility advice, assignment guidance, and step-by-step navigation for official IGNOU portal submissions (<code className="text-xs bg-slate-200 px-1 rounded">ignou.ac.in</code> / <code className="text-xs bg-slate-200 px-1 rounded">ignouiop.samarth.edu.in</code>).
            </p>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          3. Our Services &amp; Student Commitments
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 font-bold text-base">✓</span>
            <div>
              <strong>100% Free &amp; Unbiased Counselling:</strong> We do not charge students any consultation fees for academic counselling or university comparison.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 font-bold text-base">✓</span>
            <div>
              <strong>Verified Fees &amp; Direct Fee Payments:</strong> Course tuition fees are paid directly to the respective university accounts. CollegeVihar never collects unauthorized cash or personal transfers for university tuition fees.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 font-bold text-base">✓</span>
            <div>
              <strong>0% Interest EMI Assistance:</strong> We connect applicants with authorized banking and NBFC partners to facilitate flexible, low-cost installment schemes.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-emerald-600 font-bold text-base">✓</span>
            <div>
              <strong>End-to-End Documentation Support:</strong> Our team assists candidates in compiling qualifying marksheets, government IDs, and experience certificates for accurate university enrollment.
            </div>
          </li>
        </ul>
      </div>

      {/* Our Mission */}
      <div className="bg-gradient-to-r from-[#0a2540] to-[#155ca4] text-white p-6 sm:p-8 rounded-2xl">
        <h3 className="text-lg font-bold mb-2">Our Mission</h3>
        <p className="text-sm text-slate-200 leading-relaxed mb-4">
          To democratize access to top-tier higher education across India by offering authentic counseling, accurate fee insights, and career-aligned degree pathways with zero hidden terms.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <Link href="/contact-us" className="px-4 py-2 rounded-lg bg-[#ef3e35] text-white hover:bg-[#d6342c] transition-colors">
            Contact Our Advisors →
          </Link>
          <Link href="/disclaimer" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
            Read Statutory Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}
