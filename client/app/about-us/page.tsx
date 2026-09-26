import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import AboutUsContent from "@/app/components/policies/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | CollegeVihar - Authorized University Admission Partner",
  description:
    "Learn about CollegeVihar's business identity, authorized admission & marketing partnership with Online Manipal and Amity University Online, and guidance for IGNOU.",
};

export default function AboutUsPage() {
  return (
    <PolicyLayout
      title="About CollegeVihar"
      subtitle="Authorized University Admission Partner & Higher Education Advisory"
      badge="Corporate Identity & Partnerships"
    >
      <AboutUsContent />
    </PolicyLayout>
  );
}
