import LeadGenTemplate from "./templates/LeadGenTemplate";
import VideoLayoutTemplate from "./templates/VideoLayoutTemplate";
import GeneralInfoTemplate from "./templates/GeneralInfoTemplate";
import ProgramLandingTemplate from "./templates/ProgramLandingTemplate";

interface TemplateRendererProps {
  template: string;
  content: Record<string, any>;
  subdomain: string;
}

export function TemplateRenderer({
  template,
  content,
  subdomain,
}: TemplateRendererProps) {
  switch (template) {
    case "lead-gen":
      return <LeadGenTemplate content={content} />;
    case "video-layout":
      return <VideoLayoutTemplate content={content} />;
    case "general-info":
      return <GeneralInfoTemplate content={content} />;
    case "program-landing":
      return <ProgramLandingTemplate content={content} subdomain={subdomain} />;
    default:
      // Fallback to lead generation template
      return <LeadGenTemplate content={content} />;
  }
}
