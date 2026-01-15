
import React from 'react';

const IndustriesHero = () => {
  return (
    <section
      aria-labelledby="industries-hero-title"
      
className="
  relative
  bg-gradient-to-br from-[#6750c5] via-[#4b422d] to-[#2d533d]
  text-[#332E81]
  dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]
  shadow-xl overflow-hidden
"

    >
      {/* Decorative background element */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/patterns/hero-bg.svg')] opacity-10"
      ></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative z-10">
        {/* Heading */}
        <h1
          id="industries-hero-title"
          className="
            text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight
            bg-gradient-to-r from-white via-yellow-100 to-orange-200
            text-transparent bg-clip-text
            mb-6
          "
        >
          Industries We Empower <br /> Services Designed for Every Sector
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-white/90">
          From healthcare to field operations, our transcription, data entry, and data cleaning services adapt to your workflow. We choreograph clarity, accountability, and scale.
        </p>

        {/* Divider */}
        <div className="h-[4px] w-32 mx-auto bg-white rounded-full shadow-md"></div>
      </div>
    </section>
  );
};

export default IndustriesHero;
