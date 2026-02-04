import Link from "next/link";
import { Container } from "../components/layout/Container";

export const dynamic = "force-static";

const features = [
  {
    title: "Clause-aligned workspace",
    description:
      "Map every requirement to owned procedures, evidence, and corrective actions."
  },
  {
    title: "Audit pack builder",
    description:
      "Generate exportable audit packages with versioned documents and proof trails."
  },
  {
    title: "Policy review automation",
    description:
      "Track expiration dates, reviewers, and approvals so nothing slips past due."
  },
  {
    title: "Training and competence records",
    description:
      "Link training completion to procedures and roles for instant traceability."
  },
  {
    title: "Risk and opportunity tracking",
    description:
      "Surface mitigations, owners, and next review windows in one view."
  },
  {
    title: "Actionable dashboards",
    description:
      "Stay ahead of audits with status signals tailored to leadership and operators."
  }
];

const integrations = [
  "Upload from Google Drive or SharePoint",
  "Secure auditor-only access links",
  "CSV exports for legacy systems",
  "Role-based approvals and sign-offs"
];

export default function FeaturesPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Features</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Every ISO requirement, operationalized.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          ISO Assistant gives quality teams the structure of a compliance platform with the
          flexibility of modern collaboration.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start free trial
          </Link>
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
            Built for audits
          </p>
          <h2 className="text-2xl font-semibold text-ink">
            Designed to share evidence confidently.
          </h2>
          <p className="text-sm text-slate">
            From internal reviews to registrar audits, ISO Assistant keeps every document and
            action traceable, so your evidence stands up to scrutiny.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
          <p className="font-semibold text-ink">Quick wins</p>
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
