import Link from "next/link";
import { Container } from "../components/layout/Container";
import { ProductScreenshot } from "../components/ProductScreenshot";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const features = [
  {
    title: "Controlled document management",
    description:
      "Create and manage SOPs and work instructions with rich text editing, numbering, revision control, approvals, and PDF export.",
    screenshot: {
      src: "/images/product/current/work-instruction-approval-state.png",
      alt: "ISO Assistant work instruction showing document metadata and approval status"
    }
  },
  {
    title: "Management review actions",
    description:
      "Capture review decisions, assign actions, set due dates and record progress updates through to completion.",
    screenshot: {
      src: "/images/product/current/management-review-actions-history.png",
      alt: "ISO Assistant action item form with progress update history"
    }
  },
  {
    title: "Incidents and NCRs",
    description:
      "Manage incidents, nonconformities, and related actions in one place with clear follow-up.",
    screenshot: {
      src: "/images/product/current/incident-register-list.png",
      alt: "ISO Assistant incident register with filters and open incident records"
    }
  },
  {
    title: "Audits and management reviews",
    description:
      "Run internal audits, capture management review minutes, and track resulting actions through to completion.",
    screenshot: {
      src: "/images/product/current/audit-detail-evidence-actions.png",
      alt: "ISO Assistant internal audit with checklist progress, compliance summary and audit scope"
    }
  },
  {
    title: "Operational registers",
    description:
      "Maintain risks and opportunities, objectives, training, suppliers, maintenance, calibration, and customer feedback records.",
    screenshot: {
      src: "/images/product/current/risk-detail-owner-target-linked-records.png",
      alt: "ISO Assistant quality risk detail with mitigation, contingency and current risk level"
    }
  },
  {
    title: "Environmental aspects and impacts",
    description:
      "Identify environmental aspects, evaluate baseline and residual significance, and track operational controls and review dates for ISO 14001.",
    screenshot: {
      src: "/images/product/current/iso-14001-environmental-register.png",
      alt: "Environmental aspects and impacts register with activity categories, risk significance and review dates"
    }
  },
  {
    title: "Hazards and health and safety risks",
    description:
      "Assess workplace hazards, record the hierarchy of controls, track implementation and manage approvals and reviews for ISO 45001.",
    screenshot: {
      src: "/images/product/current/iso-45001-ohs-risk-register.png",
      alt: "OH&S risk register with hazards, initial and residual risk ratings and control implementation status"
    }
  },
  {
    title: "Roles, notifications, and dashboards",
    description:
      "Use role-based permissions, email notifications, and dashboard views for activity and overdue items.",
    screenshot: {
      src: "/images/product/current/dashboard-overview.png",
      alt: "ISO Assistant dashboard with open records, overdue counts and audit readiness"
    }
  }
];

const workflowExamples = [
  {
    title: "Incident detail",
    description: "Capture issue context, assigned ownership, risk level and follow-up actions.",
    screenshot: {
      src: "/images/product/current/incident-detail.png",
      alt: "ISO Assistant incident detail record with description, actions and root cause notes"
    }
  },
  {
    title: "NCR root cause and action",
    description: "Keep containment, 5 Whys analysis and corrective actions in the same record.",
    screenshot: {
      src: "/images/product/current/iso-9001-ncr-root-cause.png",
      alt: "ISO Assistant NCR detail showing root cause analysis and required corrective actions"
    }
  },
  {
    title: "Training linked to documents",
    description: "Show which instruction or NCR triggered training and record attendance evidence.",
    screenshot: {
      src: "/images/product/current/iso-13485-traceability-training.png",
      alt: "ISO Assistant traceability training record with instruction reference, attendance and effectiveness"
    }
  },
  {
    title: "Objectives and improvement",
    description: "Track measurable objectives with owners, target dates, status and linked records.",
    screenshot: {
      src: "/images/product/current/objective-detail-owner-target-status.png",
      alt: "ISO Assistant objective detail with success measure, owner, target date and ISO 9001 standard"
    }
  }
];

const supportedStandards = [
  {
    title: "ISO 9001",
    description: "Quality management",
    href: "/iso-9001-software"
  },
  {
    title: "ISO 13485",
    description: "Medical device quality management",
    href: "/iso-13485-software"
  },
  {
    title: "ISO 14001",
    description: "Environmental management",
    href: "/iso-14001-software"
  },
  {
    title: "ISO 22000",
    description: "Food safety management",
    href: "/iso-22000-software"
  },
  {
    title: "ISO 45001",
    description: "Occupational health and safety management",
    href: "/iso-45001-software"
  },
  {
    title: "Integrated management systems",
    description: "Combine ISO 9001, ISO 14001 and ISO 45001",
    href: "/ims-software"
  }
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
              <ProductScreenshot
                src={feature.screenshot.src}
                alt={feature.screenshot.alt}
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
                <ProductScreenshot
                  src={example.screenshot.src}
                  alt={example.screenshot.alt}
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

      <section className="card space-y-6" aria-labelledby="supported-standards-heading">
        <div className="space-y-3">
          <h2 id="supported-standards-heading" className="text-2xl font-semibold text-ink">
            Supported standards
          </h2>
          <p className="text-sm text-slate">
            Explore how ISO Assistant supports the records and workflows for your management system.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportedStandards.map((standard) => (
            <li key={standard.href}>
              <Link
                href={standard.href}
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30 hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <div>
                  <h3 className="text-lg font-semibold text-ink group-hover:underline">
                    {standard.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{standard.description}</p>
                </div>
                <span aria-hidden="true" className="text-lg text-ink">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
