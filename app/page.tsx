import Link from "next/link";
import { Container } from "./components/layout/Container";

export const dynamic = "force-static";

const metrics = [
  { label: "Audit evidence located", value: "3x faster" },
  { label: "Time saved on updates", value: "25+ hrs/quarter" },
  { label: "Documents with clear ownership", value: "100%" }
];

const pillars = [
  {
    title: "Evidence in one living workspace",
    description:
      "Centralize SOPs, logs, and corrective actions with version history and clear ownership."
  },
  {
    title: "Readiness at a glance",
    description:
      "Dashboards show what is current, what is overdue, and what will be reviewed next."
  },
  {
    title: "Audit narratives, auto-assembled",
    description:
      "Generate audit-ready narratives and exportable packets for your registrar."
  }
];

const workflow = [
  {
    title: "Plan",
    description: "Track objectives, risks, and procedures in a structured system of record."
  },
  {
    title: "Operate",
    description: "Capture evidence from daily operations with reminders and role-based tasks."
  },
  {
    title: "Improve",
    description: "Close the loop on nonconformities with corrective actions you can prove."
  }
];

export default function HomePage() {
  return (
    <Container className="space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="tag">ISO 9001 readiness</span>
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Compliance without the chaos.
          </h1>
          <p className="text-lg text-slate">
            ISO Assistant is the clarity layer for fast-growing teams. Keep procedures, evidence,
            and audits aligned in a single workspace designed for ISO 9001.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Start free trial
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Log in
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate">
            Trusted by quality teams in manufacturing, health, and logistics
          </p>
        </div>
        <div className="card space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
              Live readiness snapshot
            </p>
            <h2 className="text-2xl font-semibold text-ink">Q1 ISO 9001 review</h2>
            <p className="text-sm text-slate">
              14 procedures current · 3 upcoming reviews · 2 corrective actions in progress
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
          <span className="tag">Built for ISO teams</span>
          <h2 className="text-3xl font-semibold text-ink">
            Move from spreadsheets to a compliance operating system.
          </h2>
          <p className="text-base text-slate">
            ISO Assistant replaces scattered docs with a workflow that mirrors your ISO clauses.
            Assign owners, collect evidence, and keep every version of every record tied to
            objective proof.
          </p>
          <ul className="space-y-3 text-sm text-slate">
            <li>Clause-aligned templates for SOPs, logs, and audits.</li>
            <li>Automated review reminders so nothing expires in the dark.</li>
            <li>Exportable audit packs for external reviewers.</li>
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">Customer note</p>
          <p className="text-2xl font-semibold text-ink">
            “We walked into our ISO audit with every policy, training record, and corrective
            action already packaged. The auditor asked fewer follow-ups than ever.”
          </p>
          <p className="text-sm text-slate">— Quality Director, Mid-market manufacturing</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
          <p className="font-semibold text-ink">What you get in week one</p>
          <ul className="space-y-2">
            <li>ISO 9001 clause map imported into your workspace.</li>
            <li>Procedure templates assigned to owners.</li>
            <li>Evidence checklist tailored to your products.</li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            Book onboarding
          </Link>
        </div>
      </section>

      <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-ink">Ready for a calmer audit season?</h2>
          <p className="mt-2 text-sm text-slate">
            Start your free trial or talk with our team about your ISO roadmap.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start free trial
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Talk to sales
          </Link>
        </div>
      </section>
    </Container>
  );
}
