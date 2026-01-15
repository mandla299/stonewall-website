import React, { useState } from 'react';

const faqs = [
  {
    question: 'What types of workflows can you digitize?',
    answer:
      'We specialize in digitizing surveys, sanitation logs, transcription flows, and custom data entry forms—tailored to your industry’s needs.',
  },
  {
    question: 'Do you support offline data capture?',
    answer:
      'Yes. Our mobile-ready forms are designed for field teams working in low-connectivity environments, with sync-on-return capabilities.',
  },
  {
    question: 'Can I upload existing documents or workflows?',
    answer:
      'Absolutely. You can upload PDFs, spreadsheets, or handwritten samples. We’ll help convert them into structured, reusable formats.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We follow strict data handling protocols, including encrypted transmission, role-based access, and secure cloud storage.',
  },
  {
    question: 'Do you offer custom integrations?',
    answer:
      'Yes. We can integrate with your dashboards, CRMs, or audit systems using APIs or custom export formats.',
  },
  {
    question: 'How do you ensure accuracy in large-scale data entry?',
    answer:
      'We combine structured form logic, validation rules, and manual review to maintain precision across bulk uploads and high-volume entry tasks.',
  },
  {
    question: 'Can you extract data from scanned forms or handwritten notes?',
    answer:
      'Yes. Our OCR and document parsing workflows support typed and handwritten content, including invoices, consent forms, and field notes.',
  },
  {
    question: 'What types of data can you capture from images or PDFs?',
    answer:
      'We extract structured insights such as names, dates, IDs, and form responses—optimized for consistency and downstream analysis.',
  },
  {
    question: 'How do you validate and clean existing datasets?',
    answer:
      'We apply rule-based checks, cross-field logic, and manual reviews to identify duplicates, correct inconsistencies, and standardize formats.',
  },
  {
    question: 'Do you support transcription of audio and video files?',
    answer:
      'Absolutely. We transcribe meetings, interviews, and voice notes into structured text, ready for documentation, analysis, or compliance.',
  },
  {
    question: 'Can I combine multiple services in one workflow?',
    answer:
      'Yes. We often blend data capture, validation, and transcription into unified workflows tailored to your operational goals.',
  },
  {
    question: 'How is pricing structured for your services?',
    answer:
      'Our pricing is modular—based on the type of service, data volume, and turnaround time. We offer transparent quotes and flexible packages tailored to your workflow.',
  },
  {
    question: 'Do you offer subscription plans or one-off projects?',
    answer:
      'Both. You can engage us for one-time data tasks or opt into monthly plans for ongoing support, with priority turnaround and discounted rates.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards, EFTs, and PayPal. For enterprise clients, we also support invoicing and purchase orders.',
  },
  {
    question: 'Can I get a refund if I’m not satisfied?',
    answer:
      'Yes. If a deliverable doesn’t meet the agreed scope or quality standards, we’ll either revise it or issue a partial/full refund depending on the situation.',
  },
  {
    question: 'Do you offer free trials or sample workflows?',
    answer:
      'We offer sample workflows and pilot runs for select services so you can evaluate quality before committing to a full engagement.',
  },
];

const FaqSection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="bg-[#fefefe] text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 id="frequently-asked-questions" className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f2f2f2] to-[#e6ebf4] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-bold mb-2 text-[#1e1b4b]">{question}
                
              </h3>
              {openIndex === index && (
                <p className="text-sm text-[#332E81] mt-2">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
