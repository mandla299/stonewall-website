import React from 'react';

const services = [
  'Transcription',
  'Data Entry',
  'Data Cleaning',
  'Survey Capture',
  'Sanitation Logging',
  'Issue Reporting',
];

const industries = [
  {
    name: 'Healthcare & Clinics',
    applicable: [true, true, true, false, true, true],
  },
  {
    name: 'Education & Research',
    applicable: [true, true, true, true, false, false],
  },
  {
    name: 'Field Operations & NGOs',
    applicable: [false, true, true, true, false, true],
  },
  {
    name: 'Cleaning & Facilities',
    applicable: [false, false, true, false, true, true],
  },
  {
    name: 'Finance & Insurance',
    applicable: [true, true, true, false, false, false],
  },
  {
    name: 'Legal & Compliance',
    applicable: [true, true, true, false, false, false],
  },
];

const ServiceMatrix = () => {
  return (
    <section className="bg-[#fefefe] text-[#1e1b4b] py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10">
          Service Matrix — Who Needs What
        </h2>

        <table className="min-w-full border-collapse text-sm md:text-base">
          <thead>
            <tr>
              <th className="text-left font-bold p-3 bg-[#ff7200] text-white rounded-tl-lg">Industry</th>
              {services.map((service) => (
                <th key={service} className="text-center font-bold p-3 bg-[#ff7200] text-white">
                  {service}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {industries.map(({ name, applicable }, rowIndex) => (
              <tr key={name} className="even:bg-[#f2f2f2] odd:bg-[#e6ebf4]">
                <td className="p-3 font-semibold">{name}</td>
                {applicable.map((isApplicable, colIndex) => (
                  <td key={colIndex} className="text-center p-3">
                    {isApplicable ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceMatrix;
