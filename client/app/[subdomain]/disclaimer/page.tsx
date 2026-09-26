import { Metadata } from "next";
import { getAllSubdomainSlugs } from "@/subdomains";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import DisclaimerContent from "@/app/components/policies/DisclaimerContent";

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
      shortName: "Online Manipal",
      relationship: "manipal" as const,
    };
  }
  if (norm.includes("amity")) {
    return {
      name: "Amity University Online",
      shortName: "Amity Online",
      relationship: "amity" as const,
    };
  }
  if (norm.includes("ignou")) {
    return {
      name: "IGNOU (Indira Gandhi National Open University)",
      shortName: "IGNOU",
      relationship: "ignou" as const,
    };
  }
  return {
    name: "Partner Universities",
    shortName: "Universities",
    relationship: "general" as const,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);
  return {
    title: `Statutory Disclaimer & Affiliation Policy | CollegeVihar - ${context.name}`,
    description: `Official statutory disclaimer regarding CollegeVihar's authorized partnership status and trademark attributions for ${context.name}.`,
  };
}

export default async function SubdomainDisclaimerPage({ params }: PageProps) {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);

  return (
    <PolicyLayout
      title="Statutory Disclaimer & Institutional Disclosures"
      subtitle={`Mandatory disclosures regarding CollegeVihar's authorized partnership with ${context.name}`}
      badge="Mandatory Statutory Disclosure"
      universityContext={context}
    >
      <DisclaimerContent universityContext={context} />
    </PolicyLayout>
  );
}
