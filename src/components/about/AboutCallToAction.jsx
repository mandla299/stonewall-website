
import React from 'react';
import { Link } from 'react-router-dom';

const AboutCallToAction = () => {
  return (
    <section
      id="about-cta"
      aria-label="Explore Stonewall's platform"
      className="relative flex flex-col items-center justify-center w-full mx-auto mt-10 mb-5 px-4 sm:px-6"
    >
      {/* Container with background image */}
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay: improves contrast */}
        <div className="absolute inset-0 rounded-2xl bg-black/50" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 py-16 sm:py-20 md:py-24 px-6 md:px-10 lg:px-14 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight"
            aria-describedby="about-cta-desc"
          >
            Modular Intelligence for Collaborative Data Solutions
          </h2>

          {/* Accent rule */}
          <div
            className="mx-auto mt-3 h-[3px] w-28 sm:w-32 bg-gradient-to-r from-[#ff7200] to-[#be3c05]"
            aria-hidden="true"
          />

          <p
            id="about-cta-desc"
            className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/90 leading-relaxed"
          >
            Stonewall empowers teams with expressive AI agents, modular workflows, and real‑time
            insights designed for clarity, fairness, and scale.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Link
              to="/platform" // update to the route you actually want to use
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff7200] to-[#be3c05] text-white px-6 sm:px-8 py-2.5 text-sm font-semibold shadow-md hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7200]"
            >
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* Decorative corner gradient (hidden on mobile for performance/clarity) */}
        <div className="pointer-events-none absolute right-0 bottom-0 w-[180px] h-[180px] bg-gradient-to-tl from-[#ff7200]/30 to-transparent blur-2xl opacity-70 hidden sm:block" aria-hidden="true" />
      </div>

      {/* Reduced motion respect (if you add animations later) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-reduce\\:transition-none { transition: none !important; }
          .motion-reduce\\:transform-none { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutCallToAction;
