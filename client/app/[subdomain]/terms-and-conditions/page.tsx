import { Metadata } from "next";
import { getAllSubdomainSlugs } from "@/subdomains";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import TermsConditionsContent from "@/app/components/policies/TermsConditionsContent";

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
    title: `Terms & Conditions | CollegeVihar - ${context.name}`,
    description: `Terms and conditions governing admission advisory, counseling, and application guidance for ${context.name}.`,
  };
}

export default async function SubdomainTermsConditionsPage({ params }: PageProps) {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);

  return (
    <PolicyLayout
      title="Terms & Conditions of Service"
      subtitle={`Admissions advisory & counseling terms for prospective learners of ${context.name}`}
      badge="Legal Terms & Conditions"
      universityContext={context}
    >
      <TermsConditionsContent />
    </PolicyLayout>
  );
}
