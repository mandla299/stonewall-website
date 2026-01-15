
// TermsOfService.jsx
import React from "react";

/**
 * TermsOfService Component
 *
 * Usage:
 * <TermsOfService
 *   companyName="Your Company (Pty) Ltd"
 *   domain="yourdomain.com"
 *   contactEmail="support@yourdomain.com"
 *   contactPhone="+27 11 000 0000"
 *   contactAddress="123 Bath Ave, Rosebank, Johannesburg, 2196, South Africa"
 *   lastUpdated="13 January 2026"
 *   governingLaw="South Africa"
 *   jurisdiction="Gauteng"
 *   privacyPolicyUrl="/privacy"
 *   includePublicityClause={true}
 *   includeNonSolicitClause={true}
 *   paymentTerms={{
 *     invoiceDays: 30,
 *     lateInterestPercentPerMonth: 2,
 *   }}
 *   defaultRetentionDays={90}
 *   disputeResolution={{
 *     useMediationArbitration: true,
 *     forum: "Johannesburg",
 *     rules: "AFSA",
 *   }}
 * />
 */

const Section = ({ title, children, id }) => (
  <section className="mb-8" aria-labelledby={id}>
    <h2 id={id} className="text-xl font-semibold mt-6 mb-3">
      {title}
    </h2>
    <div className="space-y-3 leading-relaxed text-gray-800">{children}</div>
  </section>
);

const List = ({ children }) => (
  <ul className="list-disc pl-6 space-y-2">{children}</ul>
);

