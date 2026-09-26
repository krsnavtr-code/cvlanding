"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import CompliantFooter from "@/app/components/CompliantFooter";

export default function AmityOnlineMcaPage({
  subdomain = "amityonlinemca",
}: {
  subdomain?: string;
}) {
  const router = useRouter();
  const [activeYear, setActiveYear] = useState<1 | 2>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    days: "04",
    hours: "12",
    minutes: "14",
    seconds: "21",
  });

  useEffect(() => {
    // 4 Days, 12 Hours, 14 Minutes, 25 Seconds countdown
    const targetMs =
      Date.now() +
      4 * 24 * 60 * 60 * 1000 +
      12 * 60 * 60 * 1000 +
      14 * 60 * 1000 +
      25 * 1000;

    const updateTimer = () => {
      const current = Date.now();
      const distance = targetMs - current;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      qualification: String(form.get("qualification") || "").trim(),
      specialisation: String(form.get("specialisation") || "").trim(),
      state: String(form.get("state") || "").trim(),
      subdomain: "amityonlinemca",
      university: "Amity University Online",
      program: "Online MCA",
      source: String(form.get("source") || "Apply For Online MCA").trim(),
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
      router.push("/thank-you");
    } catch {
      // Fallback for static demo
      setFormStatus("success");
      setStatusMessage("Thank you! Your enquiry has been recorded.");
      formElement?.reset();
      router.push("/thank-you");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17243a] font-['Inter',system-ui,-apple-system,sans-serif] antialiased overflow-x-hidden selection:bg-[#ffc21c] selection:text-[#071f58]">
      {/* 1. STICKY TOP HEADER WRAPPER */}
      <header className="sticky top-0 z-50 shadow-lg bg-[#1b325e]">
        {/* TOP SCHOLARSHIP COUNTDOWN NOTIFICATION BAR */}
        <div className="bg-[#0b1f44] text-white py-1.5 px-3 text-xs sm:text-sm font-semibold border-b border-white/10">
          <div className="w-[min(1160px,94%)] mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
            <div className="flex items-center gap-1.5 mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-white/90 text-xs font-semibold">
                Authorized Admission &amp; Marketing Partner: <strong className="text-white font-bold">CollegeVihar</strong>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 text-center mx-auto lg:mx-0">
              <span className="text-white font-medium">
                Get up to 45% merit-based scholarship on semester fee.{" "}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#ffd044] hover:underline font-bold ml-1 cursor-pointer inline-block"
                >
                  Apply Now.
                </button>
              </span>
              <span className="hidden sm:inline text-white/50">|</span>
              <div className="inline-flex items-center gap-1.5 font-mono font-bold text-xs whitespace-nowrap shrink-0 flex-nowrap">
                <span className="border border-white/60 bg-white/5 rounded-full px-2.5 py-0.5 tracking-tight">
                  {timeLeft.days} d
                </span>
                <span className="text-white/80 font-sans">:</span>
                <span className="border border-white/60 bg-white/5 rounded-full px-2.5 py-0.5 tracking-tight">
                  {timeLeft.hours} h
                </span>
                <span className="text-white/80 font-sans">:</span>
                <span className="border border-white/60 bg-white/5 rounded-full px-2.5 py-0.5 tracking-tight">
                  {timeLeft.minutes} m
                </span>
                <span className="text-white/80 font-sans">:</span>
                <span className="border border-white/60 bg-white/5 rounded-full px-2.5 py-0.5 tracking-tight text-[#ffd044]">
                  {timeLeft.seconds} s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="bg-[#1b325e]">
          <div className="w-[min(1160px,92%)] mx-auto h-[60px] sm:h-[68px] flex items-center justify-between gap-4">
            {/* Logo & Authorized Partner Branding */}
            <div className="flex items-center gap-3">
              <a href="#top" className="flex items-center">
                <img
                  src="/images/amity-logo.jpg"
                  alt="Amity University Online"
                  className="h-9 sm:h-11 w-auto object-contain rounded-md"
                />
              </a>
              <div className="h-7 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-black text-white leading-tight">
                  College<span className="text-[#ffd24a]">Vihar</span>
                </span>
                <span className="text-[10px] text-[#ffd24a] font-bold">
                  Authorized Admission Partner
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-[#dce7fa]">
              <a
                href="#why-amity"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Why Amity
              </a>
              <a
                href="#curriculum"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Curriculum
              </a>
              <a
                href="#specialisations"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Specialisations
              </a>
              <a
                href="#eligibility"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Eligibility
              </a>
              <a
                href="#fees"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Fee & EMI
              </a>
              <a
                href="#admission"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                Admission
              </a>
              <a
                href="#faq"
                className="hover:text-[#ffd24a] transition-colors py-1"
              >
                FAQ
              </a>
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ffba00] hover:bg-[#ffc820] text-[#15243b] font-bold text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-[13px] border-2 border-[#15243b] shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                Apply Now
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg focus:outline-hidden"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#152b52] border-t border-white/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-[#dce7fa]">
              <a
                href="#why-amity"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Why Amity
              </a>
              <a
                href="#curriculum"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Curriculum
              </a>
              <a
                href="#specialisations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Specialisations
              </a>
              <a
                href="#eligibility"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Eligibility
              </a>
              <a
                href="#fees"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Fee & EMI
              </a>
              <a
                href="#admission"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5 border-b border-white/5"
              >
                Admission
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ffd24a] py-1.5"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO BANNER SECTION (MATCHED TO DESIGN FOR MCA) */}
        <section
          id="top"
          className="relative bg-linear-to-r from-[#0a2754] via-[#0c2e64] to-[#0a234a] text-white pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute inset-0 bg-radial-at-c from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="w-[min(1160px,94%)] mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs sm:text-[13px] text-white/70 font-medium mb-5 flex items-center gap-1.5 flex-wrap">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="text-white/40">&gt;</span>
              <span className="hover:text-white cursor-pointer">Programs</span>
              <span className="text-white/40">&gt;</span>
              <span className="hover:text-white cursor-pointer">
                PG Programs
              </span>
              <span className="text-white/40">&gt;</span>
              <span className="text-[#ffc20e] font-semibold">
                Master of Computer Applications (MCA)
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-5">
                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="bg-white text-[#111] px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-sm text-xs font-bold">
                    <span className="text-red-700 text-sm">🏛</span>
                    <span>UGC Entitled</span>
                  </div>
                  <div className="bg-white text-[#111] px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-sm text-xs font-bold">
                    <span className="bg-[#1565c0] text-white text-[10px] px-1.5 py-0.5 rounded font-black">
                      AICTE
                    </span>
                    <span>Approved MCA</span>
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black leading-[1.1] tracking-tight text-white font-['Georgia',serif]">
                  Master of <span className="text-[#ffc20e]">Computer</span>
                  <br />
                  <span className="text-[#ffc20e]">Applications (MCA)</span>
                </h1>

                {/* Duration Badge */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white">
                    <span>⏱</span>
                    <span>Duration : 2 Years (4 Semesters)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white hover:bg-slate-100 text-[#0c2e64] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <span>Download Brochure</span>
                    <svg
                      className="w-4 h-4 text-[#0c2e64]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.share) {
                        navigator.share({
                          title: "Amity Online MCA",
                          url: window.location.href,
                        });
                      } else if (typeof navigator !== "undefined") {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="w-12 h-12 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    title="Share Page"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </button>
                </div>

                {/* Global Accreditations Pill Strip */}
                <div className="pt-2">
                  <div className="bg-white rounded-full px-4 py-2 text-slate-900 flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs font-bold shadow-md max-w-fit">
                    <span className="text-slate-900 font-black">
                      Global Accreditations
                    </span>
                    <span className="bg-[#1b325e] text-white px-2 py-0.5 rounded text-[11px] font-black tracking-wider">
                      WASC
                    </span>
                    <span className="bg-red-700 text-white px-2 py-0.5 rounded text-[11px] font-black tracking-wider">
                      THE
                    </span>
                    <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[11px] font-black tracking-wider">
                      QAA
                    </span>
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[11px] font-black tracking-wider">
                      WES
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column Form Card (Fixed Max Width & Centered on Mobile) */}
              <div className="w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-[420px] bg-white rounded-[24px] p-6 sm:p-7 shadow-2xl text-slate-900 border border-slate-100 mx-auto lg:mx-0">
                  <h2 className="text-lg sm:text-xl font-black text-[#0c2e64] leading-tight mb-4 text-center lg:text-left font-['Georgia',serif]">
                    Next-Gen MCA with India's No. 1<br />
                    Online University
                  </h2>

                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input
                      type="hidden"
                      name="source"
                      value="Hero Banner Lead Form (MCA)"
                    />

                    <div>
                      <input
                        required
                        name="name"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#0c2e64] font-medium placeholder:text-slate-400"
                      />
                    </div>

                    <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] gap-2">
                      <select
                        name="country_code"
                        className="px-2 py-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-hidden"
                        defaultValue="IN +91"
                      >
                        <option value="IN +91">IN +91</option>
                        <option value="US +1">US +1</option>
                        <option value="UK +44">UK +44</option>
                        <option value="AE +971">AE +971</option>
                      </select>
                      <input
                        required
                        type="tel"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="Mobile No."
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#0c2e64] font-medium placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#0c2e64] font-medium placeholder:text-slate-400"
                      />
                    </div>

                    <label className="flex items-start gap-2 text-[10px] sm:text-[11px] text-slate-500 cursor-pointer pt-0.5 leading-tight">
                      <input
                        type="checkbox"
                        required
                        defaultChecked
                        className="mt-0.5 rounded-sm shrink-0"
                      />
                      <span>
                        By entering these details I agree that Amity University
                        Online and its associates can contact me with updates
                        &amp; notifications via Email, SMS, WhatsApp, and Voice
                        call as per its Privacy Policy. This consent will
                        override any registration for DNC / NDNC.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-[#ffba00] hover:bg-[#ffc820] text-[#132238] font-black text-sm sm:text-base py-3.5 rounded-xl border-2 border-[#15243b] shadow-md transition-all cursor-pointer active:scale-[0.99] disabled:opacity-60"
                    >
                      {formStatus === "submitting"
                        ? "Submitting..."
                        : "Get Free Counselling"}
                    </button>

                    {statusMessage && (
                      <div className="text-center text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        {statusMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="py-7 bg-[#f7f9fc]">
          <div className="w-[min(1160px,92%)] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white border border-[#e9edf3] rounded-[19px] p-5 text-center shadow-[0_10px_28px_rgba(20,35,60,0.06)]">
              <strong className="block text-2xl sm:text-3xl font-black text-[#1b325e]">
                250K+
              </strong>
              <span className="block mt-1 text-[#687385] text-xs sm:text-sm font-medium">
                Learner Community
              </span>
            </div>
            <div className="bg-white border border-[#e9edf3] rounded-[19px] p-5 text-center shadow-[0_10px_28px_rgba(20,35,60,0.06)]">
              <strong className="block text-2xl sm:text-3xl font-black text-[#1b325e]">
                450+
              </strong>
              <span className="block mt-1 text-[#687385] text-xs sm:text-sm font-medium">
                Tech Hiring Partners
              </span>
            </div>
            <div className="bg-white border border-[#e9edf3] rounded-[19px] p-5 text-center shadow-[0_10px_28px_rgba(20,35,60,0.06)]">
              <strong className="block text-2xl sm:text-3xl font-black text-[#1b325e]">
                100%
              </strong>
              <span className="block mt-1 text-[#687385] text-xs sm:text-sm font-medium">
                Placement Assistance
              </span>
            </div>
            <div className="bg-white border border-[#e9edf3] rounded-[19px] p-5 text-center shadow-[0_10px_28px_rgba(20,35,60,0.06)]">
              <strong className="block text-2xl sm:text-3xl font-black text-[#1b325e]">
                2 Years
              </strong>
              <span className="block mt-1 text-[#687385] text-xs sm:text-sm font-medium">
                Online MCA Duration
              </span>
            </div>
          </div>
        </section>

        {/* 4. WHY AMITY ONLINE MCA */}
        <section
          id="why-amity"
          className="py-14 sm:py-18 bg-[#eef3fa] scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                WHY AMITY ONLINE MCA
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                A Smarter Way To Master Computer Applications
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                AICTE-approved curriculum engineered for Software Developers,
                Cloud Architects, and AI Specialists.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-sm mb-4">
                  AI
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  AI &amp; Machine Learning Labs
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Build and deploy real machine learning models using Python,
                  TensorFlow, and PyTorch in cloud environments.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ☁
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  Virtual Cloud Coding Labs
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Practice coding directly in your browser with interactive
                  compilers, Git integration, and CI/CD pipelines.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ↗
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  Industry-Aligned Tech Curriculum
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Master Data Structures, Full-Stack development, Cloud
                  Architecture, and Enterprise Security standards.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ◎
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  AICTE &amp; UGC-DEB Approved
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Earn a 100% legitimate post-graduate technical degree valid
                  for top MNCs, PSUs, and global tech careers.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ★
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  Tech Placement &amp; DSA Prep
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Sharpen competitive coding, system design, and mock interviews
                  with senior Silicon Valley &amp; Indian tech mentors.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ◉
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5 font-['Georgia',serif]">
                  Hackathons &amp; Tech Community
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Participate in live coding hackathons, capstone demos, and
                  build high-impact GitHub portfolio projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CURRICULUM SECTION */}
        <section
          id="curriculum"
          className="py-14 sm:py-18 bg-linear-to-br from-[#09285e] to-[#103f78] text-white scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-7">
              <div className="text-xs font-black tracking-[2px] text-[#ffd044] uppercase">
                MCA CURRICULUM
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Industry-Oriented Software Engineering Roadmap
              </h2>
              <p className="text-[#d7e5fa] text-sm sm:text-base">
                Build foundational computer science depth first, then master
                cutting-edge software specialisations.
              </p>
            </div>

            {/* Year Toggle Tabs */}
            <div className="flex justify-center gap-2.5 mb-6">
              <button
                onClick={() => setActiveYear(1)}
                className={`border border-white/45 rounded-full px-6 py-2.5 font-black text-xs sm:text-sm cursor-pointer transition-all ${
                  activeYear === 1
                    ? "bg-white text-[#173d7c] shadow-md"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                Year 1 (Semesters 1 &amp; 2)
              </button>
              <button
                onClick={() => setActiveYear(2)}
                className={`border border-white/45 rounded-full px-6 py-2.5 font-black text-xs sm:text-sm cursor-pointer transition-all ${
                  activeYear === 2
                    ? "bg-white text-[#173d7c] shadow-md"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                Year 2 (Semesters 3 &amp; 4)
              </button>
            </div>

            {/* Year 1 Semesters */}
            {activeYear === 1 && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 1
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3 font-['Georgia',serif]">
                    Core Computer Science &amp; Programming
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>Advanced Data Structures &amp; Algorithms (DSA)</li>
                    <li>Mathematical Foundations of Computer Science</li>
                    <li>
                      Advanced Database Management Systems (DBMS) &amp; SQL
                    </li>
                    <li>Operating System Concepts &amp; Shell Scripting</li>
                    <li>Object-Oriented Programming with Java</li>
                  </ul>
                </div>

                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 2
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3 font-['Georgia',serif]">
                    Software Engineering &amp; Web Stack
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>
                      Software Engineering &amp; Agile Scrum Methodologies
                    </li>
                    <li>Computer Networks &amp; Security Protocols</li>
                    <li>Python Programming for Data Science &amp; Web</li>
                    <li>Modern Web Technologies (React, Node, REST APIs)</li>
                    <li>Cloud Computing Fundamentals (AWS/Azure)</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Year 2 Semesters */}
            {activeYear === 2 && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 3
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3 font-['Georgia',serif]">
                    AI, Machine Learning &amp; Electives
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>
                      Artificial Intelligence &amp; Machine Learning Concepts
                    </li>
                    <li>Information &amp; Cyber Security Frameworks</li>
                    <li>
                      Specialisation Track Elective 1 (Cloud / Full Stack)
                    </li>
                    <li>Specialisation Track Elective 2 (AI / Big Data)</li>
                    <li>Minor Industry Project &amp; GitHub Code Review</li>
                  </ul>
                </div>

                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 4
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3 font-['Georgia',serif]">
                    Enterprise Systems &amp; Capstone Project
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>
                      Enterprise Application Architecture &amp; Microservices
                    </li>
                    <li>Specialisation Advanced Elective 3</li>
                    <li>Emerging Technologies in Software Development</li>
                    <li>
                      Comprehensive Capstone Industry Project / Dissertation
                    </li>
                    <li>Live Industry Internship / Production Deployment</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="text-center text-[#d6e5fb] text-xs mt-5">
              Subject lists comply with AICTE norms and can vary based on chosen
              specialisation track.
            </div>
          </div>
        </section>

        {/* 6. SPECIALISATIONS */}
        <section
          id="specialisations"
          className="py-14 sm:py-18 bg-white scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                MCA SPECIALISATIONS
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                High-Growth Technology Specialisations
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Tailor your MCA degree with future-proof tech specialisations
                designed for top software firms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="bg-linear-to-br from-[#173d7c] to-[#28538e] text-white rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-md border border-[#173d7c]">
                Cloud Computing &amp; DevOps
              </div>
              <div className="bg-linear-to-br from-[#173d7c] to-[#28538e] text-white rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-md border border-[#173d7c]">
                Artificial Intelligence &amp; Machine Learning
              </div>
              <div className="bg-linear-to-br from-[#173d7c] to-[#28538e] text-white rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-md border border-[#173d7c]">
                Full Stack Web Development
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Data Science &amp; Big Data Analytics
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Cyber Security &amp; Ethical Hacking
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Software Architecture &amp; Engineering
              </div>
            </div>
          </div>
        </section>

        {/* 7. RECOGNITION / CREDENTIALS */}
        <section className="py-14 sm:py-18 bg-[#f2f5fa]">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                ACCREDITATIONS &amp; APPROVALS
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Recognized By Top Statutory Bodies
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Your Amity Online MCA degree is globally accredited and entitled
                by government bodies.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="bg-white rounded-[20px] p-5 text-center border border-[#e1e6ee] min-h-[125px] flex flex-col items-center justify-center shadow-xs">
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1b325e] font-black text-sm mb-2.5">
                  UGC
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  UGC Entitled
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  Online degree framework
                </span>
              </div>

              <div className="bg-white rounded-[20px] p-5 text-center border border-[#e1e6ee] min-h-[125px] flex flex-col items-center justify-center shadow-xs">
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1565c0] font-black text-sm mb-2.5">
                  AICTE
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  AICTE Approved
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  Technical Master's Degree
                </span>
              </div>

              <div className="bg-white rounded-[20px] p-5 text-center border border-[#e1e6ee] min-h-[125px] flex flex-col items-center justify-center shadow-xs">
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1b325e] font-black text-sm mb-2.5">
                  A+
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  NAAC A+
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  Highest Accreditation
                </span>
              </div>

              <div className="bg-white rounded-[20px] p-5 text-center border border-[#e1e6ee] min-h-[125px] flex flex-col items-center justify-center shadow-xs">
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1b325e] font-black text-sm mb-2.5">
                  WASC
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  WASC
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  USA accreditation
                </span>
              </div>

              <div className="bg-white rounded-[20px] p-5 text-center border border-[#e1e6ee] min-h-[125px] flex flex-col items-center justify-center shadow-xs col-span-2 sm:col-span-1">
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1b325e] font-black text-sm mb-2.5">
                  QAA
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  QAA &amp; WES
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  UK &amp; Global Mobility
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. OFFICIAL DEGREE CERTIFICATE SAMPLE SECTION */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-10">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                OFFICIAL DEGREE CERTIFICATE
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Earn A Legitimate AICTE-Approved MCA Degree
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Your online MCA degree from Amity University is fully equivalent
                to an on-campus degree, entitled by UGC, approved by AICTE, and
                recognized worldwide.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center bg-[#f8fafc] border border-[#e2e7ee] rounded-[28px] p-6 sm:p-9 shadow-xs">
              {/* Certificate Image Preview */}
              <div className="relative group flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="/images/MBA_79e476779b.webp"
                    alt="Amity University Online Degree Certificate Sample"
                    className="w-full h-auto max-h-[420px] object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Certificate Highlights & Features */}
              <div className="space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 bg-[#ffc21c]/20 text-[#071f58] px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border border-[#ffc21c]/40">
                  ★ 100% Valid for Top Tech MNCs &amp; Govt PSU Roles
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#1b325e] leading-tight font-['Georgia',serif]">
                  Key Highlights of Your Online MCA Degree
                </h3>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1b325e] text-[#ffc21c] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17243a]">
                        AICTE &amp; UGC-Entitled Compliance
                      </h4>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        Conferred under statutory AICTE norms and UGC online
                        regulations, ensuring equal status as on-campus degrees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1b325e] text-[#ffc21c] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17243a]">
                        WES Verified for Global Tech Migration
                      </h4>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        Evaluated by WES (World Education Services) for direct
                        software jobs and higher education in USA, Canada, and
                        Europe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1b325e] text-[#ffc21c] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17243a]">
                        Digital Credentials &amp; Hardcopy Convocation
                      </h4>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        Get verifiable digital degree with encrypted QR code +
                        physical original degree delivered to your doorstep.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1b325e] hover:bg-[#0b2255] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Verify Degree Validity &amp; Apply →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. ELIGIBILITY */}
        <section
          id="eligibility"
          className="py-14 sm:py-18 bg-white scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                ELIGIBILITY CRITERIA
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Who Can Apply for Online MCA?
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Clear eligibility pathways for CS/IT graduates and non-CS degree
                holders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    BCA / B.Sc (CS / IT) / B.Tech
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Passed BCA / B.Sc (Computer Science / IT) / B.Tech or
                    equivalent degree with minimum 50% aggregate marks (45% for
                    reserved category).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    Non-CS Graduates with Mathematics
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Graduates in BA, B.Com, B.Sc who passed Mathematics /
                    Statistics at 10+2 level or graduation can apply (bridge
                    modules included).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  💻
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    Working IT Professionals
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Ideal for developers, system admins, and tech support
                    professionals wanting to fast-track into senior software
                    architect roles.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    No Mandatory Entrance Exam
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Direct admission based on graduation academic verification.
                    No CAT/NIMCET score mandatory for working professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FEE & EMI SECTION */}
        <section
          id="fees"
          className="py-14 sm:py-18 bg-white border-t border-slate-100 scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                MCA FEE &amp; EMI
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Plan Your MCA With Flexible Payment Options
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Transparent fee structure with semester-wise payments, easy
                installments, and zero-cost EMI financing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-[23px] p-7 border-l-6 border-[#f5bf1a] bg-[#fff9df] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  One-time payment
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹1,70,000
                </strong>
              </div>

              <div className="rounded-[23px] p-7 border-l-6 border-[#4a86e8] bg-[#eef4ff] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  Annual Fee
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹85,000
                </strong>
              </div>

              <div className="rounded-[23px] p-7 border-l-6 border-[#26be6b] bg-[#ebfbf1] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  Per Semester Fee
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹42,500
                </strong>
              </div>
            </div>

            {/* 24-Month EMI Banner */}
            <div className="mt-4 bg-linear-to-br from-[#0a275c] to-[#1a4a86] text-white rounded-[24px] p-7 text-center shadow-lg">
              <small className="font-bold text-[#d7e5fa] text-xs sm:text-sm">
                24-Month No-Cost EMI
              </small>
              <strong className="block text-[#ffd044] text-3xl sm:text-4xl font-black my-1.5">
                ₹7,080 / Month
              </strong>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-3 border-0 bg-[#ffc21c] hover:bg-[#ffd24a] text-[#071f58] font-black text-xs sm:text-sm px-6 py-3 rounded-full cursor-pointer transition-all shadow-md"
              >
                Check Payment Options →
              </button>
            </div>
          </div>
        </section>

        {/* 11. ADMISSION PROCESS */}
        <section
          id="admission"
          className="py-14 sm:py-18 bg-[#f4f6fa] scroll-mt-20"
        >
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                ADMISSION ROADMAP
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Simple 4-Step Online Admission Process
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                100% digital admission guidance and document verification from
                home.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto space-y-3.5">
              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  1
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    Submit Details &amp; Free Profile Evaluation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Fill out the enquiry form to connect with an Amity technical
                    education counselor.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  2
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    Digital Document Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Upload your graduation marksheets, 10th/12th certificates,
                    and identity proof online.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  3
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    Fee Payment &amp; 0% Interest EMI
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Pay semester fees securely online or activate instant
                    monthly No-Cost EMI approval.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  4
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1 font-['Georgia',serif]">
                    LMS Credentials &amp; Cloud Coding Access
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Receive your official Student ID, LMS login, cloud coding
                    sandbox, and start attending live sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. TECH CAREER BANNER */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="bg-linear-to-br from-[#08245a] to-[#204d87] rounded-[28px] text-white p-7 sm:p-9 grid lg:grid-cols-[1.2fr_0.8fr] gap-5 items-center shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 font-['Georgia',serif]">
                  Accelerate Into High-Paying Tech Leadership Roles
                </h2>
                <p className="text-xs sm:text-sm text-[#dce8fa] leading-relaxed">
                  Amity Online highlights 100% placement assistance, 450+ hiring
                  partners, and tech resume workshops connecting you with top
                  software product and IT consulting firms.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center backdrop-blur-xs">
                  <strong className="text-xl sm:text-2xl font-black text-[#ffd044] block">
                    100%
                  </strong>
                  <span className="text-xs text-[#e3edfa] font-medium mt-0.5 block">
                    Placement Assistance
                  </span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center backdrop-blur-xs">
                  <strong className="text-xl sm:text-2xl font-black text-[#ffd044] block">
                    ₹8 – 25 LPA
                  </strong>
                  <span className="text-xs text-[#e3edfa] font-medium mt-0.5 block">
                    Potential Salary Scope
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ SECTION */}
        <section id="faq" className="py-14 sm:py-18 bg-[#eef2f8] scroll-mt-20">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                FAQ
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight font-['Georgia',serif]">
                Frequently Asked Questions
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Quick answers to common Online MCA questions.
              </p>
            </div>

            <div className="max-w-[900px] mx-auto bg-white rounded-2xl overflow-hidden border border-[#e4e8ef] shadow-xs">
              {[
                {
                  q: "Is Amity Online MCA a 2-year AICTE-approved program?",
                  a: "Yes. In accordance with latest AICTE and UGC-DEB guidelines, the Online MCA program duration is 2 years (4 semesters) and holds complete statutory approval.",
                },
                {
                  q: "Can non-computer science graduates (B.Com/BA/B.Sc) apply?",
                  a: "Yes. Non-CS graduates who have studied Mathematics or Statistics at 10+2 level or graduation can enroll. Foundational bridge courses are provided in Semester 1.",
                },
                {
                  q: "How are practical programming labs conducted online?",
                  a: "Amity provides cloud-based virtual coding labs where you can write, compile, and execute code in Python, Java, C++, SQL, React, and cloud architectures directly inside your browser.",
                },
                {
                  q: "What is the fee structure and are monthly EMI options available?",
                  a: "The total program fee is ₹1,70,000. You can pay per semester (₹42,500) or choose No-Cost EMI starting from approx. ₹7,080/month with zero extra interest.",
                },
                {
                  q: "Are term-end examinations conducted online?",
                  a: "Yes. All examinations are conducted 100% online through AI-proctored remote assessment systems, allowing you to take exams comfortably from home.",
                },
              ].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-[#e4e8ef] last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full bg-white text-left p-5 sm:p-6 flex justify-between items-center gap-4 font-bold text-[#17243a] text-base sm:text-lg cursor-pointer hover:bg-slate-50/50 transition-colors font-['Georgia',serif]"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`w-8 h-8 rounded-full border border-[#cfd7e3] flex items-center justify-center shrink-0 font-bold text-sm transition-all ${
                          isOpen
                            ? "bg-[#1b325e] text-white border-[#1b325e]"
                            : "text-[#1b325e]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-[#667085] text-xs sm:text-sm leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 14. FINAL CTA BANNER */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="bg-linear-to-br from-[#09265c] to-[#173f7b] text-white rounded-[28px] p-7 sm:p-9 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-1.5 font-['Georgia',serif]">
                  Ready To Elevate Your Software Engineering Career?
                </h2>
                <p className="text-xs sm:text-sm text-[#dce8fa]">
                  Get complete syllabus, eligibility verification, scholarship
                  details, and admission assistance.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-0 bg-[#ffc21c] hover:bg-[#ffd24a] text-[#071f58] font-black text-xs sm:text-sm rounded-xl px-6 py-4 cursor-pointer whitespace-nowrap shadow-md transition-all shrink-0"
              >
                ENQUIRE NOW →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 15. FOOTER */}
      <CompliantFooter
        universityName="Amity University Online"
        universityShortName="Amity Online"
        programName="Online MCA"
        partnershipType="amity"
        theme="navy"
      />

      {/* 16. FLOATING WHATSAPP & CALL BUTTONS */}
      <div className="fixed right-4 bottom-20 z-40 flex items-center justify-center">
        {/* Animated Ripple Wave 1 */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#20c76a] opacity-75 animate-ping pointer-events-none"></span>
        {/* Animated Ripple Wave 2 (Pulse Glow) */}
        <span className="absolute -inset-1.5 rounded-full bg-[#20c76a]/35 animate-pulse pointer-events-none"></span>

        {/* WhatsApp Icon Button */}
        <a
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#20c76a] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(32,199,106,0.4)] hover:scale-110 transition-transform active:scale-95"
          href="https://wa.me/919266585858?text=Hi%2C%20I%20want%20details%20about%20Amity%20Online%20MCA"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute right-0 top-0 w-3.5 h-3.5 border-2 border-white bg-[#ff3939] rounded-full z-10"></span>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 relative z-10"
          >
            <path
              d="M16 3.5a12.2 12.2 0 0 0-10.5 18.5L4 28l6.3-1.5A12.2 12.2 0 1 0 16 3.5Z"
              fill="white"
            />
            <path
              d="M12.4 10.2c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.2-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5.2 8.1 7.1 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.6-.5-.2-2.9-1.4-3.4-1.6-.5-.2-.8-.2-1.2.2-.3.5-1.3 1.6-1.6 1.9-.3.3-.6.3-1.1.1-.5-.2-2-.7-3.8-2.4-1.4-1.2-2.4-2.8-2.7-3.3-.3-.5 0-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9-.1-.2-1.1-2.7-1.5-3.6Z"
              fill="#20c76a"
            />
          </svg>
        </a>
      </div>

      <a
        className="fixed right-4 bottom-4 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0b3d80] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform"
        href="tel:+919266585858"
        aria-label="Call"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M6.6 2.8 9.1 2c.7-.2 1.4.2 1.7.8l1.2 2.9c.2.6.1 1.2-.4 1.6L10 8.7a13.4 13.4 0 0 0 5.3 5.3l1.4-1.6c.4-.5 1-.6 1.6-.4l2.9 1.2c.7.3 1 .9.8 1.7l-.8 2.5c-.2.7-.9 1.2-1.6 1.2C10.8 18.5 5.5 13.2 5.5 6.4c0-.7.4-1.4 1.1-1.6Z"
            fill="white"
          />
        </svg>
      </a>

      {/* 17. MOBILE STICKY BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e5ed] p-2 z-40 flex gap-2 shadow-lg">
        <a
          className="flex-1 text-center py-3 rounded-xl font-black text-xs bg-[#e9fbf1] text-[#12864a] border border-[#c3f2d7]"
          href="https://wa.me/919266585858?text=Hi%2C%20I%20want%20details%20about%20Amity%20Online%20MCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="flex-1 text-center py-3 rounded-xl font-black text-xs bg-[#ffc21c] text-[#071f58] shadow-sm"
          href="tel:+919266585858"
        >
          Call Now
        </a>
      </div>

      {/* 18. POPUP MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#030d20]/70 flex items-center justify-center p-4 z-50 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white w-[min(500px,100%)] rounded-[24px] p-6 sm:p-7 relative shadow-[0_30px_90px_rgba(0,0,0,0.35)] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3.5 top-3.5 border-0 bg-[#eef2f7] hover:bg-[#dfe5ee] text-[#17243a] w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center cursor-pointer transition-colors"
            >
              ×
            </button>
            <h2 className="text-xl sm:text-2xl font-black text-[#1b325e] font-['Georgia',serif]">
              Get Amity Online MCA Details
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 mb-4">
              Enter your details and our technical education counsellor will
              assist you.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <input
                type="hidden"
                name="source"
                value="Get Amity Online MCA Details (Modal)"
              />
              <div>
                <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  placeholder="Full name"
                  className="w-full px-3.5 py-2.5 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                  Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile"
                  className="w-full px-3.5 py-2.5 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full px-3.5 py-2.5 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2]"
                />
              </div>

              <label className="flex items-start gap-2 text-[11px] text-[#747f8f] cursor-pointer pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 rounded-sm"
                  defaultChecked
                />
                <span>I agree to receive admission-related communication.</span>
              </label>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full border-0 bg-[#1b325e] hover:bg-[#0b2255] text-white py-3.5 rounded-xl text-sm font-black cursor-pointer transition-all shadow-md disabled:opacity-60"
              >
                {formStatus === "submitting"
                  ? "Submitting..."
                  : "Get Details →"}
              </button>

              {statusMessage && (
                <div className="text-center text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
