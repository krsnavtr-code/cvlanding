interface FaqSectionProps {
  universityName: string;
  programName: string;
  faqs: { question: string; answer: string }[];
}

export default function FaqSection({
  universityName,
  programName,
  faqs,
}: FaqSectionProps) {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="w-[min(1240px,94%)] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1565c0] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Get clear answers to all your queries regarding degrees, examinations, fees, and career support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-slate-50 open:bg-white rounded-2xl border border-slate-200 transition-all p-5 hover:border-slate-300 open:shadow-sm"
            >
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>{faq.question}</span>
                <span className="w-7 h-7 rounded-full bg-slate-200/80 group-open:bg-[#1565c0] group-open:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-600">
            Have a different question not listed here?
          </p>
          <a
            href="#counselling"
            className="inline-block mt-2 text-xs sm:text-sm font-bold text-[#1565c0] hover:underline"
          >
            Speak directly with an Admission Counsellor →
          </a>
        </div>
      </div>
    </section>
  );
}
