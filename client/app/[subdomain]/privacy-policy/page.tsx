import { Metadata } from "next";
import { getAllSubdomainSlugs } from "@/subdomains";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import PrivacyPolicyContent from "@/app/components/policies/PrivacyPolicyContent";

interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSubdomainSlugs();
  return slugs.map((subdomain) => ({ subdomain }));
}

function getUniversityContext(subdomain: string) {
  const norm = (subdomain || "").toLowerCase();
  if (norm.includes("manipal")) {
    return {
      name: "Online Manipal (Manipal University Jaipur)",
      relationship: "manipal" as const,
    };
  }
  if (norm.includes("amity")) {
    return {
      name: "Amity University Online",
      relationship: "amity" as const,
    };
  }
  if (norm.includes("ignou")) {
    return {
      name: "IGNOU (Indira Gandhi National Open University)",
      relationship: "ignou" as const,
    };
  }
  return {
    name: "Partner Universities",
    relationship: "general" as const,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);
  return {
    title: `Privacy Policy | CollegeVihar - ${context.name}`,
    description: `CollegeVihar Privacy Policy detailing data handling and consumer privacy for ${context.name} admissions inquiries.`,
  };
}

export default async function SubdomainPrivacyPolicyPage({ params }: PageProps) {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);

  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle={`Information collection & data protection policy for prospective ${context.name} applicants`}
      badge="Data Protection & Consumer Privacy"
      universityContext={context}
    >
      <PrivacyPolicyContent />
    </PolicyLayout>
  );
}
