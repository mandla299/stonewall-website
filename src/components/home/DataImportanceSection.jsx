
import React from 'react';
import { CheckCircle2, Layers, Gauge, ShieldCheck, BookOpen, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataImportanceSection = () => {
  const benefits = [
    { icon: Gauge, title: 'Reliable Analysis', desc: 'KPIs and forecasts reflect reality, not noise or duplicates.' },
    { icon: Layers, title: 'Operational Clarity', desc: 'Consistent schemas and definitions reduce rework across teams.' },
    { icon: ShieldCheck, title: 'Compliance Ready', desc: 'Documented lineage and reproducible transformations.' },
    { icon: BookOpen, title: 'Shared Understanding', desc: 'Data dictionaries and playbooks teams actually use.' },
    { icon: Wand2, title: 'Scalable Pipelines', desc: 'Structure and standards that grow with your data volume.' },
    { icon: CheckCircle2, title: 'Faster Decisions', desc: 'Self-serve insights that answer questions the first time.' },
  ];

  return (
    <section
      id="why-data-organization"
      aria-label="Importance of well-organized data"
      className="w-full bg-orange-50 py-16 px-4 sm:px-6"  // <-- Solid background
    >
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1e1b4b]">
            Organized Data. Confident Decisions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1e1b4b]/90">
            When your data is clean, structured, and documented, every team moves faster—from analytics to reporting to day‑to‑day operations.
            Reduce noise, remove duplication, and make decisions you can stand behind.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Benefits of well-organized data"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              role="listitem"
              className="rounded-xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-md transition motion-reduce:transition-none"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-5 w-5 text-[#ff7200]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1e1b4b]">{title}</h3>
                  <p className="mt-1 text-sm sm:text-base text-[#1e1b4b]/90">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stonewall value prop */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#1e1b4b]">Why Stonewall Data Solutions</h3>
            <p className="mt-3 text-[#1e1b4b]/90">
              Most data problems are structural, not just technical. We put governance, quality, and repeatability
              at the center of your data lifecycle—so insights are trusted, processes are scalable, and teams align.
            </p>
            <ul className="mt-5 space-y-3 text-[#1e1b4b]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#ff7200]" aria-hidden="true" />
                <span><strong>Clean & consistent inputs:</strong> Deduplication, standardization, and schema alignment across sources.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#ff7200]" aria-hidden="true" />
                <span><strong>Validation you can trust:</strong> Rule-based checks plus human-in-the-loop for critical datasets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#ff7200]" aria-hidden="true" />
                <span><strong>Documented processes:</strong> Data dictionaries, definitions, and playbooks teams actually adopt.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#ff7200]" aria-hidden="true" />
                <span><strong>Right‑sized tooling:</strong> We integrate with your stack—no overengineering, just outcomes.</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff7200] to-[#be3c05] text-white px-6 py-3 font-medium shadow-md hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]"
              >
                Talk to our data team
              </Link>
            </div>
          </div>

          {/* Decorative block */}
          <div className="rounded-2xl bg-white border border-orange-100 p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-[#1e1b4b]">From chaos to confidence</h4>
            <p className="mt-3 text-[#1e1b4b]/90">
              We start with quick wins—fixing what’s blocking your teams today—then scale the patterns that work:
              validation rules, reusable transforms, and clear documentation. The result isn’t just cleaner data;
              it’s a faster, more confident organization.
            </p>
            <div className="mt-4 text-sm text-[#1e1b4b]/70">
              <p>• Accelerate time-to-insight with trustworthy KPIs</p>
              <p>• Reduce rework and escalation loops</p>
              <p>• Build compliance and auditability into your pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataImportanceSection;
