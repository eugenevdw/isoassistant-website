import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "../../lib/site";
import { seoLandingPageLinks } from "../../lib/seoLandingPages";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ink">ISO Assistant</p>
          <p className="text-sm text-slate">
            Practical ISO management software for SMEs that need to maintain documents, incidents,
            NCRs, training, risks, calibration, maintenance and audit evidence.
          </p>
          <p className="text-xs text-slate">Created by Mercator Projects Pty Ltd.</p>
          <p className="text-xs text-slate">
            ISO Assistant is an independent software tool and is not affiliated with or endorsed by
            the International Organization for Standardization.
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            ISO software
          </p>
          {seoLandingPageLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm text-slate">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">Contact</p>
          <Link href="/contact" className="block transition hover:text-ink">
            Start free trial
          </Link>
          <a className="block transition hover:text-ink" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <a className="block transition hover:text-ink" href={siteConfig.phoneHref}>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </Container>
    </footer>
  );
}
