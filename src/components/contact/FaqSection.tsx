import { useState } from "react";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We help with data entry and capture, data cleaning, and transcription. Tell us what information you’re working with and the result you need, and we’ll discuss a suitable approach.",
  },
  {
    question: "Can you work with my existing documents?",
    answer:
      "We can assess spreadsheets, PDFs, scanned documents, and other source material. Share a description through the enquiry form first, and we’ll discuss suitable formats and how to transfer files.",
  },
  {
    question:
      "Can you extract information from scanned or handwritten documents?",
    answer:
      "Extraction depends on document quality, layout, and handwriting legibility. We can review a representative sample to establish what can be captured and where manual checking may be needed.",
  },
  {
    question: "How do you clean and validate datasets?",
    answer:
      "Depending on the agreed scope, checks can include identifying duplicates, standardizing formats, reviewing missing values, and flagging inconsistent entries. Ambiguous information should be reviewed rather than guessed.",
  },
  {
    question: "Do you transcribe audio and video?",
    answer:
      "We can discuss transcription for recordings such as meetings, interviews, and voice notes. Recording quality, duration, language, and formatting requirements help determine the scope and turnaround.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. A project can include several stages, such as capturing information from documents, cleaning the resulting dataset, and preparing a structured output. We’ll agree on the deliverables before work begins.",
  },
  {
    question: "Can you help with offline capture or integrations?",
    answer:
      "Tell us about your field conditions and existing systems. Offline capture, synchronization, and integrations require a review of the tools and technical requirements before we can confirm a solution.",
  },
  {
    question: "How will my information be handled?",
    answer:
      "Before sharing source files, discuss any confidentiality, access, and storage requirements with us. Please avoid including sensitive records in the initial enquiry form, and review our Privacy Policy.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "Pricing depends on the service, volume, source quality, required output, and deadline. Send us a brief description so we can discuss the scope and prepare a quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Turnaround depends on project size, complexity, and current availability. Include your preferred deadline in your enquiry so we can discuss a realistic delivery schedule.",
  },
  {
    question: "Can you help with recurring work?",
    answer:
      "Let us know how frequently you need support and the expected volume. We can discuss whether a one-off project or an ongoing arrangement suits your requirements.",
  },
  {
    question: "Can I review a sample before starting?",
    answer:
      "The Services page includes illustrative examples. If you need a sample based on your own material, ask us about its scope, availability, and any associated cost.",
  },
  {
    question: "What are the payment and refund terms?",
    answer:
      "Payment methods and terms should be confirmed in your quote or project agreement. Please review our Refund Policy and discuss any questions about revisions or refunds before proceeding.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="frequently-asked-questions"
      className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"
    >
      <div>
        <span
          aria-hidden="true"
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-[#b84900]"
        >
          <MessageCircle size={25} />
        </span>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b84900]">
          A little more clarity
        </p>

        <h2
          id="frequently-asked-questions"
          className="text-3xl font-extrabold leading-tight tracking-tight text-[#10152f] sm:text-4xl"
        >
          Good questions.
          <br />
          Clear answers.
        </h2>

        <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
          Explore the essentials before getting started. For anything specific
          to your project, we’re happy to talk it through.
        </p>

        <a
          href="mailto:mandla@swdatasolutions.com"
          className="sw-faq-contact mt-7 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-[#b84900]"
        >
          Ask us a question
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600">
          <a
            href="/privacy-policy"
            className="rounded underline underline-offset-4 hover:text-[#b84900]"
          >
            Privacy Policy
          </a>
          <a
            href="/refund-policy"
            className="rounded underline underline-offset-4 hover:text-[#b84900]"
          >
            Refund Policy
          </a>
        </div>
      </div>

      <div className="min-w-0 space-y-3">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          const questionId = `sw-faq-question-${index}`;
          const answerId = `sw-faq-answer-${index}`;

          return (
            <div
              key={question}
              className={`sw-faq-item ${isOpen ? "is-open" : ""}`}
            >
              <h3>
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  className="sw-faq-question"
                >
                  <span>{question}</span>

                  <span className="sw-faq-toggle" aria-hidden="true">
                    <Plus size={18} />
                  </span>
                </button>
              </h3>

              <div
                id={answerId}
                aria-labelledby={questionId}
                hidden={!isOpen}
                className="px-5 pb-6 sm:px-6"
              >
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
