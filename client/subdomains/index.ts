import { SubdomainModule } from "./types";
import AmityOnlineMbaPage from "./amityonlinemba/page";
import { metadata as amityOnlineMbaMetadata } from "./amityonlinemba/metadata";
import AmityOnlineMcaPage from "./amityonlinemca/page";
import { metadata as amityOnlineMcaMetadata } from "./amityonlinemca/metadata";
import AmityOnlineBbaPage from "./amityonlinebba/page";
import { metadata as amityOnlineBbaMetadata } from "./amityonlinebba/metadata";
import OnlineManipalMbaPage from "./onlinemanipalmba/page";
import { metadata as onlineManipalMbaMetadata } from "./onlinemanipalmba/metadata";
import OnlineManipalMcaPage from "./onlinemanipalmca/page";
import { metadata as onlineManipalMcaMetadata } from "./onlinemanipalmca/metadata";
import OnlineManipalBbaPage from "./onlinemanipalbba/page";
import { metadata as onlineManipalBbaMetadata } from "./onlinemanipalbba/metadata";

export const SUBDOMAIN_REGISTRY: Record<string, SubdomainModule> = {
  amityonlinemba: {
    Component: AmityOnlineMbaPage,
    metadata: amityOnlineMbaMetadata,
  },
  amityonlinemca: {
    Component: AmityOnlineMcaPage,
    metadata: amityOnlineMcaMetadata,
  },
  amityonlinebba: {
    Component: AmityOnlineBbaPage,
    metadata: amityOnlineBbaMetadata,
  },
  onlinemanipalmba: {
    Component: OnlineManipalMbaPage,
    metadata: onlineManipalMbaMetadata,
  },
  onlinemanipalmca: {
    Component: OnlineManipalMcaPage,
    metadata: onlineManipalMcaMetadata,
  },
  onlinemanipalbba: {
    Component: OnlineManipalBbaPage,
    metadata: onlineManipalBbaMetadata,
  },
};

export function getSubdomainModule(subdomain: string): SubdomainModule | null {
  const normalized = (subdomain || "").toLowerCase().trim();
  return SUBDOMAIN_REGISTRY[normalized] || null;
}

export function getAllSubdomainSlugs(): string[] {
  return Object.keys(SUBDOMAIN_REGISTRY);
}

export function isValidSubdomain(subdomain: string): boolean {
  const normalized = (subdomain || "").toLowerCase().trim();
  return Boolean(SUBDOMAIN_REGISTRY[normalized]);
}
