import type { Metadata } from "next";
import { Container } from "../components/layout/Container";
import { TalkToEugene } from "../components/sections/TalkToEugene";
import { ContactForm } from "../contact/ContactForm";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Request a demo | ISO Assistant",
  description: "Request a guided walkthrough of ISO Assistant for your business. See the workflows that matter to you, ask questions and explore the fit without creating an account."
};

export default function RequestDemoPage() {
  return (
    <Container className="space-y-10">
      <section className="max-w-3xl space-y-5">
        <span className="tag">Guided walkthrough</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">See how ISO Assistant could work for your business.</h1>
        <p className="text-lg text-slate">Prefer someone to walk you through it? Request a demo with us to explore the workflows that matter to you and ask your questions.</p>
        <p className="text-sm font-semibold text-ink">No account or trial signup required.</p>
      </section>
      <section className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Request a demo</h2>
          <p className="text-sm text-slate">Leave your details and we’ll get in touch to arrange a suitable time.</p>
          <ContactForm intent="demo" />
          <p className="text-xs text-slate">We’ll use your details to respond to your request. <a href="https://app.isoassistant.com/privacy" className="underline underline-offset-4">Privacy Policy</a></p>
        </div>
        <div className="space-y-6">
          <div className="card space-y-4">
            <h2 className="text-2xl font-semibold text-ink">What we can cover</h2>
            <ul className="list-disc space-y-3 pl-5 text-sm text-slate">
              <li>Your current ISO workflows and the standards you work with.</li>
              <li>How documents, NCRs, actions and audit evidence connect.</li>
              <li>Your questions about getting started, pricing and fit.</li>
            </ul>
          </div>
          <TalkToEugene />
          <p className="text-sm text-slate">Prefer to explore yourself? <a href={siteConfig.signupUrl} className="font-semibold text-ink underline underline-offset-4">Start your 30-day free trial</a>.</p>
        </div>
      </section>
    </Container>
  );
}
