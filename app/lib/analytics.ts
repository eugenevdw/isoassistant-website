export const ANALYTICS_MEASUREMENT_ID = "G-1ZM5RSFGYV";
export const ANALYTICS_CONSENT_COOKIE = "iso_assistant_analytics_consent";
export const ATTRIBUTION_COOKIE = "iso_assistant_attribution";

export const ATTRIBUTION_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}
