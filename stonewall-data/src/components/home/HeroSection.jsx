
import React from 'react';
import GetQuoteButton from './GetQuoteButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[80vh] md:min-h-screen w-full bg-gradient-to-br from-orange-100 via-white to-gray-200"
    >
      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Vertical spacing accounts for fixed navbar (approx 68–72px) */}
        <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 flex flex-col items-center text-center">
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1e1b4b] leading-tight"
            aria-describedby="hero-desc"
          >
            Explore the Power of{" "}
            <span className="text-[#ff7200]">
              Clean, 
              {/* Only force a line break on medium+ screens */}
              <br className="hidden md:block" />
              Actionable
            </span>{" "}
            Data
          </h1>

          {/* Subcopy */}
          <p
            id="hero-desc"
            className="mt-4 sm:mt-5 text-base sm:text-lg text-[#1e1b4b]/90 max-w-prose sm:max-w-2xl"
          >
            Beautifully structured, fully customizable data workflows, from capturing
            and cleaning to transcription and validation. Built to simplify operations
            and accelerate decision-making across industries.
          </p>

          {/* CTA */}
          <div className="mt-7 sm:mt-8">
            {/* Ensure GetQuoteButton has a visible focus ring internally */}
            <GetQuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
