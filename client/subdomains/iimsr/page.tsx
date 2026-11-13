"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WA_NUMBER = "919027239150";
const DISPLAY_PHONE = "90272 39150";

interface IimsrPageProps {
  subdomain?: string;
}

export default function IimsrLandingPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "iimsr",
}: IimsrPageProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  const goToThankYou = () => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname.startsWith(`/${subdomain}`)) {
        router.push(`/${subdomain}/thank-you`);
      } else {
        router.push("/thank-you");
      }
    } else {
      router.push("/thank-you");
    }
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Close modal on ESC key
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

  const sendWhatsApp = (data: {
    name: string;
    email?: string;
    phone: string;
    qualification?: string;
    course?: string;
  }) => {
    const msg = `I would like admission counselling.%0AName: ${encodeURIComponent(
      data.name
    )}%0AEmail: ${encodeURIComponent(
      data.email || "Not provided"
    )}%0AMobile: ${encodeURIComponent(
      data.phone
    )}%0AQualification: ${encodeURIComponent(
      data.qualification || "Not specified"
    )}%0AProgramme: ${encodeURIComponent(data.course || "Not specified")}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener");

    // Forward lead to backend so email is dispatched to anand24h@gmail.com and stored
    try {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          qualification: data.qualification,
          program: data.course,
          specialisation: data.course,
          university:
            "IIMSR - Imperial Institute of Management Science & Research",
          subdomain: "iimsr",
          source: "IIMSR Admissions Landing Page",
          adminEmail: "anand24h@gmail.com",
        }),
      }).catch((err) => {
        console.warn("[LEAD SUBMIT NOTICE]:", err.message);
      });
    } catch {
      // Ignore
    }
  };

  const handleHeroSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      qualification: String(formData.get("qualification") || "").trim(),
      course: String(formData.get("course") || "").trim(),
    };

    sendWhatsApp(data);
    setHeroSubmitted(true);
    goToThankYou();
  };

  const handleModalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const data = {
      name: String(formData.get("pname") || "").trim(),
      email: String(formData.get("pemail") || "").trim(),
      phone: String(formData.get("pphone") || "").trim(),
      qualification: String(formData.get("pqualification") || "").trim(),
      course: String(formData.get("pcourse") || "").trim(),
    };

    sendWhatsApp(data);
    setModalSubmitted(true);
    setIsModalOpen(false);
    goToThankYou();
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#17233d] font-sans antialiased selection:bg-[#ffbd25] selection:text-[#071b4b]">
      {/* Topbar */}
      <div className="bg-[#071b4b] text-white text-[13px] py-2.5">
        <div className="w-[min(1160px,92%)] mx-auto flex justify-between items-center gap-3 flex-wrap">
          <span>Admissions Enquiry • Free Counselling</span>
          <span>
            Call us:{" "}
            <a
              href={`tel:+91${WA_NUMBER}`}
              className="font-bold hover:underline"
            >
              <strong>{DISPLAY_PHONE}</strong>
            </a>
          </span>
        </div>
      </div>

      {/* Sticky Header / Navbar */}
      <header className="bg-white sticky top-0 z-20 shadow-[0_4px_18px_rgba(7,27,75,0.07)]">
        <div className="w-[min(1160px,92%)] mx-auto h-[66px] sm:h-[76px] flex items-center justify-between gap-5">
          <a
            className="flex items-center gap-3 group"
            href="#home"
            aria-label="IIMSR home"
          >
            <div className="w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] relative flex-shrink-0">
              <Image
                src="/images/iimsr-logo.png"
                alt="IIMSR official emblem"
                width={62}
                height={62}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span>
              <strong className="block font-serif text-[23px] sm:text-[27px] text-[#071b4b] leading-none tracking-tight">
                IIMSR
              </strong>
              <small className="text-[9px] sm:text-[11px] font-bold text-[#222] block mt-1 leading-tight">
                Imperial Institute of Management
                <br />
                Science & Research
              </small>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-[25px] text-[14px] font-bold text-[#17233d]">
            <a
              href="#programmes"
              className="hover:text-[#f07822] transition-colors"
            >
              Programmes
            </a>
            <a
              href="#benefits"
              className="hover:text-[#f07822] transition-colors"
            >
              Why enquire
            </a>
            <a href="#faq" className="hover:text-[#f07822] transition-colors">
              FAQs
            </a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-[#151515] bg-gradient-to-br from-[#ffc52c] to-[#f28a00] shadow-[0_8px_20px_rgba(244,165,30,0.27)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all cursor-pointer"
            type="button"
          >
            Get Free Counselling
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="bg-[radial-gradient(circle_at_80%_20%,#fff0cf_0,transparent_35%),linear-gradient(120deg,#fffdf8,#f5f8ff)] py-8 sm:py-12 md:py-[55px] overflow-hidden"
          id="home"
        >
          <div className="w-[min(1160px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.86fr] items-center gap-9">
            <div>
              <span className="inline-block bg-[#fff1d7] text-[#8b4a00] border border-[#ffd78c] px-3.5 py-1.5 rounded-full font-extrabold text-xs tracking-[0.4px]">
                ADMISSIONS ENQUIRY OPEN
              </span>
              <h1 className="font-serif text-[38px] sm:text-[50px] lg:text-[66px] leading-[1.02] tracking-[-1.3px] sm:tracking-[-2px] my-4.5 font-bold text-[#071b4b]">
                ONE EXAM.
                <br />
                <span className="text-[#f07822]">ONE DEGREE.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#536078] max-w-[600px] mb-6 leading-relaxed">
                <strong className="text-[#102d70] font-bold block mb-1">
                  One Exam Changes Everything.
                </strong>
                Explore B.Tech, MBA, BBA, M.Tech and BCA programmes. Get guidance
                on eligibility, fees and the admission process.
              </p>

              <div className="flex gap-2.5 flex-wrap my-5">
                <span className="bg-white border border-[#e9dfca] px-3 py-2 rounded-[10px] text-[13px] font-bold shadow-[0_4px_12px_rgba(23,35,61,0.03)] text-[#17233d]">
                  🎓 Programme Guidance
                </span>
                <span className="bg-white border border-[#e9dfca] px-3 py-2 rounded-[10px] text-[13px] font-bold shadow-[0_4px_12px_rgba(23,35,61,0.03)] text-[#17233d]">
                  🧭 Eligibility Support
                </span>
                <span className="bg-white border border-[#e9dfca] px-3 py-2 rounded-[10px] text-[13px] font-bold shadow-[0_4px_12px_rgba(23,35,61,0.03)] text-[#17233d]">
                  ☎ Free Counselling
                </span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-sm text-[#151515] bg-gradient-to-br from-[#ffc52c] to-[#f28a00] shadow-[0_8px_20px_rgba(244,165,30,0.27)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all cursor-pointer"
                  type="button"
                >
                  Get Free Counselling →
                </button>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-sm text-white bg-[#071b4b] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all"
                  href={`tel:+91${WA_NUMBER}`}
                >
                  ☎ Call {DISPLAY_PHONE}
                </a>
              </div>

              <div className="text-xs text-[#68748a] mt-4">
                Speak with an admission counsellor and get programme information.
              </div>
            </div>

            {/* Hero Form Box */}
            <div className="bg-white text-[#17233d] rounded-[20px] p-5 sm:p-7 shadow-[0_18px_55px_rgba(0,0,0,0.18)] max-w-[500px] w-full lg:justify-self-end border border-[#e8eaf0]/80">
              <h3 className="font-serif text-2xl font-bold text-[#071b4b] mb-1">
                Get Free Counselling
              </h3>
              <p className="text-[#647087] text-[13px] mb-4.5">
                Share your details and our team can guide you.
              </p>

              <form id="leadForm" onSubmit={handleHeroSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-extrabold text-[#38445b]"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      maxLength={70}
                      className="w-full px-3 py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-extrabold text-[#38445b]"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      maxLength={120}
                      className="w-full px-3 py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-extrabold text-[#38445b]"
                    >
                      Mobile number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="10-digit mobile number"
                      pattern="[6-9][0-9]{9}"
                      required
                      maxLength={10}
                      className="w-full px-3 py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="qualification"
                      className="text-xs font-extrabold text-[#38445b]"
                    >
                      Highest qualification *
                    </label>
                    <select
                      id="qualification"
                      name="qualification"
                      required
                      defaultValue=""
                      className="w-full px-3 py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                    >
                      <option value="" disabled>
                        Select qualification
                      </option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 12">Class 12</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="course"
                      className="text-xs font-extrabold text-[#38445b]"
                    >
                      Interested programme *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      defaultValue=""
                      className="w-full px-3 py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                    >
                      <option value="" disabled>
                        Choose programme
                      </option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="BBA">BBA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="BCA">BCA</option>
                      <option value="Need guidance">Need guidance</option>
                    </select>
                  </div>
                </div>

                <button
                  className="w-full mt-3.5 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-sm text-[#151515] bg-gradient-to-br from-[#ffc52c] to-[#f28a00] shadow-[0_8px_20px_rgba(244,165,30,0.27)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all cursor-pointer"
                  type="submit"
                >
                  Get Free Counselling →
                </button>

                {heroSubmitted && (
                  <div className="bg-[#eaf8ef] text-[#176b35] rounded-[10px] p-3 text-[13px] mt-2.5 font-medium border border-[#bbf7d0]">
                    Your WhatsApp enquiry is ready. Please press Send in
                    WhatsApp to complete submission.
                  </div>
                )}

                <p className="text-[11px] text-[#7b8496] mt-2.5 leading-normal">
                  Your details will be used to respond to this admission
                  enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section ("Why enquire") */}
        <section className="py-14 sm:py-[70px]" id="benefits">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[720px] mx-auto mb-8.5">
              <div className="text-[#f07822] text-xs font-black tracking-[1.5px] uppercase">
                PERSONALIZED GUIDANCE
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.12] text-[#071b4b] font-bold mt-2.5 mb-3 tracking-[-0.8px]">
                Make an informed admission decision
              </h2>
              <p className="text-[#647087] text-sm sm:text-base m-0 leading-relaxed">
                Get clear information before you proceed. Our counselling team
                can help you understand the options relevant to your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  🎓
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  Programme Details
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Understand available programmes, curriculum and
                  specialisations.
                </p>
              </article>

              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  🧭
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  Eligibility Guidance
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Discuss your previous qualification and the eligibility
                  criteria.
                </p>
              </article>

              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  📝
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  Admission Process
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Get a step-by-step explanation of application and
                  documentation.
                </p>
              </article>

              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  🏡
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  Study Mode
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Confirm the approved mode of learning and examination for your
                  course.
                </p>
              </article>

              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  💬
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  One-to-One Counselling
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Ask questions and get guidance based on your education and
                  plans.
                </p>
              </article>

              <article className="border border-[#e8eaf0] rounded-[17px] p-5.5 bg-white shadow-[0_8px_25px_rgba(7,27,75,0.03)] hover:shadow-md transition-shadow">
                <div className="w-[45px] h-[45px] rounded-[13px] bg-[#fff0d9] grid place-items-center text-[22px] mb-3.5">
                  💳
                </div>
                <h3 className="font-serif font-bold text-lg text-[#071b4b] mb-1.5">
                  Fee Information
                </h3>
                <p className="text-[#647087] text-sm m-0 leading-relaxed">
                  Request the current fee structure and available payment
                  options.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Programmes Section */}
        <section className="bg-[#f6f8fc] py-14 sm:py-[70px]" id="programmes">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[720px] mx-auto mb-8.5">
              <div className="text-[#f07822] text-xs font-black tracking-[1.5px] uppercase">
                EXPLORE YOUR OPTIONS
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.12] text-[#071b4b] font-bold mt-2.5 mb-3 tracking-[-0.8px]">
                Programmes to enquire about
              </h2>
              <p className="text-[#647087] text-sm sm:text-base m-0">
                Select a programme in the form and request the latest details.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="bg-white border border-[#e4e8f0] rounded-[15px] py-5.5 px-3 text-center font-black text-[#071b4b] text-[18px] sm:text-[19px] shadow-[0_6px_18px_rgba(7,27,75,0.03)] hover:border-[#f07822]/40 transition-colors">
                B.Tech
                <span className="block text-xs text-[#778196] font-semibold mt-1">
                  Engineering
                </span>
              </div>
              <div className="bg-white border border-[#e4e8f0] rounded-[15px] py-5.5 px-3 text-center font-black text-[#071b4b] text-[18px] sm:text-[19px] shadow-[0_6px_18px_rgba(7,27,75,0.03)] hover:border-[#f07822]/40 transition-colors">
                MBA
                <span className="block text-xs text-[#778196] font-semibold mt-1">
                  Management
                </span>
              </div>
              <div className="bg-white border border-[#e4e8f0] rounded-[15px] py-5.5 px-3 text-center font-black text-[#071b4b] text-[18px] sm:text-[19px] shadow-[0_6px_18px_rgba(7,27,75,0.03)] hover:border-[#f07822]/40 transition-colors">
                BBA
                <span className="block text-xs text-[#778196] font-semibold mt-1">
                  Business
                </span>
              </div>
              <div className="bg-white border border-[#e4e8f0] rounded-[15px] py-5.5 px-3 text-center font-black text-[#071b4b] text-[18px] sm:text-[19px] shadow-[0_6px_18px_rgba(7,27,75,0.03)] hover:border-[#f07822]/40 transition-colors">
                M.Tech
                <span className="block text-xs text-[#778196] font-semibold mt-1">
                  Technology
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white border border-[#e4e8f0] rounded-[15px] py-5.5 px-3 text-center font-black text-[#071b4b] text-[18px] sm:text-[19px] shadow-[0_6px_18px_rgba(7,27,75,0.03)] hover:border-[#f07822]/40 transition-colors">
                BCA
                <span className="block text-xs text-[#778196] font-semibold mt-1">
                  Computer Applications
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-14 sm:py-[70px]" id="faq">
          <div className="w-[min(1160px,92%)] mx-auto">
            <div className="text-center max-w-[720px] mx-auto mb-8.5">
              <div className="text-[#f07822] text-xs font-black tracking-[1.5px] uppercase">
                NEED TO KNOW
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.12] text-[#071b4b] font-bold mt-2.5 mb-3 tracking-[-0.8px]">
                Frequently asked questions
              </h2>
            </div>

            <div className="max-w-[850px] mx-auto">
              <details
                className="border-b border-[#e8eaf0] py-4.5 group"
                open={openFaqIndex === 0}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(0);
                }}
              >
                <summary className="cursor-pointer font-extrabold text-[#071b4b] flex justify-between items-center list-none select-none">
                  <span>
                    Are these programmes available in distance or online mode?
                  </span>
                  <span className="text-xl text-[#647087] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[#647087] text-sm mt-2.5 mb-0 leading-relaxed">
                  Study mode can vary by programme and approval. Please confirm
                  the current approved mode for your chosen course with the
                  institution before applying.
                </p>
              </details>

              <details
                className="border-b border-[#e8eaf0] py-4.5 group"
                open={openFaqIndex === 1}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(1);
                }}
              >
                <summary className="cursor-pointer font-extrabold text-[#071b4b] flex justify-between items-center list-none select-none">
                  <span>Is the degree recognised?</span>
                  <span className="text-xl text-[#647087] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[#647087] text-sm mt-2.5 mb-0 leading-relaxed">
                  Recognition and approval must be verified for the specific
                  institution, programme, academic session and mode. Ask the
                  counsellor for the relevant official approval documents and
                  verify them independently before making a payment.
                </p>
              </details>

              <details
                className="border-b border-[#e8eaf0] py-4.5 group"
                open={openFaqIndex === 2}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(2);
                }}
              >
                <summary className="cursor-pointer font-extrabold text-[#071b4b] flex justify-between items-center list-none select-none">
                  <span>How can I check eligibility and fees?</span>
                  <span className="text-xl text-[#647087] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[#647087] text-sm mt-2.5 mb-0 leading-relaxed">
                  Submit the enquiry form or call the number shown on this page
                  to request the latest programme-specific eligibility and fee
                  details.
                </p>
              </details>

              <details
                className="border-b border-[#e8eaf0] py-4.5 group"
                open={openFaqIndex === 3}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(3);
                }}
              >
                <summary className="cursor-pointer font-extrabold text-[#071b4b] flex justify-between items-center list-none select-none">
                  <span>Do I need to pay to get counselling?</span>
                  <span className="text-xl text-[#647087] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[#647087] text-sm mt-2.5 mb-0 leading-relaxed">
                  This page is for a free initial counselling enquiry. Confirm
                  any application, registration or course fees directly through
                  the institution&apos;s official channels.
                </p>
              </details>
            </div>

            {/* Statutory Disclaimer */}
            <div className="max-w-[850px] mx-auto bg-[#fff8e9] border border-[#f4dfb6] p-4 rounded-xl text-[#70552b] text-xs mt-6 leading-relaxed">
              <strong>Important:</strong> This is an admission enquiry page, not
              an official confirmation of admission, degree validity,
              recognition, placement, loan eligibility or course delivery mode.
              Before enrolling or paying fees, independently verify the
              institution&apos;s current legal status and the specific
              programme&apos;s approvals/recognition with the relevant statutory
              regulator and official institution sources. Do not rely only on
              promotional claims.
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#061638] text-[#dce4f4] pt-8 pb-24 md:pb-8 text-[13px]">
        <div className="w-[min(1160px,92%)] mx-auto flex flex-col md:flex-row justify-between gap-5 leading-normal">
          <div>
            <strong className="text-white font-bold block mb-1">
              IIMSR – Imperial Institute of Management Science & Research
            </strong>
            Admission information and counselling enquiry
          </div>
          <div>
            Call:{" "}
            <a href={`tel:+91${WA_NUMBER}`} className="text-white font-bold">
              {DISPLAY_PHONE}
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dce4f4] hover:text-white underline decoration-dotted"
            >
              WhatsApp us
            </a>
          </div>
          <div>© {currentYear} • All rights reserved.</div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA */}
      <div className="md:hidden flex fixed bottom-0 left-0 right-0 bg-white p-2.5 px-3 shadow-[0_-5px_20px_rgba(7,27,75,0.12)] z-30 gap-2.5">
        <a
          className="flex-1 py-3 px-2 rounded-xl text-[13px] font-extrabold bg-[#16a34a] text-white text-center flex items-center justify-center gap-1.5 shadow-sm active:brightness-95 transition-all"
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20admission%20counselling.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="flex-1 py-3 px-2 rounded-xl text-[13px] font-extrabold bg-gradient-to-br from-[#ffc52c] to-[#f28a00] text-[#151515] text-center flex items-center justify-center gap-1.5 shadow-sm active:brightness-95 transition-all"
          href={`tel:+91${WA_NUMBER}`}
        >
          Call Now
        </a>
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20admission%20counselling.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp admission counselling"
        className="fixed right-4.5 bottom-20 md:bottom-5.5 w-14 h-14 rounded-full flex items-center justify-center bg-[#16a34a] text-white text-3xl shadow-[0_8px_25px_rgba(0,0,0,0.2)] z-25 hover:scale-105 active:scale-95 transition-transform"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#061638]/70 z-50 flex items-center justify-center p-4 backdrop-blur-[2px] animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popTitle"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="w-[min(480px,100%)] bg-white rounded-[20px] p-6 sm:p-7 relative shadow-[0_25px_80px_rgba(0,0,0,0.3)] border border-[#e8eaf0]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3.5 top-3 border-0 bg-[#eef1f6] rounded-full w-[34px] h-[34px] text-xl font-bold text-[#17233d] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <h3
              id="popTitle"
              className="font-bold text-[20px] sm:text-[20px] font-bold text-[#071b4b] mt-1 mb-1.5 pr-8 leading-tight"
            >
              Need help choosing a programme?
            </h3>

            <form id="popupForm" onSubmit={handleModalSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pname"
                    className="text-xs font-extrabold text-[#38445b]"
                  >
                    Full name *
                  </label>
                  <input
                    id="pname"
                    name="pname"
                    required
                    placeholder="Enter your full name"
                    maxLength={70}
                    className="w-full px-3 py-2.5 sm:py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pemail"
                    className="text-xs font-extrabold text-[#38445b]"
                  >
                    Email address *
                  </label>
                  <input
                    id="pemail"
                    name="pemail"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    maxLength={120}
                    className="w-full px-3 py-2.5 sm:py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pphone"
                    className="text-xs font-extrabold text-[#38445b]"
                  >
                    Mobile number *
                  </label>
                  <input
                    id="pphone"
                    name="pphone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    required
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2.5 sm:py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pqualification"
                    className="text-xs font-extrabold text-[#38445b]"
                  >
                    Highest qualification *
                  </label>
                  <select
                    id="pqualification"
                    name="pqualification"
                    required
                    defaultValue=""
                    className="w-full px-3 py-2.5 sm:py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                  >
                    <option value="" disabled>
                      Select qualification
                    </option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pcourse"
                    className="text-xs font-extrabold text-[#38445b]"
                  >
                    Interested programme *
                  </label>
                  <select
                    id="pcourse"
                    name="pcourse"
                    required
                    defaultValue="MBA"
                    className="w-full px-3 py-2.5 sm:py-3 border border-[#d9deea] rounded-[10px] text-sm outline-none bg-white focus:border-[#3158a5] focus:ring-4 focus:ring-[#3158a5]/10 transition-all"
                  >
                    <option value="MBA">MBA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BBA">BBA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="Need guidance">Need guidance</option>
                  </select>
                </div>
              </div>

              <button
                className="w-full mt-4 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-sm text-[#151515] bg-gradient-to-br from-[#ffc52c] to-[#f28a00] shadow-[0_8px_20px_rgba(244,165,30,0.27)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all cursor-pointer"
                type="submit"
              >
                Get Free Counselling →
              </button>

              {modalSubmitted && (
                <div className="bg-[#eaf8ef] text-[#176b35] rounded-[10px] p-3 text-[13px] mt-2.5 font-medium border border-[#bbf7d0]">
                  Your WhatsApp enquiry is ready! Opening WhatsApp...
                </div>
              )}

              <p className="text-[11px] text-[#7b8496] mt-2.5 text-center leading-normal">
                WhatsApp opens so you can review and send your enquiry.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

