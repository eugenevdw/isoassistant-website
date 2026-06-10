import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "./components/sections/FAQSection";
import { Container } from "./components/layout/Container";
import { homepageFaqs } from "./lib/faqs";
import { seoLandingPageLinks } from "./lib/seoLandingPages";
import { siteConfig } from "./lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ISO Assistant | ISO Management Software for Small Businesses",
  description:
    "ISO Assistant helps small businesses manage incidents, NCRs, documents, training, risks, calibration, maintenance and audit evidence in one ISO management system."
};

const recordCards = [
  {
    title: "Incidents and corrective actions",
    description:
      "Log incidents, assign actions, track deadlines and keep follow-up evidence together."
  },
  {
    title: "NCRs and root cause analysis",
    description:
      "Manage non-conformances, root cause notes, corrective actions and closure evidence."
  },
  {
    title: "SOPs and work instructions",
    description:
      "Control documents with numbering, revisions, approvals and PDF export for audit evidence."
  },
  {
    title: "Training records",
    description:
      "Keep training evidence visible so people know which procedures and responsibilities apply."
  },
  {
    title: "Objectives",
    description:
      "Track management-system objectives, owners, progress and supporting records."
  },
  {
    title: "Calibration and maintenance",
    description:
      "Maintain equipment records, schedules, service evidence and overdue follow-up."
  },
  {
    title: "Risks and opportunities",
    description:
      "Record risks, opportunities, assigned actions and review evidence in one place."
  },
  {
    title: "Audit evidence",
    description:
      "Organise records auditors usually ask for instead of hunting through folders and email."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="space-y-20">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="tag">Independent ISO management software for SMEs</span>
            <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              ISO software that helps small businesses stay audit-ready
            </h1>
            <p className="text-lg text-slate">
              Manage incidents, NCRs, risks, documents, training, calibration, maintenance and audit
              evidence in one simple ISO management system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.signupUrl}
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Start 30-day free trial
              </a>
              <Link
                href="#modules"
                className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                See modules
              </Link>
            </div>
            <p className="text-sm text-slate">
              Built for SMEs that need practical ISO compliance software without running the system
              from spreadsheets.
            </p>
          </div>

          <div
            id="product-demo"
            className="min-w-0 overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-soft backdrop-blur"
          >
            <div className="border-b border-ink/10 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
                Product demo
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">
                See ISO Assistant in action
              </h2>
            </div>
            <video
              aria-label="ISO Assistant product demo video"
              className="aspect-video w-full max-w-full bg-ink object-cover"
              controls
              playsInline
              poster="/videos/iso-assistant-demo-poster.jpg"
              preload="metadata"
            >
              <source src="/videos/iso-assistant-demo.mp4" type="video/mp4" />
            </video>
            <div className="space-y-4 p-5">
              <p className="text-sm text-slate">
                A quick walkthrough of the dashboard, records and action tracking used to keep ISO
                evidence organised.
              </p>
              <div className="grid gap-3 text-sm font-semibold text-ink">
                {[
                  "Supports ISO 9001, ISO 14001, ISO 45001, ISO 13485 and IMS workflows",
                  "Built for small and mid-sized businesses",
                  "30-day free trial with 5 seats on the standard account"
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <span className="tag">Built for spreadsheet reality</span>
            <h2 className="text-3xl font-semibold text-ink">
              Built for the ISO work that usually lives in spreadsheets
            </h2>
            <p className="text-base text-slate">
              Most small businesses do not fail because they lack another policy. They struggle
              because incidents, actions, training records and reminders end up spread across
              spreadsheets, email and forgotten folders. ISO Assistant brings those daily records
              into one place.
            </p>
            <p className="text-base text-slate">
              Use it as ISO management software for small businesses that need a cleaner way to
              maintain documents, NCRs, risks, objectives, training, calibration, maintenance and
              audit evidence after the system has been implemented.
            </p>
          </div>
          <div className="card space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
              Practical workflows
            </p>
            {[
              "Assign actions from incidents, NCRs, audits and reviews.",
              "Keep controlled documents current with approval and revision workflows.",
              "Use dashboards and overdue views to see what needs follow-up."
            ].map((item, index) => (
              <div key={item} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm text-slate">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="modules" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="tag">Modules</span>
            <h2 className="text-3xl font-semibold text-ink">
              Manage the records auditors actually ask for
            </h2>
            <p className="text-base text-slate">
              ISO Assistant focuses on the practical records that show your management system is
              alive: incidents, non-conformances, controlled documents, training, objectives,
              calibration, maintenance, risks and audit evidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recordCards.map((card) => (
              <div key={card.title} className="card">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm text-slate">{card.description}</p>
              </div>
            ))}
          </div>
          <Link href="/features" className="inline-flex text-sm font-semibold text-ink">
            See the full feature set
          </Link>
        </section>

        <section id="standards" className="card grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
              Standards fit
            </p>
            <h2 className="text-3xl font-semibold text-ink">
              Useful for ISO 9001, ISO 14001, ISO 45001, ISO 13485 and IMS
            </h2>
            <p className="text-sm text-slate">
              ISO Assistant is designed around practical management-system activities that are
              common to many ISO standards: document control, corrective actions, risks, training,
              objectives, operational records and audit evidence. The exact requirements depend on
              the standard, your organisation and how your system is implemented.
            </p>
            <p className="text-sm text-slate">
              The tool supports ISO 9001, ISO 14001, ISO 45001 and ISO 13485. It also supports
              running an integrated management system that combines ISO 9001, ISO 14001 and ISO
              45001.
            </p>
            <p className="text-sm text-slate">
              It supports audit readiness by helping you organise ISO records and evidence, but no
              software can guarantee certification.
            </p>
            <p className="text-xs text-slate">
              ISO Assistant is an independent software tool and is not affiliated with or endorsed
              by the International Organization for Standardization.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
            <p className="font-semibold text-ink">Explore ISO software pages</p>
            <div className="space-y-2">
              {seoLandingPageLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block transition hover:text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={homepageFaqs} />

        <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">
              Ready to move ISO records out of spreadsheets?
            </h2>
            <p className="mt-2 text-sm text-slate">
              View a demo or start the 30-day trial to see how ISO Assistant handles the daily work
              behind an ISO management system.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              View demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              View pricing
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
