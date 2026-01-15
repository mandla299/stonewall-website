
import React from 'react';

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      aria-label="About Stonewall Data Solutions"
      className="mt-0 bg-gradient-to-br from-[#1f160d] via-[#0a3a8c] to-[#2e2e2e] text-white py-20 sm:py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          aria-describedby="about-hero-desc"
        >
          About Us
        </h1>

        <p
          id="about-hero-desc"
          className="text-base sm:text-lg md:text-xl font-medium text-white/80 leading-relaxed max-w-prose mx-auto"
        >
          At Stonewall Data Solutions, we believe in clarity, precision, and expressive design.
          Our mission is to clean, validate, and elevate data so your decisions are always grounded in truth.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
