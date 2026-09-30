const industries = [
  {
    name: "Healthcare & Clinics",
    capture: "Patient intake and administrative forms",
    cleaning: "Duplicate records and inconsistent fields",
    transcription: "Recorded consultations and discussions",
  },
  {
    name: "Education & Research",
    capture: "Surveys, enrolment forms, and research notes",
    cleaning: "Student records and survey datasets",
    transcription: "Lectures and research interviews",
  },
  {
    name: "Field Operations & NGOs",
    capture: "Completed field surveys and activity logs",
    cleaning: "Location names and response categories",
    transcription: "Community interviews and meetings",
  },
  {
    name: "Facilities Management",
    capture: "Existing checklists and maintenance logs",
    cleaning: "Zone names, dates, and staff references",
    transcription: "Recorded handovers and meetings",
  },
  {
    name: "Finance & Insurance",
    capture: "Statements and client onboarding forms",
    cleaning: "Client records and transaction fields",
    transcription: "Recorded meetings and advisory sessions",
  },
  {
    name: "Legal & Compliance",
    capture: "Case documents and agreed metadata",
    cleaning: "Matter references, names, and dates",
    transcription: "Recorded hearings and interviews",
  },
  {
    name: "Retail & Commerce",
    capture: "Product catalogues and inventory records",
    cleaning: "SKUs, categories, and duplicate entries",
    transcription: "Recorded interviews and team discussions",
  },
  {
    name: "Logistics & Operations",
    capture: "Manifests and delivery notes",
    cleaning: "Routes, locations, and timestamps",
    transcription: "Recorded operational meetings",
  },
];

const ServiceMatrix = () => {
  return (
    <section aria-labelledby="service-matrix-heading" className="bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:pb-24">
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
          Services at a glance
        </p>

        <h2
          id="service-matrix-heading"
          className="text-3xl leading-tight font-extrabold tracking-[-0.04em] text-[#10152f] sm:text-4xl"
        >
          Find a starting point for your project.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Common examples across sectors. We confirm suitability, scope, and
          information handling requirements for each project.
        </p>

        <p id="matrix-scroll-hint" className="mt-6 text-xs text-slate-500">
          On smaller screens, scroll the table sideways to view all services.
        </p>

        <div
          role="region"
          aria-labelledby="service-matrix-heading"
          aria-describedby="matrix-scroll-hint"
          tabIndex={0}
          className="sw-matrix-scroll mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white"
        >
          <table className="sw-service-matrix">
            <caption className="sr-only">
              Illustrative uses of data capture, data cleaning, and
              transcription across eight sectors.
            </caption>

            <thead>
              <tr>
                <th scope="col">Industry</th>
                <th scope="col">Data capture</th>
                <th scope="col">Data cleaning</th>
                <th scope="col">Transcription</th>
              </tr>
            </thead>

            <tbody>
              {industries.map((industry) => (
                <tr key={industry.name}>
                  <th scope="row">{industry.name}</th>
                  <td>{industry.capture}</td>
                  <td>{industry.cleaning}</td>
                  <td>{industry.transcription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceMatrix;
