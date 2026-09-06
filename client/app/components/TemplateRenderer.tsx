import LeadGenTemplate from './templates/LeadGenTemplate';
import VideoLayoutTemplate from './templates/VideoLayoutTemplate';
import GeneralInfoTemplate from './templates/GeneralInfoTemplate';

interface TemplateRendererProps {
    template: string;
    content: Record<string, any>;
    subdomain: string;
}

export function TemplateRenderer({ template, content }: TemplateRendererProps) {
    switch (template) {
        case 'lead-gen':
            return <LeadGenTemplate content={content} />;
        case 'video-layout':
            return <VideoLayoutTemplate content={content} />;
        case 'general-info':
            return <GeneralInfoTemplate content={content} />;
        default:
            // Fallback to lead generation template
            return <LeadGenTemplate content={content} />;
    }
}
