import Link from "next/link";
import { Container } from "../components/layout/Container";

export const dynamic = "force-static";

const faqs = [
  {
    question: "Is ISO Assistant only for ISO 9001?",
    answer:
      "ISO 9001 is our primary focus today, but the framework also supports ISO 13485 and ISO 27001 evidence mapping."
  },
  {
    question: "How fast can we be audit-ready?",
    answer:
      "Most teams see a complete evidence map within two weeks. We provide templates and onboarding to accelerate set up."
  },
  {
    question: "Do we need to migrate every historical document?",
    answer:
      "No. You can start with active procedures and bring legacy evidence over as needed."
  },
  {
    question: "Can external auditors access evidence?",
    answer:
      "Yes. Create auditor-only links or export audit packs with locked PDFs."
  },
  {
    question: "What support is included?",
    answer:
      "Every plan includes email support, onboarding guidance, and access to our ISO compliance library."
  }
];

export default function FAQPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-5">
        <span className="tag">FAQ</span>
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Answers for quality teams.
        </h1>
        <p className="max-w-2xl text-lg text-slate">
          Questions about ISO Assistant? We gathered the most common ones here.
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
          Contact us
        </Link>
      </section>
    </Container>
  );
}
