import { SubdomainModule } from "./types";
import AmityOnlineMbaPage, {
  getMetadata as getAmityOnlineMbaMetadata,
} from "./amityonlinemba/page";
import AmityOnlineMcaPage, {
  getMetadata as getAmityOnlineMcaMetadata,
} from "./amityonlinemca/page";
import AmityOnlineBbaPage, {
  getMetadata as getAmityOnlineBbaMetadata,
} from "./amityonlinebba/page";
import OnlineManipalMbaPage, {
  getMetadata as getOnlineManipalMbaMetadata,
} from "./onlinemanipalmba/page";
import OnlineManipalMcaPage, {
  getMetadata as getOnlineManipalMcaMetadata,
} from "./onlinemanipalmca/page";
import OnlineManipalBbaPage, {
  getMetadata as getOnlineManipalBbaMetadata,
} from "./onlinemanipalbba/page";

export const SUBDOMAIN_REGISTRY: Record<string, SubdomainModule> = {
  amityonlinemba: {
    Component: AmityOnlineMbaPage,
    getMetadata: getAmityOnlineMbaMetadata,
  },
  amityonlinemca: {
    Component: AmityOnlineMcaPage,
    getMetadata: getAmityOnlineMcaMetadata,
  },
  amityonlinebba: {
    Component: AmityOnlineBbaPage,
    getMetadata: getAmityOnlineBbaMetadata,
  },
  onlinemanipalmba: {
    Component: OnlineManipalMbaPage,
    getMetadata: getOnlineManipalMbaMetadata,
  },
  onlinemanipalmca: {
    Component: OnlineManipalMcaPage,
    getMetadata: getOnlineManipalMcaMetadata,
  },
  onlinemanipalbba: {
    Component: OnlineManipalBbaPage,
    getMetadata: getOnlineManipalBbaMetadata,
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
