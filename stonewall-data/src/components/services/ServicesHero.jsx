
import React from 'react';

const ServicesHero = () => {
  return (
    <section
      id="services-hero"
      aria-label="Stonewall Data Solutions services overview"
      className="relative bg-gradient-to-br from-[#f2f9f2] via-[#e6ebf4] to-[#bcb1b1] text-[#1e1b4b] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight md:leading-snug tracking-tight mb-5"
          aria-describedby="services-hero-desc"
        >
          Transcribe, Clean, Analyze, Empower
          <br className="hidden md:block" />
          Services That Grow With You
        </h1>

        <p
          id="services-hero-desc"
          className="text-sm sm:text-base md:text-lg text-[#332E81] max-w-prose sm:max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          From transcription to transformation, we choreograph data workflows that empower clarity,
          fairness, and expressive insight.
        </p>

        <div
          className="h-[3px] w-28 sm:w-32 mx-auto bg-gradient-to-r from-[#ff7200] to-[#be3c05]"
          aria-hidden="true"
        />
      </div>

      {/* Respect reduced motion if you add animations later */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-reduce\\:transition-none { transition: none !important; }
          .motion-reduce\\:transform-none { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;
