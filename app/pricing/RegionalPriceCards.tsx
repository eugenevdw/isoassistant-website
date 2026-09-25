"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../lib/site";

type Quote = { currency: string; country: string; tiers: { baseCents: number; taxCents: number; totalCents: number }[] };
const endpoint = `${siteConfig.appUrl}/api/public/pricing`;
const names = ["First standard", "Additional standards", "Extra seats"];
const descriptions = [siteConfig.pricing.firstStandardDetails, siteConfig.pricing.additionalStandardDetails, siteConfig.pricing.extraSeatDetails];
const features = [
  ["Controlled documents and records", "Actions, audits, risks, reviews, and registers", "Roles, permissions, notifications, and dashboards"],
  ["Run multiple standards in one account", "Build an integrated management system", "Add standards as your requirements grow"],
  ["Add seats as your team grows", "Suitable for owners, managers, consultants, and representatives", "Talk to us if you need help deciding fit"],
];
const format = (cents: number, currency: string) => new Intl.NumberFormat("en", {
  style: "currency", currency, currencyDisplay: "code",
}).format(cents / 100);

export function RegionalPriceCards({ initialCountry, countries }: { initialCountry: string | null; countries: { code: string; name: string }[] }) {
  const [country, setCountry] = useState(countries.some(item => item.code === initialCountry) ? initialCountry! : "");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const requestNumber = useRef(0);
  const needsRegion = country === "US" || country === "CA";

  async function getQuote(selected: string, region = "", postal = "") {
    const request = ++requestNumber.current;
    setQuote(null); setError(""); setLoading(true);
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: selected, state: region, zipcode: postal }), signal: AbortSignal.timeout(25000) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Pricing is temporarily unavailable.");
      if (data.country !== selected || !Array.isArray(data.tiers) || data.tiers.length !== 3) throw new Error("Could not verify pricing.");
      if (request === requestNumber.current) setQuote(data);
    } catch (failure) {
      if (request === requestNumber.current) setError(failure instanceof Error ? failure.message : "Please retry or contact us for pricing.");
    } finally {
      if (request === requestNumber.current) setLoading(false);
    }
  }

  useEffect(() => {
    ++requestNumber.current; setQuote(null); setError(""); setLoading(false);
    setState(""); setZipcode("");
    if (country === "ZA") {
      setQuote({ currency: "ZAR", country, tiers: [120000, 50000, 20000].map(baseCents => ({ baseCents, taxCents: 0, totalCents: baseCents })) });
    } else if (country && !["US", "CA"].includes(country)) {
      void getQuote(country);
    }
  }, [country]);

  return <section className="space-y-6" aria-label="Regional subscription pricing">
    <form className="card space-y-4" onSubmit={event => { event.preventDefault(); void getQuote(country, state, zipcode); }}>
      <label className="block font-medium">Company billing country
        <select className="mt-2 block w-full rounded-lg border border-ink/20 bg-white p-3" value={country}
          onChange={event => { ++requestNumber.current; setQuote(null); setLoading(false); setCountry(event.target.value); }} required>
          <option value="">Select your billing country</option>
          {countries.map(item => <option key={item.code} value={item.code}>{item.name}</option>)}
        </select>
      </label>
      <p className="text-sm text-slate">We suggest a country from your location. Please select your actual billing country to see the applicable pricing.</p>
      {needsRegion && <div className="grid gap-4 md:grid-cols-2">
        <label>State / province<input className="mt-2 block w-full rounded-lg border p-3" value={state} maxLength={60} required
          onChange={event => { ++requestNumber.current; setQuote(null); setLoading(false); setState(event.target.value); }} /></label>
        <label>ZIP / postal code<input className="mt-2 block w-full rounded-lg border p-3" value={zipcode} maxLength={16} required
          onChange={event => { ++requestNumber.current; setQuote(null); setLoading(false); setZipcode(event.target.value); }} /></label>
      </div>}
      {(needsRegion || error) && <button className="rounded-full bg-ink px-6 py-3 text-white" disabled={loading || !country}>
        {loading ? "Checking pricing…" : "Show tax-inclusive prices"}
      </button>}
      {country && country !== "ZA" && <p className="text-sm text-slate">Dodo Payments calculates applicable tax from the selected billing location. Tax is added to our base subscription price. Prices below include that tax, before any validated business tax relief. Your final invoice uses the billing details you confirm at checkout.</p>}
      <div aria-live="polite">{loading ? "Checking tax-inclusive prices…" : error ? <p role="alert">{error}</p> : null}</div>
    </form>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div className="card flex flex-col gap-4"><h2>30-day free trial</h2><p className="text-3xl font-semibold">Free</p>
        <p>Start your trial with only your email address.</p><ul className="space-y-2 text-sm text-slate"><li>30 days to explore the platform</li><li>Simple sign-up path</li><li>Focused on getting SMEs started quickly</li></ul><Signup /></div>
      {names.map((name, index) => <div key={name} className="card flex flex-col gap-4">
        <h2>{name}</h2>
        {quote ? <>
          <p className="text-3xl font-semibold text-ink">{format(quote.tiers[index].totalCents, quote.currency)}<span className="text-base">/mo</span></p>
          {quote.currency !== "ZAR" && <><p className="font-medium">Including applicable tax</p>
            <p className="text-sm text-slate">Base {format(quote.tiers[index].baseCents, quote.currency)} + tax {format(quote.tiers[index].taxCents, quote.currency)} per month.</p></>}
        </> : <p>{loading ? "Checking price…" : "Select your billing location above for pricing."}</p>}
        <p className="text-sm text-slate">{descriptions[index]}</p>
        <ul className="space-y-2 text-sm text-slate">{features[index].map(feature => <li key={feature}>{feature}</li>)}</ul><Signup />
      </div>)}
    </div>
  </section>;
}

function Signup() {
  return <a href={siteConfig.signupUrl} className="mt-auto inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">Start 30-day free trial</a>;
}
