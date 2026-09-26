import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import DisclaimerContent from "@/app/components/policies/DisclaimerContent";

export const metadata: Metadata = {
  title: "Statutory Disclaimer & Affiliation Policy | CollegeVihar",
  description:
    "Official statutory disclaimer detailing CollegeVihar's authorized partnership with Online Manipal and Amity Online, and independent advisory role for IGNOU.",
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Statutory Disclaimer & Institutional Disclosures"
      subtitle="Mandatory disclosures regarding university affiliations, trademarks, and educational advisory capacity"
      badge="Mandatory Statutory Disclosure"
    >
      <DisclaimerContent />
    </PolicyLayout>
  );
}
