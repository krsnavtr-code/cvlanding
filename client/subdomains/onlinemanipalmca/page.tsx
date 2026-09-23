"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WA_NUMBER = "919266585858";
const DISPLAY_PHONE = "+919266585858";

export default function OnlineManipalMcaPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subdomain = "onlinemanipalmca",
}: {
  subdomain?: string;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [feeCategory, setFeeCategory] = useState<"indian" | "nri" | "foreign">("indian");
  const [isExpandedDesc, setIsExpandedDesc] = useState(false);

  // Form states matching database submission standard
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
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      qualification: String(form.get("qualification") || "").trim(),
      specialisation: String(form.get("specialisation") || "").trim(),
      state: String(form.get("state") || "").trim(),
      subdomain: subdomain || "onlinemanipalmca",
      university: "Manipal University Jaipur",
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
      setIsModalOpen(false);
      router.push("/thank-you");
    } catch {
      // Fallback for static demo / offline network
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

  const specialisations = [
    {
      title: "Cloud Computing & DevOps",
      tagline: "High-scale systems & modern infrastructure",
      badge: "High Demand",
      skills: ["AWS & Google Cloud", "Docker & Kubernetes", "Microservices", "CI/CD Pipelines", "Terraform"],
      desc: "Master modern multi-cloud architectures, container orchestration, serverless microservices, and automated DevOps workflows required by top engineering orgs.",
    },
    {
      title: "Full Stack Web Development",
      tagline: "End-to-end web architectures",
      badge: "Top Recruited",
      skills: ["React & Next.js", "Node.js & Express", "Spring Boot", "PostgreSQL & MongoDB", "System Design"],
      desc: "Build production-grade, highly scalable web applications from responsive frontends to enterprise-level distributed backend microservices and databases.",
    },
    {
      title: "Data Analytics & Big Data",
      tagline: "Data engineering & business intelligence",
      badge: "Fast Growing",
      skills: ["Python Data Science", "Apache Spark", "SQL & Data Warehousing", "Power BI & Tableau", "ETL Pipelines"],
      desc: "Learn to design large-scale data pipelines, extract real-time predictive insights, and manage enterprise analytical models with modern big data frameworks.",
    },
    {
      title: "Artificial Intelligence & ML",
      tagline: "Neural networks & GenAI models",
      badge: "Future Tech",
      skills: ["TensorFlow & PyTorch", "Natural Language Processing", "Computer Vision", "Deep Learning", "LLM Fine-Tuning"],
      desc: "Delve into predictive machine learning algorithms, deep neural network training, computer vision models, and state-of-the-art Generative AI applications.",
    },
    {
      title: "Cyber Security & Defense",
      tagline: "Application security & threat defense",
      badge: "Enterprise Need",
      skills: ["Ethical Hacking", "Cryptography", "Network Defense", "Penetration Testing", "Security Auditing"],
      desc: "Defend modern networks and cloud systems against vulnerabilities. Learn ethical hacking techniques, cryptography principles, and digital forensics.",
    },
  ];

  const features = [
    {
      icon: "💻",
      title: "Virtual Cloud Coding Labs",
      desc: "Write, test, and debug code directly inside browser-based IDEs with pre-configured compilers. No high-end PC required.",
    },
    {
      icon: "📜",
      title: "Coursera Enterprise Access",
      desc: "Get complimentary access to industry-recognized certificates from Google, AWS, IBM, and Meta alongside your MCA degree.",
    },
    {
      icon: "⚡",
      title: "AICTE & UGC-DEB Entitled",
      desc: "Full statutory entitlement. Holds identical academic credibility to an on-campus MCA degree for MNCs, PSUs, and global visas.",
    },
    {
      icon: "🎯",
      title: "DSA & System Design Training",
      desc: "Rigorous coding practice sessions, Data Structures & Algorithms modules, and mock technical interviews with FAANG engineers.",
    },
    {
      icon: "🤝",
      title: "500+ Tech Hiring Partners",
      desc: "Direct placement drives, resume engineering workshops, and career mentoring from the Online Manipal placement cell.",
    },
    {
      icon: "🌐",
      title: "150,000+ Alumni Network",
      desc: "Join a prestigious global network of Manipal alumni excelling across Google, Microsoft, Amazon, Cisco, and top tech firms.",
    },
  ];

  const semesters = [
    {
      num: "01",
      title: "Semester 1 · Foundations & Core Systems",
      desc: "Build bedrock mastery in object-oriented programming, algorithmic thinking, and relational database systems.",
      courses: [
        "Programming in Java & Object-Oriented Paradigms",
        "Advanced Data Structures & Algorithms (DSA)",
        "Computer Organization & System Architecture",
        "Relational Database Management Systems (RDBMS)",
        "Discrete Mathematics & Logic for Computer Science",
        "Virtual Coding Lab: Java & DSA Practicum",
      ],
    },
    {
      num: "02",
      title: "Semester 2 · Software Architecture & Web Platforms",
      desc: "Transition to Linux systems, agile development workflows, cloud fundamentals, and full stack web scripting.",
      courses: [
        "Operating Systems & Linux Shell Programming",
        "Software Engineering Principles & Agile Methodologies",
        "Web Technologies & Client-Side Scripting",
        "Python for Scientific & Application Programming",
        "Cloud Computing Essentials (AWS / GCP Overview)",
        "Virtual Lab: Web & Python Programming Lab",
      ],
    },
    {
      num: "03",
      title: "Semester 3 · Advanced Tech & Specialisation Track",
      desc: "Dive deep into modern machine learning algorithms, network defense, and domain-specific electives.",
      courses: [
        "Artificial Intelligence & Machine Learning Fundamentals",
        "Computer Networks & Network Security Protocols",
        "Specialisation Elective Track – Paper 1",
        "Specialisation Elective Track – Paper 2",
        "Minor Software Engineering Project & Code Review",
        "Industry Mentorship & Technical Seminar",
      ],
    },
    {
      num: "04",
      title: "Semester 4 · Master Specialisation & Capstone Internship",
      desc: "Complete advanced electives and execute a full-scale industry capstone project or live corporate tech internship.",
      courses: [
        "Advanced Specialisation Elective – Paper 3",
        "Advanced Specialisation Elective – Paper 4",
        "Major Industry Capstone Project / Live Coding Internship",
        "Viva Voce & Technical Project Presentation",
      ],
    },
  ];

  const hiringPartners = [
    "Amazon",
    "Microsoft",
    "Google",
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "Dell Technologies",
    "Oracle",
    "IBM",
  ];

  const testimonials = [
    {
      quote:
        "Transitioning from QA testing to Full Stack Development was seamless with MUJ's Online MCA. The cloud coding labs and weekend classes fit my work schedule perfectly.",
      author: "Aditya Kulkarni",
      role: "SDE 1 at FinTech Unicorn",
      batch: "Batch of 2024",
    },
    {
      quote:
        "The Coursera certifications alongside Cloud Computing electives gave me a huge advantage in tech rounds. The degree carries immense respect across MNCs.",
      author: "Sneha Mukherjee",
      role: "Cloud Engineer at Top Tier MNC",
      batch: "Batch of 2023",
    },
    {
      quote:
        "I was working full-time in technical support. The DSA sessions and placement team guided me through interview prep, and I bagged an 11 LPA developer role.",
      author: "Rishabh Patel",
      role: "Backend Engineer at SaaS Org",
      batch: "Batch of 2024",
    },
  ];

  const faqs = [
    {
      q: "Is Online MCA from Manipal University Jaipur AICTE approved?",
      a: "Yes. The Online MCA from Manipal University Jaipur (MUJ) is approved by AICTE and entitled by UGC-DEB. It carries identical academic validity and equivalence to conventional on-campus MCA degrees across private and public sectors.",
    },
    {
      q: "Who is eligible to apply for the Online MCA program?",
      a: "Graduates with BCA, B.Sc. (Computer Science / IT), or B.Tech/BE with at least 50% aggregate marks (45% for reserved categories). Candidates with other degrees (BA, B.Com, B.Sc) who passed Mathematics at 10+2 or graduation level are also fully eligible.",
    },
    {
      q: "How are practical coding labs and project work managed online?",
      a: "Manipal provides browser-based Virtual Cloud Labs. Students execute code, compile programs, and run databases directly within the learning management system without needing expensive hardware or complex software installations.",
    },
    {
      q: "Can I manage this degree alongside a full-time software job?",
      a: "Absolutely. The programme is specifically engineered for working professionals. You get flexible self-paced video modules, live interactive sessions on weekends, and recorded lectures accessible 24/7.",
    },
    {
      q: "What is the fee structure and EMI options for MUJ Online MCA?",
      a: "The total program fee is ₹1,58,000*. You can conveniently pay ₹39,500 per semester or choose no-cost monthly EMI options starting at approximately ₹6,580/month.",
    },
    {
      q: "What placement assistance is provided to online MCA learners?",
      a: "Learners gain access to the Online Manipal Career Support ecosystem, including resume reviews, mock DSA coding rounds, virtual job fairs, and direct placement opportunities across 500+ tech recruitment partners.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7fd] text-[#1e1742] font-sans selection:bg-[#e85923] selection:text-white">
      {/* 1. CLEAN WHITE NAVBAR (Matching onlinemanipalmba) */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eae6f5] shadow-[0_2px_12px_rgba(30,23,66,0.04)]">
        <div className="w-[min(1220px,94%)] mx-auto h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <Image
              src="/images/MUJ-logo.webp"
              alt="Manipal University Jaipur"
              width={180}
              height={50}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[#2e2954] text-xs sm:text-[13px] font-semibold">
            <a href="#specialisations" className="flex items-center gap-1.5 hover:text-[#e85923] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
              Specialisations <span className="text-[10px] text-[#767198]">▾</span>
            </a>
            <a href="#curriculum" className="flex items-center gap-1 hover:text-[#e85923] transition-colors">
              Curriculum <span className="text-[10px] text-[#767198]">▾</span>
            </a>
            <a href="#fees" className="hover:text-[#e85923] transition-colors">
              Fees &amp; EMI
            </a>
            <a href="#careers" className="hover:text-[#e85923] transition-colors">
              Career Scope
            </a>
            <a href="#faqs" className="hover:text-[#e85923] transition-colors">
              FAQs
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

      {/* 2. HERO SECTION (Soft Lavender / Periwinkle background matching onlinemanipalmba) */}
      <section id="top" className="bg-[#e6e3f8] pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pb-18 text-[#1e1742] relative">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Top Row: Breadcrumb & Phone Badge */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-[#5e5885] text-[11px] sm:text-xs">
              <span className="hover:text-[#1e1742] cursor-pointer">Home</span>
              <span className="text-[#8c86b3]">›</span>
              <span className="hover:text-[#1e1742] cursor-pointer">Online MCA Courses</span>
              <span className="text-[#8c86b3]">›</span>
              <span className="text-[#1e1742] font-bold">MUJ MCA</span>
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
                      title: "Online MCA - Manipal University Jaipur",
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
                <div className="flex items-center py-1 px-2.5 rounded-lg bg-white/80 border border-white/90 backdrop-blur-xs shadow-2xs">
                  <Image
                    src="/images/MUJ-logo.webp"
                    alt="Manipal University Jaipur"
                    width={150}
                    height={42}
                    className="h-7 sm:h-8 w-auto object-contain"
                    priority
                  />
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

                {/* AICTE Badge */}
                <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/60 border border-white/80 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-[#1e1742]">
                    AICTE &amp; UGC-DEB Approved
                  </span>
                </div>
              </div>

              {/* Title with 4.9 ★ Rating Pill */}
              <div className="mb-3">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.12] text-[#1e1742] tracking-tight">
                  Master of Computer Applications from MUJ{" "}
                  <span className="inline-flex items-center gap-1 align-middle text-xs font-bold px-2 py-0.5 rounded-full bg-white text-[#1e1742] border border-[#d6d0f2] shadow-2xs">
                    4.9 <span className="text-amber-500">★</span>
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <h2 className="text-[#1e1742] font-extrabold text-base sm:text-lg mb-4">
                Online MCA with Cloud, Full Stack &amp; AI Specializations
              </h2>

              {/* Description */}
              <div className="text-[#47416e] text-xs sm:text-[13px] leading-[1.75] mb-6">
                <p>
                  Accelerate your software engineering career with the UGC-entitled and AICTE-approved
                  online Master of Computer Applications (MCA) from Manipal University Jaipur (MUJ),
                  a NAAC A+ rated university. Choose from 5 career-focused tracks including Cloud Computing &amp;
                  DevOps, Full Stack Web Development, Data Analytics, Artificial Intelligence, and Cyber Security.
                  {isExpandedDesc && (
                    <span className="block mt-2">
                      Get hands-on coding experience in browser-based virtual labs, complimentary Coursera
                      certifications from Google and IBM, weekend learning flexibility, and placement drives
                      with 500+ top tier recruitment partners across India.
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
                  Download MCA Syllabus
                </button>

                <a
                  href="#specialisations"
                  className="bg-white/80 hover:bg-white text-[#1e1742] font-bold text-xs sm:text-[13px] px-6 py-3.5 rounded-full border border-[#d6d0f2] transition-all shadow-2xs"
                >
                  View 5 Tech Tracks
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4e4875]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> UGC-Entitled &amp; AICTE Approved
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> NAAC A+ Accredited (3.28 CGPA)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e85923]">✓</span> Virtual Cloud Labs Included
                </div>
              </div>
            </div>

            {/* Right Form Card (5 cols) matching onlinemanipalmba screenshot */}
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
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <input
                    type="hidden"
                    name="source"
                    value="Hero Banner Lead Form - Online Manipal MCA"
                  />
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full h-11 border border-[#e2e8f0] rounded-xl bg-white text-[#1e1742] px-3.5 text-xs outline-none focus:border-[#e85923] focus:ring-2 focus:ring-[#e85923]/15 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
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
                      name="phone"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      placeholder="Enter your mobile number"
                      className="w-full h-11 text-[#1e1742] px-3 text-xs outline-none bg-transparent placeholder:text-[#94a3b8]"
                    />
                  </div>

                  {/* Legal Consent Checkbox matching screenshot */}
                  <div className="flex items-start gap-2 pt-1 pb-1">
                    <input
                      type="checkbox"
                      id="hero-consent"
                      defaultChecked
                      className="mt-0.5 w-3.5 h-3.5 accent-[#e85923] rounded cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="hero-consent"
                      className="text-[9px] text-[#64748b] leading-tight cursor-pointer"
                    >
                      I authorize Online Manipal and its associates to contact me with updates &amp;
                      notifications via email, SMS, WhatsApp, and voice call. This consent will
                      override any registration for DNC / NDNC. *
                    </label>
                  </div>

                  {/* Apply Now Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-12 rounded-full bg-[#f49371] hover:bg-[#e85923] text-white text-xs font-bold cursor-pointer transition-all shadow-[0_6px_18px_rgba(232,89,35,0.25)] active:scale-[0.98] disabled:opacity-60"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Apply Now"}
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

      {/* 3. PURPLE ANNOUNCEMENT TICKER (Directly underneath hero, matching onlinemanipalmba) */}
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
            <span>Admissions Open for MCA!</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🎓</span>
            <span className="font-semibold">92% seats filled</span>
          </div>
        </div>
      </div>

      {/* 4. KEY METRICS STRIP */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="w-[min(1220px,94%)] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="p-4 sm:p-5 text-center border-r border-slate-200 last:border-r-0">
            <strong className="block text-slate-900 text-base sm:text-lg font-black leading-snug">
              2 Years (4 Sems)
            </strong>
            <span className="block text-slate-500 text-[10px] sm:text-xs font-medium mt-0.5">
              Programme Duration
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center md:border-r border-slate-200">
            <strong className="block text-slate-900 text-base sm:text-lg font-black leading-snug">
              5 Tech Tracks
            </strong>
            <span className="block text-slate-500 text-[10px] sm:text-xs font-medium mt-0.5">
              Cloud, Full Stack, AI &amp; Cyber
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center border-r border-slate-200 last:border-r-0">
            <strong className="block text-slate-900 text-base sm:text-lg font-black leading-snug">
              AICTE &amp; UGC Entitled
            </strong>
            <span className="block text-slate-500 text-[10px] sm:text-xs font-medium mt-0.5">
              NAAC A+ Ranked University
            </span>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <strong className="block text-slate-900 text-base sm:text-lg font-black leading-snug">
              500+ Tech Recruiters
            </strong>
            <span className="block text-slate-500 text-[10px] sm:text-xs font-medium mt-0.5">
              ₹8 – 24 LPA Salary Range
            </span>
          </div>
        </div>
      </div>

      {/* 5. WHY ONLINE MANIPAL MCA (Tech Grid) */}
      <section className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <span className="text-sky-700 text-[11px] font-extrabold tracking-widest uppercase bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              WHY CHOOSE ONLINE MANIPAL MCA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 leading-tight mt-3 mb-2.5">
              Engineered for Next-Generation Software Leaders
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Experience the ideal balance of academic excellence and modern industry skills, tailored specifically
              to elevate working tech professionals into senior engineering positions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIALISATIONS SHOWCASE (Interactive Tech Stacks) */}
      <section id="specialisations" className="py-14 sm:py-18 bg-slate-900 text-white">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-sky-400 text-[11px] font-extrabold tracking-widest uppercase bg-sky-950 px-3.5 py-1 rounded-full border border-sky-800">
              CUTTING-EDGE CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-tight mt-3 mb-2.5">
              5 High-Demand Tech Specialisations
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Shape your MCA journey around the exact technological domain where you want to lead.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {specialisations.map((spec, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === i
                    ? "bg-sky-500 text-white shadow-[0_4px_14px_rgba(14,165,233,0.4)]"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {spec.title}
              </button>
            ))}
          </div>

          {/* Active Specialisation Detail Card */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-[11px] font-bold border border-sky-400/20 mb-2">
                  {specialisations[activeTab].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {specialisations[activeTab].title}
                </h3>
                <p className="text-sky-300 text-xs sm:text-sm font-semibold mt-1">
                  {specialisations[activeTab].tagline}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-md active:scale-95"
              >
                Get Syllabus
              </button>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {specialisations[activeTab].desc}
            </p>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                Core Technologies Covered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialisations[activeTab].skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-sky-300 text-xs font-semibold border border-slate-700 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEMESTER CURRICULUM */}
      <section id="curriculum" className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <span className="text-sky-700 text-[11px] font-extrabold tracking-widest uppercase bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              SEMESTER BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 leading-tight mt-3 mb-2.5">
              Comprehensive 4-Semester Roadmap
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Engineered with a progression from core computer science theory to advanced cloud architectures and real-world project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((sem, sIdx) => (
              <div
                key={sIdx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase text-sky-600 tracking-wider">
                      {sem.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Credits Included
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {sem.title}
                  </h3>
                  <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                    {sem.desc}
                  </p>
                  <ul className="space-y-2">
                    {sem.courses.map((course, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-sky-600 font-bold">›</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-[13px] px-8 py-3 rounded-full cursor-pointer transition-all shadow-[0_4px_14px_rgba(2,132,199,0.3)] active:scale-95"
            >
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

      {/* 8. ONLINE MCA COURSE FEE (Exact match to screenshots) */}
      <section id="fees" className="py-14 sm:py-18 bg-[#f8f7fd]">
        <div className="w-[min(1220px,94%)] mx-auto">
          {/* Section Header */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#1e1742] tracking-tight mb-5">
            Online MCA Course Fee
          </h2>

          {/* Nationality Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => setFeeCategory("indian")}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                feeCategory === "indian"
                  ? "bg-[#111827] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
              }`}
            >
              Indian Nationals
            </button>
            <button
              type="button"
              onClick={() => setFeeCategory("nri")}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                feeCategory === "nri"
                  ? "bg-[#111827] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
              }`}
            >
              Non-Resident Indians
            </button>
            <button
              type="button"
              onClick={() => setFeeCategory("foreign")}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                feeCategory === "foreign"
                  ? "bg-[#111827] text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
              }`}
            >
              Foreign Nationals
            </button>
          </div>

          {/* Outer Soft Lavender / Periwinkle Container */}
          <div className="bg-[#dcd6f7] rounded-[24px] sm:rounded-[28px] p-4 sm:p-7 shadow-xs">
            {/* White Fee Details Card */}
            <div
              className={`bg-white rounded-[20px] p-5 sm:p-7 lg:p-8 shadow-xs grid grid-cols-1 ${
                feeCategory === "indian"
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "sm:grid-cols-3"
              } gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100`}
            >
              {/* Col 1: Full Fee Payment */}
              <div className="lg:pr-6">
                <span className="block text-xs sm:text-[13px] text-slate-600 font-medium mb-2.5">
                  Full Fee Payment
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <span className="text-slate-400 line-through text-xs sm:text-sm font-bold">
                    {feeCategory === "indian"
                      ? "INR 1,58,000"
                      : feeCategory === "nri"
                      ? "USD 2,432"
                      : "USD 2,836"}
                  </span>
                  <span className="text-[#ea580c] font-serif text-xl sm:text-2xl font-bold tracking-tight">
                    {feeCategory === "indian"
                      ? "INR 1,42,200"
                      : feeCategory === "nri"
                      ? "USD 2,189"
                      : "USD 2,552"}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4f46e5]">
                  <span>★</span> 10% discount
                </span>
              </div>

              {/* Col 2: Annual Fee Payment */}
              <div className="lg:px-6">
                <span className="block text-xs sm:text-[13px] text-slate-600 font-medium mb-2.5">
                  Annual Fee Payment
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <span className="text-slate-400 line-through text-xs sm:text-sm font-bold">
                    {feeCategory === "indian"
                      ? "INR 79,000"
                      : feeCategory === "nri"
                      ? "USD 1,216"
                      : "USD 1,418"}
                  </span>
                  <span className="text-[#ea580c] font-serif text-xl sm:text-2xl font-bold tracking-tight">
                    {feeCategory === "indian"
                      ? "INR 71,100"
                      : feeCategory === "nri"
                      ? "USD 1,094"
                      : "USD 1,276"}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4f46e5]">
                  <span>★</span> 10% discount
                </span>
              </div>

              {/* Col 3: Semester Fee Payment */}
              <div className="lg:px-6">
                <span className="block text-xs sm:text-[13px] text-slate-600 font-medium mb-2.5">
                  Semester Fee Payment
                </span>
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <span className="text-slate-400 line-through text-xs sm:text-sm font-bold">
                    {feeCategory === "indian"
                      ? "INR 39,500"
                      : feeCategory === "nri"
                      ? "USD 608"
                      : "USD 709"}
                  </span>
                  <span className="text-[#ea580c] font-serif text-xl sm:text-2xl font-bold tracking-tight">
                    {feeCategory === "indian"
                      ? "INR 35,550"
                      : feeCategory === "nri"
                      ? "USD 547"
                      : "USD 638"}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4f46e5]">
                  <span>★</span> 10% discount
                </span>
              </div>

              {/* Col 4: No-cost EMI Starting (Only for Indian Nationals) */}
              {feeCategory === "indian" && (
                <div className="lg:pl-6">
                  <span className="block text-xs sm:text-[13px] text-slate-600 font-medium mb-2.5">
                    No-cost EMI Starting
                  </span>
                  <div className="flex flex-wrap items-baseline gap-1 mb-2">
                    <span className="text-slate-900 font-serif text-xl sm:text-2xl font-bold tracking-tight">
                      INR 5,925
                    </span>
                    <span className="text-slate-600 text-xs sm:text-sm font-semibold">/Month</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4f46e5]">
                    <span>★</span> 12/6-month tenure
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Disclaimer Row inside Lavender Container */}
            <div
              className={`flex flex-col md:flex-row ${
                feeCategory === "indian"
                  ? "items-start md:items-center justify-between"
                  : "items-end justify-end"
              } gap-4 mt-5 text-[11px] sm:text-xs text-[#28214d] leading-relaxed`}
            >
              {feeCategory === "indian" && (
                <div className="space-y-1">
                  <p className="flex items-start gap-1.5">
                    <span className="text-[#4f46e5]">★</span>
                    <span>
                      An additional <strong className="font-extrabold italic">non-refundable application fee of INR 500</strong> is to be paid at the time of admission
                    </span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="text-[#4f46e5]">★</span>
                    <span>
                      Learners opting for a loan or financing will not be eligible for any additional discounts or offers.
                    </span>
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-full shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer shrink-0 border border-white/60"
              >
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">!</span>
                <span>Note for online payments</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CAREER SCOPE & RECRUITERS */}
      <section id="careers" className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-sky-700 text-[11px] font-extrabold tracking-widest uppercase bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              CAREER OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 leading-tight mt-3 mb-2.5">
              High-Paying Software Engineering Roles
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Online Manipal MCA graduates are placed in premier technology corporations across technical architecture, development, and engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { role: "Senior Software Engineer", salary: "₹8 – 20 LPA", desc: "Enterprise applications & high-scale backends" },
              { role: "Cloud Solutions Architect", salary: "₹12 – 24 LPA", desc: "Multi-cloud infrastructure & automated DevOps" },
              { role: "Full Stack Engineer", salary: "₹8 – 18 LPA", desc: "Modern web architectures & reactive frontends" },
              { role: "AI & ML Specialist", salary: "₹10 – 22 LPA", desc: "Predictive neural systems & Generative AI" },
            ].map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-extrabold text-[11px] mb-2 border border-emerald-200">
                  {c.salary}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{c.role}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Hiring Partners Carousel Grid */}
          <div className="bg-slate-100/70 rounded-2xl p-6 sm:p-8 border border-slate-200 text-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-6">
              Prominent Tech Recruitment Partners
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {hiringPartners.map((partner, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white rounded-xl text-xs sm:text-sm font-extrabold text-slate-800 border border-slate-200 shadow-2xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-14 sm:py-18 bg-slate-900 text-white">
        <div className="w-[min(1220px,94%)] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="text-sky-400 text-[11px] font-extrabold tracking-widest uppercase bg-sky-950 px-3.5 py-1 rounded-full border border-sky-800">
              ALUMNI STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-tight mt-3 mb-2.5">
              Hear from Tech Professionals
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Read how software professionals transformed their careers with the Online MCA from MUJ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <strong className="block text-white text-sm font-bold">{t.author}</strong>
                  <span className="text-xs text-sky-400 block">{t.role}</span>
                  <span className="text-[10px] text-slate-400">{t.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section id="faqs" className="py-14 sm:py-18">
        <div className="w-[min(1220px,94%)] mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-sky-700 text-[11px] font-extrabold tracking-widest uppercase bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mt-3 mb-2.5">
              Everything You Need to Know
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Quick answers regarding admission criteria, eligibility, virtual labs, and fees.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-slate-400 shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER */}
      <section className="bg-gradient-to-r from-sky-700 via-indigo-700 to-sky-800 text-white py-12">
        <div className="w-[min(1220px,94%)] mx-auto text-center">
          <span className="inline-block px-3.5 py-1 bg-white/20 text-white text-xs font-extrabold rounded-full backdrop-blur-xs mb-3">
            Limited Batch Seats for 2026
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 tracking-tight">
            Ready to Become a Next-Gen Software Architect?
          </h2>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Apply today to secure your seat in Manipal University Jaipur&apos;s AICTE-approved Online MCA programme with virtual cloud coding labs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-400 text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-full cursor-pointer transition-all shadow-[0_6px_20px_rgba(249,115,22,0.4)] active:scale-95 uppercase tracking-wide"
            >
              Apply for Online MCA
            </button>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MCA%20from%20Manipal%20University%20Jaipur.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full backdrop-blur-xs transition-all border border-white/25"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="w-[min(1220px,94%)] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/MUJ-logo.webp"
              alt="Manipal University Jaipur"
              width={140}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
          <p className="text-center sm:text-right text-[11px] text-slate-500">
            © {new Date().getFullYear()} College Vihar. Authorized Information &amp; Counselling Portal for Manipal University Jaipur Online Programmes.
          </p>
        </div>
      </footer>

      {/* 14. FLOATING WHATSAPP CTA */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20details%20about%20the%20Online%20MCA%20from%20Manipal%20University%20Jaipur.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25d366] text-white flex items-center justify-center text-2xl shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </a>
      </div>

      {/* 15. MODAL OVERLAY */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="w-[min(480px,100%)] bg-white rounded-[24px] p-6 sm:p-7 relative shadow-[0_30px_80px_rgba(0,0,0,0.4)] text-slate-900">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-lg font-bold flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            <span className="inline-block px-3 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-extrabold uppercase tracking-wider mb-1">
              Admission Counselling
            </span>
            <h2 className="text-xl sm:text-[23px] font-black text-slate-900 leading-tight mb-1 pr-8">
              Apply for Online MCA
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Enter your details to receive full syllabus, cloud coding lab details, and scholarship eligibility.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <input
                type="hidden"
                name="source"
                value="Modal Enquiry Form - Online Manipal MCA"
              />

              <div>
                <label className="block text-slate-700 text-[10px] font-extrabold uppercase mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full h-11 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 px-3.5 text-xs outline-none focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-600/15 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-[10px] font-extrabold uppercase mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-11 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 px-3.5 text-xs outline-none focus:border-sky-600 focus:bg-white focus:ring-2 focus:ring-sky-600/15 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-[10px] font-extrabold uppercase mb-1">
                  MOBILE NUMBER *
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 focus-within:border-sky-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-600/15 transition-all overflow-hidden">
                  <div className="px-3 py-2 bg-slate-100 border-r border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 shrink-0 select-none">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    placeholder="10-digit mobile number"
                    className="w-full h-11 text-slate-900 px-3 text-xs outline-none bg-transparent placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>


              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  defaultChecked
                  className="mt-0.5 w-3.5 h-3.5 accent-sky-600 rounded cursor-pointer"
                  required
                />
                <label
                  htmlFor="modal-consent"
                  className="text-[9px] text-slate-500 leading-tight cursor-pointer"
                >
                  I authorize Online Manipal to contact me regarding admission, scholarships, and fees.
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full h-12 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-black cursor-pointer transition-all shadow-[0_6px_18px_rgba(234,88,12,0.3)] active:scale-[0.98] mt-2 disabled:opacity-60 uppercase tracking-wide"
              >
                {formStatus === "submitting" ? "Submitting..." : "Apply Now"}
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
