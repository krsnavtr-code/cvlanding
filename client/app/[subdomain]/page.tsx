import { notFound } from "next/navigation";
import { TemplateRenderer } from "../components/TemplateRenderer";

interface PageProps {
  params: Promise<{ subdomain: string }> | { subdomain: string };
}

async function fetchPage(subdomain: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5005";
  const res = await fetch(
    `${apiUrl}/api/pages/${encodeURIComponent(subdomain)}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({ params }: PageProps) {
  const { subdomain } = await Promise.resolve(params);
  const data = await fetchPage(subdomain);

  if (!data || !data.success) {
    return {};
  }

  return {
    title: data.seo?.title || "CollegeVihar",
    description: data.seo?.description || "",
    keywords: data.seo?.keywords,
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { subdomain } = await Promise.resolve(params);
  const data = await fetchPage(subdomain);

  if (!data || !data.success) {
    notFound();
  }

  return (
    <main>
      <TemplateRenderer
        template={data.template_type}
        content={data.content}
        subdomain={subdomain}
      />
    </main>
  );
}
