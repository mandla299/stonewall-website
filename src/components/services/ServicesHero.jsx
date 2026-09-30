import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  ArrowRight,
  ArrowDown,
  FileInput,
  AudioLines,
  Sparkles,
} from "lucide-react";

const serviceLinks = [
  {
    label: "Data capture",
    to: "/services#data-entry-capture",
    icon: <FileInput size={22} aria-hidden="true" />,
    description: "From scattered records to structured information.",
  },
  {
    label: "Transcription",
    to: "/services#transcription-services",
    icon: <AudioLines size={22} aria-hidden="true" />,
    description: "From spoken conversations to readable records.",
  },
  {
    label: "Data cleaning",
    to: "/services#data-cleaning",
    icon: <Sparkles size={22} aria-hidden="true" />,
    description: "From inconsistent datasets to clearer inputs.",
  },
];

const ServicesHero = () => {
  return (
    <section
      id="services-hero"
      aria-labelledby="services-page-heading"
      className="sw-hero"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
              Our services
            </p>

            <h1
              id="services-page-heading"
              className="text-5xl leading-[1.1] font-extrabold tracking-[-0.05em] sm:text-6xl"
            >
              Give your information
              <br />
              <span className="sw-gradient-text">a clearer direction.</span>
            </h1>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Capture what matters. Make conversations searchable. Bring
              consistency to your records. Explore practical services shaped
              around the information you work with.
            </p>

            <Link to="/contact" className="sw-button sw-button-primary mt-7">
              Discuss your requirements
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <nav aria-label="Services on this page" className="mt-14 lg:mt-16">
          <ul className="grid gap-4 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <li key={service.to}>
                <HashLink smooth to={service.to} className="sw-service-jump">
                  <span className="sw-industry-icon">{service.icon}</span>

                  <span className="mt-5 block text-lg font-bold text-white">
                    {service.label}
                  </span>

                  <span className="mt-2 block text-sm leading-7 text-slate-300">
                    {service.description}
                  </span>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-orange-300">
                    Explore service
                    <ArrowDown size={15} aria-hidden="true" />
                  </span>
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ServicesHero;
