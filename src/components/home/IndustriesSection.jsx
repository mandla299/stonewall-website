import { Link } from "react-router-dom";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Scale,
  Truck,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: <HeartPulse size={24} aria-hidden="true" />,
    description:
      "Patient records, clinical documents, and medical transcription.",
  },
  {
    name: "Finance",
    icon: <Landmark size={24} aria-hidden="true" />,
    description:
      "Financial forms, statements, and consistent transaction records.",
  },
  {
    name: "Education",
    icon: <GraduationCap size={24} aria-hidden="true" />,
    description:
      "Student information, research interviews, and learning material.",
  },
  {
    name: "Retail",
    icon: <ShoppingBag size={24} aria-hidden="true" />,
    description:
      "Product catalogues, inventory records, and sales information.",
  },
  {
    name: "Legal",
    icon: <Scale size={24} aria-hidden="true" />,
    description: "Case documentation, contract data, and hearing transcripts.",
  },
  {
    name: "Logistics",
    icon: <Truck size={24} aria-hidden="true" />,
    description: "Delivery notes, shipment details, and warehouse records.",
  },
];

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="sw-industries"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        <div className="lg:pt-5">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
            Industries we serve
          </p>

          <h2
            id="industries-heading"
            className="text-4xl leading-tight font-extrabold tracking-[-0.045em] text-white sm:text-5xl"
          >
            Different sectors.
            <br />
            <span className="sw-gradient-text">One clear purpose.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
            Every industry works with different information. We adapt our
            capture, cleaning, and transcription services to your records,
            requirements, and everyday workflows.
          </p>

          <Link to="/industries" className="sw-button sw-button-secondary mt-8">
            Explore industries
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <div className="mt-10 border-l-2 border-orange-400/60 pl-5">
            <p className="text-sm leading-7 text-slate-400">
              Have a different kind of project?
              <br />
              <Link
                to="/contact"
                className="rounded text-orange-300 underline decoration-orange-300/40 underline-offset-4 hover:decoration-orange-300"
              >
                Tell us what you need.
              </Link>
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.name} className="sw-industry-tile">
              <span className="sw-industry-icon">{industry.icon}</span>

              <h3 className="mt-5 text-lg font-bold text-white">
                {industry.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
