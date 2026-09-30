import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers3,
  Target,
  Check,
  Handshake,
  Eye,
  ShieldCheck,
} from "lucide-react";

const commitments = [
  "Agree on the scope and expected outputs before work begins.",
  "Keep you informed about questions, progress, and limitations.",
  "Flag unclear or incomplete information for review.",
  "Prepare deliverables in the formats agreed for your project.",
];

const values = [
  {
    title: "Integrity",
    icon: <ShieldCheck size={25} aria-hidden="true" />,
    description:
      "Be honest about what we can deliver, handle information with care, and communicate limitations clearly.",
  },
  {
    title: "Insight",
    icon: <Eye size={25} aria-hidden="true" />,
    description:
      "Understand the purpose behind your records so the structure and output support the people using them.",
  },
  {
    title: "Collaboration",
    icon: <Handshake size={25} aria-hidden="true" />,
    description:
      "Ask useful questions, share progress, and work with you to resolve issues and refine requirements.",
  },
];

const About = () => {
  return (
    <main>
      <section
        id="about-hero"
        aria-labelledby="about-heading"
        className="sw-hero"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
              About Stonewall
            </p>

            <h1
              id="about-heading"
              className="text-5xl leading-[1.1] font-extrabold tracking-[-0.05em] sm:text-6xl"
            >
              Behind every record,
              <br />
              <span className="sw-gradient-text">a bigger purpose.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              We help businesses make their information easier to use. From
              capturing records to cleaning datasets and transcribing
              conversations, our focus is clarity.
            </p>

            <Link to="/contact" className="sw-button sw-button-primary mt-8">
              Let's work together
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="sw-about-statement">
            <div className="mb-8 inline-flex rounded-2xl border border-orange-300/25 bg-orange-400/10 p-4">
              <Layers3
                size={34}
                className="text-orange-300"
                aria-hidden="true"
              />
            </div>

            <p className="text-3xl leading-snug font-bold tracking-tight text-white">
              Structure the data.
              <br />
              <span className="text-orange-300">Unlock the value.</span>
            </p>

            <div className="mt-8 border-t border-white/15 pt-5 text-sm leading-7 text-slate-300">
              A clear purpose for every project. A practical approach to every
              record.
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        aria-labelledby="identity-heading"
        className="bg-[#faf8f5]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              Who we are
            </p>
            <h2
              id="identity-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-5xl"
            >
              A practical partner
              <br />
              for clearer information.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                Stonewall Data Solutions provides data capture, data cleaning,
                and transcription services for businesses and organizations.
              </p>
              <p>
                We work with information in different forms, including paper
                documents, spreadsheets, digital records, and audio. Our role is
                to help turn those inputs into organized outputs that fit your
                workflow.
              </p>
              <p>
                We start by understanding what you have, what needs attention,
                and how you plan to use the result.
              </p>
            </div>
          </div>

          <div
            id="our-commitment"
            className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              Our commitment
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#10152f]">
              Clear expectations.
              <br />
              Thoughtful delivery.
            </h2>

            <ul className="mt-7 space-y-5">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                >
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-[#b84300]"
                    aria-hidden="true"
                  />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="our-mission"
        aria-labelledby="mission-heading"
        className="sw-industries"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Target
              size={44}
              className="mb-6 text-orange-300"
              aria-hidden="true"
            />
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
              Our mission
            </p>
            <h2
              id="mission-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-5xl"
            >
              Bring clarity
              <br />
              <span className="sw-gradient-text">to complexity.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-slate-300">
              Our mission is to make information more accessible, consistent,
              and useful, so people can spend less time untangling records and
              more time moving their work forward.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Understand", "Your inputs and intended use."],
                ["02", "Organize", "The records and formats that matter."],
                ["03", "Prepare", "Outputs for your next step."],
              ].map(([number, title, description]) => (
                <li key={number} className="sw-industry-tile">
                  <span className="text-xs font-bold text-orange-300">
                    {number}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="values" aria-labelledby="our-values" className="sw-services">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
            What guides us
          </p>
          <h2
            id="our-values"
            className="text-4xl font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-5xl"
          >
            Our values, in practice.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            The way we communicate and work matters as much as the files we
            deliver.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
              >
                <span className="sw-service-icon">{value.icon}</span>
                <h3 className="mt-6 text-xl font-bold text-[#10152f]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-cta-heading"
        className="bg-[#faf8f5] px-6 pb-20 sm:px-8"
      >
        <div className="sw-final-cta mx-auto max-w-7xl">
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2
                id="about-cta-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Let's understand your next project.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Tell us about your records, your challenges, and the result
                you're looking for.
              </p>
            </div>
            <Link
              to="/contact"
              className="sw-button sw-button-primary shrink-0 self-start"
            >
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
