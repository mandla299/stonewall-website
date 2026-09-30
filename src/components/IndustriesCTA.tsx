import { Link } from "react-router-dom";
import { ArrowRight, MessagesSquare } from "lucide-react";

const IndustriesCTA = () => {
  return (
    <section
      aria-labelledby="industries-cta-heading"
      className="bg-[#faf8f5] px-6 pb-20 sm:px-8 lg:pb-24"
    >
      <div className="sw-final-cta mx-auto max-w-7xl">
        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex rounded-xl border border-white/20 bg-white/10 p-3">
              <MessagesSquare
                size={25}
                className="text-orange-300"
                aria-hidden="true"
              />
            </span>

            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-200 uppercase">
              Let's understand your needs
            </p>

            <h2
              id="industries-cta-heading"
              className="text-3xl leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Your industry is different.
              <br />
              Your approach can be too.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Tell us how your team works, what information you have, and what
              you need from it. We'll discuss a suitable scope and the outputs
              that would help.
            </p>
          </div>

          <div className="shrink-0">
            <Link to="/contact" className="sw-button sw-button-primary">
              Discuss your project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <p className="mt-4 text-sm text-slate-300">
              Start with your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
