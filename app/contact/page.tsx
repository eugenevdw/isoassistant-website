import Link from "next/link";
import { Container } from "../components/layout/Container";

export const dynamic = "force-static";

const bullets = [
  "Tell us your industry and audit timeline",
  "We map your procedures to ISO clauses",
  "Get a tailored readiness plan within 48 hours"
];

export default function ContactPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Contact</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Talk with our compliance team.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Start your free trial or request a guided demo. We respond within one business day.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Start a conversation</h2>
          <p className="text-sm text-slate">
            For now, email us directly and we will send a secure onboarding form.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            href="mailto:hello@isoassistant.com?subject=ISO%20Assistant%20demo%20request"
          >
            Email hello@isoassistant.com
          </a>
          <div className="rounded-2xl border border-dashed border-ink/20 p-4 text-sm text-slate">
            <p className="font-semibold text-ink">What to include</p>
            <ul className="mt-3 space-y-2">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-ink">Prefer self-serve?</h3>
          <p className="text-sm text-slate">
            Start your trial and invite stakeholders. We will configure your clause map and
            audit dashboard right away.
          </p>
          <div className="space-y-3 text-sm text-slate">
            <p>
              Response time: <span className="font-semibold text-ink">under 24 hours</span>
            </p>
            <p>
              Office hours: <span className="font-semibold text-ink">Mon–Fri, 9am–6pm PT</span>
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center text-sm font-semibold text-ink"
          >
            See pricing
          </Link>
        </div>
      </section>
    </Container>
  );
}
