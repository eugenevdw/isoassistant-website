import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "../components/layout/Container";
import { getCountryCode } from "../lib/pricing";
import { RegionalPriceCards } from "./RegionalPriceCards";
import { billingCountries } from "../lib/billing-countries";
import { TalkToEugene } from "../components/sections/TalkToEugene";

export const dynamic = "force-dynamic";

export default function PricingPage() {
  const countryCode = getCountryCode(headers());

  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Pricing</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Simple pricing for small and mid-sized teams.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Start with a 30-day free trial, then choose the standards you need. Your first standard
          includes up to five users.
        </p>
      </section>

      <RegionalPriceCards initialCountry={countryCode} countries={billingCountries} />

      <TalkToEugene />

      <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Need help deciding if it fits?</h2>
          <p className="mt-2 text-sm text-slate">
            We can help you assess whether ISO Assistant matches your current management system and
            standard requirements.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
        >
          Contact us
        </Link>
      </section>
    </Container>
  );
}
