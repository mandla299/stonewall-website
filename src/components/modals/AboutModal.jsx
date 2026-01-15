
// src/components/modals/AboutModal.jsx
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import AccessibleModal from './AccessibleModal';

const AboutModal = ({ onClose }) => {
  return (
    <AccessibleModal
      title="About Us"
      description="Quick access to About content and a mission overview."
      onClose={onClose}
    >
      {/* Two-Column Layout (becomes single column on small screens) */}
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column: Navigation Links */}
        <nav aria-label="About navigation" className="flex flex-col space-y-3">
          {/* Section title (kept visually consistent with your original) */}
          <h3 className="text-lg sm:text-xl font-semibold text-[#1e1b4b] pb-1 border-b border-[#1e1b4b]/40">
            About Us
          </h3>

          <Link
            to="/about/#who-we-are"
            smooth
            onClick={onClose}
            className="scroll-mt-24 group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Who We Are
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:text-white"
              size={16}
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/about/#our-mission"
            smooth
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Our Mission
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:text-white"
              size={16}
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/about/#our-commitment"
            smooth
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Our Commitment
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:text-white"
              size={16}
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/about/#values"
            smooth
            onClick={onClose}
            className="group flex items-center text-base sm:text-lg text-[#1e1b4b] gap-2 px-3 py-2 rounded-md bg-transparent hover:bg-[#ff7200] hover:text-white transition-colors"
          >
            Our Values
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:text-white"
              size={16}
              aria-hidden="true"
            />
          </Link>
        </nav>

        {/* Right Column: Mission Statement */}
        <section aria-labelledby="mission-heading">
          <h4
            id="mission-heading"
            className="text-lg sm:text-xl font-semibold text-[#1e1b4b] mb-4 pb-1 border-b border-[#1e1b4b]/40"
          >
            Our Mission
          </h4>

          <h2 className="text-xl sm:text-2xl text-[#1e1b4b] mb-4 font-lora">
            We exist to turn data into decisions that move industries forward.
          </h2>

          <p className="text-base sm:text-lg text-[#1e1b4b] mb-3">
            At Stonewall Data Solutions, we empower brands to move with confidence
            through modular design systems, expressive storytelling, and digital
            experiences that are as accessible as they are impactful. We believe that
            clarity is not just a design principle, but a strategic advantage.
            We design every solution to be clear, adaptable, and human-centered —
            empowering teams to act with focus and turning data into meaningful impact.
          </p>

          <Link
            to="/about/#our-mission"
            smooth
            onClick={onClose}
            className="inline-flex items-center text-[#ff7200] text-sm font-medium hover:underline"
          >
            Read more <span className="ml-1" aria-hidden="true">→</span>
          </Link>
        </section>
      </div>

      {/* Bottom Center Close Arrow (optional – you can keep it for parity with your design) */}
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

export default AboutModal;
