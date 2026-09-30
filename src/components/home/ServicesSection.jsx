import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  FileInput,
  AudioLines,
  Sparkles,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Data Capture",
    icon: <FileInput size={26} aria-hidden="true" />,
    to: "/services#data-entry-capture",
    description:
      "Bring scattered information together in a structured, usable format.",
    features: [
      "Paper forms, PDFs, and spreadsheets",
      "Consistent fields and formatting",
      "Outputs prepared for your workflow",
    ],
  },
  {
    number: "02",
    title: "Transcription",
    icon: <AudioLines size={26} aria-hidden="true" />,
    to: "/services#transcription-services",
    description: "Give your conversations a clear, searchable written record.",
    features: [
      "Audio and video transcription",
      "Interviews, meetings, and research",
      "Speaker labels and requested timestamps",
    ],
  },
  {
    number: "03",
    title: "Data Cleaning",
    icon: <Sparkles size={26} aria-hidden="true" />,
    to: "/services#data-cleaning",
    description:
      "Make your datasets easier to work with through cleaner, consistent records.",
    features: [
      "Duplicate identification and removal",
      "Standardized names, dates, and formats",
      "Missing values flagged for review",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="sw-services"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              What we do
            </p>

            <h2
              id="services-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.045em] text-[#10152f] sm:text-5xl"
            >
              Less complexity.
              <br />
              <span className="text-[#b84300]">More clarity.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Practical data services that help you organize information, reduce
              manual work, and move your next project forward.
            </p>
          </div>

          <Link
            to="/services"
            className="sw-services-link inline-flex items-center gap-3 self-start rounded-lg py-2 text-sm font-bold text-[#10152f]"
          >
            View all services
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="sw-service-card"
            >
              <div className="relative flex items-start justify-between">
                <span className="sw-service-icon">{service.icon}</span>

                <span
                  aria-hidden="true"
                  className="text-sm font-semibold tracking-wider text-slate-400"
                >
                  / {service.number}
                </span>
              </div>

              <div className="relative mt-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#10152f]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-[#b84300]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-sm font-bold text-[#10152f]">
                  Explore service
                </span>
                <span className="sw-service-arrow">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
