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
  programName: "Online Bachelor of Business Administration (BBA)",
  degreeType: "Undergraduate Degree in Business & Management",
  duration: "3 Years (6 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "NAAC A+ Accredited",
    "QS World Ranked",
    "WES Recognized",
    "AIU Equivalent",
  ],
  badge: "ADMISSIONS OPEN FOR 10+2 PASS STUDENTS 2026",
  heroTitle:
    "Amity University Online BBA – Fees, Eligibility, Specialisations & Admission 2026",
  heroSubtitle:
    "Kickstart your corporate management journey with Amity's 3-Year Online BBA. Build foundational skills in marketing, finance, entrepreneurship, and digital business from day one.",
  heroFacts: [
    "3-Year UGC-DEB Approved Online BBA",
    "NAAC A+ Accredited University",
    "Interactive Case Studies & Real-world Business Projects",
    "Specialisations in Digital Marketing, HR, Finance & Retail",
    "Affordable Fees with Flexible No-Cost EMI",
    "Preparation for Top Corporate Entry Roles & CAT/MBA",
  ],
  stats: [
    { label: "Duration", value: "3 Years / 6 Sems" },
    { label: "Level", value: "Undergraduate" },
    { label: "Accreditation", value: "NAAC A+ & UGC" },
    { label: "Eligibility", value: "10+2 Passed" },
  ],
  whyChoose: [
    {
      title: "Solid Business Foundation",
      description:
        "Understand core management disciplines—Marketing, Accounting, Economics, Human Resources, and Business Law.",
    },
    {
      title: "Study at Your Own Pace",
      description:
        "Flexible online classes allow you to pursue other certifications, internships, or professional commitments simultaneously.",
    },
    {
      title: "Industry-Driven Curriculum",
      description:
        "Updated regularly with modern business tools, digital marketing insights, and practical case studies.",
    },
    {
      title: "Ideal Stepping Stone for MBA",
      description:
        "Build the conceptual rigor required to crack top MBA entrance exams (CAT, XAT, GMAT) or secure fast entry into the corporate world.",
    },
    {
      title: "Placement Assistance & Internships",
      description:
        "Amity Online provides access to internship boards, virtual campus hiring, and professional skill enhancement.",
    },
    {
      title: "Pocket-Friendly EMI Options",
      description:
        "Break your fees down into easy, interest-free monthly installments to make quality higher education easily accessible.",
    },
  ],
  overview: [
    {
      label: "Degree Awarded",
      value: "Bachelor of Business Administration (BBA)",
    },
    { label: "University", value: "Amity University Online" },
    { label: "Approvals", value: "UGC-DEB, NAAC A+, WES, AIU" },
    { label: "Duration", value: "3 Years (6 Semesters)" },
    { label: "Mode of Delivery", value: "100% Online" },
    {
      label: "Eligibility",
      value: "10+2 (Higher Secondary) in any stream with min. 50%",
    },
    { label: "Total Program Fee", value: "Rs. 1,65,000*" },
    { label: "Per Semester Fee", value: "Rs. 27,500*" },
    { label: "EMI Starting", value: "Rs. 4,580/month*" },
    {
      label: "Career Support",
      value: "Internship Assistance, Soft Skills Training & Job Portal",
    },
  ],
  specialisations: [
    {
      title: "Marketing Management",
      description:
        "Consumer behaviour, advertising, brand promotion, sales distribution, and market research.",
    },
    {
      title: "Finance & Accounting",
      description:
        "Corporate accounting, banking fundamentals, investment basics, and financial markets.",
    },
    {
      title: "Human Resource Management",
      description:
        "Workplace culture, employee recruitment, organizational ethics, and talent development.",
    },
    {
      title: "Digital Marketing",
      description:
        "Social media strategy, search engine optimization, content creation, and digital brand management.",
    },
    {
      title: "Retail & Sales Management",
      description:
        "Retail store operations, consumer relations, supply logistics, and modern merchandising.",
    },
    {
      title: "Entrepreneurship & Small Business",
      description:
        "Startup ideation, venture funding, business model creation, and enterprise innovation.",
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
        "Organizational Behaviour, Business Statistics, Marketing Fundamentals, IT Applications in Business, Environmental Studies.",
      subjects: [
        "Organizational Behaviour",
        "Business Statistics",
        "Marketing Fundamentals",
        "IT Applications in Business",
        "Environmental Studies",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Human Resource Management, Financial Management, Production & Operations, Business Law, Research Methodology.",
      subjects: [
        "Human Resource Management",
        "Financial Management",
        "Production & Operations",
        "Business Law",
        "Research Methodology",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Management Information Systems (MIS), International Business Basics, Cost Accounting, Elective 1.",
      subjects: [
        "Management Information Systems (MIS)",
        "International Business Basics",
        "Cost Accounting",
        "Specialisation Elective 1",
      ],
    },
    {
      semester: "Semester 5",
      description:
        "Strategic Management, Entrepreneurship Development, Elective 2, Elective 3, Summer Internship Project.",
      subjects: [
        "Strategic Management",
        "Entrepreneurship Development",
        "Elective 2",
        "Elective 3",
        "Summer Internship Project",
      ],
    },
    {
      semester: "Semester 6",
      description:
        "Business Ethics, Elective 4, Elective 5, Comprehensive Major Business Project / Dissertation.",
      subjects: [
        "Business Ethics",
        "Elective 4",
        "Elective 5",
        "Major Business Dissertation",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,65,000*",
    semesterFee: "Rs. 27,500 per semester",
    annualFee: "Rs. 55,000 per year",
    emiStarting: "Rs. 4,580 / month",
    description:
      "Affordable semester fee plan with 0% interest monthly installment schemes available for all eligible students.",
  },
  eligibility: [
    {
      title: "Educational Qualification",
      description:
        "Successful completion of 10+2 (Higher Secondary Education) from CBSE, ICSE, State Boards, or recognized international boards.",
    },
    {
      title: "Stream Requirement",
      description:
        "Students from any stream (Commerce, Science, or Arts) are eligible to apply.",
    },
    {
      title: "Minimum Aggregate",
      description:
        "Minimum 50% marks in 10+2 (45% for reserved category applicants as per rules).",
    },
  ],
  careerRoles: [
    {
      title: "Business Development Executive",
      description:
        "Drive lead generation, sales acquisition, and client relationship management.",
      avgSalary: "₹4 – 7 LPA",
    },
    {
      title: "Digital Marketing Executive",
      description:
        "Manage social campaigns, SEO, Google ads, and online customer conversions.",
      avgSalary: "₹3.5 – 6.5 LPA",
    },
    {
      title: "HR Executive / Recruiter",
      description:
        "Source candidates, coordinate interviews, and support onboarding operations.",
      avgSalary: "₹3.5 – 6 LPA",
    },
    {
      title: "Operations & Logistics Executive",
      description:
        "Assist with inventory management, supply chain flow, and vendor coordination.",
      avgSalary: "₹4 – 7 LPA",
    },
    {
      title: "Financial Analyst Trainee",
      description:
        "Assist in bookkeeping, budgeting, and quarterly financial review preparation.",
      avgSalary: "₹4 – 7.5 LPA",
    },
    {
      title: "Retail Store / Branch Assistant",
      description:
        "Manage in-store sales, customer query handling, and visual merchandise.",
      avgSalary: "₹3.5 – 6 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Connect with Counsellor",
      description:
        "Fill out the form on College Vihar to get personalized course, eligibility, and scholarship counselling.",
    },
    {
      number: "02",
      title: "Submit 10+2 Marksheets",
      description:
        "Upload your 10th & 12th passing certificates, Government ID proof, and photo for verification.",
    },
    {
      number: "03",
      title: "Pay Semester / EMI Fee",
      description:
        "Pay the affordable semester fee online or activate 0% interest monthly EMI.",
    },
    {
      number: "04",
      title: "Start Classes on LMS",
      description:
        "Get instant access to the digital classroom, textbooks, video lectures, and live sessions.",
    },
  ],
  faqs: [
    {
      question:
        "Is Amity Online BBA degree valid for higher studies like regular MBA?",
      answer:
        "Yes. Amity Online BBA is UGC-DEB recognized and fully eligible for admission into IIMs, top global business schools, and government jobs requiring a graduate degree.",
    },
    {
      question:
        "Can I prepare for competitive exams alongside Amity Online BBA?",
      answer:
        "Yes! Due to the flexible online structure and 24/7 access to recorded lectures, thousands of students prepare for CAT, UPSC, Banking, or Government exams alongside this BBA.",
    },
    {
      question: "How are examinations conducted?",
      answer:
        "Exams are held online through proctored web assessments. You can take them conveniently from home without visiting any examination centre.",
    },
    {
      question: "Is there any entrance exam to get admission in Online BBA?",
      answer:
        "No entrance exam is required. Admissions are granted based on your 10+2 percentage and document eligibility verification.",
    },
  ],
  seo: {
    title: "Amity University Online BBA 2026 – Admission, Fees & Eligibility",
    description:
      "Check Amity University Online BBA 2026 details. Learn about fees, syllabus, eligibility, career opportunities, and apply with College Vihar counselling support.",
    keywords: [
      "amity online bba",
      "amity university online bba fees",
      "amity online bba admission",
      "online bba after 12th",
      "amity online bba eligibility",
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

export default function AmityOnlineBbaPage({
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
