import Link from "next/link";
import { Container } from "../components/layout/Container";

export const dynamic = "force-static";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For teams getting their first quality system organized.",
    features: [
      "Up to 5 active procedures",
      "Shared evidence vault",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$449",
    description: "For scaling teams preparing for their next ISO audit.",
    features: [
      "Unlimited procedures and records",
      "Audit pack builder",
      "Review automation",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For multi-site operations with complex compliance needs.",
    features: [
      "Multi-site governance",
      "Dedicated success manager",
      "Custom integrations",
      "On-site audit support"
    ]
  }
];

export default function PricingPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Pricing</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Straightforward plans for ISO-ready teams.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Start with a free trial, then choose the plan that matches your compliance cadence.
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
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Start free trial
            </Link>
          </div>
        ))}
      </section>

      <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Need a custom compliance roadmap?</h2>
          <p className="mt-2 text-sm text-slate">
            Our team will align ISO Assistant to your facilities, processes, and audit calendar.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
        >
          Talk to sales
        </Link>
      </section>
    </Container>
  );
}
