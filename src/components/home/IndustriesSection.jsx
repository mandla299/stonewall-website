
import React from 'react';
import {
  // Micro-icons for each industry
  FaHeartbeat,     // Healthcare
  FaReceipt,       // Finance
  FaChalkboard,    // Education
  FaShoppingBag,   // Retail
  FaBalanceScale,  // Legal
  FaTruck,         // Logistics
} from 'react-icons/fa';

/**
 * Industry content — concise & scannable
 * Each item has:
 * - name
 * - description (short lead)
 * - bullets (micro-highlights)
 * - icon (micro-icon for quick recognition)
 * - tint (light pastel background for illustration chip)
 */
const industries = [
  {
    name: 'Healthcare',
    icon: FaHeartbeat,
    tint: 'bg-rose-50',
    description:
      'Streamline patient and clinical workflows with secure, accurate data operations.',
    bullets: [
      'Patient record capture & indexing',
      'Medical transcription with speaker labels',
      'Compliance-ready exports (on request)',
    ],
  },
  {
    name: 'Finance',
    icon: FaReceipt,
    tint: 'bg-amber-50',
    description:
      'Turn fragmented financial inputs into consistent, auditable datasets.',
    bullets: [
      'Digitize forms & statements',
      'Transaction detail standardization',
      'Audit-friendly outputs & logs',
    ],
  },
  {
    name: 'Education',
    icon: FaChalkboard,
    tint: 'bg-sky-50',
    description:
      'Support student, course, and research operations with reliable data.',
    bullets: [
      'Enrollment & assessment capture',
      'Lecture & panel transcription',
      'Transcribe interviews & focus groups',
    ],
  },
  
{
  name: 'Retail',
  icon: FaShoppingBag,
  tint: 'bg-lime-50',
  description:
    'Organize and clean retail data for smoother daily operations, accurate reporting, and clearer customer insights.',
  bullets: [
    'Organizing and cleaning receipts, invoices, and daily till summaries for error‑free reporting',
    'Standardizing product names, SKUs, pricing fields, and categories across systems',
    'Cleaning inventory logs and stock movement data to improve accuracy and reduce discrepancies',
  ],
},

  
{
  name: 'Legal',
  icon: FaBalanceScale,
  tint: 'bg-violet-50',
  description:
    'Keep matters organized with structured, searchable case data.',
  bullets: [
    'Hearing & deposition transcription',
    'Cleaning and organizing contract data for easier review and reference',
    'Preparing structured case documentation by standardizing names, dates, and matter details',
  ],
},

  
{
  name: 'Logistics',
  icon: FaTruck,
  tint: 'bg-cyan-50',
  description:
    'Improve supply chain visibility with cleaner operational data.',
  bullets: [
    'Organizing manifests, delivery notes, and BoL records into clean, searchable datasets',
    'Standardizing shipment details such as routes, load types, timestamps, and carrier information',
    'Cleaning and aligning depot, warehouse, and location data for clearer tracking and fewer discrepancies',
  ],
},

];

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      // Brighter, light background (keeps brand hues but increases freshness & contrast)
      className="w-full py-14 sm:py-16 px-4 sm:px-6 text-[#1e1b4b] bg-gradient-to-br from-[#fef7ee] via-white to-[#fdeee7]"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-[#1e1b4b]">
          Industries We Serve
        </h2>

        <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-[#1e1b4b]/90 leading-relaxed">
          We tailor our data capture, transcription, and data cleaning services to fit the
          realities of your sector—so your teams move faster with dependable information.
        </p>

        {/* Industry Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Industry cards"
        >
          {industries.map(({ name, description, bullets, icon: Icon, tint }) => (
            <article
              key={name}
              role="listitem"
              className="relative bg-white p-6 rounded-xl shadow transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg hover:bg-orange-50
                         focus-within:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              {/* Subtle illustration chip in the corner (very light / not distracting) */}
              <div
                aria-hidden="true"
                className={`absolute -top-3 -right-3 ${tint} rounded-full w-16 h-16 opacity-70 blur-[1px]`}
              />

              <div className="relative text-left">
                {/* Micro-icon + heading row */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff7200] to-[#be3c05] text-white w-10 h-10 shadow">
                    <Icon className="text-lg" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1e1b4b]">
                    {name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#1e1b4b]/90 leading-relaxed max-w-prose mb-3">
                  {description}
                </p>

                {/* Quick highlights (bullets) */}
                <ul className="list-disc pl-5 text-sm sm:text-base text-[#1e1b4b] leading-relaxed space-y-1">
                  {bullets.map((b) => (
                    <li key={b}>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Focus ring target for a11y (if you later link cards) */}
                <span className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