const TermsOfService = ({
  companyName = "Stonewall Data Solutions (Pty) Ltd",
  domain = "www.swdatasolutions.com",
  contactEmail = "mandla@swdatasolutions.com",
  contactPhone = "+27 79 408 3701",
  contactAddress = "187 Lillian Ngoyi Street, Lillian Ngoyi Street, Johannesburg, Gauteng, South Africa",
  lastUpdated = "January 2026",
  governingLaw = "South Africa",
  jurisdiction = "Gauteng",
  privacyPolicyUrl = "/privacy",
  includePublicityClause = false,
  includeNonSolicitClause = false,
  paymentTerms = {
    invoiceDays: 30,
    lateInterestPercentPerMonth: 2,
  },
  defaultRetentionDays = 90,
  disputeResolution = {
    useMediationArbitration: false,
    forum: "Johannesburg",
    rules: "AFSA",
  },
}) => {
  const todayISO = new Date().toISOString().split("T")[0];

  return (
    <>
    <main
          className="max-w-3xl mx-auto px-4 py-10 text-sm text-gray-900"
          role="main"
          aria-label="Terms of Service"
      >
          {/* Print-friendly styles */}
          <style>{`
        @media print {
          .no-print { display: none !important; }
          body { color: #000; }
        }
      `}</style>

          <a href="#content" className="sr-only">Skip to content</a><header className="mb-6 border-b pb-4">
              <h1 className="text-2xl font-bold">Terms of Service</h1>
              <p className="mt-2 text-gray-700">
                  <span className="font-medium">Last Updated:</span>{" "}
                  {lastUpdated}{" "}
                  <time dateTime={todayISO} className="sr-only">
                      Generated on {todayISO}
                  </time>
              </p>
              <p className="mt-1 text-gray-700">
                  <span className="font-medium">Owner:</span> {companyName} |{" "}
                  <span className="font-medium">Website:</span> {domain}
              </p>
              <p className="mt-1 text-gray-700">
                  <span className="font-medium">Contact:</span>{" "}
                  <a href={`mailto:${contactEmail}`} className="underline">
                      {contactEmail}
                  </a>{" "}
                  | {contactPhone} | {contactAddress}
              </p>
          </header><div id="content">
              <Section id="acceptance" title="1. Acceptance of Terms">
                  <p>
                      By accessing or using {domain} and our services, you agree to these
                      Terms of Service (“Terms”). If you are entering into these Terms on
                      behalf of an organization, you represent that you have authority to
                      bind that organization. If you do not agree, do not use our
                      services.
                  </p>
              </Section>

              <Section id="services" title="2. Services We Provide">
                  <p>We offer professional data services, including:</p>
                  <List>
                      <li>
                          <strong>Data Cleaning &amp; Preparation</strong> (formatting,
                          deduplication, standardization)
                      </li>
                      <li>
                          <strong>Data Validation</strong> (rules, constraints, quality
                          checks)
                      </li>
                      <li>
                          <strong>Data Visualization</strong> (dashboards, charts, reports)
                      </li>
                      <li>
                          <strong>Transcription</strong> (audio/video to text)
                      </li>
                      <li>
                          <strong>Data Transformation &amp; Enrichment</strong>
                      </li>
                      <li>
                          <strong>Consulting &amp; Advisory</strong> (data strategy,
                          workflows, documentation)
                      </li>
                  </List>
                  <p>
                      A detailed scope, timelines, and pricing are set out in the
                      applicable Proposal, Statement of Work (SOW), or Order Form
                      (“Order”).
                  </p>
              </Section>

              <Section id="eligibility" title="3. Eligibility & Account Registration">
                  <p>
                      You must be at least 18 and have the legal capacity to contract. If
                      accounts are required, you must provide accurate information and
                      keep credentials confidential. You are responsible for activity
                      under your account.
                  </p>
              </Section>

              <Section id="client-resp" title="4. Client Responsibilities">
                  <List>
                      <li>
                          Provide timely access to data, files, credentials, and
                          subject‑matter experts needed to perform the services.
                      </li>
                      <li>
                          Ensure you have lawful rights to share all materials with us.
                      </li>
                      <li>
                          Avoid submitting illegal content or content that infringes
                          third‑party rights.
                      </li>
                      <li>
                          Review and approve deliverables within the review period defined
                          in the Order.
                      </li>
                      <li>Maintain backups of your own data.</li>
                      <li>
                          Comply with applicable laws (including data protection and
                          intellectual property laws).
                      </li>
                  </List>
              </Section>

              <Section id="data-ownership" title="5. Data Ownership & License">
                  <List>
                      <li>
                          <strong>Your Data:</strong> You retain all rights in data, files,
                          audio/video, and materials you provide (“Client Data”).
                      </li>
                      <li>
                          <strong>License to Us:</strong> You grant us a non‑exclusive,
                          royalty‑free license to use, process, and transform Client Data
                          solely to deliver the services and improve quality, as specified
                          in the Order.
                      </li>
                      <li>
                          <strong>Deliverables:</strong> Upon full payment, you own the
                          final deliverables (e.g., cleaned datasets, visualizations,
                          transcripts) except for any pre‑existing tools, templates, or
                          libraries we use to create them.
                      </li>
                      <li>
                          <strong>Tools &amp; Know‑How:</strong> We retain ownership of our
                          methodologies, templates, know‑how, and software. We grant you a
                          non‑exclusive license to use deliverables internally for your
                          business purposes, unless the Order grants broader rights.
                      </li>
                  </List>
              </Section>

              <Section id="confidentiality" title="6. Confidentiality">
                  <p>
                      Each party must keep the other’s non‑public information
                      confidential and use it only for the purposes of the engagement.
                      Exceptions: information that is public, already known without
                      breach, independently developed, or required by law to be disclosed
                      (with notice where legally allowed).
                  </p>
              </Section>

              <Section id="privacy" title="7. Privacy & Data Protection">
                  <p>
                      We process personal information in accordance with our{" "}
                      <a href={privacyPolicyUrl} className="underline">
                          Privacy Policy
                      </a>
                      . If you share personal information, you warrant that it was
                      collected lawfully and that you have the necessary consents or legal
                      basis. Where applicable, we can enter into a data processing
                      agreement (DPA) to address roles, safeguards, sub‑processors, and
                      international transfers.
                  </p>
                  <p>
                      <em>Note (South Africa):</em> If your operations involve South
                      African personal information, the Protection of Personal
                      Information Act (POPIA) applies. We will implement reasonable
                      technical and organizational measures to secure data and follow your
                      documented instructions for processing where we act as a
                      processor/service provider.
                  </p>
              </Section>

              <Section id="security" title="8. Security">
                  <p>
                      We use reasonable administrative, technical, and physical safeguards
                      appropriate to the nature of the data and services. No system is
                      100% secure; you acknowledge residual risk inherent in online and
                      data processing activities.
                  </p>
              </Section>

              <Section id="accuracy" title="9. Accuracy, Limitations & Client Review">
                  <p>
                      We aim for high quality, but outputs may depend on the quality and
                      completeness of Client Data. You are responsible for reviewing and
                      validating deliverables for fitness of purpose before relying on
                      them for business or regulatory decisions.
                  </p>
                  <p>
                      For <strong>transcription services</strong>, accuracy may vary due
                      to audio quality, accents, overlapping speech, and domain‑specific
                      terminology. We provide best‑effort accuracy per the Order and can
                      perform post‑editing on request.
                  </p>
              </Section>

              <Section id="fees" title="10. Fees, Invoicing & Payment">
                  <List>
                      <li>Fees are set out in the Order.</li>
                      <li>
                          Invoices are payable within{" "}
                          <strong>{paymentTerms.invoiceDays}</strong> days of issue.
                      </li>
                      <li>
                          Late payments may incur interest at{" "}
                          <strong>{paymentTerms.lateInterestPercentPerMonth}%</strong> per
                          month (or the maximum lawful rate).
                      </li>
                      <li>
                          Fixed‑price engagements may require deposits or milestone
                          payments.
                      </li>
                      <li>
                          Time‑and‑materials engagements are billed based on actual hours
                          and expenses.
                      </li>
                      <li>
                          Taxes, bank charges, and currency conversion fees are your
                          responsibility.
                      </li>
                  </List>
                  <p>We may suspend services for non‑payment after notice.</p>
              </Section>

              <Section id="changes" title="11. Changes, Rush Work & Out‑of‑Scope">
                  <p>
                      Changes to scope, expedited timelines, or additional iterations may
                      affect fees and delivery dates. We will notify you and seek written
                      confirmation (email suffices) before proceeding with out‑of‑scope
                      work.
                  </p>
              </Section>

              <Section id="third-party" title="12. Third‑Party Services & Data">
                  <p>
                      Services may rely on third‑party platforms (e.g., analytics tools,
                      cloud storage, transcription engines). Use of such platforms is
                      subject to their terms. We are not responsible for third‑party
                      outages, changes, or data loss attributable to those platforms.
                  </p>
              </Section>

              <Section id="prohibited" title="13. Prohibited Uses">
                  <List>
                      <li>Violate law, infringe intellectual property, or breach privacy rights.</li>
                      <li>Create or distribute malicious code or attempt unauthorized access.</li>
                      <li>
                          Develop automated decisioning that unlawfully discriminates or
                          causes harm.
                      </li>
                      <li>
                          Misrepresent or conceal materially significant facts in regulated
                          contexts.
                      </li>
                  </List>
              </Section>

              <Section id="warranties" title="14. Warranties & Disclaimers">
                  <p>
                      Except as explicitly stated in the Order, services are provided{" "}
                      <strong>“as is”</strong> and <strong>“as available.”</strong> We
                      disclaim all implied warranties (merchantability, fitness for a
                      particular purpose, non‑infringement). We do not warrant
                      uninterrupted operation or error‑free outputs and do not provide
                      legal, tax, or financial advice.
                  </p>
              </Section>

              <Section id="liability" title="15. Limitation of Liability">
                  <List>
                      <li>
                          We are <strong>not liable</strong> for indirect, incidental,
                          consequential, special, exemplary, or punitive damages (including
                          lost profits, data loss, or business interruption).
                      </li>
                      <li>
                          Our total liability arising out of or related to the services is
                          limited to the <strong>amounts you paid</strong> to us for the
                          specific engagement in the <strong>12 months</strong> preceding
                          the event giving rise to the claim.
                      </li>
                  </List>
                  <p>
                      Nothing in these Terms limits liability for fraud, willful
                      misconduct, death or personal injury caused by negligence, or other
                      liability that cannot be limited by law.
                  </p>
              </Section>

              <Section id="indemnity" title="16. Indemnity">
                  <p>
                      You agree to indemnify and hold us harmless against claims, damages,
                      liabilities, costs, and expenses (including reasonable legal fees)
                      arising from: (a) your use of the services or deliverables in
                      violation of law or these Terms; (b) infringement caused by Client
                      Data; or (c) disputes between you and your end users or data
                      subjects.
                  </p>
              </Section>

              <Section id="term-termination" title="17. Term & Termination">
                  <List>
                      <li>
                          These Terms apply from your first use of the website or services
                          and continue until termination.
                      </li>
                      <li>
                          Either party may terminate for convenience on <strong>30</strong>{" "}
                          days’ written notice for ongoing/retainer engagements.
                      </li>
                      <li>
                          Either party may terminate for material breach not cured within{" "}
                          <strong>14</strong> days of notice.
                      </li>
                      <li>
                          Upon termination, you must pay for services rendered and expenses
                          incurred up to the termination date.
                      </li>
                      <li>
                          We will provide any completed or in‑progress deliverables that
                          have been paid for.
                      </li>
                  </List>
              </Section>

              <Section id="retention" title="18. Data Retention & Return">
                  <p>
                      Upon completion or termination, we will{" "}
                      <em>retain or delete</em> Client Data per the Order and Privacy
                      Policy. On written request within <strong>30</strong> days, we will
                      return available Client Data and deliverables in a standard format.
                      We may retain residual backups as required by law or for legitimate
                      business purposes (e.g., audit, dispute resolution), subject to
                      confidentiality.
                  </p>
                  <p>
                      Default retention of working files is{" "}
                      <strong>{defaultRetentionDays}</strong> days post‑delivery unless
                      otherwise required.
                  </p>
              </Section>

              {includeNonSolicitClause && (
                  <Section id="non-solicit" title="19. Non‑Solicitation">
                      <p>
                          During the engagement and for <strong>12</strong> months after,
                          you agree not to solicit our employees or contractors directly for
                          employment or services, unless mutually agreed.
                      </p>
                  </Section>
              )}

              {includePublicityClause && (
                  <Section id="publicity" title="20. Publicity">
                      <p>
                          We may disclose that you are a client and use your logo and
                          non‑confidential project summaries in marketing materials, unless
                          you opt out in writing.
                      </p>
                  </Section>
              )}

              <Section id="law" title="21. Governing Law & Dispute Resolution">
                  <p>
                      These Terms and any non‑contractual obligations arising out of them
                      are governed by the laws of <strong>{governingLaw}</strong>.
                  </p>
                  <p>
                      <strong>Jurisdiction:</strong> The courts of{" "}
                      <strong>{jurisdiction}</strong> shall have exclusive jurisdiction,
                      subject to any mandatory consumer protection rules.
                  </p>
                  <p>
                      <strong>Good‑Faith Resolution:</strong> Parties will first attempt
                      to resolve disputes informally within <strong>20</strong> business
                      days.
                  </p>
                  {disputeResolution?.useMediationArbitration && (
                      <p>
                          <strong>Mediation/Arbitration:</strong> If unresolved, disputes
                          may proceed to mediation or arbitration in{" "}
                          <strong>{disputeResolution.forum}</strong> under{" "}
                          <strong>{disputeResolution.rules}</strong> rules, by mutual
                          agreement.
                      </p>
                  )}
              </Section>

              <Section id="force-majeure" title="22. Force Majeure">
                  <p>
                      Neither party is liable for delays or failures caused by events
                      beyond reasonable control (e.g., natural disasters, strikes, war,
                      civil unrest, government action, power or internet failures, major
                      platform outages), provided the affected party takes reasonable steps
                      to mitigate.
                  </p>
              </Section>

              <Section id="changes-terms" title="23. Changes to These Terms">
                  <p>
                      We may update these Terms from time to time. Material changes will
                      be notified via the website or email. Continued use after changes
                      become effective constitutes acceptance.
                  </p>
              </Section>

              <Section id="entire-agreement" title="24. Entire Agreement">
                  <p>
                      These Terms, together with the Order and Privacy Policy, constitute
                      the entire agreement between the parties regarding the services and
                      supersede prior agreements on the same subject. If any provision is
                      found unenforceable, the remainder remains in effect.
                  </p>
              </Section>

              <Section id="assignment" title="25. Assignment">
                  <p>
                      You may not assign or transfer your rights or obligations under
                      these Terms without our prior written consent. We may assign these
                      Terms as part of a merger, acquisition, or sale of assets, provided
                      your rights are not materially prejudiced.
                  </p>
              </Section>

              <Section id="notices" title="26. Notices">
                  <p>
                      Notices must be sent to: <br />
                      <strong>Us:</strong> legal@{domain}, Attn: Legal; {contactAddress}
                      <br />
                      <strong>You:</strong> The contact details provided in your Order or
                      account.
                  </p>
              </Section>

              <Section id="definitions" title="27. Definitions">
                  <List>
                      <li>
                          <strong>“Client Data”</strong>: Data, files, audio/video,
                          materials, and instructions you provide.
                      </li>
                      <li>
                          <strong>“Deliverables”</strong>: Outputs produced under the Order
                          (e.g., cleaned datasets, dashboards, transcripts, reports).
                      </li>
                      <li>
                          <strong>“Order”</strong>: A mutually agreed proposal, SOW, or
                          order form describing scope, pricing, and timelines.
                      </li>
                      <li>
                          <strong>“Personal Information”</strong>: Information relating to
                          an identifiable individual, as defined by applicable law (e.g.,
                          POPIA).
                      </li>
                  </List>
              </Section>

              <Section id="appendix" title="Appendix A – Data Handling & Transcription Specifics (Optional)">
                  <List>
                      <li>
                          <strong>File Formats:</strong> We support common formats (CSV,
                          XLSX, JSON, Parquet, WAV, MP3, MP4, etc.).
                      </li>
                      <li>
                          <strong>Retention:</strong> Default retention of working files is{" "}
                          {defaultRetentionDays} days post‑delivery unless otherwise
                          required.
                      </li>
                      <li>
                          <strong>Quality Standards:</strong> We apply documented validation
                          rules and provide a summary of checks performed upon request.
                      </li>
                      <li>
                          <strong>Transcription Glossaries:</strong> You may supply
                          glossaries to improve domain term accuracy.
                      </li>
                      <li>
                          <strong>Human Review:</strong> For premium accuracy levels, we
                          offer human‑in‑the‑loop review at additional cost.
                      </li>
                  </List>
              </Section>

              <Section id="disclaimer" title="Legal Disclaimer">
                  <p>
                      We are not your lawyers. This component is provided for general
                      informational purposes and does not constitute legal advice. Please
                      have a qualified attorney review and customize it for your specific
                      business, jurisdictions, and any sector‑specific rules you operate
                      under.
                  </p>
              </Section>
          </div><div className="mt-8 flex items-center gap-3 no-print">
              <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-2 rounded bg-gray-900 text-white hover:bg-black"
              >
                  Print
              </button>
              <a
                  href={`mailto:${contactEmail}`}
                  className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-50"
              >
                  Contact Us
              </a>
          </div>
    </main>
    </>
  );
};

export default TermsOfService;
