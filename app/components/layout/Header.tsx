import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-white/70 bg-white/70 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          ISO Assistant
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-slate transition hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2 text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start free trial
          </Link>
        </div>
      </Container>
    </header>
  );
}
