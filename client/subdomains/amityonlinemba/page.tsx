import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import OverviewSection from "@/app/components/OverviewSection";
import SpecialisationsSection from "@/app/components/SpecialisationsSection";
import CurriculumSection from "@/app/components/CurriculumSection";
import FeeSection from "@/app/components/FeeSection";
import EligibilitySection from "@/app/components/EligibilitySection";
import CareerSection from "@/app/components/CareerSection";
import AdmissionProcessSection from "@/app/components/AdmissionProcessSection";
import FaqSection from "@/app/components/FaqSection";
import CtaBanner from "@/app/components/CtaBanner";
import Footer from "@/app/components/Footer";

export const data = {
  universityName: "Amity University Online",
  universityShortName: "Amity Online",
  programName: "Online Master of Business Administration (MBA)",
  degreeType: "Postgraduate Degree",
  duration: "2 Years (4 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "NAAC A+ Accredited",
    "QS World Ranked",
    "WES Recognized (USA & Canada)",
    "AICTE Approved",
  ],
  badge: "ADMISSIONS OPEN FOR 2026 BATCH",
  heroTitle:
    "Amity University Online MBA – Fees, Eligibility, Specialisations & Admission 2026",
  heroSubtitle:
    "Advance your leadership career with India's top QS-ranked online MBA. Flexible learning, global faculty, career mentoring, and recognized globally.",
  heroFacts: [
    "QS World Ranked Online MBA",
    "UGC-DEB & NAAC A+ Recognized",
    "10+ In-demand Specialisations",
    "Live & Recorded Interactive Lectures",
    "No-Cost EMI & Placement Support",
    "Global Faculty & Mentorship",
  ],
  stats: [
    { label: "Program Duration", value: "2 Years" },
    { label: "Learning Mode", value: "100% Online" },
    { label: "Accreditation", value: "NAAC A+" },
    { label: "Global Ranking", value: "Top QS Ranked" },
  ],
  whyChoose: [
    {
      title: "Globally Recognized Degree",
      description:
        "Amity Online MBA holds UGC-DEB, AICTE, and WES accreditations, making your degree valued across India and internationally.",
    },
    {
      title: "World-Class Learning Platform",
      description:
        "Learn anytime, anywhere through an advanced AI-powered LMS with live masterclasses, interactive case studies, and e-library access.",
    },
    {
      title: "Diverse Industry Specialisations",
      description:
        "Tailor your MBA with specialisations in Marketing, Finance, HR, Data Analytics, Digital Marketing, International Business, and more.",
    },
    {
      title: "Career Assistance & Placement Support",
      description:
        "Access exclusive placement drives, resume building sessions, mock interview prep, and networking with top hiring companies.",
    },
    {
      title: "Distinguished Global Faculty",
      description:
        "Gain insights from renowned academicians and Fortune 500 business leaders with deep industry experience.",
    },
    {
      title: "Affordable with Easy EMI",
      description:
        "Get flexible payment options with semester-wise fees and 0% interest No-Cost EMI facilities.",
    },
  ],
  overview: [
    {
      label: "Degree Awarded",
      value: "Master of Business Administration (MBA)",
    },
    { label: "University", value: "Amity University Online" },
    { label: "Approvals", value: "UGC-DEB, AICTE, NAAC A+, WES, AIU" },
    { label: "Duration", value: "2 Years (4 Semesters)" },
    {
      label: "Mode of Delivery",
      value: "Online (Live + Recorded Classes + LMS)",
    },
    {
      label: "Eligibility",
      value:
        "Graduation degree with min. 50% aggregate marks (45% for reserved)",
    },
    { label: "Total Program Fee", value: "Rs. 1,99,000*" },
    { label: "Per Semester Fee", value: "Rs. 49,750*" },
    { label: "EMI Starting", value: "Rs. 8,290/month*" },
    {
      label: "Career Support",
      value: "Virtual Job Fairs, Mentorship & Placement Drives",
    },
  ],
  specialisations: [
    {
      title: "Marketing & Sales Management",
      description:
        "Master digital marketing, consumer psychology, brand strategy, and high-conversion market growth techniques.",
    },
    {
      title: "Finance & Accounting",
      description:
        "In-depth focus on corporate finance, investment analysis, portfolio management, and financial modeling.",
    },
    {
      title: "Human Resource Management",
      description:
        "Learn modern talent acquisition, organisational psychology, HR analytics, and strategic HR leadership.",
    },
    {
      title: "Data Science & Analytics",
      description:
        "Equip yourself with big data tools, predictive analytics, statistical modelling, and data-driven management.",
    },
    {
      title: "Digital Marketing Management",
      description:
        "Gain expertise in SEO/SEM, social media marketing, content analytics, and digital brand building.",
    },
    {
      title: "International Business",
      description:
        "Understand global supply chains, cross-border trade, international finance, and multinational management.",
    },
    {
      title: "Information Technology Management",
      description:
        "Bridge business strategy and IT operations, cloud systems, cybersecurity governance, and digital transformation.",
    },
    {
      title: "Operations & Supply Chain",
      description:
        "Learn logistics optimisation, Six Sigma principles, inventory management, and lean operations.",
    },
  ],
  curriculum: [
    {
      semester: "Semester 1",
      description:
        "Managerial Economics, Management Concepts, Financial Accounting, Marketing Management, Business Communication.",
      subjects: [
        "Managerial Economics",
        "Management Concepts & Organisational Behaviour",
        "Accounting for Managers",
        "Marketing Management",
        "Business Communication & Soft Skills",
      ],
    },
    {
      semester: "Semester 2",
      description:
        "Human Resource Management, Financial Management, Operations Research, Business Law, Research Methodology.",
      subjects: [
        "Human Resource Management",
        "Financial Management",
        "Operations Research & Management",
        "Legal Aspects of Business",
        "Business Research Methodology",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Strategic Management, Professional Ethics, Core Specialisation Electives I & II, Practical Project Work.",
      subjects: [
        "Strategic Management",
        "Corporate Governance & Ethics",
        "Specialisation Core Elective 1",
        "Specialisation Core Elective 2",
        "Summer Internship / Live Project",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Advanced Specialisation Subjects, Global Business Environment, Final Master Dissertation / Capstone Project.",
      subjects: [
        "Global Business Environment",
        "Advanced Elective 1",
        "Advanced Elective 2",
        "Comprehensive Master Dissertation / Capstone",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,99,000*",
    semesterFee: "Rs. 49,750 per semester",
    annualFee: "Rs. 99,500 per year",
    emiStarting: "Rs. 8,290 / month",
    description:
      "Flexible payment options available including semester-wise payments, annual payments, and 0% interest No-Cost EMI plans.",
  },
  eligibility: [
    {
      title: "Educational Qualification",
      description:
        "Candidates must hold a Bachelor's degree in any discipline (BBA, B.Com, B.Tech, B.Sc, BA, etc.) from a recognized university.",
    },
    {
      title: "Minimum Marks Requirement",
      description:
        "Minimum 50% aggregate marks in graduation (45% for reserved category candidates as per regulatory norms).",
    },
    {
      title: "Work Experience & Entrance",
      description:
        "No mandatory CAT/MAT score required. Working professionals and fresh graduates are both eligible to apply.",
    },
  ],
  careerRoles: [
    {
      title: "Business Development Manager",
      description:
        "Lead corporate client partnerships, market expansion, and business growth strategies.",
      avgSalary: "₹8 – 16 LPA",
    },
    {
      title: "Marketing Manager / Brand Strategist",
      description:
        "Formulate end-to-end multi-channel marketing campaigns and drive brand positioning.",
      avgSalary: "₹9 – 18 LPA",
    },
    {
      title: "Financial Analyst / Investment Manager",
      description:
        "Analyze financial statements, investments, valuations, and corporate budgeting.",
      avgSalary: "₹10 – 20 LPA",
    },
    {
      title: "Human Resource Business Partner (HRBP)",
      description:
        "Align business objectives with talent development, organizational culture, and HR strategy.",
      avgSalary: "₹7 – 15 LPA",
    },
    {
      title: "Operations & Supply Chain Lead",
      description:
        "Streamline logistics, vendor management, process efficiency, and cost reductions.",
      avgSalary: "₹9 – 17 LPA",
    },
    {
      title: "Product Manager",
      description:
        "Drive product lifecycle, user research, roadmap prioritization, and go-to-market execution.",
      avgSalary: "₹12 – 24 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Enquire & Free Counselling",
      description:
        "Submit your basic details to connect with a College Vihar expert counselor for program & eligibility evaluation.",
    },
    {
      number: "02",
      title: "Document Verification",
      description:
        "Upload your 10th, 12th, graduation mark sheets, photo ID, and passport photograph for online verification.",
    },
    {
      number: "03",
      title: "Fee Payment & EMI Setup",
      description:
        "Pay the registration/semester fee online via net banking, credit/debit card, or opt for 0% interest EMI.",
    },
    {
      number: "04",
      title: "Enrollment & LMS Access",
      description:
        "Receive your official Student ID, LMS login credentials, and begin your online MBA classes.",
    },
  ],
  faqs: [
    {
      question: "Is Amity Online MBA valid for Government and Corporate Jobs?",
      answer:
        "Yes. Amity University Online MBA is fully approved by UGC-DEB and AICTE. It is 100% equivalent to a regular on-campus MBA degree for government exams (UPSC, SSC, Banking), higher studies (PhD), and private sector jobs globally.",
    },
    {
      question: "What is the fee structure and are EMI options available?",
      answer:
        "The total program fee is Rs. 1,99,000*. You can pay per semester (Rs. 49,750) or opt for No-Cost EMI starting from approx. Rs. 8,290/month without any additional interest.",
    },
    {
      question: "How are examinations conducted in Amity Online MBA?",
      answer:
        "All term-end examinations are conducted online through AI-proctored remote examination systems. You can take your exams comfortably from home using a laptop or PC with a webcam.",
    },
    {
      question: "Do I need to visit the university campus at any point?",
      answer:
        "No. The entire program—including orientation, lectures, assignment submissions, examinations, and project evaluations—is 100% online.",
    },
    {
      question: "Does Amity Online provide placement support?",
      answer:
        "Yes. Amity Online offers career support including virtual job fairs, resume workshops, interview preparation, and placement drives connecting students with over 500+ corporate hiring partners.",
    },
  ],
  seo: {
    title: "Amity University Online MBA – Admission, Fees, Eligibility 2026",
    description:
      "Get comprehensive details on Amity University Online MBA 2026. Explore fees, eligibility, syllabus, specialisations, career scope, and get free admission guidance.",
    keywords: [
      "amity online mba",
      "amity university online mba fees",
      "amity online mba admission 2026",
      "amity online mba eligibility",
      "amity distance mba",
      "online mba college vihar",
    ],
  },
};

export function getMetadata(): Metadata {
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: "website",
    },
  };
}

export default function AmityOnlineMbaPage({
  subdomain,
}: {
  subdomain: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#f7a51c]/30 selection:text-slate-900">
      <Navbar
        universityName={data.universityName}
        programName={data.programName}
        subdomain={subdomain}
      />
      <main className="flex-1">
        <HeroSection
          subdomain={subdomain}
          universityName={data.universityName}
          universityShortName={data.universityShortName}
          programName={data.programName}
          badge={data.badge}
          heroTitle={data.heroTitle}
          heroSubtitle={data.heroSubtitle}
          heroFacts={data.heroFacts}
          stats={data.stats}
          accreditations={data.accreditations}
        />
        <WhyChooseSection
          universityName={data.universityName}
          programName={data.programName}
          whyChoose={data.whyChoose}
        />
        <OverviewSection
          universityName={data.universityName}
          programName={data.programName}
          overview={data.overview}
        />
        <SpecialisationsSection
          universityName={data.universityName}
          programName={data.programName}
          specialisations={data.specialisations}
        />
        <CurriculumSection
          universityName={data.universityName}
          programName={data.programName}
          curriculum={data.curriculum}
        />
        <FeeSection
          universityName={data.universityName}
          programName={data.programName}
          feeDetails={data.feeDetails}
        />
        <EligibilitySection
          universityName={data.universityName}
          programName={data.programName}
          eligibility={data.eligibility}
        />
        <CareerSection
          universityName={data.universityName}
          programName={data.programName}
          careerRoles={data.careerRoles}
        />
        <AdmissionProcessSection
          universityName={data.universityName}
          programName={data.programName}
          admissionSteps={data.admissionSteps}
        />
        <FaqSection
          universityName={data.universityName}
          programName={data.programName}
          faqs={data.faqs}
        />
        <CtaBanner
          universityName={data.universityName}
          programName={data.programName}
          badge={data.badge}
        />
      </main>
      <Footer
        universityName={data.universityName}
        programName={data.programName}
      />
    </div>
  );
}
