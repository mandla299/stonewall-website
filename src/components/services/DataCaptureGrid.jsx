import React, { useEffect, useMemo, useState } from "react";
import {
  ClipboardList,
  ScanText,
  UserCheck,
  FileSpreadsheet,
  TimerReset,
  Settings2,
  ExternalLink,
  Copy as CopyIcon,
  Download as DownloadIcon,
  WrapText as WrapIcon,
  ListOrdered as ListIcon,
} from "lucide-react";

// Adjust the import path to your file tree
import AccessibleModal from "../modals/AccessibleModal";

/* ----------------------------- Sample data ----------------------------- */
/* NOTE: Avoid HTML entities like &amp; in JS strings—use & directly. */
const dataCaptureModes = [
  {
    title: "Structured Form Capture",
    description:
      "Ideal for surveys, onboarding, and compliance workflows. Fields are validated, labeled, and styled for clarity and accessibility.",
    sample: `Name: Katleho
Email: katleho@stonewall.co.za
Consent: ✅`,
    fullSample: `Structured Form — A4 Preview

[Start of Form]

Name: Katleho Mokoena
Email: katleho@stonewall.co.za
Phone: +27 82 123 4567
Date of Birth: 1992-04-15
Consent to Terms: ✅
Preferred Contact Method: Email
Region: Gauteng
Service Tier: Premium

[End of Form]`,
    icon: ClipboardList,
  },
  {
    title: "OCR & Document Parsing",
    description:
      "Extracts text from scanned forms, receipts, and IDs. Perfect for digitizing paperwork and automating archival.",
    sample: `Invoice #2031
Total: R1,250.00
Due: 30 Sep 2025`,
    fullSample: `OCR Parsing — A4 Preview

[Start of Document]

Invoice #: 2031
Client: Stonewall Cleaning Services
Date Issued: 15 Sep 2025
Due Date: 30 Sep 2025

Itemized Charges:
- Deep Clean (Zone B): R750.00
- Supplies & Consumables: R500.00

Total: R1,250.00
Status: Unpaid

[End of Document]`,
    icon: ScanText,
  },
  {
    title: "User-Attributed Input",
    description:
      "Tracks who entered what, when, and why. Great for collaborative logs, shift handovers, and accountability.",
    sample: `Katleho (11:42 AM): Updated client status to “Onboarding”`,
    fullSample: `User Attribution — A4 Preview

[Start of Log]

Katleho (11:42 AM): Updated client status to “Onboarding”
Thabo (12:15 PM): Added cleaning notes for Zone C
Lebo (1:05 PM): Flagged payment issue for Invoice #2031
Katleho (2:30 PM): Resolved payment issue and marked invoice as paid

[End of Log]`,
    icon: UserCheck,
  },
  {
    title: "Spreadsheet Import & Sync",
    description:
      "Bulk upload structured data from Excel or CSV. Supports mapping, validation, and real-time sync with dashboards.",
    sample: `Row 14: [Client: Neo | Status: Active | Joined: 2025-08-01]`,
    fullSample: `Spreadsheet Sync — A4 Preview

[Start of Import]

Row 14:
Client Name: Neo Dlamini
Status: Active
Joined: 2025-08-01
Region: Western Cape
Service Tier: Standard
Last Interaction: 2025-09-20

Validation: ✅
Sync Status: Complete

[End of Import]`,
    icon: FileSpreadsheet,
  },
  {
    title: "Time-Based Entry",
    description:
      "Captures data with timestamps for audits, reviews, and time-sensitive workflows. Useful for cleaning logs, delivery tracking, and attendance.",
    sample: `[10:15 AM] Cleaner #4 completed Zone B`,
    fullSample: `Time-Based Entry — A4 Preview

[Start of Log]

[08:00 AM] Cleaner #2 began Zone A
[09:45 AM] Cleaner #2 completed Zone A
[10:15 AM] Cleaner #4 completed Zone B
[11:00 AM] Supervisor reviewed Zone B
[11:30 AM] Supplies restocked in Zone C

Audit Status: Logged
Supervisor Notes: No issues reported

[End of Log]`,
    icon: TimerReset,
  },
  {
    title: "Custom Logic & Validation",
    description:
      "Smart forms with conditional fields, error handling, and branded feedback. Ensures data integrity and user confidence.",
    sample: `“Please enter a valid phone number.”
→ +27 82 123 4567 ✅`,
    fullSample: `Validation Logic — A4 Preview

[Start of Form]

Phone Number: +27 82 123 4567 ✅
Email: katleho@stonewall.co.za ✅
ID Number: 9204151234081 ✅
Region: Gauteng ✅

Conditional Logic:
- If Region = Gauteng → Show “Zone Preference” field
- If Service Tier = Premium → Require “Consent to Terms”

Error Handling:
- Invalid phone format → “Please enter a valid phone number.”
- Missing email → “Email is required.”

[End of Form]`,
    icon: Settings2,
  },
];

/* ----------------------------- Utilities ----------------------------- */

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.replace(/\s+/g, "_") + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ----------------------- Reusable sample pieces ---------------------- */

