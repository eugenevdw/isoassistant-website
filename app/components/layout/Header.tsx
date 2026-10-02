import { RequestDemoLink } from "../RequestDemoLink";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "../../lib/site";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-white/70 bg-white/70 backdrop-blur">
      <Container className="relative flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink"
        >
          <Image
            src="/icon.png"
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
            className="h-[2.4rem] w-[2.4rem] shrink-0"
            priority
          />
          ISO Assistant
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate xl:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full flex-wrap items-center gap-2 text-sm font-semibold sm:w-auto">
          <Link
            href="/login"
            className="absolute right-6 top-5 rounded-full px-4 py-2 text-slate transition hover:text-ink sm:static"
          >
            Log in
          </Link>
          <RequestDemoLink location="header" className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/20 bg-white px-4 py-2 text-ink transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" />
          <a
            href={siteConfig.signupUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-2 text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Start 30-day trial
          </a>
        </div>
      </Container>
    </header>
  );
}
