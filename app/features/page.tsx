import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const features = [
  {
    title: "Controlled document management",
    description:
      "Create and manage SOPs and work instructions with rich text editing, numbering, revision control, approvals, and PDF export."
  },
  {
    title: "Approvals and change requests",
    description:
      "Use draft, submit for approval, request changes, and approve workflows to keep controlled documents current."
  },
  {
    title: "Incidents and NCRs",
    description:
      "Manage incidents, nonconformities, and related actions in one place with clear follow-up."
  },
  {
    title: "Audits and management reviews",
    description:
      "Run internal audits, capture management review minutes, and track resulting actions through to completion."
  },
  {
    title: "Operational registers",
    description:
      "Maintain risks and opportunities, objectives, training, suppliers, maintenance, calibration, and customer feedback records."
  },
  {
    title: "Roles, notifications, and dashboards",
    description:
      "Use role-based permissions, email notifications, and dashboard views for activity and overdue items."
  }
];

const integrations = [
  "Strongest fit today for ISO 9001",
  "Partial support for ISO 13485 where workflows align closely with ISO 9001",
  "Shared workflow support for ISO 14001 and ISO 45001",
  "Practical fit for SMEs rather than complex enterprise rollouts"
];

export default function FeaturesPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Features</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Practical tools for running an ISO management system.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          ISO Assistant helps SMEs manage the day-to-day work behind documents, records, actions,
          audits, risks, reviews, training, and related operational workflows.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.signupUrl}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start 30-day free trial
          </a>
          <Link
            href="/pricing"
            className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            View pricing
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="card grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Standards fit
          </p>
          <h2 className="text-2xl font-semibold text-ink">
            Accurate support, without overclaiming.
          </h2>
          <p className="text-sm text-slate">
            ISO Assistant is strongest for ISO 9001 today. ISO 13485 is partly supported where the
            quality system closely matches ISO 9001, while ISO 14001 and ISO 45001 are supported
            through shared workflows for documents, actions, audits, risks, reviews, training, and
            operational records.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
          <p className="font-semibold text-ink">Where it fits best</p>
          <ul className="mt-3 space-y-2">
            {integrations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
