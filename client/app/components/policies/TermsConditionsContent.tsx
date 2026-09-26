import React from "react";
import Link from "next/link";

export default function TermsConditionsContent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          1. Terms of Use &amp; Acceptance
        </h2>
        <p className="mb-3">
          Welcome to <strong>CollegeVihar</strong>. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of our educational portal (<a href="https://collegevihar.com" className="text-blue-700 underline">collegevihar.com</a>) and all related subdomains and landing pages.
        </p>
        <p>
          By accessing this website, submitting an inquiry, or consulting with our academic advisors, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, please do not use this portal.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          2. Nature of Services Provided by CollegeVihar
        </h2>
        <p className="mb-3">
          CollegeVihar is a higher education advisory platform and authorized admissions guidance service. Our services include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Authorized Channel Partner Services:</strong> CollegeVihar acts as an authorized admission counseling &amp; digital marketing channel partner for accredited partner universities, including <strong>Online Manipal (Manipal University Jaipur)</strong> and <strong>Amity University Online</strong>.
          </li>
          <li>
            <strong>Independent Guidance Advisory:</strong> For public institutions such as <strong>IGNOU (Indira Gandhi National Open University)</strong>, CollegeVihar provides independent student facilitation, syllabus assistance, and informational process guidance to prospective distance learners.
          </li>
          <li>
            <strong>Free Counseling &amp; Comparison:</strong> Unbiased evaluation of program structures, duration, fee breakdowns, eligibility criteria, and career electives.
          </li>
          <li>
            <strong>Fee &amp; EMI Assistance:</strong> Connecting eligible candidates with partner financial institutions for zero-cost installment payment options.
          </li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-xs text-red-950 leading-relaxed space-y-2">
        <h3 className="font-bold text-sm text-red-900 flex items-center gap-1.5">
          <span>⚠️</span> Important Statutory &amp; Academic Authority Disclaimer
        </h3>
        <p>
          <strong>CollegeVihar IS NOT a University, College, or Degree-Granting Institution.</strong> We do not confer degrees, diplomas, or academic certifications.
        </p>
        <p>
          All academic degrees, curricula, examinations, evaluations, minimum eligibility norms, credit transfers, and official degree certificates are governed exclusively and granted solely by the respective awarding universities and approved statutory bodies (UGC, AICTE, AIU, DEB).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          3. Accuracy of University Information &amp; Fees
        </h2>
        <p className="mb-3 text-sm">
          While CollegeVihar makes every diligent effort to ensure that tuition fees, eligibility guidelines, syllabi, and recognition details published on this website are up to date and reflective of current university notifications, universities reserve the unilateral right to amend course structures, fee components, or examination schedules at any time without prior notice.
        </p>
        <p className="text-sm">
          Prospective candidates are advised to verify final payment amounts and admission eligibility with official university brochures and their dedicated CollegeVihar academic counselor prior to final payment.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          4. Intellectual Property Rights
        </h2>
        <p className="mb-3 text-sm">
          The names, logos, trademarks, and emblems of <em>Manipal University Jaipur, Online Manipal, Amity University Online, and IGNOU</em> are the exclusive registered intellectual property of their respective university authorities. Their appearance on our landing pages is strictly in the capacity of authorized partner representation, fair educational identification, or program guidance.
        </p>
        <p className="text-sm">
          All original textual content, layout designs, computational fee calculators, graphics, and proprietary software developed by CollegeVihar are the exclusive copyright of CollegeVihar. No portion may be reproduced without prior written permission.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          5. Limitation of Liability
        </h2>
        <p className="mb-3 text-sm">
          Under no circumstances shall CollegeVihar, its directors, employees, or educational counselors be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
          <li>Rejection of an admission application by the university due to ineligibility or document discrepancies.</li>
          <li>Unilateral changes in fee structure, syllabus, or exam schedules implemented by the university.</li>
          <li>Employment or salary placement outcomes following degree completion.</li>
          <li>Technical interruptions, network downtimes, or communication failures on university exam or payment gateways.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          6. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="text-sm mb-3">
          These Terms and any dispute, controversy, or claim arising out of or related to your use of CollegeVihar shall be governed by and construed in accordance with the substantive laws of India.
        </p>
        <p className="text-sm">
          The competent courts situated in <strong>Gautam Buddha Nagar (Noida), Uttar Pradesh, India</strong> shall have exclusive territorial jurisdiction over all legal disputes arising out of these Terms.
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
        For legal inquiries or notices regarding these Terms, please contact our Legal Cell at <a href="mailto:info@collegevihar.com" className="text-blue-700 underline font-semibold">info@collegevihar.com</a>.
      </div>
    </div>
  );
}
