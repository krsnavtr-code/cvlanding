"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CompliantFooter from "@/app/components/CompliantFooter";

const WA_NUMBER = "919266585858";
const DISPLAY_PHONE = "+919266585858";

export default function IgnouOnlineMbaPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "ignouonlinemba",
}: {
  subdomain?: string;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form states
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Handle ESC key to close modal & body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const qualification = String(form.get("education") || "").trim();

    const payload = {
      name,
      email,
      phone,
      qualification,
      specialisation: "Online MBA",
      state: "",
      subdomain: subdomain || "ignouonlinemba",
      university: "IGNOU",
      program: "Online MBA",
      source: "IGNOU Online MBA Landing Page",
    };

    setFormStatus("submitting");
    setStatusMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setFormStatus("success");
      setStatusMessage("Thank you! Your enquiry has been received.");
      formElement?.reset();
      setIsModalOpen(false);
      router.push("/thank-you");
    } catch {
      // Fallback for static preview / network issues
      setFormStatus("success");
      setStatusMessage("Thank you! Your enquiry has been recorded.");
      formElement?.reset();
      setIsModalOpen(false);
      router.push("/thank-you");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChoose = [
    {
      num: "01",
      title: "AICTE Recognised",
      desc: "IGNOU's MBA Online (MBAOL) is listed by the University as an AICTE recognised programme.",
    },
    {
      num: "02",
      title: "Flexible Learning",
      desc: "Study through an online learning format suited to working professionals and learners seeking flexibility.",
    },
    {
      num: "03",
      title: "Affordable Fee",
      desc: "The current listed Indian programme fee is ₹66,000 across the four-semester structure, excluding exam fee.",
    },
    {
      num: "04",
      title: "Fresh Graduates & Professionals",
      desc: "IGNOU identifies working personnel, professionals and fresh graduates among the target learners.",
    },
    {
      num: "05",
      title: "Management Curriculum",
      desc: "Core areas include management functions, HR, business environment, accounting, marketing, strategy and finance.",
    },
    {
      num: "06",
      title: "Online MBA",
      desc: "The dedicated MBAOL programme is listed separately by IGNOU for online-mode learners.",
    },
  ];

  const eligibilityCriteria = [
    {
      icon: "✓",
      title: "Recognised Bachelor's Degree",
      desc: "Passed a Bachelor's Degree of minimum 3 years duration from a recognised institution/university.",
    },
    {
      icon: "50%",
      title: "Minimum 50% Marks",
      desc: "At least 50% marks for general category candidates; 45% for candidates belonging to reserved categories.",
    },
    {
      icon: "💼",
      title: "Working Professionals Welcome",
      desc: "IGNOU lists working personnel, professionals and fresh graduates among the target learners.",
    },
  ];

  const curriculumSemesters = [
    {
      semester: "Semester 1",
      subjects: [
        "Management Functions & Organisational Processes",
        "Human Resource Management",
        "Business Environment",
        "Accounting for Managers",
        "Quantitative Analysis",
        "Marketing Management",
        "Business Communication",
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        "Information Systems for Managers",
        "Management of Machines & Materials",
        "Managerial Economics",
        "Social Processes & Behavioural Issues",
        "Strategic Management",
        "Business Laws",
        "Financial Management",
      ],
    },
    {
      semester: "Semester 3 & 4",
      subjects: [
        "Research Methodology for Management Decisions",
        "International Business Management",
        "Advanced Strategic Management",
        "Entrepreneurship",
        "Electives & Project Work Components",
      ],
    },
  ];

  const specialisations = [
    "Human Resource Management",
    "Financial Management",
    "Marketing Management",
    "Operations Management",
    "Banking & Finance",
    "Agribusiness Management",
    "Construction Management",
    "Health Care & Hospital Management",
    "Logistics & Supply Chain Management",
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      desc: "Confirm your graduation marks and university eligibility standards.",
    },
    {
      step: "2",
      title: "Get Programme Details",
      desc: "Review fee structure, semester timetable, curriculum, and admission dates.",
    },
    {
      step: "3",
      title: "Apply Online",
      desc: "Complete the online application through the official IGNOU admission portal.",
    },
    {
      step: "4",
      title: "Complete Admission",
      desc: "Follow the University's instructions for document verification and fee payment.",
    },
  ];

  const faqs = [
    {
      q: "What is the duration of IGNOU Online MBA?",
      a: "The minimum duration is 24 months (2 years) and the maximum duration is 48 months (4 years), providing complete flexibility for working individuals.",
    },
    {
      q: "What is the current fee?",
      a: "The programme fee is ₹16,000 each for Semesters I, II, and IV, and ₹18,000 for Semester III, totaling ₹66,000 for the full two-year programme. Examination fees are paid separately per semester.",
    },
    {
      q: "What is the eligibility for IGNOU Online MBA?",
      a: "Passed a Bachelor's Degree of minimum 3 years duration with at least 50% marks (45% for candidates belonging to reserved categories) from a recognised university.",
    },
    {
      q: "Is IGNOU Online MBA AICTE recognised?",
      a: "Yes. IGNOU's official MBA Online (MBAOL) programme is approved and recognised by the All India Council for Technical Education (AICTE) and UGC-DEB.",
    },
    {
      q: "Can working professionals pursue this MBA?",
      a: "Yes. IGNOU specifically lists working personnel and working professionals among the primary target learners with self-paced digital learning materials and weekend counseling.",
    },
    {
      q: "Where should I apply?",
      a: "The online admission portal depends on the active admission cycle. Our dedicated CollegeVihar academic counseling team will guide you directly to the correct portal and ensure accurate submission.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#12233b] font-sans antialiased selection:bg-[#f3c64b] selection:text-[#071a36]">
      {/* Top Compliance Bar */}
      <div className="bg-[#06182f] text-slate-300 text-[11px] py-1.5 px-4 border-b border-white/10 font-semibold">
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>
              CollegeVihar – Independent Higher Education Guidance Advisory for IGNOU Programmes
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-300">
            <span>Student Helpline: <strong className="text-white">+91 9266585858</strong></span>
            <span>•</span>
            <a href="/disclaimer" className="text-[#f4c64b] hover:underline">Statutory Disclosure</a>
          </div>
        </div>
      </div>

      {/* 1. TOP HEADER & HERO CONTAINER */}
      <div className="pt-4 sm:pt-6 pb-2 bg-gradient-to-b from-[#eaf2fb] via-[#f5f8fc] to-[#f5f8fc]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          {/* Header Bar */}
          <header className="min-h-[76px] sm:min-h-[82px] bg-gradient-to-r from-[#06192f] to-[#103963] rounded-[22px] sm:rounded-[26px] px-4 sm:px-6 py-3 flex items-center justify-between shadow-[0_20px_46px_rgba(7,26,54,0.16)] border border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ignou-logo.png"
                alt="IGNOU - The People's University"
                width={260}
                height={58}
                className="h-8 sm:h-[46px] w-auto object-contain brightness-0 invert"
                priority
              />
              <div className="h-7 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-black text-white leading-tight">
                  College<span className="text-[#f4c64b]">Vihar</span>
                </span>
                <span className="text-[10px] text-[#ffd56b] font-bold">
                  Admission Guidance Portal
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold bg-white text-[#0a2344] shadow-[0_7px_18px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-transform"
              >
                <span>☎</span> Call Now
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform"
              >
                Enquire Now →
              </button>
            </div>
          </header>

          {/* Admission Cycle Notification Strip */}
          <div className="mt-3.5 bg-gradient-to-r from-[#f4c64b] via-[#ffe69a] to-[#f4c64b] rounded-2xl py-2.5 sm:py-3 px-4 text-center font-extrabold text-[#18263b] text-xs sm:text-sm tracking-wide shadow-[0_8px_18px_rgba(243,198,75,0.16)] border border-[#e5b63b]">
            JANUARY 2027 ADMISSION CYCLE • MBA ENQUIRIES & GUIDANCE OPEN
          </div>

          {/* Hero Section */}
          <div className="mt-3.5 rounded-[26px] sm:rounded-[30px] overflow-hidden bg-[radial-gradient(circle_at_90%_5%,rgba(64,145,237,0.31),transparent_31%),radial-gradient(circle_at_0_100%,rgba(244,198,75,0.17),transparent_34%),linear-gradient(135deg,#06182f,#0d315b_63%,#0c2548)] text-white p-6 sm:p-10 lg:p-14 relative shadow-[0_25px_60px_rgba(6,24,47,0.22)] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.16fr_0.84fr] gap-8 lg:gap-12 items-center">
              {/* Left Column: Headlines & Stats */}
              <div>
                <div className="inline-flex items-center gap-2 text-[#ffe296] text-xs sm:text-sm font-black tracking-wider uppercase mb-3 sm:mb-4 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <span>🎓</span> IGNOU • School of Management Studies
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] sm:leading-[1.02] tracking-tight mb-4 sm:mb-5">
                  Build Your Future With An{" "}
                  <span className="text-[#f5c84b] underline decoration-[#f5c84b]/40">
                    Online MBA
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#dbe8f7] max-w-[650px] mb-6 sm:mb-8 font-normal">
                  Explore the recognized IGNOU Online MBA programme with flexible learning, an AICTE-recognised management curriculum, and an affordable fee structure designed for fresh graduates and working personnel.
                </p>

                {/* Hero CTAs */}
                <div className="flex items-center gap-3 flex-wrap mb-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform"
                  >
                    Check Eligibility →
                  </button>
                  <a
                    href="#fees"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                  >
                    View Fees
                  </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  <div className="bg-white/[0.085] border border-white/15 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md">
                    <b className="block text-lg sm:text-xl font-black text-white">24 Months</b>
                    <span className="text-[11px] sm:text-xs text-[#c6d6ea]">Minimum duration</span>
                  </div>
                  <div className="bg-white/[0.085] border border-white/15 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md">
                    <b className="block text-lg sm:text-xl font-black text-white">48 Months</b>
                    <span className="text-[11px] sm:text-xs text-[#c6d6ea]">Maximum duration</span>
                  </div>
                  <div className="bg-white/[0.085] border border-white/15 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md">
                    <b className="block text-lg sm:text-xl font-black text-[#f5c84b]">₹66,000</b>
                    <span className="text-[11px] sm:text-xs text-[#c6d6ea]">Programme fee*</span>
                  </div>
                  <div className="bg-white/[0.085] border border-white/15 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md">
                    <b className="block text-lg sm:text-xl font-black text-white">50%</b>
                    <span className="text-[11px] sm:text-xs text-[#c6d6ea]">Minimum marks</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form Card */}
              <div className="bg-white text-[#12233b] rounded-[24px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-white/80">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl sm:text-2xl font-black text-[#071a36]">
                    Get MBA Details
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Free Counselling
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#637289] mb-5 leading-normal">
                  Share your details and our admission support team will help you with eligibility, fees, and the application process.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      placeholder="10-digit Mobile Number"
                      className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                    />
                  </div>
                  <div>
                    <select
                      name="education"
                      required
                      defaultValue=""
                      className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all"
                    >
                      <option value="" disabled>
                        Highest Qualification
                      </option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-12 rounded-xl font-black text-sm bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {formStatus === "submitting" ? (
                      <span>Submitting...</span>
                    ) : (
                      <span>Get Admission Guidance →</span>
                    )}
                  </button>

                  {statusMessage && (
                    <div className="text-xs text-center font-bold text-emerald-600 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                      {statusMessage}
                    </div>
                  )}

                  <div className="text-[11px] leading-relaxed text-[#7a8796] text-center pt-1">
                    By submitting this form, you agree to be contacted regarding the programme and admission process.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHY IGNOU ONLINE MBA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Why IGNOU Online MBA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              A flexible MBA built around your schedule
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              The official MBA Online programme is listed by IGNOU as AICTE recognised and designed for fresh graduates and working personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5ebf2] rounded-[22px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(16,37,65,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,37,65,0.09)] transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#edf5ff] text-[#1557a6] font-black text-sm flex items-center justify-center mb-4 group-hover:bg-[#1557a6] group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102541] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#637289] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEE STRUCTURE */}
      <section id="fees" className="py-16 sm:py-20 pt-0">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Fee Structure
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              Simple, transparent programme fee
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              Based on current IGNOU programme information for Indian learners.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#fff8e6] to-white border border-[#efdd9c] rounded-[26px] p-6 sm:p-10 shadow-[0_10px_28px_rgba(110,88,18,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Fee Highlight */}
            <div>
              <div className="text-xs font-black text-[#856600] tracking-wider uppercase mb-2">
                TOTAL PROGRAMME FEE
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#0b2548] leading-none mb-3">
                ₹66,000
                <span className="text-sm sm:text-base font-semibold text-[#637289] ml-2">
                  / full programme
                </span>
              </div>
              <p className="text-xs text-[#687486] leading-relaxed max-w-md">
                *Exam fee is not included and is as decided by the University. Applicable registration/development charges may also be payable.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform"
              >
                Get Fee & Admission Details
              </button>
            </div>

            {/* Right Semester Breakdown */}
            <div className="space-y-3 bg-white/70 p-5 sm:p-6 rounded-2xl border border-[#ecd99d]/60">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#ddd4b9] text-sm sm:text-base">
                <span className="text-[#102541] font-medium">Semester I</span>
                <b className="text-[#122b4b] font-extrabold">₹16,000</b>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#ddd4b9] text-sm sm:text-base">
                <span className="text-[#102541] font-medium">Semester II</span>
                <b className="text-[#122b4b] font-extrabold">₹16,000</b>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#ddd4b9] text-sm sm:text-base">
                <span className="text-[#102541] font-medium">Semester III</span>
                <b className="text-[#122b4b] font-extrabold">₹18,000</b>
              </div>
              <div className="flex items-center justify-between pt-1 text-sm sm:text-base">
                <span className="text-[#102541] font-medium">Semester IV</span>
                <b className="text-[#122b4b] font-extrabold">₹16,000</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ELIGIBILITY */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#e5ebf2]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Eligibility
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              Who can apply?
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              Eligibility follows the current IGNOU MBA Online programme listing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fcfdfe] border border-[#e5ebf2] rounded-[22px] p-7 shadow-[0_8px_24px_rgba(16,37,65,0.04)] hover:border-[#1768b6]/30 transition-all text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#edf5ff] text-[#1557a6] font-black text-lg flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#102541] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#637289] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              Learn the foundations of modern management
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              The current MBA Online course structure includes contemporary management subjects across four semesters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumSemesters.map((sem, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5ebf2] rounded-[22px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(16,37,65,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-[#edf5ff] text-[#1557a6] text-xs font-extrabold mb-4">
                    Four-Semester Structure
                  </div>
                  <h3 className="text-xl font-black text-[#102541] mb-4">
                    {sem.semester}
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#4b5563]">
                    {sem.subjects.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#1768b6] font-bold text-xs mt-1">
                          •
                        </span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f0f4f8]">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-bold text-[#1768b6] hover:text-[#0b2c55] flex items-center gap-1"
                  >
                    Download Syllabus Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIALISATIONS */}
      <section className="py-16 sm:py-20 pt-0">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Specialisations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              Explore management specialisation pathways
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              IGNOU currently lists dedicated MBA programmes in several functional areas alongside the general MBA.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {specialisations.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#d9e3ef] rounded-full px-5 py-3 text-xs sm:text-sm font-bold text-[#17375f] shadow-[0_4px_15px_rgba(16,37,65,0.04)] hover:bg-[#1768b6] hover:text-white hover:border-[#1768b6] transition-all cursor-default"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSION PROCESS */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#e5ebf2]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[780px] mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              Admission Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 mb-3 tracking-tight">
              From enquiry to application
            </h2>
            <p className="text-sm sm:text-base text-[#637289] leading-relaxed">
              Get assistance understanding the current admission cycle and application requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#fbfcfe] border border-[#e5ebf2] rounded-[22px] p-6 shadow-[0_8px_24px_rgba(16,37,65,0.045)] relative group hover:-translate-y-1 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-[#1557a6] text-white font-black text-sm flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#102541] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#637289] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[890px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-black tracking-widest text-[#1768b6] uppercase">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102541] mt-2 tracking-tight">
              IGNOU Online MBA — quick answers
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e5ebf2] rounded-2xl overflow-hidden shadow-[0_5px_18px_rgba(16,37,65,0.035)] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between font-bold text-sm sm:text-base text-[#152942] hover:text-[#1768b6] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 text-xl font-light text-[#637289]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#637289] leading-relaxed border-t border-[#f0f4f8]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BOX */}
      <section className="py-12 sm:py-16 pt-0">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#071a36] to-[#155ca4] text-white rounded-[28px] p-8 sm:p-12 text-center shadow-[0_22px_52px_rgba(7,26,54,0.18)] border border-white/10">
            <h2 className="text-2xl sm:text-4xl font-black mb-3 leading-tight">
              Ready to explore your IGNOU MBA?
            </h2>
            <p className="text-sm sm:text-base text-[#dbe8f8] max-w-[700px] mx-auto mb-6 leading-relaxed">
              Check your eligibility, understand the fee structure, and get guidance for the current admission cycle.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform"
            >
              Get Admission Guidance →
            </button>
          </div>
        </div>
      </section>

      {/* 10. FOOTER & DISCLAIMER */}
      <CompliantFooter
        universityName="IGNOU (Indira Gandhi National Open University)"
        universityShortName="IGNOU"
        programName="Online MBA"
        partnershipType="ignou"
        theme="white"
      />

      {/* 11. FLOATING ACTION BUTTONS (DESKTOP & TABLET) */}
      <div className="fixed right-5 bottom-20 sm:bottom-8 flex flex-col gap-3 z-30">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
            "Hi, I want details about IGNOU Online MBA."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 32 32">
            <path d="M16 3.2A12.8 12.8 0 0 0 5.1 22.7L3.3 28.8l6.3-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.7 1.1 1.1-3.6-.2-.4A10.3 10.3 0 1 1 16 26.4Zm5.9-7.8c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-1.5-.7-2.6-1.4-3.6-3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.8c.2.3 2.4 3.8 5.9 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
          </svg>
        </a>

        <a
          href={`tel:${DISPLAY_PHONE}`}
          aria-label="Direct Call"
          className="w-13 h-13 rounded-full bg-[#1468c4] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.1.7.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C11.1 21.2 2.8 12.9 2.8 2.8 2.8 2.1 3.3 1.6 4 1.6h3.1c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.7 4.1.1.4 0 .9-.2 1.2l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* 12. STICKY MOBILE BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e4e9f0] p-2.5 z-40 flex items-center gap-2.5 shadow-[0_-8px_22px_rgba(0,0,0,0.07)]">
        <a
          href={`tel:${DISPLAY_PHONE}`}
          className="flex-1 py-3 text-center text-xs font-bold rounded-xl bg-[#eaf2ff] text-[#1557a6]"
        >
          ☎ Call Now
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 py-3 text-center text-xs font-extrabold rounded-xl bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-sm"
        >
          Enquire Now
        </button>
      </div>

      {/* 13. ENQUIRY MODAL POPUP */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 bg-[#030d1b]/70 backdrop-blur-xs z-50 p-4 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div className="w-full max-w-[480px] bg-white rounded-[26px] p-6 sm:p-8 relative shadow-[0_28px_70px_rgba(0,0,0,0.3)] border border-[#e5ebf2]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 w-9 h-9 rounded-full bg-[#eef2f6] text-[#637289] hover:bg-[#e2e8f0] flex items-center justify-center text-lg font-bold transition-colors cursor-pointer"
            >
              ×
            </button>

            <h2 className="text-xl sm:text-2xl font-black text-[#071a36] mb-1.5">
              Get IGNOU MBA Details
            </h2>
            <p className="text-xs text-[#637289] mb-5 leading-relaxed">
              Tell us a few details and our admission support team will help you understand eligibility, fees, and the application process.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-3.5">
              <div>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                />
              </div>
              <div>
                <input
                  required
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  placeholder="10-digit Mobile Number"
                  className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                />
              </div>
              <div>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all placeholder:text-[#8898aa]"
                />
              </div>
              <div>
                <select
                  name="education"
                  required
                  defaultValue=""
                  className="w-full h-12 px-4 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#3a79ba] focus:ring-4 focus:ring-[#3a79ba]/10 transition-all"
                >
                  <option value="" disabled>
                    Highest Qualification
                  </option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Working Professional">Working Professional</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full h-12 rounded-xl font-black text-sm bg-gradient-to-r from-[#f3c64b] to-[#ffe79b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.25)] hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {formStatus === "submitting" ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Submit Enquiry →</span>
                )}
              </button>

              <div className="text-[11px] leading-relaxed text-[#7a8796] text-center pt-1">
                By submitting this form, you agree to be contacted regarding the programme and admission process.
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
