import { Metadata } from "next";

export interface SubdomainPageProps {
  subdomain: string;
}

export interface SubdomainModule {
  Component: React.ComponentType<SubdomainPageProps>;
  getMetadata: () => Metadata;
}
