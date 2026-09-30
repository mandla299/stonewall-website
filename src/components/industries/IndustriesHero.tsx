import { Link } from "react-router-dom";
import { ArrowRight, Network } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section aria-labelledby="industries-hero-title" className="sw-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
            Industries we serve
          </p>

          <h1
            id="industries-hero-title"
            className="text-5xl leading-[1.1] font-extrabold tracking-[-0.05em] text-white sm:text-6xl"
          >
            Your sector.
            <br />
            Your information.
            <br />
            <span className="sw-gradient-text">A clearer approach.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            From patient records to product catalogues, every sector works with
            different information. We adapt our data capture, cleaning, and
            transcription services to your requirements.
          </p>

          <Link to="/contact" className="sw-button sw-button-primary mt-8">
            Discuss your industry
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="sw-about-statement">
          <span className="inline-flex rounded-2xl border border-orange-300/25 bg-orange-400/10 p-4">
            <Network size={34} className="text-orange-300" aria-hidden="true" />
          </span>

          <h2 className="mt-7 text-2xl leading-snug font-bold tracking-tight text-white sm:text-3xl">
            Different workflows.
            <br />
            <span className="text-orange-300">Shared need for clarity.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            The right structure starts with understanding how your team
            collects, manages, and uses its information.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/15 pt-6">
            {["Capture", "Clean", "Transcribe"].map((service) => (
              <li
                key={service}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
