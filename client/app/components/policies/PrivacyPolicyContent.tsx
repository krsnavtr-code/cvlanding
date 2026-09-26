import React from "react";
import Link from "next/link";

export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          1. Introduction &amp; Scope
        </h2>
        <p className="mb-3">
          This Privacy Policy outlines how <strong>CollegeVihar</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, processes, stores, and protects the personal and academic information you share with us through our website (<a href="https://collegevihar.com" className="text-blue-700 underline">collegevihar.com</a>) and its associated educational landing pages and subdomains.
        </p>
        <p>
          We are committed to maintaining the confidentiality, integrity, and security of your personal information in strict accordance with the <em>Information Technology Act, 2000</em>, the <em>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</em>, and applicable digital advertising guidelines.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          2. Information We Collect
        </h2>
        <p className="mb-3">
          When you request educational counseling, download a prospectus, calculate fees, or apply for admission guidance through our portal, we may collect the following categories of information:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Direct Personal Identification Details:</strong> Full Name, Mobile Phone Number, Email Address, and State/City of Residence.
          </li>
          <li>
            <strong>Academic Background:</strong> Highest Educational Qualification (e.g. 10+2, Graduation, Post-Graduation), percentage/CGPA, current work experience status, and prospective program/specialisation of interest.
          </li>
          <li>
            <strong>Technical &amp; Browsing Data:</strong> IP Address, browser type, operating system, referring URL, time stamp, device identifiers, and interactions on our web pages.
          </li>
          <li>
            <strong>Communication Records:</strong> Records of queries, telephonic counseling conversations, WhatsApp inquiries, and email correspondence.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          3. How We Use Your Information
        </h2>
        <p className="mb-3">
          Your personal data is collected and processed solely for legitimate educational and counseling objectives:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>To verify your eligibility for chosen online degree programs (such as Online MBA, MCA, BBA).</li>
          <li>To provide free, comprehensive academic counseling and guide you through the university admission process.</li>
          <li>
            To transmit application details to <strong>authorized partner universities</strong> (specifically Online Manipal / Amity University Online) upon your explicit request and consent.
          </li>
          <li>To send course brochures, fee schedules, scholarship opportunities, EMI payment guidelines, and important admission deadline alerts via Phone Call, WhatsApp, SMS, or Email.</li>
          <li>To enhance our portal functionality, optimize user experience, and ensure system security.</li>
        </ul>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 leading-relaxed">
        <h3 className="font-bold text-sm mb-1.5 text-amber-950 flex items-center gap-1.5">
          <span>🔒</span> Our Strict Anti-Spam &amp; Non-Sale Guarantee
        </h3>
        <p>
          CollegeVihar <strong>DOES NOT</strong> sell, rent, trade, or lease your personal contact details to any third-party marketing companies, insurance agencies, or unrelated commercial brokers. Your data is strictly used for the higher education admission inquiry you initiated.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          4. Consent &amp; Communication Preferences
        </h2>
        <p className="mb-3">
          By submitting your details on our enquiry forms, you expressly consent to receive academic advisory communications from CollegeVihar and its verified counselors via phone call, SMS, WhatsApp, and email, overriding any National Do Not Disturb (NDNC / DND) registration for this specific academic inquiry.
        </p>
        <p className="text-sm">
          You may revoke your consent or opt out of non-essential communications at any time by sending an email to <a href="mailto:support@collegevihar.com" className="text-blue-700 underline font-semibold">support@collegevihar.com</a> or replying &quot;STOP&quot; to our WhatsApp messages.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          5. Cookies &amp; Digital Tracking Technologies
        </h2>
        <p className="mb-3 text-sm">
          Our website utilizes standard session cookies, Google Analytics, and conversion tracking tags (such as Google Tag Manager) to understand site usage trends, diagnose technical issues, and measure the effectiveness of our advertising campaigns.
        </p>
        <p className="text-sm">
          You can instruct your web browser to refuse all cookies or notify you when a cookie is sent. However, some sections of our advisory portal may not function smoothly without standard session cookies enabled.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          6. Data Security &amp; Retention
        </h2>
        <p className="mb-3 text-sm">
          We implement rigorous technical, electronic, and procedural safeguards—including industry-standard SSL/TLS encryption, firewall architectures, and restricted counselor access—to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>
        <p className="text-sm">
          We retain your personal inquiry records only for as long as necessary to fulfill the counseling purpose or as mandated by statutory compliance requirements.
        </p>
      </div>

      {/* Grievance Redressal */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          7. Grievance Officer &amp; Contact Details
        </h3>
        <p className="text-xs text-slate-600">
          Pursuant to Rule 5(9) of the Information Technology (SPDI) Rules, 2011, if you have any questions, concerns, or grievances regarding the processing of your personal data, you may contact our designated Grievance Officer:
        </p>
        <div className="text-xs space-y-1.5 pt-1 text-slate-700">
          <div><strong>Designation:</strong> Data Protection &amp; Grievance Officer</div>
          <div><strong>Organisation:</strong> CollegeVihar Educational Advisory</div>
          <div><strong>Office Address:</strong> Plot No. 63, Sector 64 Rd, B Block, Sector 63, Noida, Uttar Pradesh 201301, India</div>
          <div><strong>Direct Grievance Email:</strong> <a href="mailto:grievance@collegevihar.com" className="text-blue-700 underline font-medium">grievance@collegevihar.com</a> (copy to <a href="mailto:info@collegevihar.com" className="text-blue-700 underline font-medium">info@collegevihar.com</a>)</div>
          <div><strong>Helpline Number:</strong> +91 9266585858</div>
          <div><strong>Response Timeline:</strong> Within 48 business hours</div>
        </div>
      </div>
    </div>
  );
}
