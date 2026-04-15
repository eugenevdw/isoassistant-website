import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const tiers = [
  {
    name: "30-day free trial",
    price: "R0",
    description: "Start your trial with only your email address.",
    features: [
      "30 days to explore the platform",
      "Simple sign-up path",
      "Focused on getting SMEs started quickly"
    ]
  },
  {
    name: "Standard",
    price: siteConfig.pricing.standardMonthly,
    description: siteConfig.pricing.standardDetails,
    features: [
      "Controlled documents and records",
      "Actions, audits, risks, reviews, and registers",
      "Roles, permissions, notifications, and dashboards"
    ]
  },
  {
    name: "Extra seats",
    price: siteConfig.pricing.extraSeatMonthly,
    description: siteConfig.pricing.extraSeatDetails,
    features: [
      "Add seats as your team grows",
      "Suitable for owners, managers, consultants, and representatives",
      "Talk to us if you need help deciding fit"
    ]
  }
];

export default function PricingPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Pricing</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Simple pricing for small and mid-sized teams.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Start with a 30-day free trial, then move to a straightforward monthly plan with five
          seats included.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="card flex h-full flex-col">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
                {tier.name}
              </p>
              <p className="text-3xl font-semibold text-ink">{tier.price}</p>
              <p className="text-sm text-slate">{tier.description}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              href={siteConfig.signupUrl}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Start 30-day free trial
            </a>
          </div>
        ))}
      </section>

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
