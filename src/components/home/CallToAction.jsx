
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section
      id="cta"
      aria-label="Call to action"
      className="w-full flex justify-center mt-14 sm:mt-16 mb-14 sm:mb-16 px-4"
    >
      <div
        className="w-full max-w-4xl py-10 sm:py-12 px-5 sm:px-6 text-[#ff7200] bg-gradient-to-br from-[#1f160d] via-[#0a3a8c] to-[#2e2e2e] rounded-2xl shadow-lg relative overflow-hidden"
      >
        <div className="text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Let’s Talk Data
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-[#e1e1e5] max-w-2xl mx-auto">
            Whether you're cleaning thousands of records or building a custom capture workflow, Stonewall Data Solutions is ready to help you move faster, smarter, and with clarity.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#ff7200] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]"
          >
            Request a Quote <ArrowRightCircle size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
