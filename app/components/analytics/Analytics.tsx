"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_COOKIE,
  ANALYTICS_MEASUREMENT_ID,
  ATTRIBUTION_COOKIE,
  ATTRIBUTION_FIELDS,
  trackAnalyticsEvent,
} from "../../lib/analytics";

type Consent = "accepted" | "declined" | null;

function readConsent(): Consent {
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${ANALYTICS_CONSENT_COOKIE}=`));
  const value = match?.split("=").slice(1).join("=");
  return value === "accepted" || value === "declined" ? value : null;
}

function writeCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Domain=.isoassistant.com; Max-Age=${maxAge}; SameSite=Lax; Secure`;
}

function captureAttribution() {
  const url = new URL(window.location.href);
  const attribution: Record<string, string> = {};
  let hasCampaignAttribution = false;

  for (const field of ATTRIBUTION_FIELDS) {
    const value = url.searchParams.get(field)?.trim();
    if (value) {
      attribution[field] = value.slice(0, 300);
      hasCampaignAttribution = true;
    }
  }

  const gclid = url.searchParams.get("gclid")?.trim();
  if (gclid) {
    attribution.gclid = gclid.slice(0, 300);
    hasCampaignAttribution = true;
  }

  const existingAttribution = document.cookie
    .split("; ")
    .some((entry) => entry.startsWith(`${ATTRIBUTION_COOKIE}=`));
  if (existingAttribution && !hasCampaignAttribution) return;

  attribution.landing_path = url.pathname.slice(0, 300);

  if (document.referrer) {
    try {
      attribution.referrer_host = new URL(document.referrer).hostname.slice(0, 300);
    } catch {
      // Ignore an invalid browser referrer.
    }
  }

  writeCookie(ATTRIBUTION_COOKIE, JSON.stringify(attribution), 60 * 60 * 24 * 90);
}

function enableAnalytics() {
  (window as typeof window & Record<string, unknown>)[`ga-disable-${ANALYTICS_MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_MEASUREMENT_ID, {
    linker: { domains: ["isoassistant.com", "app.isoassistant.com"] },
  });
  captureAttribution();
}

function disableAnalytics() {
  (window as typeof window & Record<string, unknown>)[`ga-disable-${ANALYTICS_MEASUREMENT_ID}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  for (const entry of document.cookie.split("; ")) {
    const name = entry.split("=")[0];
    if (name === "_gid" || name.startsWith("_ga")) {
      document.cookie = `${name}=; Path=/; Domain=.isoassistant.com; Max-Age=0; SameSite=Lax; Secure`;
    }
  }
}

export function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const openPreferences = () => {
      disableAnalytics();
      setConsent(null);
    };
    window.addEventListener("isoassistant:analytics-preferences", openPreferences);
    return () => window.removeEventListener("isoassistant:analytics-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!target || !target.href.startsWith("https://app.isoassistant.com/app/signup")) return;
      trackAnalyticsEvent("trial_cta_click", {
        cta_text: (target.textContent || "Start trial").trim().slice(0, 100),
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent]);

  function chooseConsent(value: Exclude<Consent, null>) {
    writeCookie(ANALYTICS_CONSENT_COOKIE, value, 60 * 60 * 24 * 365);
    if (value === "declined") disableAnalytics();
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" ? (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          onReady={enableAnalytics}
        />
      ) : null}

      {ready && consent === null ? (
        <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-white p-5 shadow-soft" aria-label="Analytics preferences">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate">
              We use analytics cookies to understand which pages help prospective and trial users. We never send form contents to analytics.
            </p>
            <div className="flex shrink-0 gap-2">
              <button type="button" className="rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink" onClick={() => chooseConsent("declined")}>
                Decline
              </button>
              <button type="button" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white" onClick={() => chooseConsent("accepted")}>
                Accept analytics
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export function AnalyticsPreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("isoassistant:analytics-preferences"))}
    >
      Analytics preferences
    </button>
  );
}
