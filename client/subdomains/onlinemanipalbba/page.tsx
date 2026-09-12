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
  universityName: "Manipal University Jaipur (Online Manipal)",
  universityShortName: "Online Manipal",
  programName: "Online Bachelor of Business Administration (BBA)",
  degreeType: "Undergraduate Degree in Business Administration",
  duration: "3 Years (6 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "NAAC A+ Accredited (3.28 CGPA)",
    "WES Recognized",
    "NIRF Top Ranked",
    "AIU Recognized",
  ],
  badge: "ADMISSIONS OPEN FOR 2026 BATCH",
  heroTitle:
    "Online Manipal BBA – Fees, Eligibility, Specialisations & Admission 2026",
  heroSubtitle:
    "Start your business career with Manipal University Jaipur's NAAC A+ UGC-DEB approved 3-Year Online BBA. Comprehensive management modules, free Coursera access, and career mentorship.",
  heroFacts: [
    "3-Year UGC-DEB Recognized Online BBA",
    "NAAC A+ Accredited Top University",
    "Free Coursera Enterprise Certifications",
    "Modern Curriculum in Marketing, Finance, HR & Analytics",
    "Placement Support & Internship Guidance",
    "Affordable Semester Fees with 0% EMI",
  ],
  stats: [
    { label: "Duration", value: "3 Years / 6 Sems" },
    { label: "Accreditation", value: "NAAC A+ (3.28)" },
    { label: "Level", value: "Undergraduate" },
    { label: "Eligibility", value: "10+2 Passed" },
  ],
  whyChoose: [
    {
      title: "Manipal Academic Prestige",
      description:
        "Earn an undergraduate degree from Manipal University Jaipur, backed by a 70+ year legacy of excellence in higher education.",
    },
    {
      title: "UGC-DEB Recognized & Globally Accepted",
      description:
        "Equivalent to a regular on-campus BBA degree for higher studies (MBA, MS abroad) and corporate/government jobs.",
    },
    {
      title: "Free Coursera Certifications",
      description:
        "Build specialized skills with free verified certificates from Google, IBM, and top global institutions.",
    },
    {
      title: "Preparation for MBA & Top Jobs",
      description:
        "Gain in-depth fundamentals in finance, marketing, and business analytics to crack CAT/GMAT or corporate interviews.",
    },
    {
      title: "Flexible Online Learning Environment",
      description:
        "Study on your smartphone, tablet, or laptop anytime without compromising on internships or hobbies.",
    },
    {
      title: "Convenient Low-Cost EMI",
      description:
        "Make higher education budget-friendly with zero-cost monthly installments.",
    },
  ],
  overview: [
    {
      label: "Degree Awarded",
      value: "Bachelor of Business Administration (BBA)",
    },
    { label: "University", value: "Manipal University Jaipur (MUJ)" },
    { label: "Accreditations", value: "UGC-DEB, NAAC A+, WES, AIU" },
    { label: "Duration", value: "3 Years (6 Semesters)" },
    { label: "Mode of Delivery", value: "100% Online" },
    {
      label: "Eligibility",
      value:
        "10+2 (Higher Secondary) in any stream with min. 45% (40% for reserved)",
    },
    { label: "Total Program Fee", value: "Rs. 1,35,000*" },
    { label: "Per Semester Fee", value: "Rs. 22,500*" },
    { label: "EMI Starting", value: "Rs. 3,750/month*" },
    {
      label: "Career Support",
      value: "Internship Assistance & Placement Cell",
    },
  ],
  specialisations: [
    {
      title: "Marketing Management",
      description:
        "Consumer behaviour, sales management, branding, and digital growth marketing.",
    },
    {
      title: "Finance & Banking",
      description:
        "Financial accounting, banking operations, investment analysis, and financial planning.",
    },
    {
      title: "Human Resource Management",
      description:
        "Talent acquisition, organizational culture, payroll, and workplace ethics.",
    },
    {
      title: "Operations & Supply Chain",
      description:
        "Logistics, inventory management, supply chain strategy, and procurement.",
    },
  ],
  curriculum: [
    {
      semester: "Semester 1",
      description:
        "Principles of Management, Business Economics, Accounting for Managers, Business Mathematics, English Communication.",
      subjects: [
        "Principles of Management",
        "Business Economics",
        "Accounting for Managers",
        "Business Mathematics",
        "English Communication",
      ],
    },
    {
      semester: "Semester 2",
      description:
        "Organizational Behaviour, Business Statistics, Marketing Management Fundamentals, Computer Applications in Business, Environmental Studies.",
      subjects: [
        "Organizational Behaviour",
        "Business Statistics",
        "Marketing Management Fundamentals",
        "Computer Applications in Business",
        "Environmental Studies",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Financial Management, Human Resource Management, Operations Management, Business Law, Research Methodology.",
      subjects: [
        "Financial Management",
        "Human Resource Management",
        "Operations Management",
        "Business Law",
        "Research Methodology",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Management Information Systems (MIS), International Business, Cost Accounting, Specialisation Elective 1.",
      subjects: [
        "Management Information Systems (MIS)",
        "International Business",
        "Cost Accounting",
        "Specialisation Elective Track 1",
      ],
    },
    {
      semester: "Semester 5",
      description:
        "Strategic Management, Entrepreneurship & Small Business, Specialisation Elective 2, Specialisation Elective 3, Summer Project.",
      subjects: [
        "Strategic Management",
        "Entrepreneurship & Small Business",
        "Specialisation Elective Track 2",
        "Specialisation Elective Track 3",
        "Summer Internship Project",
      ],
    },
    {
      semester: "Semester 6",
      description:
        "Business Ethics & Corporate Governance, Specialisation Elective 4, Specialisation Elective 5, Final Capstone Project.",
      subjects: [
        "Business Ethics & Corporate Governance",
        "Specialisation Elective Track 4",
        "Specialisation Elective Track 5",
        "Final Graduation Project / Dissertation",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,35,000*",
    semesterFee: "Rs. 22,500 per semester",
    annualFee: "Rs. 45,000 per year",
    emiStarting: "Rs. 3,750 / month",
    description:
      "Highly affordable fee structure with semester-wise payment schedules and 0% interest No-Cost EMI facilities.",
  },
  eligibility: [
    {
      title: "10+2 Qualification",
      description:
        "Completed 10+2 (Higher Secondary) from a recognized Central/State board (CBSE, ISC, State Boards) or equivalent.",
    },
    {
      title: "Stream Eligibility",
      description:
        "Students from Commerce, Science, or Humanities/Arts streams are all eligible.",
    },
    {
      title: "Minimum Marks",
      description:
        "Minimum 45% aggregate marks in 10+2 (40% for candidates belonging to reserved categories).",
    },
  ],
  careerRoles: [
    {
      title: "Management Trainee",
      description:
        "Fast-track rotational training across marketing, finance, and operations.",
      avgSalary: "₹4 – 7 LPA",
    },
    {
      title: "Digital Marketing Specialist",
      description:
        "Run search ads, social media campaigns, and customer retention strategies.",
      avgSalary: "₹3.5 – 6.5 LPA",
    },
    {
      title: "Human Resource Coordinator",
      description:
        "Support recruitment, employee onboarding, and HR operations.",
      avgSalary: "₹3.5 – 6 LPA",
    },
    {
      title: "Financial Analyst Assistant",
      description:
        "Analyze financial data, prepare reports, and assist with ledger reconciliation.",
      avgSalary: "₹4 – 7.5 LPA",
    },
    {
      title: "Sales & Account Executive",
      description:
        "Manage client relations, product presentations, and business sales.",
      avgSalary: "₹4 – 7 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Inquire on College Vihar",
      description:
        "Submit your basic details to get guidance from a dedicated education counselor.",
    },
    {
      number: "02",
      title: "Document Verification",
      description:
        "Upload your 10th and 12th mark sheets and photo ID proof online.",
    },
    {
      number: "03",
      title: "Pay Semester Fee / EMI",
      description:
        "Pay the initial semester fee or choose the zero-interest monthly EMI plan.",
    },
    {
      number: "04",
      title: "Access LMS & Coursera",
      description:
        "Receive your student login credentials and begin classes on the Online Manipal LMS.",
    },
  ],
  faqs: [
    {
      question:
        "Is Online Manipal BBA recognized for government jobs and exams?",
      answer:
        "Yes. Manipal University Jaipur is UGC-DEB entitled. Its Online BBA degree is 100% valid for all Government, Banking, SSC, and UPSC civil service examinations.",
    },
    {
      question: "Can I pursue an MBA after completing this online BBA?",
      answer:
        "Absolutely. This degree is recognized globally and enables you to apply for MBA programs in India (IIMs, XLRI, Symbiosis, etc.) or top universities abroad.",
    },
    {
      question: "Are live classes mandatory?",
      answer:
        "No, live classes are conducted on weekends, and their recordings are available 24/7 on the LMS along with reading materials and e-books.",
    },
    {
      question: "What is the fee for Online Manipal BBA?",
      answer:
        "The total fee is Rs. 1,35,000*. You can pay Rs. 22,500 per semester or choose EMI starting from Rs. 3,750/month.",
    },
  ],
  seo: {
    title: "Online Manipal BBA 2026 – Admission, Fees, Eligibility & Syllabus",
    description:
      "Get complete details on Manipal University Jaipur Online BBA 2026. Explore semester subjects, fees, eligibility criteria, and apply with College Vihar guidance.",
    keywords: [
      "online manipal bba",
      "manipal online bba fees",
      "muj online bba admission",
      "online bba manipal university",
      "online manipal bba eligibility",
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

export default function OnlineManipalBbaPage({
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
