import Link from "next/link";

export function RequestDemoLink({
  location,
  className = "inline-flex min-h-11 items-center justify-center rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
}: {
  location: string;
  className?: string;
}) {
  return (
    <Link href="/request-demo" data-cta-kind="demo" data-cta-location={location} className={className}>
      Request a demo
    </Link>
  );
}
