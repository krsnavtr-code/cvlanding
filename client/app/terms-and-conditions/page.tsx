import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import TermsConditionsContent from "@/app/components/policies/TermsConditionsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | CollegeVihar",
  description:
    "Terms and Conditions governing the use of CollegeVihar's educational counseling and admissions advisory services.",
};

export default function TermsConditionsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions of Service"
      subtitle="Legal terms governing website access, student counseling, and admissions advisory"
      badge="Legal Terms & Conditions"
    >
      <TermsConditionsContent />
    </PolicyLayout>
  );
}
