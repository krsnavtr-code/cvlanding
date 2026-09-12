import { SubdomainModule } from "./types";
import AmityOnlineMbaPage from "./amityonlinemba/page";
import AmityOnlineMbaThankYou from "./amityonlinemba/thank-you";
import { metadata as amityOnlineMbaMetadata } from "./amityonlinemba/metadata";

import AmityOnlineMcaPage from "./amityonlinemca/page";
import AmityOnlineMcaThankYou from "./amityonlinemca/thank-you";
import { metadata as amityOnlineMcaMetadata } from "./amityonlinemca/metadata";

import AmityOnlineBbaPage from "./amityonlinebba/page";
import AmityOnlineBbaThankYou from "./amityonlinebba/thank-you";
import { metadata as amityOnlineBbaMetadata } from "./amityonlinebba/metadata";

import OnlineManipalMbaPage from "./onlinemanipalmba/page";
import OnlineManipalMbaThankYou from "./onlinemanipalmba/thank-you";
import { metadata as onlineManipalMbaMetadata } from "./onlinemanipalmba/metadata";

import OnlineManipalMcaPage from "./onlinemanipalmca/page";
import OnlineManipalMcaThankYou from "./onlinemanipalmca/thank-you";
import { metadata as onlineManipalMcaMetadata } from "./onlinemanipalmca/metadata";

import OnlineManipalBbaPage from "./onlinemanipalbba/page";
import OnlineManipalBbaThankYou from "./onlinemanipalbba/thank-you";
import { metadata as onlineManipalBbaMetadata } from "./onlinemanipalbba/metadata";

export const SUBDOMAIN_REGISTRY: Record<string, SubdomainModule> = {
  amityonlinemba: {
    Component: AmityOnlineMbaPage,
    ThankYouComponent: AmityOnlineMbaThankYou,
    metadata: amityOnlineMbaMetadata,
  },
  amityonlinemca: {
    Component: AmityOnlineMcaPage,
    ThankYouComponent: AmityOnlineMcaThankYou,
    metadata: amityOnlineMcaMetadata,
  },
  amityonlinebba: {
    Component: AmityOnlineBbaPage,
    ThankYouComponent: AmityOnlineBbaThankYou,
    metadata: amityOnlineBbaMetadata,
  },
  onlinemanipalmba: {
    Component: OnlineManipalMbaPage,
    ThankYouComponent: OnlineManipalMbaThankYou,
    metadata: onlineManipalMbaMetadata,
  },
  onlinemanipalmca: {
    Component: OnlineManipalMcaPage,
    ThankYouComponent: OnlineManipalMcaThankYou,
    metadata: onlineManipalMcaMetadata,
  },
  onlinemanipalbba: {
    Component: OnlineManipalBbaPage,
    ThankYouComponent: OnlineManipalBbaThankYou,
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
