import { Check, ArrowRight, Files, Database } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    number: "01",
    title: "Information you can work with",
    description:
      "Consistent fields and formats make your records easier to search, compare, and use.",
  },
  {
    number: "02",
    title: "Less time spent fixing records",
    description:
      "Address duplicates and formatting issues before they interrupt everyday work.",
  },
  {
    number: "03",
    title: "A clearer view of your business",
    description:
      "Better organized inputs support clearer reporting and more informed decisions.",
  },
];

const DataImportanceSection = () => {
  return (
    <section
      id="why-data-organization"
      aria-labelledby="data-benefits-heading"
      className="bg-[#faf8f5]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="sw-transformation" aria-hidden="true">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <span className="text-sm font-bold text-[#10152f]">
                From scattered to structured
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-[#b84300]">
                A clearer workflow
              </span>
            </div>

            <div className="relative my-10 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
              <div className="space-y-3">
                {["Paper forms", "Spreadsheets", "Audio files"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-600 sm:p-4 sm:text-sm"
                  >
                    <Files size={16} className="shrink-0 text-slate-400" />
                    {label}
                  </div>
                ))}
              </div>

              <ArrowRight size={22} className="text-[#b84300]" />

              <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6">
                <Database size={30} className="mb-4 text-[#b84300]" />
                <p className="text-sm font-bold text-[#10152f]">
                  Usable information
                </p>
                <div className="mt-4 space-y-3">
                  {["Organized", "Consistent", "Reviewed"].map((label) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <Check size={14} className="shrink-0 text-[#b84300]" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="border-t border-slate-200 pt-5 text-sm leading-7 text-slate-500">
              Capture the information. Improve its structure. Prepare it for the
              people who need it.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              Why better data matters
            </p>

            <h2
              id="data-benefits-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.045em] text-[#10152f] sm:text-5xl"
            >
              Make room for
              <br />
              <span className="text-[#b84300]">better decisions.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Your team should spend more time using information and less time
              untangling it. Clear structure makes that easier.
            </p>

            <div className="mt-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="flex gap-4 border-t border-slate-200 py-5"
                >
                  <span className="pt-1 text-xs font-bold text-[#b84300]">
                    {benefit.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#10152f]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="sw-services-link mt-4 inline-flex items-center gap-3 rounded-lg py-2 text-sm font-bold text-[#10152f]"
            >
              Let's discuss your data
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataImportanceSection;
