"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

const WA_NUMBER = "919266585858";
const DISPLAY_PHONE = "+919266585858";

export default function OnlineManipalMbaPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "onlinemanipalmba",
}: {
  subdomain?: string;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form states
  const [inlineForm, setInlineForm] = useState({
    name: "",
    phone: "",
    email: "",
    consent: true,
  });
  const [modalForm, setModalForm] = useState({
    name: "",
    phone: "",
    email: "",
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpandedDesc, setIsExpandedDesc] = useState(false);

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

  const triggerWhatsAppLead = (name: string, phone: string, email: string) => {
    const text = `Hi, I want details about the Online MBA from Manipal University Jaipur.%0A%0AName: ${encodeURIComponent(
      name
    )}%0AMobile: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  const handleInlineSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inlineForm.name || !inlineForm.phone || !inlineForm.email) return;

    setIsSubmitting(true);
    try {
      triggerWhatsAppLead(inlineForm.name, inlineForm.phone, inlineForm.email);
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.phone || !modalForm.email) return;

    setIsSubmitting(true);
    try {
      triggerWhatsAppLead(modalForm.name, modalForm.phone, modalForm.email);
      setIsModalOpen(false);
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const electives = [
    { title: "Finance", desc: "Financial management & investment" },
    { title: "Analytics & Data Science", desc: "Data-driven business decisions" },
    { title: "Human Resource Management", desc: "People, talent and organization" },
    { title: "Marketing", desc: "Modern brand & consumer strategy" },
    { title: "Project Management", desc: "Agile planning and execution" },
    { title: "Operations Management", desc: "Processes and productivity" },
    { title: "International Business", desc: "Cross-border trade & global markets" },
    { title: "Supply Chain Management", desc: "Logistics & global supply networks" },
    { title: "BFSI", desc: "Banking and financial services" },
    { title: "IT & FinTech", desc: "Technology-led financial innovation" },
    { title: "Information System Management", desc: "Business and digital systems" },
    { title: "Retail Management", desc: "Omnichannel retail & customer journeys" },
    { title: "Digital Marketing", desc: "Digital channels, SEO & growth marketing" },
  ];

  const features = [
    {
      num: "01",
      title: "Career-Focused Learning",
      desc: "Choose from 13 career-focused electives and shape your learning around the domain you want to lead.",
    },
    {
      num: "02",
      title: "Flexible Online Format",
      desc: "Study 100% online with a programme structure designed to fit alongside professional and personal commitments.",
    },
    {
      num: "03",
      title: "Industry-Relevant Skills",
      desc: "Develop business, leadership and domain skills with real-world case studies and industry-oriented curriculum.",
    },
    {
      num: "04",
      title: "Coursera Access",
      desc: "Access Coursera for industry-recognized certifications in high-demand tools and emerging technologies.",
    },
    {
      num: "05",
      title: "Dedicated Career Support",
      desc: "Access comprehensive placement assistance, resume workshops and career guidance through the Online Manipal ecosystem.",
    },
    {
      num: "06",
      title: "Manipal Alumni Network",
      desc: "Connect with over 150,000+ prestigious Manipal alumni worldwide across top multinational corporations.",
    },
  ];

  const semesters = [
    {
      num: "01",
      title: "Semester 1",
      desc: "Build your foundational knowledge in management, economics, and organizational behaviour.",
    },
    {
      num: "02",
      title: "Semester 2",
      desc: "Strengthen functional business applications, financial analysis, and strategic communication.",
    },
    {
      num: "03",
      title: "Semester 3",
      desc: "Choose elective pathways for your Super Specialization or Dual Specialization tracks.",
    },
    {
      num: "04",
      title: "Semester 4",
      desc: "Complete advanced specialization coursework, capstone project, and executive masterclasses.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The flexibility of Online Manipal's MBA allowed me to study while continuing my full-time management role. The faculty and Coursera access gave me practical skills.",
      author: "Sarita Yadav",
      program: "Online MBA, MUJ",
    },
    {
      quote:
        "Dual specialization in Finance and Analytics gave me an edge in my career. The live doubt-clearing sessions and LMS platform are extremely well-organized.",
      author: "Rohan Varma",
      program: "Batch of 2024",
    },
    {
      quote:
        "Being a working professional, the weekend flexibility and recorded sessions were a lifesaver. The degree from MUJ carries tremendous industry credibility.",
      author: "Pooja Sharma",
      program: "Online MBA, MUJ",
    },
  ];

  const faqs = [
    {
      q: "What is the duration of the Online MBA from MUJ?",
      a: "The Online MBA from Manipal University Jaipur is a 24-month (2 years) degree programme divided into four semesters. Students can complete it at their own pace within a maximum of 4 years.",
    },
    {
      q: "Who is eligible to apply for the MUJ Online MBA?",
      a: "Candidates need a 10+2+3-year bachelor's degree from a recognized university or equivalent institution with a minimum of 50% aggregate marks (45% for reserved categories).",
    },
    {
      q: "What is the difference between Super and Dual Specialization?",
      a: "In Super Specialization, learners select one elective group to become deep domain specialists. In Dual Specialization, learners select two distinct elective groups to develop cross-functional expertise.",
    },
    {
      q: "Is this degree UGC-entitled and valid for government/private jobs?",
      a: "Yes. The Online MBA from Manipal University Jaipur is UGC-entitled and AICTE recognized, holding equivalent academic status to conventional on-campus degrees under UGC regulations.",
    },
    {
      q: "How does placement assistance work?",
      a: "Online Manipal provides dedicated career support including resume audits, mock interviews, career fairs, and direct placement drives with 500+ recruitment partners across India.",
    },
    {
      q: "Can I pay my fees in flexible EMI installments?",
      a: "Yes, easy no-cost EMI financing options are available starting at convenient monthly payment structures. Submit your details to check eligible scholarship schemes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7fd] text-[#1e1742] font-sans selection:bg-[#e85923] selection:text-white">
      {/* 1. CLEAN WHITE NAVBAR (Matching screenshot) */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eae6f5] shadow-[0_2px_12px_rgba(30,23,66,0.04)]">
        <div className="w-[min(1220px,94%)] mx-auto h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            {/* Manipal Emblem Graphic */}
            <div className="w-9 h-9 rounded-full bg-[#fbf5f2] border border-[#f3ded5] flex items-center justify-center shadow-xs">
              <svg className="w-5 h-5 text-[#e85923]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.5 7.5H14.5L12 2Z" />
                <path d="M12 6.5C8.96 6.5 6.5 8.96 6.5 12C6.5 15.04 8.96 17.5 12 17.5C15.04 17.5 17.5 15.04 17.5 12C17.5 8.96 15.04 6.5 12 6.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" />
                <circle cx="12" cy="12" r="2" />
                <path d="M4 19.5C6.2 21.5 9 22.5 12 22.5C15 22.5 17.8 21.5 20 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[#e85923] font-bold text-xl sm:text-[22px] tracking-tight">
                Online
              </span>
              <span className="text-[#1e1742] font-black text-xl sm:text-[22px] tracking-wider uppercase">
                MANIPAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[#2e2954] text-xs sm:text-[13px] font-semibold">
            <a href="#specializations" className="flex items-center gap-1.5 hover:text-[#e85923] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
              Courses <span className="text-[10px] text-[#767198]">▾</span>
            </a>
            <a href="#programme" className="flex items-center gap-1 hover:text-[#e85923] transition-colors">
              Institutions <span className="text-[10px] text-[#767198]">▾</span>
            </a>
            <a href="#career" className="hover:text-[#e85923] transition-colors">
              The Manipal Advantage
            </a>
          </div>

          {/* Nav Right CTA & Utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e85923] hover:bg-[#d44e1d] text-white font-bold text-xs sm:text-[13px] px-5 sm:px-6 py-2.5 rounded-full cursor-pointer transition-all shadow-[0_4px_12px_rgba(232,89,35,0.28)] active:scale-95"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Soft Lavender / Periwinkle background matching screenshot) */}
      <section id="top" className="bg-[#e6e3f8] pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pb-18 text-[#1e1742] relative">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Top Row: Breadcrumb & Phone Badge */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-[#5e5885] text-[11px] sm:text-xs">
              <span className="hover:text-[#1e1742] cursor-pointer">Home</span>
              <span className="text-[#8c86b3]">›</span>
              <span className="hover:text-[#1e1742] cursor-pointer">Online MBA Courses</span>
              <span className="text-[#8c86b3]">›</span>
              <span className="text-[#1e1742] font-bold">MUJ MBA</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-[#1f2937] transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C11.72 21 3 12.28 3 2.99c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.21Z" />
                </svg>
                <span>{DISPLAY_PHONE}</span>
              </a>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Online MBA - Manipal University Jaipur",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="w-7 h-7 rounded-full bg-white text-[#1e1742] shadow-xs flex items-center justify-center hover:bg-[#f8f7fd] transition-colors"
                title="Share"
                aria-label="Share"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main 2-Column Hero Grid (Left: Content, Right: White Form Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Badges: MUJ Logo line & QS Rated 5-Star */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                {/* Manipal University Jaipur Badge */}
                <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-white/60 border border-white/80 backdrop-blur-xs">
                  <div className="w-6 h-6 rounded-full bg-[#e85923] text-white flex items-center justify-center font-bold text-[10px]">
                    M
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1e1742] leading-tight">
                      MANIPAL UNIVERSITY JAIPUR
                    </span>
                    <span className="text-[8px] text-[#5e5885] leading-none">
                      (University under Section 2(f) of the UGC Act)
                    </span>
                  </div>
                </div>

                {/* QS 5-Star Badge */}
                <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/60 border border-white/80 backdrop-blur-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-black border border-amber-300">
                    ★
                  </div>
                  <span className="text-xs font-bold text-[#1e1742]">
                    Rated 5-Star by QS
                  </span>
                </div>
              </div>

              {/* Title with 4.9 ★ Rating Pill */}
              <div className="mb-3">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.12] text-[#1e1742] tracking-tight">
                  Master of Business Administration from MUJ{" "}
                  <span className="inline-flex items-center gap-1 align-middle text-xs font-bold px-2 py-0.5 rounded-full bg-white text-[#1e1742] border border-[#d6d0f2] shadow-2xs">
                    4.9 <span className="text-amber-500">★</span>
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <h2 className="text-[#1e1742] font-extrabold text-base sm:text-lg mb-4">
                Online MBA with Super/Dual Specialization
              </h2>

              {/* Description */}
              <div className="text-[#47416e] text-xs sm:text-[13px] leading-[1.75] mb-6">
                <p>
                  Prepare for the future workplace with this UGC-entitled online Master of
                  Business Administration (MBA) from Manipal University Jaipur (MUJ), a NAAC
                  A+ rated university. This QS-ranked MBA degree offers 13 career-focused
                  specializations such as Digital Marketing, Operations, International Business,
                  and Analytics & Data Science. During the third semester, learners can opt for
                  either a super specialization by selecting one elective group to become a
                  domain expert, or a dual specialization to hone skills in two distinct
                  disciplines.
                  {isExpandedDesc && (
                    <span className="block mt-2">
                      Get industry-recognized Coursera certifications, interactive live sessions,
                      weekend learning flexibility, and placement drives with top tier recruitment
                      partners across India.
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsExpandedDesc(!isExpandedDesc)}
                    className="ml-1.5 text-[#1e1742] font-extrabold underline cursor-pointer hover:text-[#e85923] transition-colors"
                  >
                    {isExpandedDesc ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>

              {/* Primary Action Button */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#e85923] hover:bg-[#d44e1d] text-white font-bold text-xs sm:text-[13px] px-7 py-3.5 rounded-full cursor-pointer transition-all shadow-[0_8px_20px_rgba(232,89,35,0.3)] active:scale-95 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                  Download Brochure
                </button>

                <a
                  href="#specializations"
                  className="bg-white/80 hover:bg-white text-[#1e1742] font-bold text-xs sm:text-[13px] px-6 py-3.5 rounded-full border border-[#d6d0f2] transition-all shadow-2xs"
                >
                  View 13 Electives
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4e4875]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> UGC-Entitled & AICTE Approved
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> NAAC A+ Accredited
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> Free Coursera Certification Access
                </div>
              </div>
            </div>

            {/* Right Form Card (5 cols) matching screenshot */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_18px_50px_rgba(30,23,66,0.08)] border border-white">
                {/* Form Heading */}
                <h3 className="font-serif text-center text-xl sm:text-[23px] text-[#1e1742] font-bold leading-tight mb-2.5">
                  Join <span className="text-[#e85923]">200K+ Learners</span> Across India
                </h3>

                {/* Offer Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff4ee] text-[#c2410c] text-[11px] font-semibold border border-[#fed7aa]">
                    <span>🏷️</span> Attractive scholarships
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff4ee] text-[#c2410c] text-[11px] font-semibold border border-[#fed7aa]">
                    <span>🏛️</span> Easy financing options
                  </div>
                </div>

                <p className="text-center text-xs font-semibold text-[#423c6d] mb-4">
                  Submit your details and we&apos;ll contact you soon!
                </p>

                {/* Input Fields */}
                <form onSubmit={handleInlineSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={inlineForm.name}
                      onChange={(e) =>
                        setInlineForm({ ...inlineForm, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="w-full h-11 border border-[#e2e8f0] rounded-xl bg-white text-[#1e1742] px-3.5 text-xs outline-none focus:border-[#e85923] focus:ring-2 focus:ring-[#e85923]/15 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={inlineForm.email}
                      onChange={(e) =>
                        setInlineForm({ ...inlineForm, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="w-full h-11 border border-[#e2e8f0] rounded-xl bg-white text-[#1e1742] px-3.5 text-xs outline-none focus:border-[#e85923] focus:ring-2 focus:ring-[#e85923]/15 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>

                  {/* Phone Input with +91 selector */}
                  <div className="flex items-center border border-[#e2e8f0] rounded-xl bg-white focus-within:border-[#e85923] focus-within:ring-2 focus-within:ring-[#e85923]/15 transition-all overflow-hidden">
                    <div className="px-3 py-2 bg-[#f8f9fb] border-r border-[#e2e8f0] text-xs font-bold text-[#334155] flex items-center gap-1 shrink-0 select-none">
                      <span>🇮🇳</span>
                      <span>+91</span>
                      <span className="text-[10px] text-[#94a3b8]">▾</span>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      value={inlineForm.phone}
                      onChange={(e) =>
                        setInlineForm({
                          ...inlineForm,
                          phone: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="Enter your mobile number"
                      className="w-full h-11 text-[#1e1742] px-3 text-xs outline-none bg-transparent placeholder:text-[#94a3b8]"
                    />
                  </div>

                  {/* Legal Consent Checkbox matching screenshot */}
                  <div className="flex items-start gap-2 pt-1 pb-1">
                    <input
                      type="checkbox"
                      id="hero-consent"
                      checked={inlineForm.consent}
                      onChange={(e) =>
                        setInlineForm({ ...inlineForm, consent: e.target.checked })
                      }
                      className="mt-0.5 w-3.5 h-3.5 accent-[#e85923] rounded cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="hero-consent"
                      className="text-[9px] text-[#64748b] leading-tight cursor-pointer"
                    >
                      I authorize Online Manipal and its associates to contact me with updates &
                      notifications via email, SMS, WhatsApp, and voice call. This consent will
                      override any registration for DNC / NDNC. *
                    </label>
                  </div>

                  {/* Apply Now Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full bg-[#f49371] hover:bg-[#e85923] text-white text-xs font-bold cursor-pointer transition-all shadow-[0_6px_18px_rgba(232,89,35,0.25)] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Submitting..." : "Apply Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PURPLE ANNOUNCEMENT TICKER (Directly underneath hero, matching screenshot) */}
      <div className="bg-[#504497] text-white py-3 border-y border-[#433880]">
        <div className="w-[min(1220px,94%)] mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[11px] sm:text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/20 grid place-items-center text-[10px]">
              ⓘ
            </span>
            <span>15% discount, limited period offer!</span>
          </div>

          <div className="flex items-center gap-2">
            <span>📅</span>
            <span className="font-semibold">Last date of admission: 22nd Sep</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/20 grid place-items-center text-[10px]">
              ⓘ
            </span>
            <span>Admissions Open!</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🎓</span>
            <span className="font-semibold">92% seats filled</span>
          </div>
        </div>
      </div>

      {/* 4. QUICK STATS STRIP */}
      <div className="bg-white border-b border-[#eae6f5]">
        <div className="w-[min(1220px,94%)] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="p-4 sm:p-5 text-center border-r border-[#eae6f5] last:border-r-0">
            <strong className="block text-[#1e1742] text-sm sm:text-[15px] font-extrabold leading-snug">
              24 Months
            </strong>
            <span className="block text-[#6b6494] text-[10px] sm:text-xs font-medium mt-0.5">
              Programme Duration
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center md:border-r border-[#eae6f5]">
            <strong className="block text-[#1e1742] text-sm sm:text-[15px] font-extrabold leading-snug">
              13 Electives
            </strong>
            <span className="block text-[#6b6494] text-[10px] sm:text-xs font-medium mt-0.5">
              Super & Dual Specializations
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center border-r border-[#eae6f5] last:border-r-0">
            <strong className="block text-[#1e1742] text-sm sm:text-[15px] font-extrabold leading-snug">
              UGC-Entitled
            </strong>
            <span className="block text-[#6b6494] text-[10px] sm:text-xs font-medium mt-0.5">
              NAAC A+ Ranked University
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <strong className="block text-[#1e1742] text-sm sm:text-[15px] font-extrabold leading-snug">
              100% Online
            </strong>
            <span className="block text-[#6b6494] text-[10px] sm:text-xs font-medium mt-0.5">
              With Coursera Access
            </span>
          </div>
        </div>
      </div>

      {/* 5. WHY THIS MBA SECTION */}
      <section id="programme" className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-[#e85923] text-[11px] font-extrabold tracking-widest uppercase bg-[#fff4ee] px-3.5 py-1 rounded-full border border-[#fed7aa]">
              WHY THIS MBA
            </span>
            <h2 className="font-serif text-[#1e1742] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mt-3 mb-2.5">
              Designed for the future of global business
            </h2>
            <p className="text-[#645e8c] text-xs sm:text-sm leading-[1.65]">
              Develop core executive competencies, leadership acumen, and analytical
              decision-making with industry-aligned coursework from Manipal University Jaipur.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eae6f5] rounded-[20px] p-6 shadow-[0_6px_20px_rgba(30,23,66,0.03)] hover:shadow-lg hover:border-[#d7d0f5] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f0edfb] text-[#504497] grid place-items-center text-xs font-black mb-4 group-hover:bg-[#e85923] group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <h3 className="font-serif text-[#1e1742] text-base sm:text-lg font-bold leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[#645e8c] text-xs leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIALIZATIONS SECTION (Deep Royal Indigo / Purple) */}
      <section id="specializations" className="bg-[#1e1742] py-14 sm:py-20 text-white relative">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-[#e85923] text-[11px] font-extrabold tracking-widest uppercase bg-[#e85923]/15 px-3.5 py-1 rounded-full border border-[#e85923]/30">
              CHOOSE YOUR DOMAIN
            </span>
            <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight mt-3 mb-2.5">
              13 Career-Focused Electives
            </h2>
            <p className="text-[#b9b2e0] text-xs sm:text-sm leading-[1.65]">
              Choose one elective for a super-specialization or two electives for a
              dual-specialization MBA, tailored to your professional trajectory.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {electives.map((spec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[16px] bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:border-[#e85923]/60 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-[#e85923] mb-2 group-hover:scale-125 transition-transform"></div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold leading-snug mb-1">
                  {spec.title}
                </strong>
                <span className="block text-[#b9b2e0] text-[10px] leading-relaxed">
                  {spec.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Specialization CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e85923] hover:bg-[#d44e1d] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full cursor-pointer transition-all shadow-[0_6px_20px_rgba(232,89,35,0.4)] active:scale-95"
            >
              Get Specialization Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* 7. PROGRAMME STRUCTURE SECTION */}
      <section className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-[#504497] text-[11px] font-extrabold tracking-widest uppercase bg-[#f0edfb] px-3.5 py-1 rounded-full border border-[#dcd6fa]">
              ACADEMIC ROADMAP
            </span>
            <h2 className="font-serif text-[#1e1742] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mt-3 mb-2.5">
              Learn across 4 comprehensive semesters
            </h2>
            <p className="text-[#645e8c] text-xs sm:text-sm leading-[1.65]">
              A meticulously structured 2-year journey blending foundational management,
              specialized elective tracks, and real-world capstone projects.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {semesters.map((sem, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eae6f5] rounded-[18px] p-5 shadow-2xs hover:shadow-md hover:border-[#504497]/30 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#504497] text-white grid place-items-center text-xs font-black mb-3">
                  {sem.num}
                </div>
                <h3 className="font-serif text-[#1e1742] text-sm sm:text-base font-bold leading-snug mb-1">
                  {sem.title}
                </h3>
                <p className="text-[#645e8c] text-xs leading-[1.65]">{sem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CAREER ECOSYSTEM */}
      <section id="career" className="py-12 sm:py-16 bg-white border-y border-[#eae6f5]">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#e85923] text-[11px] font-extrabold tracking-widest uppercase bg-[#fff4ee] px-3.5 py-1 rounded-full border border-[#fed7aa]">
              CAREER ADVANTAGE
            </span>
            <h2 className="font-serif text-[#1e1742] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mt-3 mb-2.5">
              More than a degree
            </h2>
            <p className="text-[#645e8c] text-xs sm:text-sm leading-[1.65]">
              Online Manipal highlights personalized career coaching, mock interview bootcamps,
              Coursera credentials, and an alumni network spanning 150,000+ graduates globally.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "24", label: "Months Duration" },
              { num: "4", label: "Structured Semesters" },
              { num: "13", label: "Elective Tracks" },
              { num: "150K+", label: "Global Alumni Network" },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#f8f7fd] border border-[#eae6f5] rounded-[18px] p-5 text-center hover:border-[#504497]/40 transition-all"
              >
                <strong className="block text-[#504497] font-serif text-2xl sm:text-3xl font-bold leading-none mb-1">
                  {st.num}
                </strong>
                <span className="block text-[#645e8c] text-[11px] sm:text-xs font-semibold">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / PERSPECTIVE */}
      <section className="bg-[#f4f1fc] py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-[#504497] text-[11px] font-extrabold tracking-widest uppercase bg-white px-3.5 py-1 rounded-full border border-[#dcd6fa]">
              LEARNER EXPERIENCES
            </span>
            <h2 className="font-serif text-[#1e1742] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mt-3 mb-2.5">
              Trusted by 200,000+ ambitious minds
            </h2>
            <p className="text-[#645e8c] text-xs sm:text-sm leading-[1.65]">
              Hear from graduates who transformed their professional career through Online Manipal.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eae6f5] rounded-[20px] p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-500 text-sm tracking-widest mb-3">
                    ★★★★★
                  </div>
                  <p className="text-[#4b4570] text-xs leading-[1.75] italic mb-4">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3.5 border-t border-[#f2effb]">
                  <div className="text-[#1e1742] text-xs font-extrabold">
                    — {rev.author}
                  </div>
                  <div className="text-[#645e8c] text-[10px] font-medium mt-0.5">
                    {rev.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faq" className="py-14 sm:py-18">
        <div className="w-[min(900px,94%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#e85923] text-[11px] font-extrabold tracking-widest uppercase bg-[#fff4ee] px-3.5 py-1 rounded-full border border-[#fed7aa]">
              FAQS
            </span>
            <h2 className="font-serif text-[#1e1742] text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#eae6f5] rounded-[16px] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#faf9fe]"
                  >
                    <span className="text-[#1e1742] text-xs sm:text-sm font-bold leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-[#e85923] text-base font-black shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[#645e8c] text-xs leading-[1.75] border-t border-[#f4f1fc] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FINAL BANNER CTA (Deep Royal Purple & Orange) */}
      <section className="pt-4 pb-14 sm:pb-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="bg-gradient-to-r from-[#1e1742] via-[#372b73] to-[#504497] rounded-[24px] text-white text-center p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight mb-3">
                Accelerate your leadership trajectory today.
              </h2>
              <p className="max-w-[620px] mx-auto text-[#c7c0ea] text-xs sm:text-sm leading-relaxed mb-6">
                Request the 2026 intake prospectus, scholarship criteria, curriculum overview, and
                customized fee schedule.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="min-h-[48px] px-8 rounded-full bg-[#e85923] hover:bg-[#d44e1d] text-white font-bold text-xs sm:text-sm cursor-pointer transition-all shadow-[0_6px_20px_rgba(232,89,35,0.4)] active:scale-95 inline-flex items-center justify-center gap-2"
              >
                Apply Now & Enquire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER (Deep Dark Indigo) */}
      <footer className="bg-[#140f2e] text-[#a59ec7] pt-12 pb-24 sm:pb-12 border-t border-white/5">
        <div className="w-[min(1220px,94%)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#e85923] text-white grid place-items-center font-bold text-xs">
                M
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[#e85923] font-bold text-base">Online</span>
                <span className="text-white font-black text-base tracking-wider uppercase">
                  MANIPAL
                </span>
              </div>
            </div>
            <p className="text-[#a59ec7] text-xs leading-[1.8] max-w-sm">
              Programme portal for UGC-entitled Online MBA offered by Manipal University
              Jaipur (MUJ). All trademarks belong to their respective university authorities.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-white font-serif text-sm font-bold mb-3">
              Explore Programmes
            </h3>
            <div className="space-y-1.5 text-xs">
              <div>
                <a href="#programme" className="text-[#a59ec7] hover:text-white transition-colors">
                  MUJ Online MBA
                </a>
              </div>
              <div>
                <a
                  href="#specializations"
                  className="text-[#a59ec7] hover:text-white transition-colors"
                >
                  13 Career Specializations
                </a>
              </div>
              <div>
                <a href="#career" className="text-[#a59ec7] hover:text-white transition-colors">
                  Placement & Career Support
                </a>
              </div>
              <div>
                <a href="#faq" className="text-[#a59ec7] hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-serif text-sm font-bold mb-3">
              Admissions Assistance Desk
            </h3>
            <p className="text-[#a59ec7] text-xs leading-[1.8] mb-3">
              Connect with an academic advisor for admission assistance, fee schedules, and scholarship guidance.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e85923] hover:bg-[#d44e1d] text-white font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer transition-all active:scale-95"
            >
              Get MBA Brochure
            </button>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="w-[min(1220px,94%)] mx-auto border-t border-white/10 pt-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 sm:p-5 text-[11px] sm:text-xs text-[#a59ec7] leading-relaxed">
            <strong className="text-white font-bold block mb-1">Disclaimer:</strong>
            This landing page is an independent educational portal for programme information and admission guidance assistance. We are not Manipal University or Online Manipal directly. Manipal University Jaipur, Online Manipal, their names, logos, trademarks, and academic content belong to their respective owners. Programme fees, eligibility, specialisations, rankings, recognitions, scholarships, and other details may change; please verify the latest information with the university before making a payment or submitting an application.
          </div>
        </div>

        {/* Copyright */}
        <div className="w-[min(1220px,94%)] mx-auto border-t border-white/5 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#7e76a3] text-[10px]">
          <div>
            Terms & Conditions &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; © 2026 Online MBA Admissions Guidance. All Rights Reserved.
          </div>
          <div>
            Independent Admission Information & Assistance Portal
          </div>
        </div>
      </footer>

      {/* 13. FLOATING CONTACT ICONS & WHATSAPP TAB */}
      {/* Right Side WhatsApp Green Tab (As seen in screenshot) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MBA%20from%20Manipal%20University%20Jaipur.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with counsellor"
          className="bg-[#25d366] text-white font-bold text-xs px-2.5 py-4 rounded-l-xl shadow-lg flex flex-col items-center gap-2 hover:bg-[#20bd5a] transition-all hover:pr-3.5"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span className="[writing-mode:vertical-rl] tracking-wider text-[11px]">Chat</span>
        </a>
      </div>

      {/* Bottom Right Floating Circular Icons */}
      <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-8 z-40 flex flex-col gap-2.5">
        {/* Floating Query Bubble Icon (Matching bottom right circle in screenshot) */}
        <button
          onClick={() => setIsModalOpen(true)}
          aria-label="Open Query Form"
          className="w-12 h-12 rounded-full bg-[#111827] hover:bg-[#1e1742] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* 14. MOBILE BOTTOM STICKY BAR */}
      <div className="sm:hidden fixed left-0 right-0 bottom-0 h-16 z-40 bg-white border-t border-[#eae6f5] p-2 flex gap-2 shadow-[0_-4px_15px_rgba(0,0,0,0.06)]">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MBA%20from%20Manipal%20University%20Jaipur.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25d366] text-white font-bold text-xs rounded-full flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-[#e85923] text-white font-bold text-xs rounded-full flex items-center justify-center shadow-xs"
        >
          Apply Now
        </button>
      </div>

      {/* 15. MODAL OVERLAY */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-[#1e1742]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="w-[min(480px,100%)] bg-white rounded-[24px] p-6 sm:p-7 relative shadow-[0_30px_80px_rgba(30,23,66,0.35)] text-[#1e1742]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-[#f4f1fc] hover:bg-[#eae6f5] text-[#1e1742] text-lg font-bold flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            <h2 className="font-serif text-[#1e1742] text-xl sm:text-[24px] font-bold leading-tight mb-1 pr-8">
              Apply for Online MBA
            </h2>
            <p className="text-[#645e8c] text-xs leading-relaxed mb-4">
              Enter your details to get course brochures, fee options, and scholarship details
              for Manipal University Jaipur.
            </p>

            <form onSubmit={handleModalSubmit} className="space-y-3">
              <div>
                <label className="block text-[#47416e] text-[10px] font-extrabold uppercase mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={modalForm.name}
                  onChange={(e) =>
                    setModalForm({ ...modalForm, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full h-11 border border-[#e2e8f0] rounded-xl bg-white text-[#1e1742] px-3.5 text-xs outline-none focus:border-[#e85923] focus:ring-2 focus:ring-[#e85923]/15 transition-all placeholder:text-[#94a3b8]"
                />
              </div>

              <div>
                <label className="block text-[#47416e] text-[10px] font-extrabold uppercase mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={modalForm.email}
                  onChange={(e) =>
                    setModalForm({ ...modalForm, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full h-11 border border-[#e2e8f0] rounded-xl bg-white text-[#1e1742] px-3.5 text-xs outline-none focus:border-[#e85923] focus:ring-2 focus:ring-[#e85923]/15 transition-all placeholder:text-[#94a3b8]"
                />
              </div>

              <div>
                <label className="block text-[#47416e] text-[10px] font-extrabold uppercase mb-1">
                  MOBILE NUMBER
                </label>
                <div className="flex items-center border border-[#e2e8f0] rounded-xl bg-white focus-within:border-[#e85923] focus-within:ring-2 focus-within:ring-[#e85923]/15 transition-all overflow-hidden">
                  <div className="px-3 py-2 bg-[#f8f9fb] border-r border-[#e2e8f0] text-xs font-bold text-[#334155] flex items-center gap-1 shrink-0 select-none">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    value={modalForm.phone}
                    onChange={(e) =>
                      setModalForm({
                        ...modalForm,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    placeholder="10-digit mobile number"
                    className="w-full h-11 text-[#1e1742] px-3 text-xs outline-none bg-transparent placeholder:text-[#94a3b8]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={modalForm.consent}
                  onChange={(e) =>
                    setModalForm({ ...modalForm, consent: e.target.checked })
                  }
                  className="mt-0.5 w-3.5 h-3.5 accent-[#e85923] rounded cursor-pointer"
                  required
                />
                <label
                  htmlFor="modal-consent"
                  className="text-[9px] text-[#64748b] leading-tight cursor-pointer"
                >
                  I authorize Online Manipal to contact me regarding admission, scholarship and fees.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-full bg-[#e85923] hover:bg-[#d44e1d] text-white text-xs font-bold cursor-pointer transition-all shadow-[0_6px_18px_rgba(232,89,35,0.3)] active:scale-[0.98] mt-2"
              >
                {isSubmitting ? "Submitting..." : "Apply Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
