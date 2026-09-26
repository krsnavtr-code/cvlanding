import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import ContactUsContent from "@/app/components/policies/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us & Corporate Office | CollegeVihar",
  description:
    "Contact CollegeVihar admissions helpline at +91 9266585858 or visit our corporate office at Sector 63, Noida, Uttar Pradesh.",
};

export default function ContactUsPage() {
  return (
    <PolicyLayout
      title="Contact Us & Student Support"
      subtitle="Connect with verified academic counselors for immediate admission assistance and program guidance"
      badge="Admissions Helpline & Office Location"
    >
      <ContactUsContent />
    </PolicyLayout>
  );
}
