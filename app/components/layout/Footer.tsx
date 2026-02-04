import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ink">ISO Assistant</p>
          <p className="text-sm text-slate">
            The compliance workspace that keeps ISO 9001 evidence organized, audit-ready,
            and easy to share.
          </p>
          <p className="text-xs text-slate">© 2026 ISO Assistant. All rights reserved.</p>
        </div>
        <div className="space-y-3 text-sm text-slate">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">Product</p>
          <Link href="/features" className="block transition hover:text-ink">
            Features
          </Link>
          <Link href="/pricing" className="block transition hover:text-ink">
            Pricing
          </Link>
          <Link href="/faq" className="block transition hover:text-ink">
            FAQ
          </Link>
        </div>
        <div className="space-y-3 text-sm text-slate">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">Contact</p>
          <Link href="/contact" className="block transition hover:text-ink">
            Request a demo
          </Link>
          <a className="block transition hover:text-ink" href="mailto:hello@isoassistant.com">
            hello@isoassistant.com
          </a>
          <p className="text-xs text-slate">
            548 Mission St, Suite 220, San Francisco, CA
          </p>
        </div>
      </Container>
    </footer>
  );
}
