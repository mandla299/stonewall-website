
// src/components/modals/IndustriesModal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import AccessibleModal from './AccessibleModal';

const IndustriesModal = ({ onClose }) => {
  return (
    <AccessibleModal
      title="Industries We Serve"
      description="Explore sectors where clean, validated data drives impact."
      onClose={onClose}
    >
      {/* Two-Column Layout */}
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column: Industries List */}
        <nav aria-label="Industry navigation" className="flex flex-col space-y-3">
          <Link
            to="/industries/healthcare"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Healthcare
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>

          <Link
            to="/industries/legal"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Legal Services
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>

          <Link
            to="/industries/finance"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Finance
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>

          <Link
            to="/industries/education"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Education
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>

          <Link
            to="/industries/research"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Marketing &amp; Research
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>

          <Link
            to="/industries/logistics"
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Logistics &amp; Operations
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:text-white transition-transform" size={16} />
          </Link>
        </nav>

        {/* Right Column: Industry Impact */}
        <section aria-labelledby="impact-heading">
          <h4
            id="impact-heading"
            className="text-lg sm:text-xl font-semibold text-[#1e1b4b] mb-4 pb-1 border-b border-[#1e1b4b]/40"
          >
            Why It Matters
          </h4>

          <h2 className="text-xl sm:text-2xl text-[#1e1b4b] mb-4 font-lora">
            We help industries transform raw data into clarity, compliance, and confident action.
          </h2>

          <p className="text-base sm:text-lg text-[#1e1b4b] mb-3">
            From hospitals and law firms to logistics hubs and research teams, Stonewall Data Solutions empowers organizations to manage their data with precision. Whether it's digitizing handwritten forms, validating sensitive records, transcribing interviews, or structuring survey results—we make sure your data is clean, accessible, and ready to drive results.
          </p>

          <Link
            to="/industries"
            onClick={onClose}
            className="inline-flex items-center text-[#ff7200] text-sm font-medium hover:underline"
          >
            Explore all industries <span className="ml-1" aria-hidden="true">→</span>
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

export default IndustriesModal;
