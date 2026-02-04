import Link from "next/link";
import { Container } from "../components/layout/Container";

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
        <a
          href="https://app.isoassistant.com"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Go to app login
        </a>
        <Link href="/contact" className="text-sm font-semibold text-ink">
          Need access? Contact us
        </Link>
      </section>
    </Container>
  );
}
