import React, { useState } from 'react';

type IndustrySample = {
  name: string;
  fullSample: string;
};

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
    fullSample: `Healthcare — A4 Case Study

[Start of Transcript]

Client: Sunrise Clinic
Use Case: Transcription of patient consultations + sanitation logging

Workflow:
- Doctor audio recorded via mobile app
- Transcribed within 2 hours
- Patient intake forms digitized with validation
- Cleaning logs timestamped and reviewed daily

Impact:
- Reduced admin time by 40%
- Improved audit readiness
- Enhanced patient data accuracy

[End of Transcript]`,
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
    fullSample: `Education — A4 Case Study

[Start of Transcript]

Client: Horizon University
Use Case: Lecture transcription + student data cleanup

Workflow:
- Lectures transcribed weekly
- Student records cleaned for enrollment dashboard
- Field surveys digitized with OCR

Impact:
- Increased accessibility for remote learners
- Reduced data errors in reporting
- Streamlined research workflows

[End of Transcript]`,
  },
  // Add more industries with fullSample as needed...
];

const IndustriesGridWithModal = () => {
  const [selectedSample, setSelectedSample] = useState<IndustrySample | null>(null);

  return (
    <section className="bg-[#fefefe] text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Who We Serve — Industries That Rely on Modular Clarity
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {industries.map(({ name, description, services, examples, fullSample }) => (
            <div
              key={name}
              className="bg-gradient-to-br from-[#f2f2f2] to-[#e6ebf4] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-[#1e1b4b]">{name}</h3>
              <p className="text-sm text-[#332E81] mb-4">{description}</p>

              <div className="mb-3">
                <p className="text-sm font-semibold text-[#1e1b4b] mb-1">Relevant Services:</p>
                <ul className="list-disc list-inside text-sm text-[#332E81]">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-[#1e1b4b] mb-1">Real-World Examples:</p>
                <ul className="list-disc list-inside text-sm text-[#332E81]">
                  {examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedSample({ name, fullSample })}
                className="mt-2 inline-block text-sm text-[#ff7200] hover:underline"
              >
                View Full Case Study →
              </button>
            </div>
          ))}
        </div>

        {/* Modal Popup with Blur Background */}
        {selectedSample && (
          <div className="fixed inset-0 z-50 px-4 overflow-y-auto backdrop-blur-sm bg-white/30">
            <div className="mx-auto mt-10 mb-10 bg-white w-full max-w-[794px] h-[1123px] overflow-y-auto rounded-lg shadow-lg p-8 relative">
              <button
                onClick={() => setSelectedSample(null)}
                className="absolute top-4 right-4 text-[#ff7200] font-bold text-lg"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4 text-[#1e1b4b]">
                {selectedSample.name} — Full Case Study
              </h3>
              <pre className="whitespace-pre-wrap text-sm text-[#332E81] leading-relaxed">
                {selectedSample.fullSample}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesGridWithModal;
