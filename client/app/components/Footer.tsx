import React from "react";
import CompliantFooter from "./CompliantFooter";

interface FooterProps {
  universityName: string;
  programName: string;
}

export default function Footer({ universityName, programName }: FooterProps) {
  const isManipal = universityName.toLowerCase().includes("manipal");
  const isAmity = universityName.toLowerCase().includes("amity");
  const isIgnou = universityName.toLowerCase().includes("ignou");

  const partnershipType = isManipal
    ? "manipal"
    : isAmity
    ? "amity"
    : isIgnou
    ? "ignou"
    : "general";

  return (
    <CompliantFooter
      universityName={universityName}
      programName={programName}
      partnershipType={partnershipType}
      theme="slate"
    />
  );
}
