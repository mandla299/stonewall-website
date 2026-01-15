
// src/components/modals/ServicesModal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import AccessibleModal from './AccessibleModal';

const ServicesModal = ({ onClose }) => {
  return (
    <AccessibleModal
      title="Our Services"
      description="Explore the range of data solutions we provide."
      onClose={onClose}
    >
      {/* Two-Column Layout */}
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column: Service Navigation */}
        <nav aria-label="Service navigation" className="flex flex-col space-y-3">
          <Link
            to="/services/#data-entry-capture"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Data Capturing
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#data-cleaning"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Data Cleaning
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#transcription-services"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Transcription
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#data-entry-capture"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Data Entry
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#survey-data-entry"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Survey Data Entry &amp; Analysis
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#image-to-text"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Image-to-Text (OCR)
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>

          <Link
            to="/services/#data-validation"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Data Validation
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:text-white" size={16} />
          </Link>
        </nav>

        {/* Right Column: Service Philosophy */}
        <section aria-labelledby="philosophy-heading">
          <h4
            id="philosophy-heading"
            className="text-lg sm:text-xl font-semibold text-[#1e1b4b] mb-4 pb-1 border-b border-[#1e1b4b]/40"
          >
            What We Deliver
          </h4>

          <h2 className="text-xl sm:text-2xl text-[#1e1b4b] mb-4 font-lora">
            We exist to turn data into decisions that move industries forward.
          </h2>

          <p className="text-base sm:text-lg text-[#1e1b4b] mb-3">
            At Stonewall Data Solutions, we specialize in capturing, cleaning, validating, and organizing data so businesses can operate with clarity and precision. Whether it's transcription, survey analysis, OCR, or structuring raw information into actionable formats, our services are designed to reduce noise, increase accuracy, and unlock the full potential of your data. We help teams focus on what matters—by making data work harder, smarter, and cleaner.
          </p>

          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center text-[#ff7200] text-sm font-medium hover:underline"
          >
            Explore all services <span className="ml-1" aria-hidden="true">→</span>
          </Link>
        </section>
      </div>

      {/* Optional bottom close arrow */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-[#ff7200] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded-md p-1"
          aria-label="Close modal"
        >
          <ArrowUp size={28} strokeWidth={2.5} />
        </button>
      </div>
    </AccessibleModal>
  );
};

export default ServicesModal;
