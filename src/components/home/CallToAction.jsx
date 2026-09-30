import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-[#faf8f5] px-6 pb-20 sm:px-8 lg:pb-24"
    >
      <div className="sw-final-cta mx-auto max-w-7xl">
        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex rounded-xl border border-white/20 bg-white/10 p-3">
              <MessageSquare
                size={24}
                className="text-orange-200"
                aria-hidden="true"
              />
            </span>

            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-200 uppercase">
              Your next step
            </p>

            <h2
              id="cta-heading"
              className="text-3xl leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Let's bring clarity
              <br />
              to your next project.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-200">
              Tell us what you're working with and what you need. We'll discuss
              the scope, deliverables, and a suitable approach.
            </p>
          </div>

          <div className="shrink-0">
            <Link to="/contact" className="sw-button sw-button-primary">
              Request a quote
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-slate-300">
              Start with a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
