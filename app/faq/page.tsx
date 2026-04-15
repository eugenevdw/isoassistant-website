import Link from "next/link";
import { Container } from "../components/layout/Container";
import { siteConfig } from "../lib/site";

export const dynamic = "force-static";

const faqs = [
  {
    question: "Which ISO standards does ISO Assistant support?",
    answer:
      "ISO 9001 is the strongest and most mature part of the platform today. ISO 13485 is partly supported where the quality system closely follows ISO 9001. ISO 14001 and ISO 45001 are supported through shared workflows, but they are not yet as mature or complete as ISO 9001 in the platform."
  },
  {
    question: "Who is ISO Assistant built for?",
    answer:
      "ISO Assistant is built for SMEs, especially in services, IT, engineering, manufacturing, and medical-device-related businesses. Typical users include owners, quality managers, compliance managers, HSE managers, operations managers, consultants, and management representatives."
  },
  {
    question: "What can we manage in the platform?",
    answer:
      "You can manage controlled documents, incidents, NCRs, risks and opportunities, objectives, internal audits, management reviews, training records, suppliers, maintenance, calibration, customer feedback, company details, and related actions in one place."
  },
  {
    question: "How does the free trial work?",
    answer:
      "ISO Assistant offers a 30-day free trial. Only your email address is required to sign up."
  },
  {
    question: "What does pricing look like after the trial?",
    answer:
      `The standard account is ${siteConfig.pricing.standardMonthly} for 5 seats. Extra seats are ${siteConfig.pricing.extraSeatMonthly} per seat, per month.`
  },
  {
    question: "Does ISO Assistant guarantee certification or connect directly to certification bodies?",
    answer:
      "No. ISO Assistant helps you run the day-to-day operation of your management system, but it does not guarantee certification, automate the full certification process end to end, or integrate directly with certification bodies."
  }
];

export default function FAQPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">FAQ</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Straight answers for SMEs.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Questions about ISO Assistant? Here are the main points on standards support, fit, trial,
          and pricing.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="card">
            <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
            <p className="mt-3 text-sm text-slate">{faq.answer}</p>
          </div>
        ))}
      </section>

      <section className="card flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Still have questions?</h2>
          <p className="mt-2 text-sm text-slate">
            We can walk through your current ISO workflows and show a tailored demo.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          Start free trial
        </Link>
      </section>
    </Container>
  );
}
