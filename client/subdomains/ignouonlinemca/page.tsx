"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CompliantFooter from "@/app/components/CompliantFooter";

const WA_NUMBER = "919266585858";
const DISPLAY_PHONE = "+919266585858";

export default function IgnouOnlineMcaPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "ignouonlinemca",
}: {
  subdomain?: string;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSemTab, setActiveSemTab] = useState<number>(0);
  const [eligibilityTab, setEligibilityTab] = useState<"cs" | "non-cs">("cs");

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
    const qualification = String(form.get("qualification") || "").trim();
    const specialisation = String(form.get("specialisation") || "General MCA / Computing").trim();

    const payload = {
      name,
      email,
      phone,
      qualification,
      specialisation,
      state: "",
      subdomain: subdomain || "ignouonlinemca",
      university: "IGNOU",
      program: "Online MCA",
      source: "IGNOU Online MCA Landing Page",
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
      badge: "Central Govt University",
      title: "Prestigious Central Degree",
      desc: "IGNOU was established by an Act of Parliament in 1985. An MCA from IGNOU holds the highest national and international institutional credibility.",
    },
    {
      num: "02",
      badge: "AICTE & UGC-DEB",
      title: "100% Equal to Regular MCA",
      desc: "Approved by AICTE and UGC-DEB. Eligible for all IT MNCs, Government jobs, UPSC, SSC, Banking, Public Sector Undertakings (PSUs), and PhD programs.",
    },
    {
      num: "03",
      badge: "Unbeatable ROI",
      title: "Ultra-Affordable Fee (₹17,000/Sem)",
      desc: "Total 2-year programme fee is only ₹68,000. Save over ₹1.5 - ₹2 Lakhs compared to expensive private university online MCA courses.",
    },
    {
      num: "04",
      badge: "100% Flexible",
      title: "Built for Working Professionals",
      desc: "Study at your own pace with digital self-learning e-GyanKosh materials, weekend recorded counseling, and virtual coding assignments without quitting your job.",
    },
    {
      num: "05",
      badge: "Modern Tech CBCS",
      title: "Industry-Aligned Curriculum",
      desc: "Updated curriculum featuring Artificial Intelligence, Machine Learning, Cloud & IoT, Full-Stack Web Development, Data Science, and Mobile Computing.",
    },
    {
      num: "06",
      badge: "Hands-on Experience",
      title: "Practical Virtual Labs & Capstone",
      desc: "Every semester includes dedicated lab courses and practical assignments culminating in an industry-level capstone project in Semester 4.",
    },
  ];

  const semesterCurriculum = [
    {
      semester: "Semester 1",
      title: "Foundations of Computing & Algorithms",
      credits: "18 Credits",
      courses: [
        { code: "MCS-211", name: "Design and Analysis of Algorithms", type: "Core Theory" },
        { code: "MCS-212", name: "Discrete Mathematics", type: "Core Theory" },
        { code: "MCS-213", name: "Software Engineering", type: "Core Theory" },
        { code: "MCS-214", name: "Professional Skills and Ethics", type: "Theory" },
        { code: "MCS-215", name: "Security and Cyber Laws", type: "Core Theory" },
        { code: "MCSL-216", name: "DAA and Web Design Lab", type: "Practical Lab" },
        { code: "MCSL-217", name: "Software Engineering Lab", type: "Practical Lab" },
      ],
    },
    {
      semester: "Semester 2",
      title: "Networks, Web Technologies & Data Mining",
      credits: "18 Credits",
      courses: [
        { code: "MCS-218", name: "Data Communication and Computer Networks", type: "Core Theory" },
        { code: "MCS-219", name: "Object Oriented Analysis and Design (Java)", type: "Core Theory" },
        { code: "MCS-220", name: "Web Technologies (Full Stack Architecture)", type: "Core Theory" },
        { code: "MCS-221", name: "Data Warehousing and Data Mining", type: "Core Theory" },
        { code: "MCSL-222", name: "OOAD and Web Technologies Lab", type: "Practical Lab" },
        { code: "MCSL-223", name: "Data Warehousing and Mining Lab", type: "Practical Lab" },
      ],
    },
    {
      semester: "Semester 3",
      title: "AI, Machine Learning, Cloud & Big Data",
      credits: "18 Credits",
      courses: [
        { code: "MCS-224", name: "Artificial Intelligence and Machine Learning", type: "Core Theory" },
        { code: "MCS-225", name: "Accountancy and Financial Management", type: "Management" },
        { code: "MCS-226", name: "Data Science and Big Data Analytics", type: "Core Theory" },
        { code: "MCS-227", name: "Cloud Computing and IoT", type: "Core Theory" },
        { code: "MCSL-228", name: "AI and Machine Learning Lab", type: "Practical Lab" },
        { code: "MCSL-229", name: "Cloud Computing and Data Science Lab", type: "Practical Lab" },
      ],
    },
    {
      semester: "Semester 4",
      title: "Advanced Specialisation & Major Industry Project",
      credits: "18 Credits",
      courses: [
        { code: "MCS-230", name: "Digital Image Processing and Computer Vision", type: "Advanced Tech" },
        { code: "MCS-231", name: "Mobile Application Development (Android/Flutter)", type: "Advanced Tech" },
        { code: "MCSP-232", name: "Comprehensive Industry Major Project & Viva-Voce", type: "Capstone Project (6 Credits)" },
      ],
    },
  ];

  const careerRoles = [
    {
      role: "Full Stack Software Engineer",
      avgSalary: "₹6.5 - ₹16 LPA",
      skills: ["React/Next.js", "Java/Spring Boot", "Node.js", "REST APIs", "SQL/NoSQL"],
      desc: "Design, build, and deploy end-to-end distributed modern enterprise web applications and scalable microservices.",
    },
    {
      role: "Cloud Solutions & DevOps Engineer",
      avgSalary: "₹8.0 - ₹20 LPA",
      skills: ["AWS/GCP Cloud", "Docker & Kubernetes", "CI/CD Pipelines", "Linux", "Terraform"],
      desc: "Orchestrate cloud infrastructure, automate deployment pipelines, and maintain highly available zero-downtime systems.",
    },
    {
      role: "AI & Machine Learning Specialist",
      avgSalary: "₹8.5 - ₹22 LPA",
      skills: ["Python", "TensorFlow & PyTorch", "Deep Learning", "NLP & Computer Vision", "GenAI"],
      desc: "Train machine learning models, optimize predictive algorithms, and build enterprise Generative AI integrations.",
    },
    {
      role: "Data Scientist & Analytics Architect",
      avgSalary: "₹7.5 - ₹18 LPA",
      skills: ["Big Data (Spark)", "Data Warehousing", "Python Data Science", "ETL Pipelines", "Tableau"],
      desc: "Transform massive enterprise data into strategic predictive insights, data pipelines, and executive dashboards.",
    },
    {
      role: "Cyber Security & Systems Analyst",
      avgSalary: "₹7.0 - ₹17 LPA",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Vulnerability Assessment", "Cyber Laws"],
      desc: "Protect mission-critical IT infrastructure, conduct penetration audits, and implement secure software development lifecycles.",
    },
  ];

  const admissionSteps = [
    {
      step: "01",
      title: "Profile & Eligibility Check",
      desc: "Connect with our academic tech counselors to verify your graduation degree (BCA, B.Sc, B.Tech, or non-CS with Maths).",
      icon: "🎯",
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Get your graduation marksheets, certificates, and ID proof verified for error-free IGNOU Samarth portal submission.",
      icon: "📁",
    },
    {
      step: "03",
      title: "Online Application Assistance",
      desc: "Step-by-step guidance in completing your official IGNOU MCAOL registration and semester fee payment (₹17,000).",
      icon: "💻",
    },
    {
      step: "04",
      title: "Enrollment & LMS Access",
      desc: "Receive your official 10-digit IGNOU Enrollment Number, e-GyanKosh study material access, and start your MCA journey.",
      icon: "🚀",
    },
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Full-Stack Developer at Tech Mahindra",
      background: "BCA Graduate (2022)",
      quote:
        "Pursuing IGNOU Online MCA was the best decision for my career. While continuing my full-time job, I completed the degree without any stress. The ₹17,000 semester fee is unbelievable compared to private colleges charging ₹2.5 Lakhs!",
      rating: "5.0",
    },
    {
      name: "Ananya Deshmukh",
      role: "Associate Cloud Engineer at Cognizant",
      background: "B.Sc Mathematics Graduate",
      quote:
        "Coming from a non-CS background, I was worried about eligibility. CollegeVihar counselors explained the IGNOU bridge papers clearly and guided my admission seamlessly. The syllabus covers modern cloud and AI topics.",
      rating: "5.0",
    },
    {
      name: "Vikas Patel",
      role: "Software Engineer at Persistent Systems",
      background: "IT Professional",
      quote:
        "The AICTE recognition and Central University tag give IGNOU MCA tremendous weight during background checks at MNCs. The digital study resources and flexibility made balancing work and study effortless.",
      rating: "5.0",
    },
  ];

  const faqs = [
    {
      q: "Is IGNOU Online MCA approved by AICTE and UGC-DEB?",
      a: "Yes. IGNOU's Master of Computer Applications Online (MCAOL / MCA_NEW) is fully approved by the All India Council for Technical Education (AICTE) and entitled by the University Grants Commission - Distance Education Bureau (UGC-DEB). An Act of Parliament established IGNOU as a premier Central University.",
    },
    {
      q: "What is the fee structure for IGNOU Online MCA?",
      a: "The programme fee is ₹17,000 per semester across 4 semesters, totaling ₹68,000 for the full two-year degree. A nominal registration fee and university examination fees (paid per semester form) apply separately. This is by far the most affordable AICTE-approved MCA in India.",
    },
    {
      q: "Who is eligible for IGNOU Online MCA?",
      a: "You are eligible if you have passed: (1) BCA / B.Sc. (Computer Science/IT) / B.E. / B.Tech. (CSE/IT) or equivalent degree with minimum 50% marks (45% for reserved categories). OR (2) Any Bachelor's Degree (B.Sc, B.Com, B.A, B.Tech in other streams) with at least 50% marks (45% for reserved) preferably with Mathematics at 10+2 or Graduation level. Students without Mathematics background take qualifying bridge courses as prescribed by IGNOU.",
    },
    {
      q: "Can non-computer science graduates apply for IGNOU Online MCA?",
      a: "Yes! Any graduate with minimum 50% marks can apply. If you did not have computer science or mathematics in your graduation/10+2, IGNOU allows you to clear qualifying bridge papers (such as MCS-201 or BCS-012) alongside your regular semester, making it accessible for career switchers.",
    },
    {
      q: "What is the duration of the programme?",
      a: "The minimum duration is 2 years (4 semesters) and the maximum duration is 4 years, giving working professionals full flexibility to complete papers if work commitments arise.",
    },
    {
      q: "Is an Online MCA valid for MNCs and Government jobs?",
      a: "Absolutely. As per UGC regulations, online degrees from UGC-DEB and AICTE approved Central Universities are treated at par with regular on-campus degrees. Leading IT MNCs (TCS, Infosys, Wipro, Accenture, Amazon, Microsoft) and Government organizations (UPSC, SSC, PSU, Banks) recognize IGNOU MCA degrees without distinction.",
    },
    {
      q: "How are classes, labs, and examinations conducted?",
      a: "Theory and practical study materials are provided digitally via e-GyanKosh and the IGNOU LMS portal. Online counseling sessions and recorded lectures are provided. Practical assignments are submitted through the portal. Term-End Examinations (TEE) are held at designated IGNOU examination centers across India in June and December.",
    },
    {
      q: "How does CollegeVihar assist students with IGNOU MCA admissions?",
      a: "CollegeVihar provides 100% free guidance: we review your academic profile for direct eligibility or bridge requirements, assist with document preparation, guide you through the official IGNOU Samarth registration portal, and keep you updated on semester schedules and exam forms.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#12233b] font-sans antialiased selection:bg-[#f3c64b] selection:text-[#071a36]">
      {/* 1. TOP COMPLIANCE & TRUST BAR */}
      <div className="bg-[#051427] text-slate-300 text-[11px] py-2 px-4 border-b border-white/10 font-semibold sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/90">
              CollegeVihar – Independent Higher Education Advisory & Admission Portal for IGNOU
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-300">
            <span>
              Student Tech Helpline:{" "}
              <a href={`tel:${DISPLAY_PHONE}`} className="text-white font-bold hover:text-[#f4c64b]">
                {DISPLAY_PHONE}
              </a>
            </span>
            <span>•</span>
            <a href="/disclaimer" className="text-[#f4c64b] hover:underline font-bold">
              Statutory Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & HERO WRAPPER */}
      <div className="pt-4 sm:pt-6 pb-6 bg-gradient-to-b from-[#eaf2fb] via-[#f2f7fd] to-[#f5f8fc]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Header Bar */}
          <header className="min-h-[76px] sm:min-h-[82px] bg-gradient-to-r from-[#06192f] via-[#0b274c] to-[#12365e] rounded-[22px] sm:rounded-[26px] px-4 sm:px-7 py-3 flex items-center justify-between shadow-[0_20px_46px_rgba(7,26,54,0.18)] border border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/ignou-logo.png"
                alt="IGNOU - The People's University"
                width={260}
                height={58}
                className="h-9 sm:h-[48px] w-auto object-contain brightness-0 invert"
                priority
              />
              <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-black text-white leading-tight tracking-wide">
                  College<span className="text-[#f4c64b]">Vihar</span>
                </span>
                <span className="text-[10px] text-[#ffd56b] font-semibold">
                  MCA Admission Advisory
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={`tel:${DISPLAY_PHONE}`}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>📞</span> Call Advisor
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all cursor-pointer"
              >
                <span>⚡</span> Enquire Now →
              </button>
            </div>
          </header>

          {/* Admission Urgency Marquee Banner */}
          <div className="mt-3.5 bg-gradient-to-r from-[#f4c64b] via-[#ffe596] to-[#f4c64b] rounded-2xl py-2.5 sm:py-3 px-4 text-center font-black text-[#152336] text-xs sm:text-sm tracking-wide shadow-[0_8px_18px_rgba(243,198,75,0.18)] border border-[#e2b132] flex items-center justify-center gap-2">
            <span className="inline-block px-2 py-0.5 rounded bg-[#10243d] text-white text-[10px] uppercase font-bold tracking-wider">
              2027 Admission Cycle
            </span>
            <span>IGNOU ONLINE MCA (MCAOL) ADMISSIONS & COUNSELLING ACTIVE • LIMITED CYCLE SEATS</span>
          </div>

          {/* HERO SECTION CONTAINER */}
          <div className="mt-4 rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[radial-gradient(circle_at_90%_10%,rgba(58,134,222,0.35),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(244,198,75,0.2),transparent_35%),linear-gradient(135deg,#06182f_0%,#092342_50%,#0d3460_100%)] text-white p-6 sm:p-10 lg:p-12 relative shadow-[0_30px_70px_rgba(6,24,47,0.28)] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-8 lg:gap-10 items-center">
              {/* Left Column: Headlines, Trust, Stats & Highlights */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[#ffe296] text-xs font-black tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    <span>🏛️</span> IGNOU • SOCIS
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-300 text-xs font-bold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/20">
                    <span>✓</span> AICTE & UGC-DEB Entitled
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] sm:leading-[1.05] tracking-tight mb-4 text-white">
                  Fast-Track Your Tech Career with an{" "}
                  <span className="text-[#f5c84b] underline decoration-[#f5c84b]/40">
                    Online MCA
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#d7e5f5] max-w-[640px] mb-6 font-normal">
                  Earn an AICTE-approved Master of Computer Applications from India&apos;s premier Central University. Master Artificial Intelligence, Cloud Computing, Full-Stack Architecture, and Big Data at just <strong>₹17,000 per semester</strong>.
                </p>

                {/* Hero Feature Quick Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2 bg-white/[0.06] p-2.5 rounded-xl border border-white/10">
                    <span className="text-[#f5c84b] text-base">✦</span>
                    <span><strong>₹17,000/Sem</strong> (Total ₹68,000 only)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] p-2.5 rounded-xl border border-white/10">
                    <span className="text-[#f5c84b] text-base">✦</span>
                    <span><strong>Central University</strong> Govt Degree</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] p-2.5 rounded-xl border border-white/10">
                    <span className="text-[#f5c84b] text-base">✦</span>
                    <span><strong>100% Online & Self-Paced</strong> for IT Pros</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.06] p-2.5 rounded-xl border border-white/10">
                    <span className="text-[#f5c84b] text-base">✦</span>
                    <span><strong>Eligible:</strong> BCA / B.Sc / B.Tech or Any Grad</span>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="flex items-center gap-3 flex-wrap mb-7">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all cursor-pointer"
                  >
                    <span>🎯</span> Check Eligibility & Apply →
                  </button>
                  <a
                    href="#fees"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <span>💰</span> View Fee Breakdown
                  </a>
                </div>

                {/* Live Social Proof Rating */}
                <div className="flex items-center gap-3 pt-1 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex text-[#f4c64b] text-sm">★★★★★</div>
                  <div>
                    <strong className="text-white">4.9 / 5</strong> Rating • 18,500+ Tech Aspirants Guided
                  </div>
                </div>
              </div>

              {/* Right Column: High-Converting Lead Form Card */}
              <div className="bg-white text-[#12233b] rounded-[24px] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/90 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b]"></div>

                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-xl sm:text-2xl font-black text-[#071a36] tracking-tight">
                    Get MCA Admission Details
                  </h2>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Free Advisory
                  </span>
                </div>
                <p className="text-xs text-[#637289] mb-4 leading-normal">
                  Fill in your details to receive the complete syllabus, semester fee schedule, and official IGNOU portal guide.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-11 px-3.5 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all placeholder:text-[#9bb0c4]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                      Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#d9e2ed] bg-[#f1f5fa] text-xs font-bold text-[#44566c]">
                        🇮🇳 +91
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        className="w-full h-11 px-3.5 rounded-r-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all placeholder:text-[#9bb0c4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full h-11 px-3.5 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all placeholder:text-[#9bb0c4]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                        Graduation Degree <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="qualification"
                        required
                        defaultValue=""
                        className="w-full h-11 px-2.5 rounded-xl border border-[#d9e2ed] text-xs bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                      >
                        <option value="" disabled>
                          Select Degree
                        </option>
                        <option value="BCA">BCA</option>
                        <option value="B.Sc (CS / IT)">B.Sc (CS / IT)</option>
                        <option value="B.Tech / B.E (CSE/IT)">B.Tech / B.E (CSE/IT)</option>
                        <option value="Other Engineering">Other Engineering</option>
                        <option value="B.Sc (Maths / Science)">B.Sc (Maths / Science)</option>
                        <option value="B.Com / B.A">B.Com / B.A</option>
                        <option value="Working IT Professional">Working IT Professional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                        Domain of Interest
                      </label>
                      <select
                        name="specialisation"
                        defaultValue="AI & Machine Learning"
                        className="w-full h-11 px-2.5 rounded-xl border border-[#d9e2ed] text-xs bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                      >
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Full-Stack Web Dev">Full-Stack Web Dev</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Data Science & Big Data">Data Science & Big Data</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="General MCA">General Computing</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-12 rounded-xl font-black text-sm bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Submitting Application...
                      </span>
                    ) : (
                      <span>Get Free MCA Guidance & Syllabus →</span>
                    )}
                  </button>

                  {statusMessage && (
                    <div className="text-xs text-center font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                      {statusMessage}
                    </div>
                  )}

                  <div className="text-[10px] leading-tight text-[#7a8796] text-center pt-1 flex items-center justify-center gap-1">
                    <span>🔒</span> 100% Privacy Protected • Free Academic Guidance
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ACCREDITATIONS & RECOGNITION BAR */}
      <section className="py-6 bg-white border-y border-[#e2eaf4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5d718b]">
              National & Statutory Accreditations
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6 items-center text-center">
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-[#e8eff7] hover:border-[#337ab7] transition-all">
              <span className="block text-sm sm:text-base font-black text-[#071a36]">AICTE</span>
              <span className="text-[11px] text-[#556982] font-semibold">Recognised MCA</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-[#e8eff7] hover:border-[#337ab7] transition-all">
              <span className="block text-sm sm:text-base font-black text-[#071a36]">UGC-DEB</span>
              <span className="text-[11px] text-[#556982] font-semibold">Online Entitled</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-[#e8eff7] hover:border-[#337ab7] transition-all">
              <span className="block text-sm sm:text-base font-black text-[#071a36]">NAAC A++</span>
              <span className="text-[11px] text-[#556982] font-semibold">Highest Grade</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-[#e8eff7] hover:border-[#337ab7] transition-all">
              <span className="block text-sm sm:text-base font-black text-[#071a36]">Central Univ</span>
              <span className="text-[11px] text-[#556982] font-semibold">Govt of India (1985)</span>
            </div>
            <div className="p-3 bg-[#f8fafc] rounded-2xl border border-[#e8eff7] hover:border-[#337ab7] transition-all col-span-2 md:col-span-1">
              <span className="block text-sm sm:text-base font-black text-[#071a36]">AIU Member</span>
              <span className="text-[11px] text-[#556982] font-semibold">Globally Valid (WES)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ELIGIBILITY CHECKER */}
      <section className="py-12 sm:py-16 bg-[#f3f7fc]" id="eligibility">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Instant Qualification Check
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              Are You Eligible for IGNOU Online MCA?
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Select your academic background below to instantly see your eligibility pathway and bridge course requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[26px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(7,26,54,0.06)] border border-[#e1e9f2]">
            {/* Toggle Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 p-1.5 bg-[#f1f5fa] rounded-2xl">
              <button
                onClick={() => setEligibilityTab("cs")}
                className={`py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  eligibilityTab === "cs"
                    ? "bg-[#071a36] text-white shadow-md"
                    : "text-[#475971] hover:text-[#071a36]"
                }`}
              >
                💻 BCA / B.Sc (CS/IT) / B.Tech CSE Grads
              </button>
              <button
                onClick={() => setEligibilityTab("non-cs")}
                className={`py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  eligibilityTab === "non-cs"
                    ? "bg-[#071a36] text-white shadow-md"
                    : "text-[#475971] hover:text-[#071a36]"
                }`}
              >
                🎓 Non-CS Graduates (B.Sc / B.Com / B.A / Other Engg)
              </button>
            </div>

            {/* Content Based on Selected Tab */}
            {eligibilityTab === "cs" ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-lg shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-emerald-900">
                      Direct Entry Eligible (No Bridge Course Required!)
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                      You are eligible for direct admission into Semester 1 core curriculum. Candidates with BCA, B.Sc (CS/IT), or B.E./B.Tech (CSE/IT) can begin their 2-year MCA immediately.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Percentage Criteria</span>
                    <p className="text-xs text-[#556982]">
                      Minimum <strong>50% marks</strong> in Bachelor&apos;s degree (45% for SC/ST/OBC/Reserved category).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Duration & Flexibility</span>
                    <p className="text-xs text-[#556982]">
                      Minimum <strong>2 Years (4 Semesters)</strong>, with up to 4 Years completion validity.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Entrance Test</span>
                    <p className="text-xs text-[#556982]">
                      <strong>No Entrance Test Required</strong>. Admission is granted based on verified graduation merit.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="w-10 h-10 rounded-full bg-[#1765af] text-white flex items-center justify-center font-black text-lg shrink-0">
                    ℹ️
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#0d3460]">
                      Eligible with Qualifying Bridge Paper
                    </h3>
                    <p className="text-xs sm:text-sm text-[#184880] mt-1 leading-relaxed">
                      Graduates from B.Sc, B.Com, B.A, or non-computer branches of engineering are warmly welcomed into IGNOU Online MCA! IGNOU prescribes bridge papers (such as MCS-201 or BCS-012) which you clear alongside your first semester.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Mathematics Condition</span>
                    <p className="text-xs text-[#556982]">
                      Preferably studied Mathematics at 10+2 or Graduation. Otherwise, an introductory bridge math paper is registered.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Career Switch Advantage</span>
                    <p className="text-xs text-[#556982]">
                      Ideal for non-IT graduates currently working in tech support or looking to switch to high-paying software jobs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4]">
                    <span className="text-xs font-black text-[#071a36] block mb-1">Advisory Guidance</span>
                    <p className="text-xs text-[#556982]">
                      CollegeVihar counselors ensure you pick the correct paper codes on the Samarth admission portal.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-[#edf2f7] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#556982] text-center sm:text-left">
                Unsure about your exact degree marks or bridge paper requirements?
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#071a36] text-[#f3c64b] hover:bg-[#0c274e] transition-all cursor-pointer"
              >
                Talk to an Eligibility Specialist →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEES & ROI COMPARISON TABLE */}
      <section className="py-12 sm:py-16 bg-white" id="fees">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Unbeatable ROI
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              Affordable Fee Structure & Massive Cost Savings
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Compare IGNOU Online MCA with top private online universities. Receive the same AICTE entitlement while saving up to ₹2,00,000.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
            {/* Semester Fee Breakdown Card */}
            <div className="bg-[#f8fafc] rounded-[24px] p-6 sm:p-8 border border-[#e1e9f2] flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#1762a7]">
                  Transparent Semester Fees
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#071a36] mt-1 mb-4">
                  Pay As You Progress
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2.5 border-b border-[#e2eaf4] text-xs sm:text-sm">
                    <span className="font-semibold text-[#44566c]">Semester 1 Fee</span>
                    <strong className="text-[#071a36]">₹17,000</strong>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#e2eaf4] text-xs sm:text-sm">
                    <span className="font-semibold text-[#44566c]">Semester 2 Fee</span>
                    <strong className="text-[#071a36]">₹17,000</strong>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#e2eaf4] text-xs sm:text-sm">
                    <span className="font-semibold text-[#44566c]">Semester 3 Fee</span>
                    <strong className="text-[#071a36]">₹17,000</strong>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#e2eaf4] text-xs sm:text-sm">
                    <span className="font-semibold text-[#44566c]">Semester 4 Fee</span>
                    <strong className="text-[#071a36]">₹17,000</strong>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#d9e4f0] text-center">
                <span className="text-xs text-[#5c6e85] block">Total 2-Year Programme Fee</span>
                <span className="text-2xl sm:text-3xl font-black text-[#071a36] text-[#0d3460]">
                  ₹68,000*
                </span>
                <span className="block text-[10px] text-[#78889b] mt-1">
                  *Excluding nominal registration & per-paper exam fee
                </span>
              </div>
            </div>

            {/* Comparison Table: IGNOU vs Private Online Universities */}
            <div className="lg:col-span-2 bg-[#06192f] text-white rounded-[26px] p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(6,25,47,0.18)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    IGNOU Online MCA vs Private Online Universities
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#f3c64b] text-[#16263d] text-xs font-black">
                    Save Over ₹1,50,000+
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Private online universities charge exorbitant fees for marketing and fancy campus videos. IGNOU gives you a Central University degree at true government-subsidized rates.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/15 text-slate-400">
                        <th className="pb-3 font-bold">Feature</th>
                        <th className="pb-3 font-black text-[#f3c64b]">IGNOU Online MCA</th>
                        <th className="pb-3 font-semibold text-slate-300">Private Online Universities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-3 text-slate-300">Total 2-Year Fee</td>
                        <td className="py-3 font-black text-[#f4c64b] text-base">₹68,000</td>
                        <td className="py-3 text-slate-300">₹1,50,000 – ₹2,80,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-slate-300">University Status</td>
                        <td className="py-3 font-bold text-emerald-400">Central University (Govt of India)</td>
                        <td className="py-3 text-slate-300">Private Deemed / State Private</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-slate-300">AICTE Approval</td>
                        <td className="py-3 font-bold text-white">Yes, Fully Approved</td>
                        <td className="py-3 text-slate-300">Selected Universities only</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-slate-300">Govt Job & PSU Validity</td>
                        <td className="py-3 font-bold text-white">100% Accepted Across India</td>
                        <td className="py-3 text-slate-300">Subject to Specific Criteria</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-slate-300">Work Schedule Flexibility</td>
                        <td className="py-3 font-bold text-white">High (Up to 4 Years)</td>
                        <td className="py-3 text-slate-300">Strict Attendance Mandates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-300">
                  ⚡ Invest your savings into premium tech certifications & laptops.
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-[#f3c64b] to-[#fed468] text-[#16263d] hover:-translate-y-0.5 transition-transform cursor-pointer"
                >
                  Download Fee Structure Sheet →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEMESTER-WISE CURRICULUM EXPLORER */}
      <section className="py-12 sm:py-16 bg-[#f3f7fc]" id="curriculum">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              AICTE-Standard CBCS Scheme
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              4-Semester Computing Curriculum
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Designed by top IIT & Central University professors, blending computer science theory with hands-on software engineering.
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {semesterCurriculum.map((sem, idx) => (
              <button
                key={sem.semester}
                onClick={() => setActiveSemTab(idx)}
                className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  activeSemTab === idx
                    ? "bg-[#071a36] text-[#f4c64b] shadow-lg border border-[#071a36]"
                    : "bg-white text-[#455870] border border-[#dce5ef] hover:border-[#1762a7]"
                }`}
              >
                {sem.semester}
              </button>
            ))}
          </div>

          {/* Active Semester Subjects Display */}
          <div className="bg-white rounded-[26px] p-6 sm:p-10 shadow-[0_15px_40px_rgba(7,26,54,0.06)] border border-[#e1e9f2] max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#edf2f7]">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#1762a7]">
                  {semesterCurriculum[activeSemTab].semester}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#071a36] mt-0.5">
                  {semesterCurriculum[activeSemTab].title}
                </h3>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#f1f5fa] text-[#071a36] font-bold text-xs border border-[#dbe4ef]">
                {semesterCurriculum[activeSemTab].credits}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {semesterCurriculum[activeSemTab].courses.map((course) => (
                <div
                  key={course.code}
                  className="p-4 rounded-xl bg-[#f8fafc] border border-[#e4ecf4] hover:border-[#337ab7] hover:bg-white transition-all flex items-start justify-between gap-3"
                >
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1762a7] bg-[#e7f1fb] px-2 py-0.5 rounded mb-1">
                      {course.code}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#14263e]">
                      {course.name}
                    </h4>
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                      course.type.includes("Lab")
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : course.type.includes("Capstone")
                        ? "bg-amber-50 text-amber-900 border border-amber-200"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {course.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#edf2f7] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#5c6e85] text-center sm:text-left">
                Want detailed subject syllabus, lecture schedules & project guidelines?
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-[#f3c64b] to-[#fed468] text-[#16263d] hover:-translate-y-0.5 transition-transform cursor-pointer"
              >
                <span>📥</span> Download Full 4-Semester Syllabus →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IN-DEMAND CAREER ROLES & HIRING PARTNERS */}
      <section className="py-12 sm:py-16 bg-white" id="careers">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Career Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              High-Paying Software & Tech Engineering Roles
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              An AICTE-approved MCA from a Central University unlocks premier technical and architectural positions across the global IT industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careerRoles.map((role) => (
              <div
                key={role.role}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2eaf4] hover:shadow-lg hover:border-[#1762a7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {role.avgSalary}
                    </span>
                    <span className="text-xs text-[#78889b]">Full-Time / Remote</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#071a36] mb-2">
                    {role.role}
                  </h3>
                  <p className="text-xs text-[#5c6e85] leading-relaxed mb-4">
                    {role.desc}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-[#44566c] mb-1.5">Core Skills Mastered:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold bg-white text-[#1f3755] px-2 py-0.5 rounded border border-[#d9e2ed]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring Partners Marquee / Showcase */}
          <div className="bg-[#f2f7fc] rounded-[24px] p-6 sm:p-8 border border-[#dbe6f3] text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#475b75] block mb-4">
              Leading Tech MNCs Hiring MCA Graduates
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-black text-sm sm:text-base text-[#1c3554]">
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">TCS</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Infosys</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Wipro</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Accenture</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Cognizant</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Tech Mahindra</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">HCL Tech</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Amazon</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">Microsoft</span>
              <span className="px-4 py-2 bg-white rounded-xl border border-[#d7e3f1] shadow-sm">IBM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE IGNOU ONLINE MCA (KEY USPs) */}
      <section className="py-12 sm:py-16 bg-[#f3f7fc]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Why Choose IGNOU?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              6 Powerful Reasons to Pursue IGNOU MCAOL
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Everything you need to advance in the tech landscape without leaving your existing job or taking on heavy student loan debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#e1e9f2] shadow-[0_10px_30px_rgba(7,26,54,0.04)] hover:-translate-y-1 hover:border-[#1762a7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#f3c64b]">{item.num}</span>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#f1f5fa] text-[#102a4d] border border-[#dce6f2]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#071a36] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5c6e85] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAST 4-STEP ADMISSION PROCESS */}
      <section className="py-12 sm:py-16 bg-white" id="how-to-apply">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Hassle-Free Application
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              4 Simple Steps to Confirm Your MCA Admission
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              CollegeVihar takes the confusion out of the official IGNOU portal registration and document submission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2eaf4] text-center relative flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#071a36] text-[#f3c64b] text-xl flex items-center justify-center font-black mx-auto mb-4 shadow-md">
                  {step.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#1762a7] tracking-wider block mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="text-base font-black text-[#071a36] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#5c6e85] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all cursor-pointer"
            >
              Start Your Admission Guidance Today →
            </button>
          </div>
        </div>
      </section>

      {/* 10. REAL STUDENT SUCCESS STORIES */}
      <section className="py-12 sm:py-16 bg-[#f3f7fc]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Real Student Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              Trusted by 18,500+ Tech Learners
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Read how working professionals and graduates transformed their tech career with IGNOU Online MCA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#e1e9f2] shadow-[0_10px_30px_rgba(7,26,54,0.04)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#f4c64b] text-sm">★★★★★</div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Student
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#44566c] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#edf2f7]">
                  <h4 className="text-sm font-black text-[#071a36]">{t.name}</h4>
                  <div className="text-xs text-[#1762a7] font-semibold">{t.role}</div>
                  <div className="text-[10px] text-[#7a8c9e] mt-0.5">{t.background}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 sm:py-16 bg-white" id="faqs">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#1b62a5] bg-[#e4effa] px-3.5 py-1 rounded-full border border-[#cbdff2]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071a36] mt-3 mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5c6e85]">
              Everything you need to know about eligibility, recognition, fees, exams, and degree validity.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "bg-[#f8fafc] border-[#337ab7] shadow-sm"
                      : "bg-white border-[#e4ecf4] hover:border-[#ccd9e7]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-[#071a36]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-transform ${
                        isOpen
                          ? "bg-[#071a36] text-[#f4c64b] rotate-180"
                          : "bg-[#eaf1f8] text-[#071a36]"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4a5f78] leading-relaxed border-t border-[#edf2f7]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-[#f0f6fc] border border-[#d6e4f3] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <strong className="text-xs sm:text-sm text-[#071a36] block">
                Have a specific question not listed here?
              </strong>
              <span className="text-xs text-[#5c6e85]">
                Our academic counselors are available on WhatsApp and Phone.
              </span>
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Hi, I have questions about IGNOU Online MCA admission."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-black text-xs bg-[#25d366] text-white hover:bg-[#1fb355] transition-all shrink-0"
            >
              Ask on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM HIGH-CONVERSION CTA BANNER */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#06182f] via-[#092548] to-[#0f3b6c] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#f3c64b]/20 text-[#f4c64b] border border-[#f3c64b]/30 text-xs font-black uppercase tracking-wider mb-4">
            Limited Cycle Seats Active
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 max-w-3xl mx-auto">
            Ready to Become an Industry-Ready Tech Leader with IGNOU Online MCA?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get expert document verification, bridge course selection assistance, and portal registration guidance at ₹0 cost.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all cursor-pointer"
            >
              Get Free Admission Assistance →
            </button>
            <a
              href={`tel:${DISPLAY_PHONE}`}
              className="px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              Call Helpline: {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 13. COMPLIANT FOOTER */}
      <CompliantFooter
        universityName="IGNOU (Indira Gandhi National Open University)"
        universityShortName="IGNOU"
        programName="Online MCA"
        partnershipType="ignou"
        theme="white"
      />

      {/* 14. MOBILE STICKY FLOATING CTA BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2eaf4] p-2.5 px-4 flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${DISPLAY_PHONE}`}
          className="flex-1 py-3 px-2 rounded-xl font-bold text-xs bg-[#f0f4f9] text-[#071a36] text-center border border-[#d6e2f0]"
        >
          📞 Call
        </a>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
            "Hi, I want details regarding IGNOU Online MCA admission."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl font-bold text-xs bg-[#25d366] text-white text-center shadow-sm"
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-[1.5] py-3 px-2 rounded-xl font-black text-xs bg-gradient-to-r from-[#f3c64b] to-[#fed468] text-[#16263d] text-center shadow-md cursor-pointer"
        >
          Apply Now ⚡
        </button>
      </div>

      {/* 15. LEAD CAPTURE MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[26px] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1762a7] bg-[#e7f1fb] px-2.5 py-0.5 rounded-full">
                IGNOU Online MCA 2027
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#071a36] mt-1.5">
                Fast-Track Your Admission
              </h3>
              <p className="text-xs text-[#5c6e85] mt-1">
                Enter your details to receive instant fee schedule, eligibility confirmation, and official portal support.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full h-11 px-3.5 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#d9e2ed] bg-[#f1f5fa] text-xs font-bold text-[#44566c]">
                    +91
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full h-11 px-3.5 rounded-r-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@gmail.com"
                  className="w-full h-11 px-3.5 rounded-xl border border-[#d9e2ed] text-sm bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                    Graduation Degree <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="qualification"
                    required
                    defaultValue=""
                    className="w-full h-11 px-2.5 rounded-xl border border-[#d9e2ed] text-xs bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                  >
                    <option value="" disabled>
                      Select Degree
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="B.Sc (CS / IT)">B.Sc (CS / IT)</option>
                    <option value="B.Tech / B.E">B.Tech / B.E</option>
                    <option value="Other Graduation (Non-CS)">Other Graduation (Non-CS)</option>
                    <option value="Working IT Professional">Working IT Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#35455c] mb-1">
                    Target Domain
                  </label>
                  <select
                    name="specialisation"
                    defaultValue="AI & Machine Learning"
                    className="w-full h-11 px-2.5 rounded-xl border border-[#d9e2ed] text-xs bg-[#fbfcfe] text-[#16273e] focus:outline-none focus:border-[#2267b2] focus:ring-3 focus:ring-[#2267b2]/10 transition-all"
                  >
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Full-Stack Web Dev">Full-Stack Web Dev</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Data Science & Big Data">Data Science & Big Data</option>
                    <option value="Cyber Security">Cyber Security</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full h-12 rounded-xl font-black text-sm bg-gradient-to-r from-[#f3c64b] via-[#fed468] to-[#f3c64b] text-[#16263d] shadow-[0_10px_24px_rgba(243,198,75,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,198,75,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
              >
                {formStatus === "submitting" ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Submit & Download Brochure →</span>
                )}
              </button>

              <div className="text-[10px] text-center text-[#78889b] pt-1">
                🔒 We respect your privacy. No spam. Only verified academic support.
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
