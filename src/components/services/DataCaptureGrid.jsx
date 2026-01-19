
import React, { useEffect, useMemo, useState } from 'react';
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
} from 'lucide-react';

// Adjust the import path to your file tree
import AccessibleModal from '../modals/AccessibleModal';

/* ----------------------------- Sample data ----------------------------- */
/* NOTE: Avoid HTML entities like &amp; in JS strings—use & directly. */
const dataCaptureModes = [
  {
    title: 'Structured Form Capture',
    description:
      'Ideal for surveys, onboarding, and compliance workflows. Fields are validated, labeled, and styled for clarity and accessibility.',
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
    title: 'OCR & Document Parsing',
    description:
      'Extracts text from scanned forms, receipts, and IDs. Perfect for digitizing paperwork and automating archival.',
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
    title: 'User-Attributed Input',
    description:
      'Tracks who entered what, when, and why. Great for collaborative logs, shift handovers, and accountability.',
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
    title: 'Spreadsheet Import & Sync',
    description:
      'Bulk upload structured data from Excel or CSV. Supports mapping, validation, and real-time sync with dashboards.',
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
    title: 'Time-Based Entry',
    description:
      'Captures data with timestamps for audits, reviews, and time-sensitive workflows. Useful for cleaning logs, delivery tracking, and attendance.',
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
    title: 'Custom Logic & Validation',
    description:
      'Smart forms with conditional fields, error handling, and branded feedback. Ensures data integrity and user confidence.',
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

function useCopyFeedback(timeout = 1400) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), timeout);
    return () => clearTimeout(t);
  }, [copied, timeout]);
  return { copied, setCopied };
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.replace(/\s+/g, '_') + '.txt';
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

