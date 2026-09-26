import React from "react";
import Link from "next/link";

interface DisclaimerContentProps {
  universityContext?: {
    name: string;
    shortName: string;
    relationship: "manipal" | "amity" | "ignou" | "general";
  };
}

export default function DisclaimerContent({ universityContext }: DisclaimerContentProps) {
  return (
    <div className="space-y-8">
      {/* Prominent Banner */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 text-slate-800">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div className="space-y-2">
            <h3 className="text-base font-black text-amber-950 uppercase tracking-wide">
              Mandatory Statutory &amp; Institutional Disclosure
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              This webpage is operated by <strong>CollegeVihar</strong> (Higher Education Advisory &amp; Digital Admission Guidance Service). <strong>CollegeVihar is NOT a university, autonomous college, or degree-awarding entity.</strong> We operate as an educational consultancy and authorized admissions channel partner.
            </p>
          </div>
        </div>
      </div>

      {/* Specific University Clarifications */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
          1. University Affiliation &amp; Partnership Disclosures
        </h2>
        <div className="space-y-4 text-sm leading-relaxed">
          {/* Online Manipal */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 text-base">
                A. Manipal University Jaipur (Online Manipal)
              </h3>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                Authorized Marketing Channel Partner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mb-2">
              CollegeVihar is an <strong>Authorized Admission Counseling &amp; Digital Marketing Channel Partner</strong> for online degree programmes (Online MBA, MCA, BBA) offered by Manipal University Jaipur through the Online Manipal platform.
            </p>
            <p className="text-xs text-slate-500">
              <em>Trademark notice:</em> Manipal, Manipal University Jaipur, Online Manipal, and associated brand crests are the exclusive registered trademarks of the Manipal Education Group. CollegeVihar uses these logos strictly in its authorized promotional and counseling capacity.
            </p>
          </div>

          {/* Amity Online */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 text-base">
                B. Amity University Online
              </h3>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Authorized Enrollment Channel Partner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mb-2">
              CollegeVihar is an <strong>Authorized Admission Guidance &amp; Marketing Channel Partner</strong> for online degree programmes (Online MBA, MCA, BBA) offered by Amity University Online.
            </p>
            <p className="text-xs text-slate-500">
              <em>Trademark notice:</em> Amity, Amity University, Amity Online, and associated logos belong solely to the Ritnand Balved Education Foundation / Amity University. Their use on CollegeVihar is strictly for authorized enrollment counseling.
            </p>
          </div>

          {/* IGNOU */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 text-base">
                C. Indira Gandhi National Open University (IGNOU)
              </h3>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                Independent Student Information Advisory
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mb-2">
              <strong>CollegeVihar is an Independent Career Guidance Advisory and is NOT an official agency or franchise of IGNOU.</strong> IGNOU is a central government university that does not authorize private admission agencies. Our role is solely to provide prospective students with process navigation, syllabus details, eligibility counseling, and guidance to the official IGNOU registration portal (<code className="text-xs bg-slate-200 px-1 rounded">ignou.ac.in</code>).
            </p>
            <p className="text-xs text-slate-500">
              <em>Trademark notice:</em> IGNOU, its insignia, and course names are properties of Indira Gandhi National Open University. CollegeVihar claims no affiliation, sponsorship, or ownership over IGNOU trademarks.
            </p>
          </div>
        </div>
      </div>

      {/* Program & Fee Disclaimer */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          2. Academic Policies, Fees &amp; Degree Conformance
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>
            <strong>Degree Awarding Authority:</strong> All degrees, academic transcripts, and diplomas are awarded directly and solely by the respective accredited universities (Manipal University Jaipur, Amity University Online, or IGNOU) upon the candidate satisfying all statutory academic criteria.
          </li>
          <li>
            <strong>Course Fees &amp; Payments:</strong> Tuition fees, exam fees, and registration charges are fixed by the university and statutory bodies (UGC-DEB). All course fees must be paid directly to the designated official bank accounts or payment gateways of the respective university. CollegeVihar never collects unauthorized cash or personal transfers for university tuition fees.
          </li>
          <li>
            <strong>Curriculum &amp; Examination:</strong> University syllabi, live lecture schedules, assignment formats, and semester examinations are under the absolute control of the respective university.
          </li>
        </ul>
      </div>

      {/* No Job Guarantee Disclaimer */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          3. Placement &amp; Employment Disclaimer
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          While universities and CollegeVihar offer career guidance, resume workshops, and campus placement drives through recruiting partners, <strong>CollegeVihar does not promise or guarantee guaranteed employment, job placements, or specific salary compensation packages</strong> upon completion of any program. Final career outcomes depend exclusively on individual student performance, prior experience, and hiring market conditions.
        </p>
      </div>

      {/* Non-Government Entity Clarification */}
      <div className="bg-slate-100 rounded-xl p-5 text-xs text-slate-600 space-y-2">
        <h3 className="font-bold text-sm text-slate-900">
          4. Non-Government Entity Clarification
        </h3>
        <p>
          CollegeVihar is a private educational consultancy and is not owned, funded, or affiliated with the Government of India, the Ministry of Education, or the University Grants Commission (UGC).
        </p>
        <p>
          For official government notifications on distance education regulations, please visit the official UGC-DEB portal at <a href="https://deb.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">deb.ugc.ac.in</a>.
        </p>
      </div>

      {/* Contact for Inquiries */}
      <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
        If you have any questions or require formal verification regarding our university partner status or statutory disclosures, please contact:
        <div className="mt-2 font-medium text-slate-700">
          Legal &amp; Compliance Cell, CollegeVihar<br />
          Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301<br />
          Phone: +91 9266585858 | Email: info@collegevihar.com
        </div>
      </div>
    </div>
  );
}
