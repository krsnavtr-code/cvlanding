"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

const WA_NUMBER = "919266585858";

export default function OnlineManipalMbaPage({
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
  });
  const [modalForm, setModalForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const text = `Hi, I want details about the Online MBA from Manipal University Jaipur.%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}`;
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
    { title: "Finance", desc: "Financial management" },
    { title: "Analytics & Data Science", desc: "Data-driven business decisions" },
    { title: "Human Resource Management", desc: "People and organization" },
    { title: "Marketing", desc: "Modern marketing strategy" },
    { title: "Project Management", desc: "Planning and execution" },
    { title: "Operations Management", desc: "Processes and productivity" },
    { title: "International Business", desc: "Global business" },
    { title: "Supply Chain Management", desc: "Modern supply chain" },
    { title: "BFSI", desc: "Banking and financial services" },
    { title: "IT & FinTech", desc: "Technology-led business" },
    { title: "Information System Management", desc: "Business and information systems" },
    { title: "Retail Management", desc: "Retail business management" },
    { title: "Digital Marketing", desc: "Digital channels and growth" },
  ];

  const features = [
    {
      num: "01",
      title: "Career-Focused Learning",
      desc: "Choose from 13 career-focused electives and shape your learning around the domain you want to develop.",
    },
    {
      num: "02",
      title: "Flexible Online Format",
      desc: "Study online with a programme structure designed to fit alongside professional and personal commitments.",
    },
    {
      num: "03",
      title: "Industry-Relevant Skills",
      desc: "Develop business, leadership and domain skills with industry-oriented learning content.",
    },
    {
      num: "04",
      title: "Coursera Access",
      desc: "The current MUJ page lists paid access to Coursera for industry-relevant certificates in high-demand skills.",
    },
    {
      num: "05",
      title: "Career Support",
      desc: "Access placement assistance and career-oriented support through the programme ecosystem.",
    },
    {
      num: "06",
      title: "Manipal Alumni Network",
      desc: "Build professional connections through access to the Manipal alumni network.",
    },
  ];

  const semesters = [
    {
      num: "01",
      title: "Semester 1",
      desc: "Build your core foundation in management and business concepts.",
    },
    {
      num: "02",
      title: "Semester 2",
      desc: "Strengthen functional and managerial understanding.",
    },
    {
      num: "03",
      title: "Semester 3",
      desc: "Choose an elective pathway for super or dual specialization.",
    },
    {
      num: "04",
      title: "Semester 4",
      desc: "Continue advanced learning and complete programme requirements.",
    },
  ];

  const testimonials = [
    {
      quote:
        "I wanted to gain new skills while working in my domain. The online MBA helped me develop areas such as leadership, communication and teamwork.",
      author: "Sarita Yadav",
      program: "Online MBA, MAHE",
    },
    {
      quote:
        "The online format can support professional development while learners continue managing their existing commitments.",
      author: "Online Manipal learner experience",
      program: "Flexible Self-Paced Schedule",
    },
    {
      quote:
        "The programme combines online learning with access to career support and the wider Manipal alumni ecosystem.",
      author: "Online Manipal programme highlights",
      program: "Global Alumni Community",
    },
  ];

  const faqs = [
    {
      q: "What is the duration of the Online MBA?",
      a: "The Online MBA from Manipal University Jaipur is a 24-month programme divided into four semesters. The current programme page states that students may complete it at their own pace within a maximum of four years.",
    },
    {
      q: "Who is eligible for the MUJ Online MBA?",
      a: "Indian candidates need a 10+2+3-year bachelor’s degree from a recognized university/institution or equivalent, with a minimum of 50% aggregate in graduation (45% for reserved categories), according to current Online Manipal admission information.",
    },
    {
      q: "How many electives are available?",
      a: "The current MUJ Online MBA page lists 13 career-focused electives. Learners can opt for one elective for a super-specialization or two electives for a dual-specialization MBA.",
    },
    {
      q: "Is the MBA fully online?",
      a: "Yes. The current Online Manipal programme page describes the MUJ MBA as a 100% online MBA programme.",
    },
    {
      q: "Is placement assistance available?",
      a: "Online Manipal currently lists placement assistance/career support. Placement or employment outcomes are not guaranteed and may vary by learner.",
    },
    {
      q: "Can I get current fee and admission details?",
      a: "Yes. Submit the enquiry form and request the latest fee, scholarship, eligibility and admission information for your intake.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-[#101828] font-sans selection:bg-[#ffc72c] selection:text-[#111]">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#ffc72c] text-[#111] text-center font-extrabold text-[11px] sm:text-xs py-2 px-3 tracking-wide border-b border-[#e5b225]">
        Online MBA • Manipal University Jaipur • Admissions Information
      </div>

      {/* 2. STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 h-[70px] bg-[#071a33]/98 backdrop-blur-md shadow-[0_3px_20px_rgba(0,0,0,0.12)] border-b border-white/5">
        <div className="w-[min(1160px,92%)] mx-auto h-full flex items-center justify-between gap-5">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-[34px] h-[34px] rounded-[9px] bg-white text-[#071a33] grid place-items-center font-black text-lg shadow-sm transition-transform group-hover:scale-105">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-[17px] leading-tight tracking-tight">
                Online Manipal
              </span>
              <small className="text-[#b8c7da] text-[8px] tracking-[0.5px] font-semibold uppercase">
                Manipal University Jaipur
              </small>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-[#dce6f2] text-xs font-bold">
            <a href="#programme" className="hover:text-white transition-colors">
              Programme
            </a>
            <a href="#specializations" className="hover:text-white transition-colors">
              Specializations
            </a>
            <a href="#career" className="hover:text-white transition-colors">
              Career
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQs
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] font-extrabold text-xs px-4 py-2.5 rounded-[9px] cursor-pointer transition-all shadow-sm active:scale-95"
            >
              Get Details
            </button>
          </div>

          {/* Mobile CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="md:hidden bg-[#ffc72c] text-[#111] font-extrabold text-xs px-3.5 py-2 rounded-[9px] cursor-pointer"
          >
            Get Details
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#06162e] via-[#0b2c58] to-[#06162e] text-white py-14 sm:py-18 lg:py-20"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <div className="w-[min(1160px,92%)] mx-auto relative z-10">
          <div className="max-w-[860px]">
            {/* Eyebrow */}
            <div className="inline-block px-3 py-1.5 border border-[#ffc72c]/35 rounded-full bg-[#ffc72c]/10 text-[#ffdf69] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-4 shadow-xs">
              UGC-ENTITLED ONLINE MBA
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[38px] sm:text-5xl lg:text-[59px] font-normal leading-[1.06] tracking-[-1.5px] text-white mb-4">
              Build Your Career with an{" "}
              <span className="text-[#ffd34c]">Online MBA.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#cbd8e8] text-[15px] sm:text-base leading-[1.7] max-w-[820px] mb-7">
              Explore the 24-month Online MBA from Manipal University Jaipur with 13
              career-focused electives, flexible online learning and access to the Manipal
              alumni network.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="min-h-[50px] px-6 rounded-[9px] bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] font-extrabold text-xs sm:text-[13px] inline-flex items-center justify-center cursor-pointer transition-all shadow-md active:scale-[0.98]"
              >
                Enquire Now
              </button>
              <a
                href="#programme"
                className="min-h-[50px] px-6 rounded-[9px] border border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 font-extrabold text-xs sm:text-[13px] inline-flex items-center justify-center transition-all"
              >
                Explore Programme
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-3.5 text-[#d3dfed] text-xs font-semibold">
              <span className="flex items-center gap-1">
                <span className="text-[#ffc72c]">★</span>{" "}
                <b className="text-white font-bold">4.9/5</b> learner rating
              </span>
              <span className="text-white/40">•</span>
              <span>
                <b className="text-white font-bold">24 Months</b> / 4 Semesters
              </span>
              <span className="text-white/40">•</span>
              <span>
                <b className="text-white font-bold">13</b> electives
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUICK STATS STRIP */}
      <div className="bg-white border-b border-[#e2e7ef]">
        <div className="w-[min(1160px,92%)] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="p-4 sm:p-5 text-center border-r border-[#e2e7ef] last:border-r-0">
            <strong className="block text-[#071a33] text-sm sm:text-[15px] font-extrabold leading-snug">
              24 Months
            </strong>
            <span className="block text-[#667085] text-[10px] sm:text-xs font-medium mt-1">
              Programme Duration
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center md:border-r border-[#e2e7ef]">
            <strong className="block text-[#071a33] text-sm sm:text-[15px] font-extrabold leading-snug">
              13 Electives
            </strong>
            <span className="block text-[#667085] text-[10px] sm:text-xs font-medium mt-1">
              Career-Focused Options
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center border-r border-[#e2e7ef] last:border-r-0">
            <strong className="block text-[#071a33] text-sm sm:text-[15px] font-extrabold leading-snug">
              UGC-Entitled
            </strong>
            <span className="block text-[#667085] text-[10px] sm:text-xs font-medium mt-1">
              Online Degree
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <strong className="block text-[#071a33] text-sm sm:text-[15px] font-extrabold leading-snug">
              Flexible
            </strong>
            <span className="block text-[#667085] text-[10px] sm:text-xs font-medium mt-1">
              Online Learning
            </span>
          </div>
        </div>
      </div>

      {/* 5. LEAD FORM SECTION */}
      <section className="py-8 sm:py-10">
        <div className="w-[min(1160px,92%)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 lg:p-10 rounded-[23px] bg-gradient-to-br from-[#071a33] to-[#0c417d] shadow-[0_18px_45px_rgba(7,26,51,0.12)]">
            {/* Copy */}
            <div className="text-white">
              <small className="block text-[#ffdf69] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                ADMISSIONS ENQUIRY
              </small>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] font-normal leading-[1.15] my-2 text-white">
                Ready to take the next step in your career?
              </h2>
              <p className="text-[#c8d8eb] text-xs sm:text-[13px] leading-[1.65] max-w-[460px] mb-5">
                Get programme details, eligibility, specializations and admission guidance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Programme Details", "Specializations", "Eligibility", "Admission Guidance"].map(
                  (badge, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1.5 border border-white/15 rounded-full bg-white/5 text-[#e6eef8] text-[9px] font-extrabold"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* In-page Form */}
            <form
              onSubmit={handleInlineSubmit}
              className="bg-white rounded-[17px] p-5 sm:p-6 shadow-[0_16px_35px_rgba(0,0,0,0.15)] text-[#101828]"
            >
              <h3 className="text-[#071a33] font-serif text-lg sm:text-[20px] font-normal leading-tight mb-1">
                Get MBA Details
              </h3>
              <p className="text-[#667085] text-[10px] sm:text-xs mb-3.5">
                Enter your details and we&apos;ll connect with you.
              </p>

              <div className="space-y-2.5">
                <div>
                  <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={inlineForm.name}
                    onChange={(e) =>
                      setInlineForm({ ...inlineForm, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                  />
                </div>

                <div>
                  <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
                    MOBILE NUMBER
                  </label>
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
                    placeholder="10-digit mobile number"
                    className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                  />
                </div>

                <div>
                  <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={inlineForm.email}
                    onChange={(e) =>
                      setInlineForm({ ...inlineForm, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-[9px] bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] text-xs font-black cursor-pointer transition-all shadow-sm active:scale-[0.98] mt-1"
                >
                  {isSubmitting ? "Processing..." : "Get Programme Details →"}
                </button>

                <p className="text-[#98a2b3] text-center text-[8px] sm:text-[9px] leading-relaxed pt-1">
                  By submitting, you agree to be contacted regarding programme information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. WHY THIS MBA SECTION */}
      <section id="programme" className="py-14 sm:py-16">
        <div className="w-[min(1160px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#1769d2] text-[10px] font-black tracking-widest uppercase">
              WHY THIS MBA
            </span>
            <h2 className="font-serif text-[#071a33] text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2 mb-2.5">
              Designed for the future of business
            </h2>
            <p className="text-[#667085] text-xs sm:text-sm leading-[1.65]">
              Build management knowledge while developing practical, industry-relevant
              skills through an online learning format.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e2e7ef] rounded-[18px] p-5 sm:p-6 shadow-[0_8px_25px_rgba(7,26,51,0.045)] hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-[39px] h-[39px] rounded-[10px] bg-[#eaf2ff] text-[#1769d2] grid place-items-center text-xs font-extrabold mb-3.5 group-hover:bg-[#1769d2] group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <h3 className="font-serif text-[#071a33] text-base sm:text-[17px] font-normal leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[#667085] text-xs leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SPECIALIZATIONS SECTION (DARK) */}
      <section id="specializations" className="bg-[#071a33] py-14 sm:py-18 text-white">
        <div className="w-[min(1160px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#ffd34c] text-[10px] font-black tracking-widest uppercase">
              CHOOSE YOUR DOMAIN
            </span>
            <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2 mb-2.5">
              13 career-focused electives
            </h2>
            <p className="text-[#bdcce0] text-xs sm:text-sm leading-[1.65]">
              Choose one elective for a super-specialization or two electives for a
              dual-specialization MBA, as per the current MUJ structure.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {electives.map((spec, idx) => (
              <div
                key={idx}
                className="min-h-[78px] p-4 rounded-[14px] bg-white/[0.055] border border-white/[0.11] hover:bg-white/[0.09] hover:border-white/20 transition-all"
              >
                <strong className="block text-white text-xs sm:text-[13px] font-bold leading-snug mb-1">
                  {spec.title}
                </strong>
                <span className="block text-[#b9c9dc] text-[10px] leading-relaxed">
                  {spec.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROGRAMME STRUCTURE SECTION */}
      <section className="py-14 sm:py-16">
        <div className="w-[min(1160px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#1769d2] text-[10px] font-black tracking-widest uppercase">
              PROGRAMME STRUCTURE
            </span>
            <h2 className="font-serif text-[#071a33] text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2 mb-2.5">
              Learn across 4 semesters
            </h2>
            <p className="text-[#667085] text-xs sm:text-sm leading-[1.65]">
              The online MBA is a two-year programme divided into four semesters. Current
              MUJ information states a maximum completion window of four years.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {semesters.map((sem, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e2e7ef] rounded-[16px] p-5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-[29px] h-[29px] rounded-full bg-[#ffc72c] text-[#111] grid place-items-center text-[10px] font-black mb-2.5">
                  {sem.num}
                </div>
                <h3 className="font-serif text-[#071a33] text-sm sm:text-[15px] font-normal leading-snug mb-1">
                  {sem.title}
                </h3>
                <p className="text-[#667085] text-xs leading-[1.6]">{sem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CAREER ECOSYSTEM */}
      <section id="career" className="py-10 sm:py-14 bg-white border-y border-[#e2e7ef]">
        <div className="w-[min(1160px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-8">
            <span className="text-[#1769d2] text-[10px] font-black tracking-widest uppercase">
              CAREER ECOSYSTEM
            </span>
            <h2 className="font-serif text-[#071a33] text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2 mb-2.5">
              More than a degree
            </h2>
            <p className="text-[#667085] text-xs sm:text-sm leading-[1.65]">
              Online Manipal highlights career support, placement assistance, Coursera access
              and the Manipal alumni network.
            </p>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { num: "24", label: "Months" },
              { num: "4", label: "Semesters" },
              { num: "13", label: "Electives" },
              { num: "100%", label: "Online Learning" },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#f6f8fb] border border-[#e2e7ef] rounded-[16px] p-5 text-center hover:border-blue-300 transition-all"
              >
                <strong className="block text-[#071a33] font-serif text-2xl sm:text-[27px] font-normal leading-none mb-1">
                  {st.num}
                </strong>
                <span className="block text-[#667085] text-[10px] sm:text-xs font-semibold">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REVIEWS SECTION */}
      <section className="bg-[#edf2f8] py-14 sm:py-16">
        <div className="w-[min(1160px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-9">
            <span className="text-[#1769d2] text-[10px] font-black tracking-widest uppercase">
              LEARNER PERSPECTIVE
            </span>
            <h2 className="font-serif text-[#071a33] text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2 mb-2.5">
              What learners say
            </h2>
            <p className="text-[#667085] text-xs sm:text-sm leading-[1.65]">
              Selected themes from testimonials published by Online Manipal. Individual
              outcomes can vary.
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e2e7ef] rounded-[18px] p-5 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#f2b400] text-base tracking-widest mb-3">
                    ★★★★★
                  </div>
                  <p className="text-[#475467] text-xs leading-[1.7] italic mb-4">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#f0f3f8]">
                  <div className="text-[#071a33] text-[11px] font-extrabold">
                    — {rev.author}
                  </div>
                  <div className="text-[#667085] text-[9px] font-medium mt-0.5">
                    {rev.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section id="faq" className="py-14 sm:py-16">
        <div className="w-[min(850px,92%)] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-8">
            <span className="text-[#1769d2] text-[10px] font-black tracking-widest uppercase">
              FAQS
            </span>
            <h2 className="font-serif text-[#071a33] text-2xl sm:text-3xl lg:text-[41px] font-normal leading-[1.12] mt-2">
              Frequently asked questions
            </h2>
          </div>

          {/* Details / Accordion */}
          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e2e7ef] rounded-[13px] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-[#071a33] text-xs sm:text-[13px] font-extrabold leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-[#1769d2] text-sm font-bold shrink-0 transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-[#667085] text-xs leading-[1.7] border-t border-[#f0f3f8] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className="pt-2 pb-14 sm:pb-16">
        <div className="w-[min(1160px,92%)] mx-auto">
          <div className="bg-gradient-to-br from-[#09254a] to-[#0d5bb2] rounded-[24px] text-white text-center p-8 sm:p-12 shadow-lg">
            <h2 className="font-serif text-white text-2xl sm:text-3xl lg:text-[36px] font-normal leading-[1.15] mb-2.5">
              Take the next step in your career.
            </h2>
            <p className="max-w-[620px] mx-auto text-[#c8d8eb] text-xs sm:text-[13px] leading-relaxed mb-6">
              Get the latest Online MBA programme details, eligibility, specializations and
              admission guidance.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="min-h-[48px] px-8 rounded-[9px] bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] font-extrabold text-xs sm:text-sm cursor-pointer transition-all shadow-md active:scale-95 inline-flex items-center justify-center"
            >
              Get MBA Details
            </button>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#041127] text-[#aebed2] pt-12 pb-24 sm:pb-12 border-t border-white/5">
        <div className="w-[min(1160px,92%)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[30px] h-[30px] rounded-[8px] bg-white text-[#071a33] grid place-items-center font-black text-base">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base leading-tight">
                  Online Manipal
                </span>
                <small className="text-[#b8c7da] text-[8px] tracking-[0.5px] uppercase font-semibold">
                  Manipal University Jaipur
                </small>
              </div>
            </div>
            <p className="text-[#aebed2] text-xs leading-[1.8] max-w-sm">
              Information page for the Online MBA programme offered by Manipal University
              Jaipur. Confirm current programme details with the university before admission.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-white font-serif text-sm font-normal mb-2.5">
              Quick Links
            </h3>
            <div className="space-y-1.5 text-xs">
              <div>
                <a href="#programme" className="text-[#aebed2] hover:text-white transition-colors">
                  Programme
                </a>
              </div>
              <div>
                <a
                  href="#specializations"
                  className="text-[#aebed2] hover:text-white transition-colors"
                >
                  Specializations
                </a>
              </div>
              <div>
                <a href="#career" className="text-[#aebed2] hover:text-white transition-colors">
                  Career Support
                </a>
              </div>
              <div>
                <a href="#faq" className="text-[#aebed2] hover:text-white transition-colors">
                  FAQs
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-serif text-sm font-normal mb-2.5">
              Need Details?
            </h3>
            <p className="text-[#aebed2] text-xs leading-[1.8] mb-3">
              Request current fee, scholarship, eligibility and admission information.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] font-extrabold text-[11px] px-4 py-2.5 rounded-[9px] cursor-pointer transition-all active:scale-95"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-[min(1160px,92%)] mx-auto border-t border-white/10 mt-8 pt-4 text-center text-[#788ba5] text-[9px]">
          © 2026 • Online MBA Information Page • Manipal University Jaipur programme information
        </div>
      </footer>

      {/* 14. FLOATING CONTACT ICONS (DESKTOP & TABLET) */}
      <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-12 z-40 flex flex-col gap-2.5">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MBA%20from%20Manipal%20University%20Jaipur.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#20c063] hover:bg-[#1db05a] text-white flex items-center justify-center shadow-[0_13px_30px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20.5 3.5A11.85 11.85 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.08.54 4.1 1.56 5.9L.14 24l6.4-1.68a11.82 11.82 0 0 0 5.54 1.4h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.43-8.38ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.86 9.86 0 1 1 8.4 4.66Zm5.4-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:+${WA_NUMBER}`}
          aria-label="Call Now"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#1264d6] hover:bg-[#0f54b6] text-white flex items-center justify-center shadow-[0_13px_30px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C11.72 21 3 12.28 3 2.99c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.21Z" />
          </svg>
        </a>
      </div>

      {/* 15. MOBILE STICKY BOTTOM BAR */}
      <div className="sm:hidden fixed left-0 right-0 bottom-0 h-16 z-40 bg-[#041127] border-t border-white/10 p-2 flex gap-2">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MBA%20from%20Manipal%20University%20Jaipur.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#20c063] text-white font-black text-xs rounded-[9px] flex items-center justify-center gap-1.5"
        >
          WhatsApp
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-[#ffc72c] text-[#111] font-black text-xs rounded-[9px] flex items-center justify-center"
        >
          Get MBA Details
        </button>
      </div>

      {/* 16. MODAL OVERLAY */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-[#020a17]/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="w-[min(480px,100%)] bg-white rounded-[20px] p-6 sm:p-7 relative shadow-[0_30px_80px_rgba(0,0,0,0.35)] text-[#101828]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3.5 top-3.5 w-8 h-8 rounded-full bg-[#eef1f5] hover:bg-[#e2e7ef] text-[#344054] text-lg font-bold flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            <h2 className="font-serif text-[#071a33] text-xl sm:text-[28px] font-normal leading-tight mb-1.5 pr-8">
              Get Online MBA Details
            </h2>
            <p className="text-[#667085] text-xs leading-relaxed mb-5">
              Share your details to request the latest programme, eligibility, specialization
              and admission information.
            </p>

            <form onSubmit={handleModalSubmit} className="space-y-3">
              <div>
                <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={modalForm.name}
                  onChange={(e) =>
                    setModalForm({ ...modalForm, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                />
              </div>

              <div>
                <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
                  MOBILE NUMBER
                </label>
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
                  className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                />
              </div>

              <div>
                <label className="block text-[#344054] text-[9px] font-extrabold tracking-wider uppercase mb-1">
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
                  className="w-full h-11 border border-[#d6dce5] rounded-[8px] bg-white text-[#101828] px-3 text-xs outline-none focus:border-[#1769d2] focus:ring-2 focus:ring-[#1769d2]/20 transition-all placeholder:text-[#98a2b3]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-[9px] bg-[#ffc72c] hover:bg-[#ffd34c] text-[#111] text-xs font-black cursor-pointer transition-all shadow-sm active:scale-[0.98] mt-2"
              >
                {isSubmitting ? "Processing..." : "Request Details →"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
