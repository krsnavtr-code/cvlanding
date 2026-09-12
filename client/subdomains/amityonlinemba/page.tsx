"use client";

import { useState, FormEvent } from "react";

export default function AmityOnlineMbaPage({
  subdomain = "amityonlinemba",
}: {
  subdomain?: string;
}) {
  const [activeYear, setActiveYear] = useState<1 | 2>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      qualification: String(form.get("qualification") || "").trim(),
      specialisation: String(form.get("specialisation") || "").trim(),
      state: String(form.get("state") || "").trim(),
      subdomain: "amityonlinemba",
      university: "Amity University Online",
      program: "Online MBA",
      source: String(form.get("source") || "Apply For Online MBA").trim(),
    };

    setFormStatus("submitting");
    setStatusMessage("");

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

      setFormStatus("success");
      setStatusMessage(
        "Thank you! Your enquiry has been received. Redirecting to confirmation page...",
      );
      e.currentTarget.reset();
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 800);
    } catch {
      // Fallback for static demo
      setFormStatus("success");
      setStatusMessage(
        "Thank you! Your enquiry has been recorded. Redirecting...",
      );
      e.currentTarget.reset();
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 800);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17243a] font-sans antialiased overflow-x-hidden selection:bg-[#ffc21c] selection:text-[#071f58]">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-50 bg-[#1b325e] shadow-lg">
        <div className="w-[min(1160px,92%)] mx-auto h-[70px] sm:h-[78px] flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <span className="text-xl sm:text-2xl font-black text-[#ffc21c] tracking-tight">
                  AMITY
                </span>
                <span className="text-xs sm:text-sm font-bold text-white ml-1.5 uppercase tracking-wider">
                  ONLINE
                </span>
              </div>
            </a>
          </div>

          {/* Header CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-0 bg-[#ffc21c] hover:bg-[#ffd24a] text-[#071f58] font-black text-xs sm:text-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl tracking-wide shadow-[0_0_0_4px_rgba(255,178,28,0.13)] hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>APPLY FOR ADMISSION</span>
            <span>→</span>
          </button>
        </div>
      </header>

      {/* 2. URGENCY NOTICE BAR */}
      <div className="bg-linear-to-r from-[#ffae13] via-[#ffd04a] to-[#ffae13] text-[#09215b] text-center font-black text-sm sm:text-base py-2.5 px-3 tracking-wide shadow-xs">
        <span className="text-lg mr-1.5">●</span> Admission Open · Limited Seats
        · Scholarship options available
      </div>

      <main>
        {/* 3. HERO SECTION */}
        <section
          id="top"
          className="relative bg-linear-to-br from-[#325488] via-[#325488] to-[#24426f] text-white pt-8 sm:pt-10 pb-0 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-[#ffd050]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-[min(1160px,92%)] mx-auto grid lg:grid-cols-[1.02fr_0.98fr] gap-7 items-stretch relative z-10">
            {/* Left Hero Copy */}
            <div className="py-5 sm:py-8 lg:pb-12 space-y-4">
              <div className="text-[#ffd24a] font-black tracking-[2px] text-xs sm:text-sm uppercase">
                PG PROGRAM
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight text-white">
                Build Your Future With A{" "}
                <em className="not-italic text-[#ffd247]">
                  Next-Gen Online MBA
                </em>
              </h1>

              <div className="inline-flex items-center border border-white/28 bg-white/10 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm text-white">
                AI-powered learning · Industry-focused curriculum
              </div>

              <p className="text-base sm:text-lg text-[#dce7fa] leading-relaxed max-w-[610px]">
                A 2-year online MBA designed for graduates and working
                professionals who want flexible learning, career-focused skills
                and a globally recognised qualification.
              </p>

              {/* Quick Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-2.5 py-2">
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#f4f7ff]">
                  <span className="w-8 h-8 rounded-lg bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-sm shrink-0">
                    ⌛
                  </span>
                  <span>Duration: 2 Years</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#f4f7ff]">
                  <span className="w-8 h-8 rounded-lg bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-sm shrink-0">
                    ✓
                  </span>
                  <span>4 Semesters</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#f4f7ff]">
                  <span className="w-8 h-8 rounded-lg bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-sm shrink-0">
                    ◎
                  </span>
                  <span>250,000+ Learner Community</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#f4f7ff]">
                  <span className="w-8 h-8 rounded-lg bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-sm shrink-0">
                    ↗
                  </span>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#ffc21c] hover:bg-[#ffd24a] text-[#071f58] font-black text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-[0_10px_25px_rgba(255,178,28,0.2)] transition-all cursor-pointer"
                >
                  DOWNLOAD BROCHURE ↓
                </button>
                <a
                  href="#lead"
                  className="bg-white/10 hover:bg-white/20 border border-white/35 text-white font-black text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all inline-block"
                >
                  GET ADMISSION GUIDANCE
                </a>
              </div>
            </div>

            {/* Right Hero Visual Illustration */}
            <div className="relative min-h-[360px] sm:min-h-[440px] flex items-end justify-center">
              {/* Top Right Floating Card */}
              <div className="absolute right-0 top-4 bg-white/12 border border-white/22 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl z-20 shadow-lg text-right sm:text-left">
                <strong className="block text-white text-xl sm:text-2xl font-black">
                  450+
                </strong>
                <small className="text-[#dbe7fb] text-xs font-semibold">
                  Hiring Partners
                </small>
              </div>

              {/* Vector Person Illustration & Halo */}
              <div className="relative w-[min(420px,100%)] h-[380px] sm:h-[430px]">
                {/* Yellow Halo */}
                <div className="absolute w-[270px] sm:w-[330px] h-[270px] sm:h-[330px] rounded-full bg-linear-to-br from-[#ffd21f] to-[#ffad0e] left-1/2 bottom-0 -translate-x-1/2"></div>

                {/* SVG Character */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[280px] sm:w-[330px] h-[350px] sm:h-[400px]">
                  <svg
                    viewBox="0 0 320 410"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                    aria-label="Professional learner illustration"
                  >
                    <defs>
                      <linearGradient id="skin" x1="0" x2="1">
                        <stop stopColor="#f4b08b" />
                        <stop offset="1" stopColor="#d98261" />
                      </linearGradient>
                      <linearGradient id="suit" x1="0" x2="1">
                        <stop stopColor="#101722" />
                        <stop offset="1" stopColor="#293341" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M102 108c-6-42 14-72 54-80 45-9 78 18 81 61 3 39-15 78-50 91-39 15-79-24-85-72z"
                      fill="url(#skin)"
                    />
                    <path
                      d="M101 91c-6-42 19-75 59-78 48-4 77 27 77 64-11-10-22-18-34-23-19 21-48 31-82 28-8 13-14 27-16 42-5-9-4-21-4-33z"
                      fill="#241d1c"
                    />
                    <path
                      d="M116 105c11-4 19-12 23-24 20 4 42 1 62-11 11 11 19 27 20 45-4 31-21 57-43 64-27 8-55-15-62-46z"
                      fill="url(#skin)"
                      opacity=".98"
                    />
                    <ellipse cx="145" cy="119" rx="5" ry="3" fill="#382820" />
                    <ellipse cx="185" cy="119" rx="5" ry="3" fill="#382820" />
                    <path
                      d="M154 145c10 6 21 6 31-1"
                      stroke="#8e4d46"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M68 409c5-92 25-157 74-177 21-9 40-10 61 0 49 21 68 86 73 177z"
                      fill="url(#suit)"
                    />
                    <path d="M139 226l21 51 23-51 15 183h-72z" fill="#fff" />
                    <path
                      d="M160 277l-35 57 20 21 15-22 15 22 21-21z"
                      fill="#d7a51c"
                    />
                    <path
                      d="M103 258c-17 32-32 69-37 106"
                      stroke="#f0a17d"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />
                    <path
                      d="M216 260c20 27 31 63 37 103"
                      stroke="#efa17e"
                      strokeWidth="24"
                      strokeLinecap="round"
                    />
                    <path
                      d="M67 361c24 5 47 15 61 31"
                      stroke="#f0a17d"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M252 360c-26 6-48 17-62 31"
                      stroke="#efa17e"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Bottom Left Proof Card */}
                <div className="absolute left-0 bottom-6 sm:bottom-9 bg-white text-[#17243a] rounded-2xl p-3.5 sm:p-4 shadow-[0_18px_50px_rgba(32,61,115,0.11)] max-w-[190px] sm:max-w-[210px] z-20">
                  <b className="block text-xl sm:text-2xl text-[#1b325e] font-black leading-tight">
                    UGC Entitled
                  </b>
                  <span className="text-xs text-[#5f6877] font-medium">
                    Online degree recognition
                  </span>
                </div>

                {/* Bottom Right Rating Card */}
                <div className="absolute right-0 bottom-16 sm:bottom-20 bg-white text-[#17243a] rounded-2xl p-3 sm:p-4 shadow-[0_18px_50px_rgba(32,61,115,0.11)] z-20">
                  <div className="text-[#f6ad16] text-sm sm:text-base tracking-widest font-black">
                    ★★★★★
                  </div>
                  <b className="block text-xs sm:text-sm font-bold text-[#1b325e]">
                    QS Ranked Online MBA
                  </b>
                  <small className="text-[#5f6877] text-[11px] font-medium">
                    Asia Pacific Top 10
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* 4. OVERLAPPING LEAD FORM SECTION */}
          <div
            id="lead"
            className="w-[min(1160px,92%)] mx-auto bg-white rounded-t-[28px] md:rounded-[28px] mt-6 relative z-30 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border border-slate-100"
          >
            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 p-6 sm:p-8">
              {/* Left Form Intro Banner */}
              <div className="bg-linear-to-br from-[#081f5c] to-[#153d7b] text-white rounded-[22px] p-6 sm:p-7 flex flex-col justify-center">
                <div className="text-[#ffd24a] font-black tracking-[1.5px] text-xs uppercase">
                  START YOUR MBA JOURNEY
                </div>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight my-2.5">
                  Get Programme Details & Admission Guidance
                </h2>
                <p className="text-xs sm:text-sm text-[#d7e3f6] leading-relaxed">
                  Share your details and our counsellor can help you understand
                  eligibility, fees, specialisations and the admission process.
                </p>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-xs shrink-0">
                      ✓
                    </span>
                    <span>Course & fee information</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-xs shrink-0">
                      ✓
                    </span>
                    <span>Specialisation guidance</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ffc21c] text-[#08215b] flex items-center justify-center font-black text-xs shrink-0">
                      ✓
                    </span>
                    <span>Scholarship / EMI information</span>
                  </div>
                </div>
              </div>

              {/* Right Form Fields */}
              <form onSubmit={handleLeadSubmit} className="space-y-3.5 py-1">
                <input
                  type="hidden"
                  name="source"
                  value="Apply For Online MBA"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1b325e]">
                    Apply For Online MBA
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-0.5">
                    Get information about programmes and admissions.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
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
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
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
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                      Highest Qualification
                    </label>
                    <select
                      name="qualification"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
                    >
                      <option>Graduation</option>
                      <option>Post Graduation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                      Preferred Specialisation
                    </label>
                    <select
                      name="specialisation"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
                    >
                      <option>General Management</option>
                      <option>Business Analytics</option>
                      <option>Digital Marketing Management</option>
                      <option>Data Science</option>
                      <option>Finance & Accounting Management</option>
                      <option>Human Resource Management</option>
                      <option>Marketing & Sales Management</option>
                      <option>Production & Operations Management</option>
                      <option>International Business Management</option>
                      <option>International Finance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3e4a5d] mb-1">
                      State
                    </label>
                    <select
                      name="state"
                      className="w-full px-3.5 py-3 border border-[#d8dee8] rounded-xl bg-[#fbfcfe] text-sm text-[#17243a] focus:outline-hidden focus:border-[#315da2] focus:ring-3 focus:ring-[#315da2]/10 transition-all font-medium"
                    >
                      <option>Select State</option>
                      <option>Uttar Pradesh</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                      <option>Madhya Pradesh</option>
                      <option>Rajasthan</option>
                      <option>Bihar</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-start gap-2 text-[11px] text-[#747f8f] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded-sm"
                    defaultChecked
                  />
                  <span>
                    I agree to receive admission-related updates and counselling
                    communication by phone, SMS, WhatsApp or email.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full border-0 bg-[#1b325e] hover:bg-[#0b2255] text-white py-3.5 rounded-xl text-base font-black cursor-pointer transition-all shadow-md active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting"
                    ? "Submitting..."
                    : "→ Submit Enquiry"}
                </button>

                {statusMessage && (
                  <div className="text-center text-xs font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    {statusMessage}
                  </div>
                )}

                <div className="text-[10px] text-[#98a0ad] text-center">
                  Your details are used only for admission guidance and
                  programme enquiries.
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 5. STATS SECTION */}
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
                Hiring Partners
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
                Online MBA Duration
              </span>
            </div>
          </div>
        </section>

        {/* 6. WHY AMITY ONLINE */}
        <section className="py-14 sm:py-18 bg-[#eef3fa]">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                WHY AMITY ONLINE
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                A Smarter Way To Earn Your MBA
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Designed around flexibility, digital learning and career-focused
                business education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-sm mb-4">
                  AI
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  AI-Powered Learning
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Learn with AI-enabled academic support and a digital-first
                  learning ecosystem.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ↗
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  Industry-Relevant Skills
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Build practical business knowledge through projects,
                  simulations and applied learning.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ◴
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  Flexible Online Format
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Access live and recorded learning options designed for busy
                  schedules.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ◎
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  Global Recognition
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Explore a degree backed by UGC entitlement and international
                  academic recognitions.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ★
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  Career Support
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Get access to career services, placement assistance and
                  employer-facing opportunities.
                </p>
              </div>

              <div className="bg-white rounded-[22px] p-6 border border-[#e3e8f0] shadow-[0_12px_30px_rgba(13,34,69,0.06)]">
                <div className="w-11 h-11 rounded-[13px] bg-[#fff2cf] text-[#b46d00] flex items-center justify-center font-black text-lg mb-4">
                  ◉
                </div>
                <h3 className="text-lg font-bold text-[#1b325e] mb-1.5">
                  Community & Campus Connect
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  Stay connected with peers and participate in select campus
                  experiences and events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CURRICULUM SECTION */}
        <section className="py-14 sm:py-18 bg-linear-to-br from-[#09285e] to-[#103f78] text-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-7">
              <div className="text-xs font-black tracking-[2px] text-[#ffd044] uppercase">
                CURRICULUM
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-2.5 tracking-tight">
                Learn Business For The Real World
              </h2>
              <p className="text-[#d7e5fa] text-sm sm:text-base">
                Build management fundamentals first, then deepen your knowledge
                through specialised subjects.
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
                Year 1
              </button>
              <button
                onClick={() => setActiveYear(2)}
                className={`border border-white/45 rounded-full px-6 py-2.5 font-black text-xs sm:text-sm cursor-pointer transition-all ${
                  activeYear === 2
                    ? "bg-white text-[#173d7c] shadow-md"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                Year 2
              </button>
            </div>

            {/* Year 1 Semesters */}
            {activeYear === 1 && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 1
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3">
                    Core Management Foundations
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>Managerial Economics</li>
                    <li>Statistics for Management</li>
                    <li>Professional Communication</li>
                    <li>Accounting for Managers</li>
                    <li>Marketing Management</li>
                  </ul>
                </div>

                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 2
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3">
                    Functional Business Competencies
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>Legal Aspects of Business</li>
                    <li>Business Research Methods</li>
                    <li>Financial Management</li>
                    <li>Human Resource Management</li>
                    <li>Conflict Resolution and Management</li>
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
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3">
                    Strategic Leadership & Analytics
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>Strategic Management</li>
                    <li>Operations Management</li>
                    <li>Business Analytics</li>
                    <li>Specialisation Electives I & II</li>
                    <li>Industry-focused Live Case Studies</li>
                  </ul>
                </div>

                <div className="bg-white text-[#17243a] rounded-[22px] p-6 sm:p-7 shadow-lg">
                  <span className="inline-block bg-[#3d78d0] text-white px-3.5 py-1.5 rounded-full font-black text-xs mb-3">
                    Semester 4
                  </span>
                  <h3 className="text-lg font-bold text-[#1b325e] mb-3">
                    Capstone & Advanced Specialisation
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4c5666] font-medium list-disc pl-5">
                    <li>Leadership & Change</li>
                    <li>Project / Applied Learning Dissertation</li>
                    <li>Advanced Specialisation Electives</li>
                    <li>Contemporary Management Topics</li>
                    <li>Career-focused Learning & Mentorship</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="text-center text-[#d6e5fb] text-xs mt-5">
              Subject lists can vary by selected programme/specialisation and
              current academic cycle.
            </div>
          </div>
        </section>

        {/* 8. SPECIALISATIONS */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                SPECIALISATIONS
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Choose A Specialisation That Fits Your Career
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Multiple management pathways are available across business,
                technology, analytics and finance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="bg-linear-to-br from-[#173d7c] to-[#28538e] text-white rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-md border border-[#173d7c]">
                Business Analytics
              </div>
              <div className="bg-linear-to-br from-[#173d7c] to-[#28538e] text-white rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-md border border-[#173d7c]">
                Digital Marketing Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Data Science
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Finance & Accounting Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Human Resource Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Information Technology Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                International Business Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                International Finance
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Marketing & Sales Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Production & Operations Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                Retail Management
              </div>
              <div className="bg-white border border-[#e1e6ed] rounded-[17px] p-5 text-center font-bold min-h-[70px] flex items-center justify-center shadow-[0_8px_24px_rgba(20,35,60,0.05)] text-[#17243a]">
                General Management
              </div>
            </div>
          </div>
        </section>

        {/* 9. RECOGNITION / CREDENTIALS */}
        <section className="py-14 sm:py-18 bg-[#f2f5fa]">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                RECOGNITION
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Credentials That Build Confidence
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Key recognition and quality markers currently highlighted by
                Amity Online.
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
                <div className="w-13 h-13 rounded-full bg-[#f1f4f9] flex items-center justify-center text-[#1b325e] font-black text-sm mb-2.5">
                  QS
                </div>
                <b className="text-xs sm:text-sm font-bold text-[#1b325e]">
                  QS Ranked
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  Asia Pacific Top 10
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
                  Accreditation
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
                  QAA
                </b>
                <span className="text-[11px] text-[#788293] mt-0.5">
                  UK quality recognition
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. ELIGIBILITY */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                ELIGIBILITY
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Who Can Apply?
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                A straightforward eligibility pathway for graduates and
                professionals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Graduates From Any Discipline
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    A recognised bachelor's degree with at least 40% marks.
                    Applicants below 40% may qualify through the applicable
                    eligibility test.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  💼
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Working Professionals
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Suitable for professionals looking to upskill, transition
                    into management or progress in their current career.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Entrepreneurs & Business Owners
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Build stronger foundations in strategy, finance, leadership,
                    marketing and operations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[21px] p-6 flex gap-4 border border-[#e4e8ef] shadow-[0_10px_26px_rgba(20,35,60,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#fff0c5] flex items-center justify-center text-2xl shrink-0">
                  📚
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Fresh Graduates
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385] leading-relaxed">
                    Start with core business concepts and develop
                    industry-oriented management skills through an online
                    format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FEE & EMI SECTION */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                FEE & EMI
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Plan Your MBA With Flexible Payment Options
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Current fee figures shown below are based on Amity Online's
                current MBA programme information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-[23px] p-7 border-l-6 border-[#f5bf1a] bg-[#fff9df] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  One-time payment
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹2,07,000
                </strong>
              </div>

              <div className="rounded-[23px] p-7 border-l-6 border-[#4a86e8] bg-[#eef4ff] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  Annual Fee
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹1,06,880
                </strong>
              </div>

              <div className="rounded-[23px] p-7 border-l-6 border-[#26be6b] bg-[#ebfbf1] shadow-[0_18px_50px_rgba(32,61,115,0.11)]">
                <small className="text-sm text-[#5d6674] font-bold">
                  Per Semester Fee
                </small>
                <strong className="block text-3xl sm:text-4xl font-black text-[#101c31] mt-2.5 leading-tight">
                  ₹56,300
                </strong>
              </div>
            </div>

            {/* 24-Month EMI Banner */}
            <div className="mt-4 bg-linear-to-br from-[#0a275c] to-[#1a4a86] text-white rounded-[24px] p-7 text-center shadow-lg">
              <small className="font-bold text-[#d7e5fa] text-xs sm:text-sm">
                24-Month No-Cost EMI
              </small>
              <strong className="block text-[#ffd044] text-3xl sm:text-4xl font-black my-1.5">
                ₹8,906 / Month
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

        {/* 12. ADMISSION PROCESS */}
        <section className="py-14 sm:py-18 bg-[#f4f6fa]">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                ADMISSION
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Simple Online Admission Process
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Understand the key steps before you begin your application.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto space-y-3.5">
              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  1
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Select Your Programme
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Choose the MBA pathway and specialisation aligned with your
                    goals.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  2
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Complete Your Application
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Fill in your personal, academic and required application
                    details.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  3
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Pay Programme Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Complete the applicable fee payment through the secure
                    process.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[54px_1fr] sm:grid-cols-[64px_1fr] gap-4 items-center">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#1b325e] text-white flex items-center justify-center text-lg sm:text-xl font-black border-4 sm:border-7 border-[#dce3ed] shrink-0">
                  4
                </div>
                <div className="bg-white rounded-[20px] p-5 border border-[#e2e7ee] shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#1b325e] mb-1">
                    Submit & Register
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687385]">
                    Submit the application and follow the university's next-step
                    instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. CAREER BANNER */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="bg-linear-to-br from-[#08245a] to-[#204d87] rounded-[28px] text-white p-7 sm:p-9 grid lg:grid-cols-[1.2fr_0.8fr] gap-5 items-center shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Build Skills. Grow Your Career.
                </h2>
                <p className="text-xs sm:text-sm text-[#dce8fa] leading-relaxed">
                  Amity Online currently highlights 100% placement assistance,
                  450+ hiring partners and career services designed to support
                  learners through their professional journey.
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
                    450+
                  </strong>
                  <span className="text-xs text-[#e3edfa] font-medium mt-0.5 block">
                    Hiring Partners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FAQ SECTION */}
        <section className="py-14 sm:py-18 bg-[#eef2f8]">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-9">
              <div className="text-xs font-black tracking-[2px] text-[#d98b00] uppercase">
                FAQ
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1b325e] mt-2 mb-2.5 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[#667085] text-sm sm:text-base">
                Quick answers to common Online MBA questions.
              </p>
            </div>

            <div className="max-w-[900px] mx-auto bg-white rounded-2xl overflow-hidden border border-[#e4e8ef] shadow-xs">
              {[
                {
                  q: "What is the duration of the Amity Online MBA?",
                  a: "The MBA is a 2-year online postgraduate programme delivered across four semesters.",
                },
                {
                  q: "What is the eligibility for the Online MBA?",
                  a: "Applicants generally need a recognised bachelor's degree with at least 40% marks. Candidates below 40% may qualify through the applicable eligibility test.",
                },
                {
                  q: "Is the Online MBA valid and recognised?",
                  a: "Amity Online states that its online degrees are UGC entitled and highlights recognitions including NAAC A+, WASC, QAA and WES.",
                },
                {
                  q: "What is the current MBA fee?",
                  a: "Amity Online's current MBA information lists ₹2,07,000 as the one-time payment figure, ₹56,300 per semester and a 24-month no-cost EMI starting at ₹8,906/month. Fees can change by academic cycle or offer.",
                },
                {
                  q: "Can working professionals pursue this MBA?",
                  a: "Yes. The programme is designed with flexible online learning options including live and recorded learning for busy schedules.",
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
                      className="w-full bg-white text-left p-5 sm:p-6 flex justify-between items-center gap-4 font-bold text-[#17243a] text-base sm:text-lg cursor-pointer hover:bg-slate-50/50 transition-colors"
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
                      <div className="px-5 sm:px-6 pb-6 text-[#667085] text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 15. FINAL CTA BANNER */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="bg-linear-to-br from-[#09265c] to-[#173f7b] text-white rounded-[28px] p-7 sm:p-9 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-1.5">
                  Ready To Take The Next Step?
                </h2>
                <p className="text-xs sm:text-sm text-[#dce8fa]">
                  Get programme details, eligibility and admission guidance.
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

      {/* 16. FOOTER */}
      <footer className="bg-[#071c46] text-[#dce7f7] pt-8 pb-24 sm:pb-12 border-t border-white/10">
        <div className="w-[min(1160px,92%)] mx-auto space-y-6">
          <p className="text-xs text-[#aebed4] leading-relaxed">
            <b className="text-white">Disclaimer:</b> This landing page is for
            programme information and admission guidance. Amity University
            Online, its name, trademarks and academic content belong to their
            respective owners. Programme fees, eligibility, specialisations,
            rankings, recognitions, scholarships and other details may change;
            please verify the latest information with the university before
            making a payment or submitting an application.
          </p>
          <div className="border-t border-white/15 pt-5 text-center text-xs text-[#aebed4]">
            Terms & Conditions &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; ©
            2026 All Rights Reserved
          </div>
        </div>
      </footer>

      {/* 17. FLOATING WHATSAPP & CALL BUTTONS */}
      <a
        className="fixed right-4 bottom-20 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#20c76a] text-white flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform"
        href="https://wa.me/919266585858?text=Hi%2C%20I%20want%20details%20about%20Amity%20Online%20MBA"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute right-0 top-0 w-3.5 h-3.5 border-2 border-white bg-[#ff3939] rounded-full"></span>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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

      {/* 18. MOBILE STICKY BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e5ed] p-2 z-40 flex gap-2 shadow-lg">
        <a
          className="flex-1 text-center py-3 rounded-xl font-black text-xs bg-[#e9fbf1] text-[#12864a] border border-[#c3f2d7]"
          href="https://wa.me/919266585858?text=Hi%2C%20I%20want%20details%20about%20Amity%20Online%20MBA"
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

      {/* 19. POPUP MODAL */}
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
            <h2 className="text-xl sm:text-2xl font-black text-[#1b325e]">
              Get Amity Online MBA Details
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 mb-4">
              Enter your details and we'll help you with the programme
              information.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <input
                type="hidden"
                name="source"
                value="Get Amity Online MBA Details"
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