function LineNumbered({ text, showNumbers }) {
  const lines = useMemo(() => text.split('\n'), [text]);
  if (!showNumbers) {
    return (
      <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-[#1e1b4b] selection:bg-orange-200/60">
        {text}
      </pre>
    );
  }
  return (
    <ol className="list-decimal pl-8 marker:text-[#ff7200] space-y-0">
      {lines.map((ln, i) => (
        <li key={i} className="pl-2">
          <code className="font-mono text-sm text-[#1e1b4b] break-words">{ln || '\u00A0'}</code>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------ Component ---------------------------- */

const DataCaptureGrid = () => {
  const [selectedSample, setSelectedSample] = useState(null);
  const [showSamples, setShowSamples] = useState(false);

  // Modal view settings
  const [wrap, setWrap] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(false);

  // Action feedback (aria-live)
  const { copied, setCopied } = useCopyFeedback();

  // Scroll lock while modal open
  useEffect(() => {
    document.body.style.overflow = selectedSample ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSample]);

  const onCopyInline = async (text) => {
    const ok = await copyToClipboard(text);
    if (ok) setCopied(true);
  };

  const onCopyFull = async () => {
    if (!selectedSample) return;
    const ok = await copyToClipboard(selectedSample.fullSample);
    if (ok) setCopied(true);
  };

  const onDownloadFull = () => {
    if (!selectedSample) return;
    downloadText(selectedSample.title, selectedSample.fullSample);
    setCopied(true); // reuse live region to announce action
  };

  return (
    <section
      id="data-entry-capture"
      aria-label="Data Entry & Capture"
      className="bg-[#fefefe] text-[#1e1b4b] py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      {/* Screen-reader live region for copy/download announcements */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Content copied or downloaded.' : ''}
      </span>

      <div className="mx-auto max-w-6xl">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center leading-tight mb-6"
          aria-describedby="data-entry-capture-desc"
        >
          Data Capture — Simple, Clear, and Built to Help You Work Better
        </h2>

        {/* Optional samples toggle */}
        <div className="flex items-center justify-center mb-8">
          <label className="inline-flex items-center gap-2 text-sm sm:text-base">
            <input
              type="checkbox"
              checked={showSamples}
              onChange={(e) => setShowSamples(e.target.checked)}
              className="h-4 w-4 accent-[#ff7200]"
              aria-controls="capture-modes-grid"
            />
            <span className="text-[#332E81]">Show sample snippets</span>
          </label>
        </div>

        <div
          id="data-entry-capture-desc"
          className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 text-[#332E81] text-base leading-relaxed"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#1e1b4b]">What Is Data Capture?</h3>
            <p className="mb-4">
              Data capture is the process of collecting, structuring, and validating information from
              users, documents, or systems. It powers operations, insights, and accountability.
            </p>
            <p>
              At Stonewall, we treat data entry as a choreography — every field, label, and interaction
              is designed to guide, reassure, and empower. Whether it’s OCR or form logic, our systems
              are modular and expressive.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#1e1b4b]">Why It Matters</h3>
            <p className="mb-4">
              Clean, intentional data entry fuels transparency, automation, and collaboration. It’s
              the backbone of scheduling, reporting, and service delivery.
            </p>
            <p>
              Our capture modes adapt to your workflow — from timestamped cleaning logs to spreadsheet
              imports and branded validation. Every interaction is designed for clarity, speed, and trust.
            </p>
          </div>
        </div>

        {/* Modes grid */}
        <div
          id="capture-modes-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-14"
          role="list"
          aria-label="Data capture modes"
        >
          {dataCaptureModes.map(({ title, description, sample, fullSample, icon: Icon }) => (
            <article
              key={title}
              role="listitem"
              className="rounded-xl p-6 shadow-md bg-gradient-to-br from-[#f2f2f2] to-[#e6ebf4]
                         hover:shadow-lg transition duration-300 motion-reduce:transition-none"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5 text-[#ff7200]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1e1b4b]">{title}</h3>
                  <p className="mt-1 text-sm text-[#332E81]">{description}</p>
                </div>
              </div>

              {/* Optional inline snippet */}
              {showSamples && (
                <SampleSnippet
                  text={sample}
                  onCopy={() => onCopyInline(sample)}
                  onOpen={() => {
                    setSelectedSample({ title, fullSample });
                    // Reset modal toolbar toggles for a fresh view per open
                    setWrap(true);
                    setLineNumbers(false);
                  }}
                />
              )}
            </article>
          ))}
        </div>

        {/* Modal — full sample with toolbar */}
        {selectedSample && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#1e1b4b]/30 backdrop-blur-sm"
            onClick={(e) => {
              if (e.currentTarget === e.target) setSelectedSample(null);
            }}
          >
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
              <AccessibleModal
                title={`${selectedSample.title} — Full Sample`}
                description="Scrollable text; use toolbar to copy, download, toggle wrap and line numbers."
                onClose={() => setSelectedSample(null)}
              >
                {/* Toolbar */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={onCopyFull}
                    className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-[#ff7200] hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
                  >
                    <CopyIcon className="h-4 w-4" aria-hidden="true" /> Copy
                  </button>
                  <button
                    type="button"
                    onClick={onDownloadFull}
                    className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-[#ff7200] hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
                  >
                    <DownloadIcon className="h-4 w-4" aria-hidden="true" /> Download .txt
                  </button>
                  <button
                    type="button"
                    onClick={() => setWrap((v) => !v)}
                    aria-pressed={wrap}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1e1b4b] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
                  >
                    <WrapIcon className="h-4 w-4" aria-hidden="true" />
                    {wrap ? 'Disable wrap' : 'Enable wrap'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLineNumbers((v) => !v)}
                    aria-pressed={lineNumbers}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1e1b4b] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
                  >
                    <ListIcon className="h-4 w-4" aria-hidden="true" />
                    {lineNumbers ? 'Hide line numbers' : 'Show line numbers'}
                  </button>
                </div>

                {/* Full sample viewer */}
                <div
                  className={`max-h-[70vh] overflow-auto rounded-lg border ${
                    wrap ? 'border-gray-100' : 'border-gray-200'
                  } bg-white p-4`}
                >
                  <div className={wrap ? 'whitespace-pre-wrap break-words' : 'whitespace-pre overflow-x-auto'}>
                    <LineNumbered text={selectedSample.fullSample} showNumbers={lineNumbers} />
                  </div>
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
