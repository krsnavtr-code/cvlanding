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
  programName: "Online Master of Computer Applications (MCA)",
  degreeType: "Postgraduate Degree in Computer Applications",
  duration: "2 Years (4 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "AICTE Approved",
    "NAAC A+ Accredited (3.28 CGPA)",
    "WES Recognized",
    "NIRF Ranked",
  ],
  badge: "ADMISSIONS OPEN FOR SOFTWARE PROFESSIONALS 2026",
  heroTitle:
    "Online Manipal MCA – Fees, Syllabus, Specialisations & Admission 2026",
  heroSubtitle:
    "Become a future-ready software engineer with Manipal University Jaipur's AICTE-approved 2-Year Online MCA. Specialisations in Cloud, Full Stack, and Data Analytics with Coursera access.",
  heroFacts: [
    "2-Year AICTE & UGC-DEB Approved Online MCA",
    "NAAC A+ Accredited Top University",
    "Specialisations in Cloud, Data Analytics & Full Stack",
    "Virtual Coding Labs & Live Industry Projects",
    "Complimentary Coursera Enterprise Subscriptions",
    "Comprehensive Placement Support with 500+ Tech Recruiters",
  ],
  stats: [
    { label: "Duration", value: "2 Years / 4 Sems" },
    { label: "Accreditation", value: "AICTE & NAAC A+" },
    { label: "Tech Labs", value: "Cloud-Based Labs" },
    { label: "Recruiters", value: "500+ Companies" },
  ],
  whyChoose: [
    {
      title: "AICTE & UGC-DEB Recognised",
      description:
        "100% legitimate post-graduate technical degree valid for top software companies, PSU technical roles, and global tech migration.",
    },
    {
      title: "Cutting-Edge Tech Specialisations",
      description:
        "Study Cloud Architecture, Big Data Analytics, Full Stack Development, Cyber Security, and Machine Learning algorithms.",
    },
    {
      title: "Virtual Cloud Coding Labs",
      description:
        "Hands-on coding experience directly inside the LMS with real-time feedback, compilers, and project evaluation.",
    },
    {
      title: "Coursera Certifications Included",
      description:
        "Learn extra technical skills from Google, IBM, Meta, and AWS with free verified certificates.",
    },
    {
      title: "Tech Career & Placement Drives",
      description:
        "Interview preparation, Data Structures & Algorithms (DSA) training, coding mock interviews, and virtual campus placements.",
    },
    {
      title: "Affordable Fees & 0% EMI",
      description:
        "Pay semester-by-semester or use hassle-free monthly EMI plans with zero interest.",
    },
  ],
  overview: [
    { label: "Degree Awarded", value: "Master of Computer Applications (MCA)" },
    { label: "University", value: "Manipal University Jaipur (MUJ)" },
    { label: "Approvals", value: "AICTE, UGC-DEB, NAAC A+, WES" },
    { label: "Duration", value: "2 Years (4 Semesters)" },
    { label: "Mode of Delivery", value: "100% Online" },
    {
      label: "Eligibility",
      value:
        "BCA / B.Sc (CS/IT) / B.Tech or graduation with Math at 10+2 / UG with min. 50%",
    },
    { label: "Total Program Fee", value: "Rs. 1,58,000*" },
    { label: "Per Semester Fee", value: "Rs. 39,500*" },
    { label: "EMI Starting", value: "Rs. 6,580/month*" },
    {
      label: "Placement Support",
      value: "Dedicated Career Team & Virtual Hiring Fairs",
    },
  ],
  specialisations: [
    {
      title: "Cloud Computing",
      description:
        "AWS, Google Cloud, Azure infrastructure, Docker, Kubernetes, and microservices architecture.",
    },
    {
      title: "Full Stack Development",
      description:
        "Modern frontends (React, Next.js), backend APIs (Node.js, Spring Boot), and scalable DB design.",
    },
    {
      title: "Data Analytics & Big Data",
      description:
        "Statistical modeling, big data pipelines with Spark, Python data science libraries, and BI dashboards.",
    },
    {
      title: "Artificial Intelligence & ML",
      description:
        "Supervised/unsupervised algorithms, deep learning neural networks, and NLP text intelligence.",
    },
    {
      title: "Cyber Security",
      description:
        "Application security, penetration testing, cryptography, and network defense strategies.",
    },
  ],
  curriculum: [
    {
      semester: "Semester 1",
      description:
        "Programming in Java, Advanced Data Structures & Algorithms, Computer Organization & Architecture, Relational Database Management Systems, Discrete Mathematics.",
      subjects: [
        "Programming in Java",
        "Advanced Data Structures & Algorithms",
        "Computer Organization & Architecture",
        "Relational Database Management Systems",
        "Discrete Mathematics",
      ],
    },
    {
      semester: "Semester 2",
      description:
        "Operating Systems & Linux, Software Engineering & Agile, Web Technologies & Scripting, Python Programming, Cloud Fundamentals.",
      subjects: [
        "Operating Systems & Linux",
        "Software Engineering & Agile",
        "Web Technologies & Scripting",
        "Python Programming",
        "Cloud Fundamentals",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Machine Learning & AI, Computer Networks & Security, Specialisation Track Elective 1, Specialisation Track Elective 2, Minor Software Project.",
      subjects: [
        "Machine Learning & AI",
        "Computer Networks & Security",
        "Specialisation Track Elective 1",
        "Specialisation Track Elective 2",
        "Minor Software Project & Code Review",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Advanced Specialisation Elective 3, Advanced Specialisation Elective 4, Major Industry Capstone Project / Live Coding Internship.",
      subjects: [
        "Advanced Specialisation Elective 3",
        "Advanced Specialisation Elective 4",
        "Major Industry Capstone Project",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,58,000*",
    semesterFee: "Rs. 39,500 per semester",
    annualFee: "Rs. 79,000 per year",
    emiStarting: "Rs. 6,580 / month",
    description:
      "Flexible payment options with per-semester fee payments and zero-cost EMI plans. Scholarships available for eligible categories.",
  },
  eligibility: [
    {
      title: "Academic Background",
      description:
        "Passed BCA / B.Sc (Computer Science) / B.Sc (IT) / B.Tech or equivalent degree from a recognized university.",
    },
    {
      title: "Non-CS Graduates",
      description:
        "Candidates with BA / B.Com / B.Sc who have passed Mathematics / Statistics at 10+2 or Graduation level are also eligible.",
    },
    {
      title: "Minimum Aggregate",
      description:
        "Minimum 50% aggregate marks in graduation (45% for reserved category candidates).",
    },
  ],
  careerRoles: [
    {
      title: "Senior Software Engineer",
      description:
        "Architect, develop, and maintain high-scale software applications.",
      avgSalary: "₹8 – 20 LPA",
    },
    {
      title: "Full Stack Engineer",
      description:
        "Build end-to-end web architectures, microservices, and client applications.",
      avgSalary: "₹8 – 18 LPA",
    },
    {
      title: "Cloud Solutions Architect",
      description:
        "Design cloud infrastructure, disaster recovery, and DevOps automation.",
      avgSalary: "₹12 – 24 LPA",
    },
    {
      title: "Data Engineer / Analyst",
      description:
        "Create scalable data processing pipelines and business analytics models.",
      avgSalary: "₹7 – 16 LPA",
    },
    {
      title: "AI & ML Specialist",
      description:
        "Develop generative AI applications and computer vision/NLP systems.",
      avgSalary: "₹10 – 22 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Consult with Expert",
      description:
        "Fill out the inquiry form to evaluate your profile and get fee/specialisation advice.",
    },
    {
      number: "02",
      title: "Upload Academic Proofs",
      description:
        "Submit your 10th, 12th, and graduation marksheets along with photo ID proof.",
    },
    {
      number: "03",
      title: "Complete Fee Payment / EMI",
      description:
        "Pay the semester fee online or activate the interest-free monthly installment plan.",
    },
    {
      number: "04",
      title: "Access LMS & Coding Labs",
      description:
        "Get your student credentials, access online labs, Coursera portal, and start attending classes.",
    },
  ],
  faqs: [
    {
      question: "Is Online Manipal MCA approved by AICTE?",
      answer:
        "Yes. Manipal University Jaipur's Online MCA is fully approved by AICTE and UGC-DEB, ensuring complete statutory compliance and recognition across industries.",
    },
    {
      question: "Can I do Online Manipal MCA while doing a full-time job?",
      answer:
        "Yes! The program is designed specifically for working professionals. You can attend live classes on weekends or view recorded sessions at your convenience.",
    },
    {
      question: "How are practicals and project work handled?",
      answer:
        "The university provides virtual coding labs and GitHub integrations. You will build and submit real-world coding assignments and a capstone project under mentor guidance.",
    },
    {
      question: "What is the fee for the Online MCA program?",
      answer:
        "The total program fee is Rs. 1,58,000*. You can pay Rs. 39,500 per semester or opt for monthly EMI starting from approx. Rs. 6,580/month.",
    },
  ],
  seo: {
    title: "Online Manipal MCA 2026 – Fees, Syllabus, Eligibility & Admission",
    description:
      "Comprehensive guide to Manipal University Online MCA 2026. Explore semester syllabus, eligibility, fees, cloud coding labs, and apply with College Vihar guidance.",
    keywords: [
      "online manipal mca",
      "manipal online mca fees",
      "muj online mca admission 2026",
      "online manipal mca syllabus",
      "online mca degree manipal",
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

export default function OnlineManipalMcaPage({
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
