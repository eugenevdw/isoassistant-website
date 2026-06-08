export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  id?: string;
  title?: string;
  intro?: string;
}

export function FAQSection({
  faqs,
  id = "faq",
  title = "ISO Assistant FAQ",
  intro = "Straight answers about what ISO Assistant does, where it fits, and what it does not claim to do."
}: FAQSectionProps) {
  return (
    <section id={id} className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <span className="tag">FAQ</span>
        <h2 className="text-3xl font-semibold text-ink">{title}</h2>
        <p className="text-base text-slate">{intro}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="card">
            <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
            <p className="mt-3 text-sm text-slate">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
