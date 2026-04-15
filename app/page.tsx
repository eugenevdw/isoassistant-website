import Link from "next/link";
import { Container } from "./components/layout/Container";
import { siteConfig } from "./lib/site";

export const dynamic = "force-static";

const metrics = [
  { label: "Strongest standard support today", value: "ISO 9001" },
  { label: "Free trial", value: "30 days" },
  { label: "Standard account", value: "5 seats included" }
];

const pillars = [
  {
    title: "Control documents properly",
    description:
      "Manage SOPs and work instructions with numbering, revision control, approvals, and PDF export."
  },
  {
    title: "Run daily ISO workflows in one place",
    description:
      "Track actions, audits, risks, reviews, training, suppliers, maintenance, calibration, and customer feedback together."
  },
  {
    title: "Stay on top of work that matters",
    description:
      "Use dashboards, overdue views, email notifications, and role-based permissions to keep work moving."
  }
];

const workflow = [
  {
    title: "Control documents",
    description:
      "Create, review, approve, revise, and export controlled documents without juggling disconnected files."
  },
  {
    title: "Run operational registers",
    description:
      "Manage incidents, NCRs, risks, objectives, audits, reviews, training, suppliers, maintenance, calibration, and feedback."
  },
  {
    title: "Follow actions through",
    description:
      "Assign actions from NCRs, incidents, audits, meetings, and reviews, then track overdue items from one dashboard."
  }
];

export default function HomePage() {
  return (
    <Container className="space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="tag">Practical ISO management for SMEs</span>
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Run your ISO management system in one place.
          </h1>
          <p className="text-lg text-slate">
            ISO Assistant helps small and mid-sized businesses manage controlled documents,
            records, actions, audits, risks, reviews, training, and operational workflows in one
            practical system. It is strongest for ISO 9001 today, with expanding support for ISO
            13485, ISO 14001, and ISO 45001.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.signupUrl}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Start 30-day free trial
            </a>
            <Link
              href="/features"
              className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Explore features
            </Link>
          </div>
          <p className="text-sm text-slate">
            30-day free trial. Only your email is required to get started.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-slate">
            Built for SMEs in services, IT, engineering, manufacturing, and medical-device-related
            businesses
          </p>
        </div>
        <div className="card space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
              What teams manage in ISO Assistant
            </p>
            <h2 className="text-2xl font-semibold text-ink">Day-to-day QMS work</h2>
            <p className="text-sm text-slate">
              Controlled documents, actions, audits, reviews, risks, training, suppliers, and
              operational records in one workspace
            </p>
          </div>
          <div className="grid gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-ink/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">{metric.label}</p>
                <p className="text-xl font-semibold text-ink">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="card">
            <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
            <p className="mt-3 text-sm text-slate">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <span className="tag">Built for practical use</span>
          <h2 className="text-3xl font-semibold text-ink">
            A practical alternative to spreadsheets and disconnected files.
          </h2>
          <p className="text-base text-slate">
            ISO Assistant gives quality, compliance, HSE, operations, and management teams one
            place to run the day-to-day operation of an ISO management system without unnecessary
            complexity.
          </p>
          <ul className="space-y-3 text-sm text-slate">
            <li>Controlled document workflows with draft, review, approve, and revise steps.</li>
            <li>Email notifications for approvals, assignments, and follow-up.</li>
            <li>Role-based permissions and dashboards for activity and overdue work.</li>
          </ul>
        </div>
        <div className="card space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">Workflow</p>
          <div className="space-y-5">
            {workflow.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-slate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Standards support
          </p>
          <p className="text-2xl font-semibold text-ink">
            ISO 9001 is the strongest fit today, with shared workflows that also support ISO
            13485, ISO 14001, and ISO 45001.
          </p>
          <p className="text-sm text-slate">
            ISO 13485 is partly supported where the quality system closely follows ISO 9001 and
            requires additional traceability and controlled processes. ISO 14001 and ISO 45001 are
            supported through shared workflows, but they are not yet as mature or complete in the
            platform as ISO 9001.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
          <p className="font-semibold text-ink">What you can start managing</p>
          <ul className="space-y-2">
            <li>Controlled documents, work instructions, and revision history.</li>
            <li>Incidents, NCRs, actions, audits, and management review follow-up.</li>
            <li>Training, supplier, maintenance, calibration, and customer feedback records.</li>
          </ul>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            See full feature set
          </Link>
        </div>
      </section>

      <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-ink">
            Start your 30-day free trial with just your email.
          </h2>
          <p className="mt-2 text-sm text-slate">
            Use ISO Assistant to run your management system day to day, then move to a standard
            monthly plan when you are ready.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.signupUrl}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start 30-day free trial
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </div>
      </section>
    </Container>
  );
}
