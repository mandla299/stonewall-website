import { Link } from "react-router-dom";
import { ArrowRight, Check, Database, Layers3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="sw-hero">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-orange-400"
              />
              <span className="text-xs font-semibold tracking-[0.14em] text-slate-200 uppercase">
                Structure the data. Unlock the value.
              </span>
            </div>

            <h1
              id="hero-heading"
              className="max-w-2xl text-5xl leading-[1.08] font-extrabold tracking-[-0.055em] sm:text-6xl xl:text-7xl"
            >
              Your data.
              <br />
              Clearer.
              <br />
              <span className="sw-gradient-text">More powerful.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              Turn scattered records, complex spreadsheets, and conversations
              into structured information your team can use. We help with data
              capture, cleaning, and transcription.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="sw-button sw-button-primary">
                Discuss your project
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <Link to="/services" className="sw-button sw-button-secondary">
                Explore our services
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              {["Capture", "Clean", "Transcribe"].map((label) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Check
                    size={16}
                    className="text-orange-400"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative illustration; these are illustrative records. */}
          <div className="sw-data-art" aria-hidden="true">
            <div className="sw-data-orbit" />

            <div className="sw-data-panel">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-orange-400/25 bg-orange-400/10 p-3">
                    <Layers3 size={22} className="text-orange-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      From information to clarity
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      The Stonewall approach
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                </div>
              </div>

              <svg viewBox="0 0 440 230" className="sw-data-flow" fill="none">
                <path
                  d="M45 50C145 50 130 115 220 115M45 115H220M45 180C145 180 130 115 220 115M220 115C305 115 300 50 395 50M220 115H395M220 115C305 115 300 180 395 180"
                  stroke="#ffffff20"
                  strokeWidth="2"
                />
                <path
                  d="M45 115H220C305 115 300 50 395 50"
                  stroke="#ff9a4d"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />

                {[50, 115, 180].map((y) => (
                  <g key={y}>
                    <rect
                      x="24"
                      y={y - 19}
                      width="40"
                      height="38"
                      rx="10"
                      fill="#242b48"
                      stroke="#ffffff25"
                    />
                    <path
                      d={`M35 ${y - 5}H52M35 ${y + 2}H48M35 ${y + 9}H44`}
                      stroke="#a7b0cb"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <rect
                      x="377"
                      y={y - 19}
                      width="40"
                      height="38"
                      rx="10"
                      fill="#ff720015"
                      stroke="#ff9a4d60"
                    />
                    <path
                      d={`M387 ${y}L394 ${y + 6}L407 ${y - 7}`}
                      stroke="#ffb879"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                ))}

                <path
                  d="M220 72L258 94V137L220 159L182 137V94L220 72Z"
                  fill="#ff720018"
                  stroke="#ff9a4d"
                  strokeWidth="2"
                />
                <path
                  d="M182 94L220 116L258 94M220 116V159M201 83L239 105"
                  stroke="#ffb879"
                  strokeWidth="2"
                />
                <circle
                  cx="118"
                  cy="115"
                  r="5"
                  fill="#ff9a4d"
                  className="sw-flow-dot"
                />
                <circle
                  cx="318"
                  cy="71"
                  r="5"
                  fill="#ff9a4d"
                  className="sw-flow-dot"
                />
              </svg>

              <div className="mb-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center text-xs text-slate-300">
                <span>Gather</span>
                <span>Structure</span>
                <span>Deliver</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0b1024]/40 p-4">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Database size={14} className="text-orange-300" />
                  Structured output
                </div>

                <div className="grid grid-cols-3 gap-3 text-[10px] tracking-wider text-slate-400 uppercase">
                  <span>Record</span>
                  <span>Format</span>
                  <span>Status</span>
                </div>

                {["Record A", "Record B"].map((record) => (
                  <div
                    key={record}
                    className="mt-3 grid grid-cols-3 gap-3 border-t border-white/5 pt-3 text-xs"
                  >
                    <span className="text-slate-300">{record}</span>
                    <span className="text-slate-400">Standardized</span>
                    <span className="text-orange-300">Reviewed</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sw-floating-label">
              <span className="rounded-full bg-orange-400/15 p-1.5">
                <Check size={16} className="text-orange-300" />
              </span>
              <span className="text-sm font-semibold text-white">
                Clarity starts here
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row lg:mt-24">
          <span>STONEWALL DATA SOLUTIONS</span>
          <span>Data capture / Data cleaning / Transcription</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
