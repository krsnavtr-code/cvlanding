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
  programName: "Online Master of Computer Applications (MCA)",
  degreeType: "Postgraduate Degree in Computer Science & IT",
  duration: "2 Years (4 Semesters)",
  mode: "100% Online Learning",
  accreditations: [
    "UGC-DEB Approved",
    "NAAC A+ Accredited",
    "AICTE Approved",
    "WES Recognized",
    "QS Ranked",
  ],
  badge: "ADMISSIONS OPEN FOR TECH LEADERS 2026",
  heroTitle:
    "Amity University Online MCA – Fees, Syllabus, Specialisations & Admission 2026",
  heroSubtitle:
    "Transform into a high-demand Software Engineer, Cloud Architect, or AI Specialist with Amity's 2-Year Online MCA. Hands-on coding projects and industry-ready tech curriculum.",
  heroFacts: [
    "2-Year Online Post-Graduate Degree",
    "AICTE & UGC-DEB Approved MCA",
    "Specialisations in Cloud, AI, ML & Full Stack",
    "Hands-on Coding Labs & Real-World Projects",
    "Career Guidance & Tech Placement Drives",
    "Flexible Self-Paced & Live Online Sessions",
  ],
  stats: [
    { label: "Duration", value: "2 Years / 4 Sems" },
    { label: "Mode", value: "100% Online" },
    { label: "Accreditation", value: "AICTE & NAAC A+" },
    { label: "Tech Labs", value: "Virtual Coding Labs" },
  ],
  whyChoose: [
    {
      title: "AICTE & UGC-DEB Approved",
      description:
        "Earn a legitimate, highly respected technical Master's degree fully compliant with AICTE norms.",
    },
    {
      title: "High-Demand Industry Curriculum",
      description:
        "Study modern software development, Cloud Computing, Full-Stack Development, Artificial Intelligence, Machine Learning, and Cybersecurity.",
    },
    {
      title: "Cloud-Based Coding Labs",
      description:
        "Practice coding directly in your browser with interactive compiler tools, GitHub integration, and industry-grade developer frameworks.",
    },
    {
      title: "Placement & Technical Interview Prep",
      description:
        "Sharpen DSA (Data Structures & Algorithms), system design, and competitive coding with expert mentor feedback.",
    },
    {
      title: "Learn While You Work",
      description:
        "Ideal for working IT professionals and BCA/B.Sc graduates wanting to fast-track into high-paying senior tech roles.",
    },
    {
      title: "No-Cost EMI Options",
      description:
        "Affordable semester fee structure with 0% interest monthly installment plans.",
    },
  ],
  overview: [
    { label: "Degree Awarded", value: "Master of Computer Applications (MCA)" },
    { label: "University", value: "Amity University Online" },
    { label: "Approvals", value: "UGC-DEB, AICTE, NAAC A+, WES" },
    { label: "Duration", value: "2 Years (4 Semesters)" },
    {
      label: "Mode of Delivery",
      value: "100% Online (Live & Recorded Lectures + Labs)",
    },
    {
      label: "Eligibility",
      value:
        "BCA / Bachelor's in CS / IT or graduation with Math at 10+2 / UG level (min 50%)",
    },
    { label: "Total Program Fee", value: "Rs. 1,70,000*" },
    { label: "Per Semester Fee", value: "Rs. 42,500*" },
    { label: "EMI Starting", value: "Rs. 7,080/month*" },
    {
      label: "Career Support",
      value: "Coding Hackathons, Tech Job Fairs & Mentorship",
    },
  ],
  specialisations: [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Deep dive into Neural Networks, Natural Language Processing, Computer Vision, and Python-based AI frameworks.",
    },
    {
      title: "Cloud Computing & DevOps",
      description:
        "Master AWS/Azure architectures, Docker containers, Kubernetes, CI/CD pipelines, and microservices.",
    },
    {
      title: "Full Stack Web Development",
      description:
        "End-to-end modern web engineering with React, Node.js, Next.js, GraphQL, PostgreSQL, and scalable backend design.",
    },
    {
      title: "Data Science & Big Data",
      description:
        "Learn Hadoop, Spark, advanced data mining, predictive statistics, and big data pipeline engineering.",
    },
    {
      title: "Cyber Security & Ethical Hacking",
      description:
        "Understand network security, cryptography, penetration testing, ethical hacking, and threat mitigation.",
    },
    {
      title: "Software Engineering & Architecture",
      description:
        "Focus on enterprise design patterns, Agile Scrum, microservices, and large-scale software systems.",
    },
  ],
  curriculum: [
    {
      semester: "Semester 1",
      description:
        "Advanced Data Structures, Mathematical Foundations, Operating Systems, Advanced Database Management Systems, Object-Oriented Java.",
      subjects: [
        "Advanced Data Structures & Algorithms",
        "Mathematical Foundations of Computer Science",
        "Advanced DBMS & SQL",
        "Operating System Concepts & Shell Scripting",
        "Object-Oriented Programming with Java",
      ],
    },
    {
      semester: "Semester 2",
      description:
        "Software Engineering, Computer Networks, Python Programming, Web Technologies, Cloud Computing Fundamentals.",
      subjects: [
        "Software Engineering & Agile Methodologies",
        "Computer Networks & Protocols",
        "Python Programming for Data & Web",
        "Modern Web Technologies (HTML5/CSS3/JS)",
        "Cloud Computing Basics",
      ],
    },
    {
      semester: "Semester 3",
      description:
        "Specialisation Domain Electives I & II, AI & Machine Learning, Information Security, Minor Software Project.",
      subjects: [
        "Artificial Intelligence & Machine Learning",
        "Information & Cyber Security",
        "Elective 1 (Full Stack / Cloud / AI)",
        "Elective 2 (Big Data / DevOps)",
        "Minor Industry Project & Code Review",
      ],
    },
    {
      semester: "Semester 4",
      description:
        "Enterprise Application Development, Emerging Tech Electives, Major Capstone Software Dissertation / Project.",
      subjects: [
        "Enterprise Software Development",
        "Specialisation Advanced Elective",
        "Major Capstone Project / Live Industry Internship",
      ],
    },
  ],
  feeDetails: {
    totalFee: "Rs. 1,70,000*",
    semesterFee: "Rs. 42,500 per semester",
    annualFee: "Rs. 85,000 per year",
    emiStarting: "Rs. 7,080 / month",
    description:
      "Transparent fee structure with semester-wise payments, easy installments, and zero-cost EMI financing.",
  },
  eligibility: [
    {
      title: "Undergraduate Degree",
      description:
        "Passed BCA / B.Sc (Computer Science / IT) / B.Tech or equivalent Bachelor's degree from a recognized university.",
    },
    {
      title: "Non-Computer Science Graduates",
      description:
        "Graduates in BA, B.Com, B.Sc with Mathematics / Statistics at 10+2 level or Graduation level are also eligible (bridge courses may apply).",
    },
    {
      title: "Minimum Aggregate",
      description:
        "At least 50% marks in aggregate at graduation level (45% for reserved category applicants).",
    },
  ],
  careerRoles: [
    {
      title: "Software Development Engineer (SDE)",
      description:
        "Develop scalable web and mobile software applications for top tech firms.",
      avgSalary: "₹7 – 18 LPA",
    },
    {
      title: "Cloud / DevOps Architect",
      description:
        "Design cloud infrastructure, manage CI/CD pipelines, and ensure 99.99% uptime.",
      avgSalary: "₹10 – 22 LPA",
    },
    {
      title: "AI / Machine Learning Engineer",
      description:
        "Build, train, and deploy machine learning models and intelligent automation systems.",
      avgSalary: "₹10 – 25 LPA",
    },
    {
      title: "Full Stack Developer",
      description:
        "Architect and build end-to-end frontend and backend enterprise solutions.",
      avgSalary: "₹8 – 18 LPA",
    },
    {
      title: "Data Analyst & Engineer",
      description:
        "Extract, transform, and analyze enterprise data for business intelligence.",
      avgSalary: "₹7 – 15 LPA",
    },
    {
      title: "Cybersecurity Analyst",
      description:
        "Protect systems and networks against security breaches and vulnerabilities.",
      avgSalary: "₹8 – 16 LPA",
    },
  ],
  admissionSteps: [
    {
      number: "01",
      title: "Submit Profile Details",
      description:
        "Fill out the inquiry form to get connected with a technical education counselor for eligibility checking.",
    },
    {
      number: "02",
      title: "Upload Academic Documents",
      description:
        "Submit your graduation certificates, 10th/12th marksheets, and identity proof for instant digital verification.",
    },
    {
      number: "03",
      title: "Fee Payment / EMI Approval",
      description:
        "Complete your first semester fee payment or activate instant monthly No-Cost EMI.",
    },
    {
      number: "04",
      title: "Get Credentials & Start Learning",
      description:
        "Access the Amity LMS portal, coding environment, digital library, and begin your lectures.",
    },
  ],
  faqs: [
    {
      question: "Is Amity Online MCA a 2-year program?",
      answer:
        "Yes. In accordance with latest AICTE guidelines, the MCA program duration is 2 years (4 semesters) for all eligible candidates.",
    },
    {
      question: "Can I do Amity Online MCA if I did B.Com / BA in graduation?",
      answer:
        "Yes, non-CS graduates who have studied Mathematics or Statistics at 10+2 level or graduation can enroll by completing recommended bridge foundational courses.",
    },
    {
      question: "How are practical programming labs conducted online?",
      answer:
        "Amity provides cloud-based virtual coding labs where you can write, compile, and execute code in Python, Java, C++, SQL, and web technologies directly inside your web browser.",
    },
    {
      question: "Are live online lectures mandatory to attend?",
      answer:
        "Live sessions are scheduled on weekends/evenings for working professionals. If you miss a live class, high-definition recorded sessions are available 24/7 on the LMS.",
    },
    {
      question:
        "Is this degree eligible for government PSU exams and higher studies?",
      answer:
        "Yes, since Amity University is UGC-DEB and AICTE approved, this online MCA degree is fully recognized for all Central & State government tech exams and PhD admissions.",
    },
  ],
  seo: {
    title: "Amity Online MCA 2026 – Admission, Syllabus, Fees & Career",
    description:
      "Learn everything about Amity University Online MCA 2026. Review semester syllabus, fees, eligibility criteria, cloud coding labs, and apply with College Vihar guidance.",
    keywords: [
      "amity online mca",
      "amity university online mca fees",
      "amity online mca syllabus",
      "amity online mca admission 2026",
      "online mca degree amity",
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

export default function AmityOnlineMcaPage({
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
