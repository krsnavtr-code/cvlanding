import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import PrivacyPolicyContent from "@/app/components/policies/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | CollegeVihar",
  description:
    "CollegeVihar Privacy Policy detailing data collection, processing, user consent, and grievance redressal under Indian IT Rules.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How CollegeVihar collects, uses, and safeguards your educational counseling data"
      badge="Data Protection & Privacy"
    >
      <PrivacyPolicyContent />
    </PolicyLayout>
  );
}
