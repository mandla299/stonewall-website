
import React from 'react';

const AboutMission = () => {
  return (
    <section
      id="our-mission"
      aria-label="Our Mission"
      className="bg-white text-[#1e1b4b] py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Text Content */}
        <div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight"
            aria-describedby="mission-desc"
          >
            Our Mission
          </h2>

          <div id="mission-desc" className="space-y-4">
            <p className="text-base sm:text-lg text-[#332E81]">
              At Stonewall Data Solutions, our mission is simple: to bring clarity to complexity. We
              believe that data should empower, not overwhelm—and that every dataset holds a story
              waiting to be told.
            </p>
            <p className="text-base sm:text-lg text-[#332E81]">
              We specialize in cleaning, validating, and structuring data with precision and care.
              But our work goes beyond the technical — we design expressive, modular systems that
              make information intuitive, accessible, and emotionally resonant.
            </p>
            <p className="text-base sm:text-lg text-[#332E81]">
              Whether we’re building tactile interfaces, choreographing motion flows, or visualizing
              team schedules, our goal is always the same: to help people make confident decisions
              with data they can trust.
            </p>
          </div>
        </div>

        {/* Visual Block: Mission Organogram */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-[#1f160d] via-[#0a3a8c] to-[#2e2e2e]">
            {/* Header */}
            <div className="px-6 pt-6">
              <div className="text-white text-center font-bold text-lg sm:text-xl">
                OUR MISSION
              </div>
            </div>

            {/* Core Statement */}
            <div className="px-6 mt-4">
              <div className="bg-white rounded-lg p-4 text-center shadow font-semibold text-[#1e1b4b]">
                Bring clarity to complexity
              </div>
            </div>

            {/* Steps */}
            <div className="px-6 py-6">
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                  <div className="bg-[#ff7200] p-2 rounded-full" aria-hidden="true">
                    {/* Check icon */}
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 17l6-6 4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#1e1b4b] font-medium">
                    Clean, validate, and structure data
                  </span>
                </li>

                <li className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                  <div className="bg-[#ff7200] p-2 rounded-full" aria-hidden="true">
                    {/* List icon */}
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16v2H4V4zm0 5h10v2H4V9zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
                    </svg>
                  </div>
                  <span className="text-[#1e1b4b] font-medium">
                    Design expressive, modular systems
                  </span>
                </li>

                <li className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                  <div className="bg-[#ff7200] p-2 rounded-full" aria-hidden="true">
                    {/* Clock/flow icon */}
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#1e1b4b] font-medium">
                    Help people make confident decisions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Motion reduce: ensure hover effects are gentle (if added later) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-reduce\\:transition-none { transition: none !important; }
          .motion-reduce\\:transform-none { transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutMission;
