import { Link } from "react-router-dom";
import {
  HeartPulse,
  GraduationCap,
  Globe,
  Building2,
  Landmark,
  Scale,
  ShoppingBag,
  Truck,
  ArrowUpRight,
  Check,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    icon: <HeartPulse size={25} aria-hidden="true" />,
    description:
      "Organize patient intake information, digitize documents, and prepare readable transcripts of recorded discussions.",
    services: ["Data capture", "Transcription", "Record standardization"],
    examples: [
      "Capture information from patient intake forms.",
      "Structure existing administrative records.",
      "Transcribe recordings using agreed terminology and formatting.",
    ],
  },
  {
    id: "education",
    name: "Education & Research",
    icon: <GraduationCap size={25} aria-hidden="true" />,
    description:
      "Bring consistency to student information and turn research recordings and paper surveys into usable records.",
    services: ["Survey capture", "Data cleaning", "Transcription"],
    examples: [
      "Digitize paper questionnaires and research notes.",
      "Identify duplicate or incomplete enrolment records.",
      "Transcribe interviews and recorded lectures.",
    ],
  },
  {
    id: "research",
    name: "Field Operations & NGOs",
    icon: <Globe size={25} aria-hidden="true" />,
    description:
      "Prepare collected field information for review, reporting, and analysis across community projects.",
    services: ["Survey capture", "Spreadsheet preparation", "Data cleaning"],
    examples: [
      "Capture completed household survey responses.",
      "Standardize locations and category labels.",
      "Flag missing fields and inconsistent entries.",
    ],
  },
  {
    id: "facilities",
    name: "Facilities Management",
    icon: <Building2 size={25} aria-hidden="true" />,
    description:
      "Organize operational records from cleaning teams, supervisors, and maintenance activities.",
    services: ["Log capture", "Record organization", "Data cleaning"],
    examples: [
      "Digitize existing task checklists and activity logs.",
      "Standardize zone names, dates, and staff identifiers.",
      "Prepare issue reports in a consistent format.",
    ],
  },
  {
    id: "finance",
    name: "Finance & Insurance",
    icon: <Landmark size={25} aria-hidden="true" />,
    description:
      "Prepare consistent client and document records that are easier for your team to review and work with.",
    services: ["Document capture", "Data cleaning", "Transcription"],
    examples: [
      "Capture agreed fields from forms and statements.",
      "Flag incomplete client onboarding records.",
      "Transcribe recorded meetings and advisory discussions.",
    ],
  },
  {
    id: "legal",
    name: "Legal & Compliance",
    icon: <Scale size={25} aria-hidden="true" />,
    description:
      "Make case information easier to reference through structured records and readable transcripts.",
    services: ["Transcription", "Metadata cleaning", "Document capture"],
    examples: [
      "Transcribe recorded hearings and interviews.",
      "Standardize matter names, dates, and references.",
      "Capture agreed fields from case documentation.",
    ],
  },
  {
    id: "retail",
    name: "Retail & Commerce",
    icon: <ShoppingBag size={25} aria-hidden="true" />,
    description:
      "Bring consistency to product, stock, and sales records across spreadsheets and documents.",
    services: ["Catalogue capture", "Data cleaning", "Record standardization"],
    examples: [
      "Standardize product names, SKUs, and categories.",
      "Identify repeated catalogue entries.",
      "Organize invoice and inventory information.",
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Operations",
    icon: <Truck size={25} aria-hidden="true" />,
    description:
      "Prepare clearer shipment and warehouse records for daily reference and reporting.",
    services: ["Document capture", "Data cleaning", "Log organization"],
    examples: [
      "Capture information from manifests and delivery notes.",
      "Standardize route names and location fields.",
      "Flag missing references and inconsistent timestamps.",
    ],
  },
];

const IndustriesGrid = () => {
  return (
    <section aria-labelledby="industries-title" className="sw-services">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
            Find your sector
          </p>

          <h2
            id="industries-title"
            className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-5xl"
          >
            Practical support.
            <br />
            <span className="text-[#b84300]">Relevant to your work.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            These examples show how our services can fit different sectors. We
            confirm the scope, handling requirements, and output format for each
            project.
          </p>
        </div>

        <nav aria-label="Industry sections" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <li key={industry.id}>
                <a href={`#${industry.id}`} className="sw-sector-chip">
                  {industry.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <article
              id={industry.id}
              key={industry.id}
              aria-labelledby={`${industry.id}-heading`}
              className="sw-capture-card"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="sw-service-icon">{industry.icon}</span>
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold text-slate-400"
                >
                  / {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                id={`${industry.id}-heading`}
                className="mt-6 text-2xl font-bold tracking-tight text-[#10152f]"
              >
                {industry.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {industry.description}
              </p>

              <ul
                aria-label="Relevant services"
                className="mt-5 flex flex-wrap gap-2"
              >
                {industry.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-[#b84300]"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Example project needs
                </p>
                <ul className="mt-4 space-y-3">
                  {industry.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                    >
                      <Check
                        size={16}
                        className="mt-1.5 shrink-0 text-[#b84300]"
                        aria-hidden="true"
                      />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <Link
                  to="/contact"
                  className="sw-services-link inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-[#10152f]"
                >
                  Discuss a project
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only"> for {industry.name}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
