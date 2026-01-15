
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFileAlt,
  FaMicrophoneAlt,
  FaBroom,
} from 'react-icons/fa';

const services = [
  {
    title: 'Data Capture',
    icon: FaFileAlt,
    to: '/services#data-entry-capture',
    body: (
      <div className="text-[#1e1b4b] leading-relaxed text-left max-w-prose mx-auto">
        <p className="mb-3">
          We capture information from paper, digital forms, and operational records with
          accuracy and consistent standards—so your data is immediately usable.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Multi‑source intake:</strong> handwritten forms, PDFs, scans, spreadsheets, and online submissions.</li>
          <li><strong>Quality controls:</strong> double‑entry checks, field‑level rules, and audit trails to reduce errors.</li>
          <li><strong>Output‑ready:</strong> clean, structured datasets for import into CRMs, ERPs, and analytics tools.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Transcription',
    icon: FaMicrophoneAlt,
    to: '/services#transcription-services',
    body: (
      <div className="text-[#1e1b4b] leading-relaxed text-left max-w-prose mx-auto">
        <p className="mb-3">
          We convert audio and video into clear, well‑formatted text that’s easy to search, share, and archive.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Use cases:</strong> interviews, meetings, research sessions, trainings, and support calls.</li>
          <li><strong>Clarity features:</strong> speaker labels, timestamps (on request), and readable formatting.</li>
          <li><strong>Privacy‑aware:</strong> optional redaction of sensitive names, numbers, and identifiers.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Data Cleaning',
    icon: FaBroom,
    to: '/services#data-cleaning',
    body: (
      <div className="text-[#1e1b4b] leading-relaxed text-left max-w-prose mx-auto">
        <p className="mb-3">
          We repair, standardize, and de‑duplicate your datasets to improve accuracy, reporting, and performance.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Consistency:</strong> normalize names, addresses, dates, IDs, and categorical values.</li>
          <li><strong>Completeness:</strong> fill missing fields where possible and flag gaps for review.</li>
          <li><strong>Reliability:</strong> remove duplicates, resolve conflicts, and align formats to your schema.</li>
        </ul>
      </div>
    ),
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-label="Services"
      className="w-full bg-white py-14 sm:py-16 px-4 sm:px-6 text-[#1e1b4b]"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 text-[#1e1b4b]">
          Our Services
        </h2>

        {/* Cards grid */}
        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Service cards"
        >
          {services.map(({ title, icon: Icon, body, to }) => (
            <article
              key={title}
              role="listitem"
              className="group relative bg-orange-50 p-6 rounded-lg shadow transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-orange-100
                         motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              {/* Make the entire card a link for better usability (optional) */}
              <Link
                to={to}
                className="absolute inset-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]"
                aria-label={`Explore ${title}`}
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Icon (decorative) */}
                <Icon
                  className="text-4xl text-orange-500 mb-4"
                  aria-hidden="true"
                />

                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1e1b4b]">
                  {title}
                </h3>

                {/* Styled, scannable description */}
                <div className="text-sm sm:text-base">
                  {body}
                </div>

                {/* Visible link for non-pointer and screen-reader clarity */}
                <div className="mt-4">
                  <Link
                    to={to}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#ff7200] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded-md px-1"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: section-level call to action */}
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff7200] to-[#be3c05] text-white px-6 py-3 font-medium shadow-md hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]"
          >
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
