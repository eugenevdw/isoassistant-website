import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

export default function LoginPage() {
  return (
    <Container className="space-y-10">
      <section className="card space-y-4">
        <h1 className="text-3xl font-semibold text-ink">Log in</h1>
        <p className="text-sm text-slate">
          The ISO Assistant application is hosted separately. Use the secure login portal to
          access your workspace.
        </p>
        <div className="flex flex-col items-start gap-x-6 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={siteConfig.appUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Go to app login
          </a>
          <a
            href={siteConfig.signupUrl}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            New here? Start a 30-day free trial
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Need help deciding fit? Contact us
          </Link>
        </div>
      </section>
    </Container>
  );
}