function SampleSnippet({ text, onCopy, onOpen }) {
  return (
    <div className="mt-3 rounded-lg border border-orange-100 bg-orange-50/50">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-medium text-[#1e1b4b]/80">Sample</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#ff7200] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
          >
            <CopyIcon className="h-4 w-4" aria-hidden="true" />
            Copy
          </button>
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#ff7200] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View full
          </button>
        </div>
      </div>
      <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-words px-3 pb-3 font-mono text-[13px] leading-relaxed text-[#1e1b4b] selection:bg-orange-200/60">
        {text}
      </pre>
    </div>
  );
}

function LineNumbered({ text, showNumbers, wrap }) {
  const lines = useMemo(() => text.split("\n"), [text]);
  const textClass = wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre";

  if (!showNumbers) {
    return (
      <pre
        className={`${textClass} font-mono text-sm leading-7 text-[#10152f]`}
      >
        {text}
      </pre>
    );
  }

  return (
    <ol className="list-decimal pl-8 marker:text-[#b84300]">
      {lines.map((line, index) => (
        <li key={index} className="pl-2">
          <code
            className={`${textClass} block font-mono text-sm leading-7 text-[#10152f]`}
          >
            {line || "\u00A0"}
          </code>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------ Component ---------------------------- */

const DataCaptureGrid = () => {
  const [selectedSample, setSelectedSample] = useState(null);
  const [showSamples, setShowSamples] = useState(false);
  const [wrap, setWrap] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(""), 2500);
    return () => clearTimeout(timer);
  }, [feedback]);

  useEffect(() => {
    if (!selectedSample) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSample]);

  const openSample = (mode) => {
    setWrap(true);
    setLineNumbers(false);
    setFeedback("");
    setSelectedSample(mode);
  };

  const copySample = async (text) => {
    const success = await copyToClipboard(text);
    setFeedback(
      success
        ? "Sample copied to clipboard."
        : "Copy failed. Please select and copy the text manually.",
    );
  };

  return (
    <section
      id="data-entry-capture"
      aria-labelledby="capture-heading"
      className="sw-services"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              01 / Data capture
            </p>
            <h2
              id="capture-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-5xl"
            >
              Start with information.
              <br />
              <span className="text-[#b84300]">Build useful records.</span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-8 text-slate-600">
              Data capture brings information from documents, forms, and
              spreadsheets into a consistent structure. We discuss your sources,
              required fields, and output format before work begins.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Explore the examples below to see different ways information can
              be organized. Samples are illustrative.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-5">
          <p className="text-sm font-semibold text-[#10152f]">
            Explore capture approaches
          </p>

          <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-3 text-sm font-semibold text-[#10152f]">
            <input
              type="checkbox"
              checked={showSamples}
              onChange={(event) => setShowSamples(event.target.checked)}
              aria-controls="capture-modes-grid"
              className="h-4 w-4 accent-[#b84300]"
            />
            Show sample snippets
          </label>
        </div>

        <p role="status" className="mt-3 min-h-6 text-sm text-[#b84300]">
          {feedback}
        </p>

        <div
          id="capture-modes-grid"
          className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {dataCaptureModes.map((mode, index) => (
            <article key={mode.title} className="sw-capture-card">
              <div className="flex items-start justify-between gap-4">
                <span className="sw-service-icon">
                  {React.createElement(mode.icon, {
                    size: 25,
                    "aria-hidden": true,
                  })}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold text-slate-400"
                >
                  / {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#10152f]">
                {mode.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {mode.description}
              </p>

              {showSamples && (
                <SampleSnippet
                  text={mode.sample}
                  onCopy={() => copySample(mode.sample)}
                  onOpen={() => openSample(mode)}
                />
              )}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => openSample(mode)}
                  aria-haspopup="dialog"
                  className="sw-sample-action"
                >
                  View full sample
                  <ExternalLink size={16} aria-hidden="true" />
                  <span className="sr-only">: {mode.title}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedSample && (
          <div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-[#0b1024]/65 px-4 py-6 backdrop-blur-sm sm:py-12"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedSample(null);
              }
            }}
          >
            <div className="w-full max-w-3xl">
              <AccessibleModal
                title={`${selectedSample.title} — Full Sample`}
                description="Illustrative sample. Copy or download the text, or adjust its display."
                onClose={() => setSelectedSample(null)}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copySample(selectedSample.fullSample)}
                    className="sw-sample-action"
                  >
                    <CopyIcon size={16} aria-hidden="true" />
                    Copy
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      downloadText(
                        selectedSample.title,
                        selectedSample.fullSample,
                      );
                      setFeedback("Sample text download started.");
                    }}
                    className="sw-sample-action"
                  >
                    <DownloadIcon size={16} aria-hidden="true" />
                    Download .txt
                  </button>

                  <button
                    type="button"
                    onClick={() => setWrap((current) => !current)}
                    aria-pressed={wrap}
                    className="sw-sample-action"
                  >
                    <WrapIcon size={16} aria-hidden="true" />
                    Wrap text
                  </button>

                  <button
                    type="button"
                    onClick={() => setLineNumbers((current) => !current)}
                    aria-pressed={lineNumbers}
                    className="sw-sample-action"
                  >
                    <ListIcon size={16} aria-hidden="true" />
                    Line numbers
                  </button>
                </div>

                <p role="status" className="mb-3 text-sm text-[#b84300]">
                  {feedback}
                </p>

                <div className="max-h-[50dvh] overflow-auto rounded-xl border border-slate-200 bg-[#faf8f5] p-4 sm:p-6">
                  <LineNumbered
                    text={selectedSample.fullSample}
                    showNumbers={lineNumbers}
                    wrap={wrap}
                  />
                </div>
              </AccessibleModal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataCaptureGrid;
