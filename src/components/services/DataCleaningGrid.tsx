import { useState } from "react";
import {
  CopyCheck,
  CaseSensitive,
  CalendarDays,
  ListFilter,
  FileQuestion,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const cleaningModes = [
  {
    title: "Duplicate records",
    icon: <CopyCheck size={25} aria-hidden="true" />,
    description:
      "Identify repeated records and apply agreed rules for keeping, merging, or flagging them.",
    before: `Customer ID | Name
C001        | Example Customer
C001        | Example Customer`,
    after: `Customer ID | Name
C001        | Example Customer

Exact duplicate removed.
Potential matches require review.`,
  },
  {
    title: "Consistent text",
    icon: <CaseSensitive size={25} aria-hidden="true" />,
    description:
      "Standardize casing and remove unnecessary spaces so values follow a consistent format.",
    before: `City
" johannesburg "
"JOHANNESBURG"
"Johannesburg"`,
    after: `City
Johannesburg
Johannesburg
Johannesburg

Whitespace removed.
Capitalization standardized.`,
  },
  {
    title: "Dates and formats",
    icon: <CalendarDays size={25} aria-hidden="true" />,
    description:
      "Align date formats and flag ambiguous values instead of silently guessing their meaning.",
    before: `Date
30 Sep 2026
2026/09/30
03/04/2026`,
    after: `Date       | Review
2026-09-30 | Not required
2026-09-30 | Not required
Unresolved | Confirm day/month order`,
  },
  {
    title: "Categories and labels",
    icon: <ListFilter size={25} aria-hidden="true" />,
    description:
      "Map inconsistent labels to agreed categories for clearer grouping and reporting.",
    before: `Status
active
ACTIVE
Act.
Pending`,
    after: `Status
Active
Active
Active
Pending

Mapping confirmed against
the agreed category list.`,
  },
  {
    title: "Missing information",
    icon: <FileQuestion size={25} aria-hidden="true" />,
    description:
      "Identify gaps and flag them for review. Missing information is not invented.",
    before: `Record | Email
A001   | contact@example.com
A002   |
A003   | Not provided`,
    after: `Record | Email               | Review
A001   | contact@example.com | Not required
A002   |                     | Missing email
A003   |                     | Missing email`,
  },
];

const DataCleaningGrid = () => {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <section
      id="data-cleaning"
      aria-labelledby="cleaning-heading"
      className="sw-services"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              03 / Data cleaning
            </p>

            <h2
              id="cleaning-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-5xl"
            >
              Clear the inconsistencies.
              <br />
              <span className="text-[#b84300]">Keep the meaning.</span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-8 text-slate-600">
              Duplicates, inconsistent formats, and missing values can make
              everyday work harder. We help organize your datasets using agreed
              rules and flag records that need your input.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              The examples below illustrate common cleaning tasks. The approach
              for your project depends on your data and requirements.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-5">
          <p className="text-sm font-semibold text-[#10152f]">
            Small improvements. Clearer records.
          </p>

          <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-[#10152f]">
            <input
              type="checkbox"
              checked={showExamples}
              onChange={(event) => setShowExamples(event.target.checked)}
              aria-controls="cleaning-examples"
              className="h-4 w-4 accent-[#b84300]"
            />
            Show all examples
          </label>
        </div>

        <div
          id="cleaning-examples"
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cleaningModes.map((mode) => (
            <article key={mode.title} className="sw-capture-card">
              <span className="sw-service-icon">{mode.icon}</span>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#10152f]">
                {mode.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {mode.description}
              </p>

              <details
                key={`${mode.title}-${showExamples}`}
                open={showExamples}
                className="mt-6"
              >
                <summary className="cursor-pointer rounded-lg py-3 text-sm font-bold text-[#b84300]">
                  Before and after example
                </summary>

                <div className="mt-3 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                      Before
                    </p>
                    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-slate-600">
                      {mode.before}
                    </pre>
                  </div>

                  <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
                    <p className="mb-3 text-xs font-bold tracking-wider text-[#b84300] uppercase">
                      After
                    </p>
                    <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-[#10152f]">
                      {mode.after}
                    </pre>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-[#10152f]">
              Have a dataset that needs attention?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Tell us about its format, size, and the issues you're seeing.
            </p>
          </div>

          <Link
            to="/contact"
            className="sw-button sw-button-primary shrink-0 self-start"
          >
            Discuss your data
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataCleaningGrid;
