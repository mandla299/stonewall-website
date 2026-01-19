
import React from 'react';

const industries = [
  {
    name: 'Healthcare & Clinics',
    description:
      'Hospitals and clinics rely on accurate transcription of patient notes, structured data entry for medical records, and timestamped cleaning logs for sanitation audits.',
    services: ['Medical transcription', 'Patient intake forms', 'Sanitation logging'],
    examples: [
      'Transcribe doctor-patient consultations for EMR systems',
      'Digitize handwritten consent forms',
      'Log cleaning activity for infection control audits',
    ],
  },
  {
    name: 'Education & Research',
    description:
      'Universities, schools, and research institutes need clean student data, digitized surveys, and lecture transcription to support learning and analysis.',
    services: ['Survey digitization', 'Student record cleaning', 'Lecture transcription'],
    examples: [
      'Transcribe recorded lectures for accessibility',
      'Clean and validate student enrollment data',
      'Digitize field research notes from paper',
    ],
  },
  {
    name: 'Field Operations & NGOs',
    description:
      'Mobile teams conducting household surveys or community audits need offline-ready forms, repeatable data structures, and resilient logging.',
    services: ['Offline data entry', 'Survey capture', 'Timestamped logs'],
    examples: [
      'Capture household data with dynamic repeaters',
      'Log livestock counts with timestamped entries',
      'Sync field data to dashboards post-collection',
    ],
  },
  {
    name: 'Cleaning & Facilities Management',
    description:
      'Cleaning crews and supervisors need zone-based logs, issue flagging, and quality reviews to ensure accountability and transparency.',
    services: ['Zone logging', 'Issue reporting', 'Quality reviews'],
    examples: [
      'Log cleaning completion by zone and time',
      'Flag broken equipment with escalation notes',
      'Review cleaning quality with supervisor ratings',
    ],
  },
  {
    name: 'Finance & Insurance',
    description:
      'Banks and insurers require OCR parsing of scanned documents, validation of client data, and transcription of advisory sessions for compliance.',
    services: ['OCR parsing', 'Client data validation', 'Session transcription'],
    examples: [
      'Extract data from scanned ID documents',
      'Validate client onboarding forms',
      'Transcribe financial advisory calls for audit',
    ],
  },
  {
    name: 'Legal & Compliance',
    description:
      'Law firms and regulatory bodies need transcription of hearings, cleaning of case metadata, and structured affidavit capture.',
    services: ['Legal transcription', 'Metadata cleaning', 'Affidavit capture'],
    examples: [
      'Transcribe courtroom audio into structured logs',
      'Clean and tag case metadata for searchability',
      'Capture affidavits with conditional logic and validation',
    ],
  },
];

const IndustriesGrid = () => {
  return (
    <section
      aria-labelledby="industries-title"
      className="bg-gradient-to-br from-[#fff8f0] via-[#ffe8d6] to-[#ffd6d6] text-[#1e1b4b] dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 dark:text-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="industries-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#ff7200] via-[#ff3d00] to-[#ff007f] text-transparent bg-clip-text"
        >
          Who We Serve: Trusted by Industries of All Kinds
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {industries.map(({ name, description, services, examples }) => (
            <article
              key={name}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition motion-safe:hover:scale-[1.02] ring-1 ring-black/5 dark:ring-white/10"
            >
              {/* Industry Name */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#ff7200] dark:text-orange-400">
                {name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#332E81] dark:text-indigo-300 mb-4 leading-relaxed">
                {description}
              </p>

              {/* Services */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#1e1b4b] dark:text-slate-100 mb-1">
                  Relevant Services:
                </p>
                <ul className="list-disc list-inside text-sm text-[#332E81] dark:text-indigo-300 space-y-1">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div>
                <p className="text-sm font-semibold text-[#1e1b4b] dark:text-slate-100 mb-1">
                  Real-World Examples:
                </p>
                <ul className="list-disc list-inside text-sm text-[#332E81] dark:text-indigo-300 space-y-1">
                  {examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
