"use client";

import { useState, FormEvent } from "react";

interface ProgramLandingTemplateProps {
  content: Record<string, any>;
  subdomain: string;
}

export default function ProgramLandingTemplate({
  content,
  subdomain,
}: ProgramLandingTemplateProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      state: String(form.get("state") || ""),
      qualification: String(form.get("qualification") || ""),
      subdomain,
      source: "landing-page",
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5005";
      const res = await fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const programName = content.programName || "Online MBA 2026";
  const universityName = content.universityName || "Manipal University Online";
  const badge = content.badge || "ADMISSIONS OPEN FOR UPCOMING SESSION";
  const heroTitle =
    content.heroTitle ||
    `${universityName} ${programName} – Fees, Eligibility, Specialisations & Admission Guide`;
  const heroSubtitle =
    content.heroSubtitle ||
    `Explore ${universityName} ${programName} fees, eligibility, specialisations, curriculum, learning format and admission guidance. Get help from a College Vihar counsellor.`;
  const heroFacts: string[] = content.heroFacts || [
    "2-Year MBA Program",
    "100% Online Learning",
    "4 Semesters",
    "Industry-Aligned Curriculum",
    "Career Support*",
    "Flexible Learning Format",
  ];
  const navLinks: { label: string; href: string }[] = content.navLinks || [
    { label: "Overview", href: "#overview" },
    { label: "Specialisations", href: "#specialisations" },
    { label: "Fees", href: "#fees" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "FAQ", href: "#faq" },
  ];
  const whyChoose: { title: string; description: string }[] =
    content.whyChoose || [
      {
        title: "Industry-Aligned Curriculum",
        description:
          "Build management, leadership and technology-oriented skills through an industry-oriented curriculum.",
      },
      {
        title: "Flexible Online Learning",
        description:
          "Study online while balancing professional or personal commitments.",
      },
      {
        title: "Hands-On Projects",
        description:
          "Gain practical exposure through industry-driven projects and real-world application-focused learning.",
      },
      {
        title: "Modern Technology Skills",
        description:
          "Explore data analytics, digital marketing, finance, operations and strategy through the curriculum and electives.",
      },
      {
        title: "Career Support",
        description:
          "Access career support and placement assistance offered through the university career ecosystem.",
      },
      {
        title: "Online University Degree",
        description: `The MBA is offered by ${universityName}. Verify current eligibility, fees and admission conditions before enrolment.`,
      },
    ];
  const overview: { label: string; value: string }[] = content.overview || [
    { label: "Degree", value: "Master of Business Administration (MBA)" },
    { label: "University", value: universityName },
    { label: "Duration", value: "2 Years / 4 Semesters" },
    { label: "Mode", value: "100% Online" },
    {
      label: "Eligibility",
      value: "Bachelor's degree as per current university rules",
    },
    { label: "Program Fee", value: content.feeAmount || "Rs. 2,50,000*" },
    { label: "Placement Assistance", value: "Career Support*" },
  ];
  const specialisations: { title: string; description: string }[] =
    content.specialisations || [
      {
        title: "Data Analytics",
        description:
          "Explore analytics, data-driven decision-making and business intelligence concepts.",
      },
      {
        title: "Digital Marketing",
        description:
          "Build knowledge around digital marketing, branding and customer engagement.",
      },
      {
        title: "Finance",
        description:
          "Develop knowledge of financial management, investment analysis and corporate finance.",
      },
      {
        title: "Operations",
        description:
          "Focus on supply chain, operations strategy and process improvement.",
      },
      {
        title: "Human Resource Management",
        description:
          "Explore talent management, organisational behaviour and HR strategy.",
      },
      {
        title: "General MBA",
        description:
          "Explore the core MBA curriculum covering management, leadership and business fundamentals.",
      },
    ];
  const curriculum: { title: string; description: string }[] =
    content.curriculum || [
      {
        title: "Semester 1",
        description:
          "Principles of Management, Organisational Behaviour, Business Economics, Financial Accounting and Professional Communication.",
      },
      {
        title: "Semester 2",
        description:
          "Marketing Management, Human Resource Management, Operations Management, Research Methodology and electives.",
      },
      {
        title: "Semester 3",
        description:
          "Strategic Management, Business Analytics, Leadership and electives such as Digital Marketing and Data Analytics.",
      },
      {
        title: "Semester 4",
        description:
          "Final-semester subjects, projects/evaluation and specialisation components as applicable to the current program structure.",
      },
    ];
  const feeAmount = content.feeAmount || "Rs. 2,50,000*";
  const feeDescription =
    content.feeDescription ||
    "Listed program fee. Current official information also shows semester-wise, annual and no-cost EMI options, subject to applicable terms.";
  const eligibility: { title: string; description: string }[] =
    content.eligibility || [
      {
        title: "Bachelor's Degree",
        description:
          "A bachelor's degree from a recognised university may be eligible for the MBA program.",
      },
      {
        title: "Work Experience",
        description:
          "Some specialisations may prefer or require work experience as per current criteria.",
      },
      {
        title: "Other Qualifications",
        description:
          "Eligibility details vary by intake and specialisation. Verify the latest rules before applying.",
      },
    ];
  const career: { title: string; description: string }[] = content.career || [
    {
      title: "Business Analyst",
      description: "Data and process analysis opportunities.",
    },
    {
      title: "Marketing Manager",
      description: "Brand and marketing strategy roles.",
    },
    {
      title: "Financial Analyst",
      description: "Finance and investment analysis opportunities.",
    },
    {
      title: "Operations Manager",
      description: "Operations and supply-chain leadership roles.",
    },
    { title: "HR Manager", description: "Talent and people-management roles." },
    {
      title: "Product Manager",
      description: "Product strategy and cross-functional leadership roles.",
    },
  ];
  const admissionSteps: {
    number: string;
    title: string;
    description: string;
  }[] = content.admissionSteps || [
    {
      number: "01",
      title: "Select Program",
      description: "Choose the MBA program and applicable specialisation.",
    },
    {
      number: "02",
      title: "Complete Application",
      description: "Fill out the required application information.",
    },
    {
      number: "03",
      title: "Pay Program Fee",
      description:
        "Complete applicable payment through the approved university process.",
    },
    {
      number: "04",
      title: "Submit & Register",
      description:
        "Submit the application and complete registration as required.",
    },
  ];
  const faqs: { question: string; answer: string }[] = content.faqs || [
    {
      question: `What is ${universityName} ${programName}?`,
      answer: `It is a 2-year online Master of Business Administration program offered by ${universityName}.`,
    },
    {
      question: "What is the duration of the MBA?",
      answer: "The standard program is listed as 2 years / 4 semesters.",
    },
    {
      question: "What is the current MBA fee?",
      answer: `The standard MBA program is currently listed at ${feeAmount}. Fees and offers can change, so confirm the latest fee before enrolment.`,
    },
    {
      question: "Who can apply?",
      answer:
        "Eligibility can include bachelor's degree holders from recognised universities subject to current rules.",
    },
    {
      question: "Is the MBA completely online?",
      answer:
        "The program is offered in an online learning format. Verify the current delivery structure with the university.",
    },
    {
      question: "Does the university provide placement assistance?",
      answer:
        "The current program page advertises career support. This does not guarantee employment, salary or a particular job outcome.",
    },
  ];
  const ctaTitle =
    content.ctaTitle || `Ready to Explore ${universityName} ${programName}?`;
  const ctaText =
    content.ctaText ||
    "Get guidance on eligibility, fees, specialisations and the admission process.";
  const footerDisclaimer =
    content.footerDisclaimer ||
    "College Vihar is an independent education counselling and admission guidance platform. This page is created for informational and counselling purposes and is not the official website of the university. Program eligibility, fees, admissions, enrollment and other academic decisions are determined by the university. College Vihar does not guarantee admission, employment, salary or placement outcomes.";

  return (
    <div className="font-sans text-[#17233d]">
      <header className="sticky top-0 z-50 bg-white border-b border-[#e3e8f0]">
        <div className="w-[min(1180px,92%)] mx-auto h-[68px] flex items-center justify-between">
          <a className="text-2xl font-extrabold text-[#1565c0]" href="/">
            College<span className="text-[#ef3e35]">Vihar</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-semibold items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#f7a51c]"
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-[#20c96b] text-white px-4 py-2 rounded-full text-sm font-semibold"
              href="#counselling"
            >
              Talk to Expert
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#102d63] text-white py-12 md:py-16">
          <div className="w-[min(1180px,92%)] mx-auto grid md:grid-cols-[1.2fr_0.85fr] gap-10 items-center">
            <div>
              <span className="inline-block bg-[#f7a51c] text-[#111] px-4 py-2 rounded-full text-sm font-extrabold">
                {badge}
              </span>
              <h1 className="text-3xl md:text-[43px] leading-tight font-bold my-4">
                {heroTitle}
              </h1>
              <p className="text-base md:text-lg text-[#edf2ff]">
                {heroSubtitle}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {heroFacts.map((fact, i) => (
                  <div key={i} className="text-sm md:text-base">
                    <span className="text-[#f7a51c]">&#9679;</span> {fact}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-block bg-[#f7a51c] text-[#111] px-5 py-3 rounded-full font-extrabold text-sm"
                  href="#counselling"
                >
                  Get Free MBA Counselling
                </a>
                <a
                  className="inline-block border-2 border-white text-white px-5 py-3 rounded-full font-extrabold text-sm"
                  href="#overview"
                >
                  Explore Program
                </a>
              </div>
            </div>

            <div
              id="counselling"
              className="bg-white text-[#17233d] p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-center text-2xl font-bold mb-1">
                Get Free MBA Counselling
              </h2>
              <p className="text-center text-[#667085] text-sm mb-4">
                Get guidance on eligibility, specialisations and admission.
              </p>

              {status === "success" ? (
                <div className="text-center py-6 text-green-600 font-semibold">
                  Thank you! Our counsellor will reach out soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      name="name"
                      placeholder="Full Name*"
                      required
                      className="w-full p-3 border border-[#ccd4e0] rounded-lg"
                    />
                    <input
                      name="phone"
                      placeholder="Mobile Number*"
                      required
                      className="w-full p-3 border border-[#ccd4e0] rounded-lg"
                    />
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    required
                    className="w-full p-3 border border-[#ccd4e0] rounded-lg"
                  />
                  <div className="grid sm:grid-cols-2 gap-3">
                    <select
                      name="state"
                      required
                      className="w-full p-3 border border-[#ccd4e0] rounded-lg bg-white"
                    >
                      <option value="">Select State*</option>
                      {[
                        "Delhi",
                        "Maharashtra",
                        "Karnataka",
                        "Uttar Pradesh",
                        "Rajasthan",
                        "Gujarat",
                        "Other",
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <select
                      name="qualification"
                      required
                      className="w-full p-3 border border-[#ccd4e0] rounded-lg bg-white"
                    >
                      <option value="">Highest Qualification*</option>
                      {[
                        "BBA",
                        "BTech / BE",
                        "BSc / Science",
                        "BCom / Commerce",
                        "BA / Arts",
                        "Other Bachelor's Degree",
                      ].map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#f7a51c] text-[#111] py-3 rounded-full font-extrabold disabled:opacity-70"
                  >
                    {status === "submitting"
                      ? "Submitting..."
                      : "Request Counselling"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center">
                      {errorMsg}
                    </p>
                  )}
                  <p className="text-xs text-[#687386] text-center">
                    By submitting this form, you agree to be contacted by
                    College Vihar regarding education counselling and admission
                    guidance.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section id="overview" className="py-16">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              Why Choose {universityName} {programName}?
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Explore a flexible, industry-oriented online MBA focused on
              management, leadership and modern technology skills.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f7fb]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              {universityName} {programName} – Quick Overview
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              A quick look at the current program details.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#e3e8f0] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#102d63] text-white text-left">
                    <th className="p-4 font-semibold">Particular</th>
                    <th className="p-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {overview.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#e3e8f0] last:border-0"
                    >
                      <td className="p-4 font-medium">{row.label}</td>
                      <td className="p-4">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#667085] mt-3 text-center">
              *Verify the latest fee, eligibility and career-support terms with
              the university before enrolment.
            </p>
          </div>
        </section>

        <section id="specialisations" className="py-16">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              MBA Specialisations
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Explore currently listed specialisation pathways. Exact
              availability may vary by intake.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialisations.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#667085] mt-6 text-center">
              Verify exact current specialisation names, fees and intake
              availability against the official university page before
              publishing.
            </p>
          </div>
        </section>

        <section id="curriculum" className="py-16 bg-[#f5f7fb]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              MBA Curriculum
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Use the latest official semester-wise curriculum on the live page.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {curriculum.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#667085] mt-6 text-center">
              Expand this section with the exact current official Semester 4
              curriculum before publishing.
            </p>
          </div>
        </section>

        <section id="fees" className="py-16">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              {universityName} {programName} Fees
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              The currently listed standard MBA program fee is shown for
              guidance.
            </p>
            <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl border border-[#e3e8f0] shadow-sm">
              <h3 className="text-3xl font-bold mb-3">{feeAmount}</h3>
              <p className="text-[#667085] mb-5">{feeDescription}</p>
              <a
                className="inline-block bg-[#f7a51c] text-[#111] px-5 py-3 rounded-full font-extrabold text-sm"
                href="#counselling"
              >
                Check Latest Fee
              </a>
            </div>
            <p className="text-xs text-[#667085] mt-5 text-center">
              *Fees and applicable offers can change. Verify the latest fee
              directly with the university before payment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#f5f7fb]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              MBA Eligibility
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Eligibility depends on the candidate's academic background and
              current university rules.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {eligibility.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#667085] mt-6 text-center">
              Eligibility is subject to the latest university admission rules.
              Counselling does not guarantee admission.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              Potential Career Roles After MBA
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Career outcomes depend on skills, experience, employer
              requirements and individual performance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {career.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f7fb]">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-2">
              Admission Process
            </h2>
            <p className="text-center text-[#667085] max-w-3xl mx-auto mb-8">
              Typical steps should be verified against the current university
              admission process.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {admissionSteps.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-[#e3e8f0] shadow-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#102d63] text-white flex items-center justify-center font-extrabold">
                    {item.number}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-center text-[33px] font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-[#e3e8f0] p-4"
                >
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    {item.question}
                    <span className="text-[#f7a51c] font-bold group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[#667085] text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#102d63] text-white text-center">
          <div className="w-[min(1180px,92%)] mx-auto">
            <h2 className="text-[33px] font-bold mb-3">{ctaTitle}</h2>
            <p className="text-[#edf2ff] mb-6">{ctaText}</p>
            <a
              className="inline-block bg-[#f7a51c] text-[#111] px-6 py-3 rounded-full font-extrabold text-sm"
              href="#counselling"
            >
              Get Free MBA Counselling
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f7fb] py-8 border-t border-[#e3e8f0]">
        <div className="w-[min(1180px,92%)] mx-auto">
          <div className="text-sm text-[#667085] mb-4">
            <strong>Disclaimer:</strong> {footerDisclaimer}
          </div>
          <p className="text-center text-xs text-[#667085]">
            &copy; 2026 College Vihar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
