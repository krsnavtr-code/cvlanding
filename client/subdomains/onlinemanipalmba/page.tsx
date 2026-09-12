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
  programName: "Online Master of Business Administration (MBA)",
  degreeType: "Postgraduate Degree in Management",
  duration: "2 Years (4 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "NAAC A+ Accredited (3.28 CGPA)",
    "AICTE Approved",
    "WES Recognized (USA & Canada)",
    "NIRF Top Ranked University",
  ],
  badge: "ADMISSIONS OPEN FOR UPCOMING SESSION 2026",
  heroTitle:
    "Manipal University Jaipur Online MBA – Fees, Eligibility, Specialisations & Admission Guide",
  heroSubtitle:
    "Elevate your business leadership with Manipal's prestigious NAAC A+ UGC-DEB approved Online MBA. 14+ futuristic specialisations, industry webinars, Coursera credentials, and full placement assistance.",
  heroFacts: [
    "2-Year UGC-DEB & AICTE Approved MBA",
    "NAAC A+ Accredited with 3.28 CGPA",
    "14+ Industry-Aligned Specialisations",
    "Coursera Certification Included at No Extra Cost",
    "Placement Assistance & 500+ Hiring Partners",
    "Flexible 100% Online Exams with No-Cost EMI",
  ],
  stats: [
    { label: "Duration", value: "2 Years / 4 Sems" },
    { label: "Accreditation", value: "NAAC A+ (3.28)" },
    { label: "Hiring Partners", value: "500+ Companies" },
    { label: "Specialisations", value: "14+ Options" },
  ],
  whyChoose: [
    {
      title: "Prestigious Manipal Legacy",
      description:
        "Benefit from the 70+ year legacy of the Manipal Education group, trusted by millions of students and alumni worldwide.",
    },
    {
      title: "UGC-DEB & NAAC A+ Certified",
      description:
        "Recognised on par with regular on-campus MBA degrees for corporate jobs, government examinations, and global opportunities.",
    },
    {
      title: "14+ Specialized Career Tracks",
      description:
        "Choose in-demand specialisations like Finance, Marketing, HR, Analytics, IT & FinTech, Supply Chain, and Healthcare Management.",
    },
    {
      title: "Free Coursera Enterprise Access",
      description:
        "Get complimentary access to 10,000+ industry certifications from Google, IBM, AWS, and Meta during your degree.",
    },
    {
      title: "Dedicated Career & Placement Cell",
      description:
        "Virtual job fairs, resume reviews, 1-on-1 industry mentorship, and direct interviews with Fortune 500 companies.",
    },
    {
      title: "Flexible Financing with 0% EMI",
      description:
        "Budget-friendly fee structure with convenient semester-wise fee payments and zero-cost EMI plans.",
    },
  ],
  overview: [
    {
      label: "Degree Awarded",
      value: "Master of Business Administration (MBA)",
    },
    { label: "University", value: "Manipal University Jaipur (MUJ)" },
    { label: "Accreditations", value: "UGC-DEB, AICTE, NAAC A+, WES, AIU" },
    { label: "Duration", value: "2 Years (4 Semesters)" },
    { label: "Mode of Study", value: "100% Online (Live & Recorded Lectures)" },
    {
      label: "Eligibility",
      value:
        "Graduation (10+2+3) in any discipline with min. 50% marks (45% for reserved)",
    },
    { label: "Total Program Fee", value: "Rs. 1,75,000*" },
    { label: "Per Semester Fee", value: "Rs. 43,750*" },
    { label: "EMI Starting", value: "Rs. 7,290/month*" },
    {
      label: "Placement Support",
      value: "Dedicated Placement Cell with 500+ Recruiters",
    },
  ],
  specialisations: [
    {
      title: "Finance",
      description:
        "Corporate finance, equity analysis, financial risk management, and capital markets.",
    },
    {
      title: "Marketing",
      description:
        "Brand management, digital marketing, consumer insights, and international sales strategy.",
    },
    {
      title: "Human Resource Management",
      description:
        "Strategic HRM, talent analytics, labour relations, and organisational leadership.",
    },
    {
      title: "Analytics & Data Science",
      description:
        "Business intelligence, predictive modelling, Python for analytics, and big data strategies.",
    },
    {
      title: "IT & FinTech",
      description:
        "Financial technology innovations, blockchain, digital payments, and IT governance.",
    },
    {
      title: "Operations & Supply Chain",
      description:
        "Global supply chains, logistics optimisation, lean management, and quality control.",
    },
    {
      title: "International Business",
      description:
        "Cross-border strategy, foreign exchange management, and global trade compliance.",
    },
    {
      title: "Healthcare Management",
      description:
        "Hospital administration, healthcare informatics, and clinical operations management.",
    },
  ],
  curriculum: [
    {
      semester: "Semester 1",
      description:
        "Management Process & Organisational Behaviour, Managerial Economics, Financial & Management Accounting, Marketing Management, Business Communication.",
      subjects: [
        "Management Process & Organisational Behaviour",
        "Managerial Economics",
        "Financial & Management Accounting",
        "Marketing Management",
        "Business Communication",
      ],
    },
    {
      semester: "Semester 2",
      description:
        "Financial Management, Human Resource Management, Operations Management, Research Methodology & Statistical Analysis, Legal Aspects of Business.",
      subjects: [
        "Financial Management",
        "Human Resource Management",
        "Operations Management",
        "Research Methodology & Statistical Analysis",
        "Legal Aspects of Business",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Strategic Management, Business Analytics for Decision Making, Specialisation Elective Group 1, Specialisation Elective Group 2, Summer Project.",
      subjects: [
        "Strategic Management",
        "Business Analytics for Decision Making",
        "Specialisation Elective Track 1",
        "Specialisation Elective Track 2",
        "Summer Internship Project",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Corporate Governance & Ethics, Advanced Specialisation Elective Group 1, Advanced Specialisation Elective Group 2, Final Master Capstone Project.",
      subjects: [
        "Corporate Governance & Business Ethics",
        "Advanced Specialisation Elective 1",
        "Advanced Specialisation Elective 2",
        "Final Master Capstone Project",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,75,000*",
    semesterFee: "Rs. 43,750 per semester",
    annualFee: "Rs. 87,500 per year",
    emiStarting: "Rs. 7,290 / month",
    description:
      "Special scholarship schemes available for defense personnel, differently-abled, MUJ alumni, and merit holders. No-cost EMI available.",
  },
  eligibility: [
    {
      title: "Graduation Requirement",
      description:
        "Bachelor's degree (10+2+3 or 10+2+4) in any stream from an AIU/UGC recognised institution.",
    },
    {
      title: "Minimum Qualifying Score",
      description:
        "Minimum 50% aggregate marks in graduation (45% for candidates belonging to reserved categories).",
    },
    {
      title: "Working Professionals & Freshers",
      description:
        "Both fresh graduates and working professionals can apply. No mandatory entrance test cutoff required.",
    },
  ],
  careerRoles: [
    {
      title: "Strategy & Management Consultant",
      description:
        "Advise enterprise executives on growth, mergers, restructuring, and efficiency.",
      avgSalary: "₹12 – 22 LPA",
    },
    {
      title: "Senior Product Manager",
      description:
        "Oversee technology products from conceptualization to launch and market leadership.",
      avgSalary: "₹14 – 26 LPA",
    },
    {
      title: "Corporate Finance Manager",
      description:
        "Direct investment strategies, corporate forecasting, and treasury operations.",
      avgSalary: "₹10 – 20 LPA",
    },
    {
      title: "Digital Marketing Lead",
      description:
        "Head digital customer acquisition, brand strategy, and omnichannel marketing.",
      avgSalary: "₹9 – 18 LPA",
    },
    {
      title: "Supply Chain & Operations Director",
      description:
        "Lead supply chain networks, procurement, and warehouse logistics.",
      avgSalary: "₹11 – 21 LPA",
    },
    {
      title: "Talent Acquisition & HR Head",
      description:
        "Design executive recruitment, culture transformation, and retention programs.",
      avgSalary: "₹9 – 17 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Request Free Counselling",
      description:
        "Fill out the lead enquiry form to get connected with a certified College Vihar counselor.",
    },
    {
      number: "02",
      title: "Submit Application & Documents",
      description:
        "Provide digital copies of graduation mark sheets, government ID, and photograph for verification.",
    },
    {
      number: "03",
      title: "Pay Fees or Opt for 0% EMI",
      description:
        "Make online fee payment for Semester 1 or get instant approval for monthly installments.",
    },
    {
      number: "04",
      title: "LMS Access & Onboarding",
      description:
        "Receive your student login credentials and join the orientation session to start learning.",
    },
  ],
  faqs: [
    {
      question: "Is Online Manipal MBA equivalent to an on-campus MBA?",
      answer:
        "Yes. Under UGC regulations, online degrees awarded by UGC-DEB entitled NAAC A+ universities like Manipal University Jaipur are treated completely equal to regular degrees.",
    },
    {
      question: "What is the fee for Manipal University Online MBA?",
      answer:
        "The total fee for the 2-year Online MBA is Rs. 1,75,000*. You can pay Rs. 43,750 per semester or opt for monthly EMI starting from approx. Rs. 7,290/month.",
    },
    {
      question: "How are online exams conducted?",
      answer:
        "All term-end exams are conducted online using advanced AI-proctoring technology. You can take them from the comfort of your home at scheduled slots.",
    },
    {
      question: "Do I get free access to Coursera courses?",
      answer:
        "Yes! Online Manipal students receive complimentary access to the Coursera Enterprise learning portal with thousands of certifications from leading global institutions.",
    },
    {
      question: "Does Manipal University assist with job placements?",
      answer:
        "Yes. Online Manipal's dedicated placement team organizes virtual recruitment drives, interview prep, and provides access to 500+ hiring partners like Amazon, Deloitte, KPMG, and Accenture.",
    },
  ],
  seo: {
    title:
      "Online Manipal MBA 2026 – Fees, Admission, Eligibility & Specialisations",
    description:
      "Explore Manipal University Jaipur Online MBA 2026. Get all details about fees, eligibility, syllabus, specialisations, EMI, and apply through College Vihar.",
    keywords: [
      "online manipal mba",
      "manipal university online mba fees",
      "online manipal mba admission 2026",
      "muj online mba",
      "online manipal mba eligibility",
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

export default function OnlineManipalMbaPage({
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
