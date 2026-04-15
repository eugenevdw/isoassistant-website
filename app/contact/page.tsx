import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const bullets = [
  "Go to the signup page",
  "Create your account with your email address",
  "Start exploring the platform during your 30-day trial"
];

export default function ContactPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">Contact</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Start your 30-day free trial.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          ISO Assistant is set up for a simple start. Only your email address is required to begin
          the trial.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Start online</h2>
          <p className="text-sm text-slate">
            You can start your free trial directly online. If you need help deciding fit, you can
            still contact us by email or phone.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            href={siteConfig.signupUrl}
          >
            Start 30-day free trial
          </a>
          <div className="rounded-2xl border border-dashed border-ink/20 p-4 text-sm text-slate">
            <p className="font-semibold text-ink">How the trial starts</p>
            <ul className="mt-3 space-y-2">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-ink">Contact details</h3>
          <p className="text-sm text-slate">
            Reach out if you want to discuss pricing, standard fit, or how the platform works for
            your team.
          </p>
          <div className="space-y-3 text-sm text-slate">
            <p>
              Email:{" "}
              <a className="font-semibold text-ink" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p>
              Tel:{" "}
              <a className="font-semibold text-ink" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              Pricing:{" "}
              <span className="font-semibold text-ink">
                {siteConfig.pricing.standardMonthly} for 5 seats
              </span>
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center text-sm font-semibold text-ink"
          >
            View pricing
          </Link>
        </div>
      </section>
    </Container>
  );
}
