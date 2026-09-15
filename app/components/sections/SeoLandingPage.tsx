import Link from "next/link";
import { ProductScreenshot } from "../ProductScreenshot";
import { Container } from "../layout/Container";
import { siteConfig } from "../../lib/site";

export interface SeoLandingPageContent {
  eyebrow: string;
  h1: string;
  intro: string;
  screenshot: {
    src: string;
    alt: string;
    label: string;
  };
  workflow?: {
    title: string;
    description: string;
    steps: string[];
    screenshot: { src: string; alt: string; aspectRatio: string; label: string };
  };
  primaryFocus: string;
  primaryCopy: string;
  recordsTitle: string;
  records: string[];
  standardsNote: string;
}

interface SeoLandingPageProps {
  page: SeoLandingPageContent;
}

const sharedModuleLinks = [
  { href: "/features", label: "document control and work instructions" },
  { href: "/features", label: "incidents and NCRs" },
  { href: "/features", label: "risks, training, calibration and maintenance" },
  { href: "/contact", label: "demo or trial enquiry" }
];

export function SeoLandingPage({ page }: SeoLandingPageProps) {
  return (
    <Container className="space-y-16">
      <section className="space-y-6">
        <span className="tag">{page.eyebrow}</span>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {page.h1}
        </h1>
        <p className="max-w-3xl text-lg text-slate">{page.intro}</p>
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

      <section className="min-w-0 overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-soft backdrop-blur">
        <div className="relative aspect-video">
          <ProductScreenshot
            src={page.screenshot.src}
            alt={page.screenshot.alt}
            priority
            sizes="(min-width: 1152px) 1152px, calc(100vw - 48px)"
          />
        </div>
        <div className="flex flex-col gap-2 border-t border-ink/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold text-ink">{page.screenshot.label}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            ISO Assistant workspace
          </p>
        </div>
      </section>

      {page.workflow ? (
        <section className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <span className="tag">In practice</span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">{page.workflow.title}</h2>
            <p className="text-base text-slate">{page.workflow.description}</p>
            <ul className="list-disc space-y-3 pl-5 text-sm text-slate marker:text-ink">
              {page.workflow.steps.map((step) => <li key={step}>{step}</li>)}
            </ul>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft">
            <ProductScreenshot
              src={page.workflow.screenshot.src}
              alt={page.workflow.screenshot.alt}
              aspectRatio={page.workflow.screenshot.aspectRatio}
              sizes="(min-width: 1152px) 552px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
            />
            <figcaption className="border-t border-ink/10 px-5 py-4 text-sm text-slate">
              {page.workflow.screenshot.label}
            </figcaption>
          </figure>
        </section>
      ) : null}

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="card space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Practical fit
          </p>
          <h2 className="text-2xl font-semibold text-ink">{page.primaryFocus}</h2>
          <p className="text-sm text-slate">{page.primaryCopy}</p>
        </div>
        <div className="card space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Audit readiness
          </p>
          <h2 className="text-2xl font-semibold text-ink">{page.recordsTitle}</h2>
          <ul className="space-y-2 text-sm text-slate">
            {page.records.map((record) => (
              <li key={record}>{record}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Standards note
          </p>
          <h2 className="text-2xl font-semibold text-ink">
            Useful ISO software depends on your process, not certification promises.
          </h2>
          <p className="text-sm text-slate">{page.standardsNote}</p>
        </div>
        <div className="rounded-2xl border border-dashed border-ink/20 p-5 text-sm text-slate">
          <p className="font-semibold text-ink">Related pages</p>
          <div className="mt-3 space-y-2">
            <Link href="/" className="block transition hover:text-ink">
              ISO Assistant homepage
            </Link>
            {sharedModuleLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="block transition hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
