import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Timer,
  ClipboardCheck,
  ExternalLink,
  BrushCleaning,
} from 'lucide-react';

type Sample = {
  title: string;
  fullSample: string;
};

const cleaningModes = [
  {
    title: 'Zone-Based Logging',
    description:
      'Logs cleaning activity by zone, timestamp, and personnel. Ideal for shift tracking and audit trails.',
    sample: `[08:15 AM] Cleaner #2 completed Zone A`,
    fullSample: `Zone-Based Log — A4 Format

[Start of Log]

[07:45 AM] Cleaner #1 began Zone A
[08:15 AM] Cleaner #2 completed Zone A
[08:30 AM] Supervisor reviewed Zone A
[09:00 AM] Cleaner #3 began Zone B
[09:45 AM] Cleaner #3 completed Zone B
[10:00 AM] Supplies restocked in Zone C

Audit Status: Logged
Supervisor Notes: No issues reported

[End of Log]`,
    icon: BrushCleaning,
  },
  {
    title: 'Checklist Completion',
    description:
      'Tracks task completion against predefined checklists. Useful for quality control and compliance.',
    sample: `✓ Trash removed\n✓ Surfaces wiped\n✓ Floors mopped`,
    fullSample: `Checklist — A4 Format

[Start of Checklist]

Zone A — Morning Shift

✓ Trash removed
✓ Surfaces wiped
✓ Floors mopped
✓ Windows cleaned
✓ Supplies restocked

Supervisor Signature: ____________________
Time Completed: 08:45 AM

[End of Checklist]`,
    icon: ClipboardCheck,
  },
  {
    title: 'Issue Flagging',
    description:
      'Allows cleaners to report problems or delays. Supports escalation and resolution tracking.',
    sample: `⚠️ Zone C: Broken vacuum reported at 09:10 AM`,
    fullSample: `Issue Report — A4 Format

[Start of Report]

Zone: C
Issue: Broken vacuum
Reported By: Cleaner #4
Time: 09:10 AM
Severity: Medium

Supervisor Response:
- Replacement requested
- Temporary workaround approved

Resolution Time: 11:30 AM

[End of Report]`,
    icon: AlertTriangle,
  },
  {
    title: 'Time-Based Entry',
    description:
      'Captures cleaning events with precise timestamps. Supports audits, reviews, and shift handovers.',
    sample: `[10:15 AM] Cleaner #4 completed Zone B`,
    fullSample: `Time Log — A4 Format

[Start of Log]

[08:00 AM] Cleaner #2 began Zone A
[09:45 AM] Cleaner #2 completed Zone A
[10:15 AM] Cleaner #4 completed Zone B
[11:00 AM] Supervisor reviewed Zone B
[11:30 AM] Supplies restocked in Zone C

Audit Status: Logged
Supervisor Notes: No issues reported

[End of Log]`,
    icon: Timer,
  },
  {
    title: 'Quality Review',
    description:
      'Supervisor reviews with notes, ratings, and follow-ups. Ensures accountability and continuous improvement.',
    sample: `Zone B: 4/5 — missed corner near entrance`,
    fullSample: `Quality Review — A4 Format

[Start of Review]

Zone: B
Reviewed By: Supervisor #2
Time: 11:00 AM

Rating: 4/5
Notes:
- Missed corner near entrance
- Supplies well-stocked
- Trash removed
- Surfaces clean

Follow-Up:
- Cleaner notified
- Re-clean scheduled for 12:30 PM

[End of Review]`,
    icon: CheckCircle2,
  },
];

const DataCleaningGrid = () => {
   const [selectedSample, setSelectedSample] = useState<Sample | null>(null);

  return (
    <section className="bg-[#fefefe] text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 id="data-cleaning" className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Data Cleaning 
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {cleaningModes.map(({ title, description, sample, fullSample, icon: Icon }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-[#f2f2f2] to-[#e6ebf4] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <Icon className="w-7 h-7 text-[#ff7200] mb-4" />
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-[#332E81]">{description}</p>
              <p className="mt-3 text-sm italic text-[#1e1b4b]">Sample: {sample}</p>
              <button
                onClick={() => setSelectedSample({ title, fullSample })}
                className="mt-4 inline-flex items-center text-sm text-[#ff7200] hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View Full Sample
              </button>
            </div>
          ))}
        </div>

        {/* Modal Popup with Blur Background */}
        {selectedSample && (
          <div className="fixed inset-0 z-50 px-4 overflow-y-auto backdrop-blur-sm bg-white/30">
            <div className="mx-auto mt-10 mb-10 bg-white w-full max-w-[794px] h-[1123px] overflow-y-auto rounded-lg shadow-lg p-8 relative">
              <button
                onClick={() => setSelectedSample(null)}
                className="absolute top-4 right-4 text-[#ff7200] font-bold text-lg"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4 text-[#1e1b4b]">
                {selectedSample.title} — Full Sample
              </h3>
              <pre className="whitespace-pre-wrap text-sm text-[#332E81] leading-relaxed">
                {selectedSample.fullSample}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataCleaningGrid;
