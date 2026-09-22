import { siteConfig } from "../../lib/site";

export function TalkToEugene() {
  return (
    <aside className="rounded-2xl border border-ink/10 bg-white/80 p-5 text-left sm:p-6" aria-label="Speak to Eugene about ISO Assistant">
      <h2 className="text-xl font-semibold text-ink">Want to check if ISO Assistant is right for your business?</h2>
      <p className="mt-2 text-sm text-slate">Chat with Eugene on WhatsApp or give me a call. I’m happy to answer your questions.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Chat on WhatsApp</a>
        <a href={siteConfig.phoneHref} className="inline-flex min-h-11 items-center rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">Call Eugene</a>
        <span className="text-sm text-slate">{siteConfig.phoneDisplay}</span>
      </div>
    </aside>
  );
}
