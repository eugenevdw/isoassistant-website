import Image from "next/image";
import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const features = [
  {
    title: "Controlled document management",
    description:
      "Create and manage SOPs and work instructions with rich text editing, numbering, revision control, approvals, and PDF export.",
    screenshot: {
      src: "/images/product/work-instruction-approval-state.png",
      alt: "ISO Assistant work instruction showing document metadata and approval status"
    }
  },
  {
    title: "Approvals and change requests",
    description:
      "Use draft, submit for approval, request changes, and approve workflows to keep controlled documents current.",
    screenshot: {
      src: "/images/product/management-review-actions-history.png",
      alt: "ISO Assistant action item form with progress update history"
    }
  },
  {
    title: "Incidents and NCRs",
    description:
      "Manage incidents, nonconformities, and related actions in one place with clear follow-up.",
    screenshot: {
      src: "/images/product/incident-register-list.png",
      alt: "ISO Assistant incident register with filters and open incident records"
    }
  },
  {
    title: "Audits and management reviews",
    description:
      "Run internal audits, capture management review minutes, and track resulting actions through to completion.",
    screenshot: {
      src: "/images/product/audit-detail-evidence-actions.png",
      alt: "ISO Assistant internal audit detail with evidence pack and audit actions"
    }
  },
  {
    title: "Operational registers",
    description:
      "Maintain risks and opportunities, objectives, training, suppliers, maintenance, calibration, and customer feedback records.",
    screenshot: {
      src: "/images/product/risk-detail-owner-target-linked-records.png",
      alt: "ISO Assistant risk detail with owner, target date and linked records"
    }
  },
  {
    title: "Roles, notifications, and dashboards",
    description:
      "Use role-based permissions, email notifications, and dashboard views for activity and overdue items.",
    screenshot: {
      src: "/images/product/dashboard-overview.png",
      alt: "ISO Assistant dashboard with open records, overdue counts and audit readiness"
    }
  }
];

const workflowExamples = [
  {
    title: "Incident detail",
    description: "Capture issue context, assigned ownership, risk level and follow-up actions.",
    screenshot: {
      src: "/images/product/incident-detail.png",
      alt: "ISO Assistant incident detail record with actions, root cause notes and assignment"
    }
  },
  {
    title: "NCR root cause and action",
    description: "Keep containment, 5 Whys analysis and corrective actions in the same record.",
    screenshot: {
      src: "/images/product/ncr-detail-root-cause-actions.png",
      alt: "ISO Assistant NCR detail showing root cause analysis and required corrective actions"
    }
  },
  {
    title: "Training linked to documents",
    description: "Show which instruction or NCR triggered training and record attendance evidence.",
    screenshot: {
      src: "/images/product/training-record-linked-document.png",
      alt: "ISO Assistant training record linked to a work instruction and NCR"
    }
  },
  {
    title: "Objectives and improvement",
    description: "Track measurable objectives with owners, target dates, status and linked records.",
    screenshot: {
      src: "/images/product/objective-detail-owner-target-status.png",
      alt: "ISO Assistant objective detail with owner, target date, status and linked records"
    }
  }
];

const integrations = [
  "Support for ISO 9001 quality management systems",
  "Support for ISO 14001 environmental management systems",
  "Support for ISO 45001 occupational health and safety management systems",
  "Support for ISO 13485 quality systems where the configured records fit your process",
  "Support for integrated management systems combining ISO 9001, ISO 14001 and ISO 45001",
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
          <div key={feature.title} className="card min-w-0 overflow-hidden p-0">
            <div className="relative aspect-video border-b border-ink/10">
              <Image
                src={feature.screenshot.src}
                alt={feature.screenshot.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(min-width: 1152px) 552px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="tag">Workflow examples</span>
          <h2 className="text-3xl font-semibold text-ink">
            See how records move from issue to evidence
          </h2>
          <p className="text-base text-slate">
            These examples show the detailed records behind incidents, NCRs, training and
            objectives, where audit evidence usually needs to stay connected.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {workflowExamples.map((example) => (
            <div key={example.title} className="card min-w-0 overflow-hidden p-0">
              <div className="relative aspect-video border-b border-ink/10">
                <Image
                  src={example.screenshot.src}
                  alt={example.screenshot.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1152px) 552px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">{example.title}</h3>
                <p className="mt-3 text-sm text-slate">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
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
            ISO Assistant supports ISO 9001, ISO 14001, ISO 45001 and ISO 13485 management-system
            work. It also supports integrated management systems that combine ISO 9001, ISO 14001
            and ISO 45001 through shared workflows for documents, actions, audits, risks, reviews,
            training and operational records.
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
