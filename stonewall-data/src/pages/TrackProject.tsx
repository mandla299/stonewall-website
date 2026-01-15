import React from 'react';

const TrackProject = () => {
  return (
    <section className="bg-white text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center">
          Track Your Project
        </h1>
        <p className="text-lg text-center mb-12 text-[#332E81]">
          Stay updated on your workflow’s progress—from kickoff to handover. Enter your project ID below to view status, milestones, and expected delivery.
        </p>

        <form className="bg-[#fef6e4] rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label htmlFor="projectId" className="block text-sm font-semibold mb-2 text-[#1e1b4b]">
              Project ID
            </label>
            <input
              type="text"
              id="projectId"
              name="projectId"
              required
              placeholder="Enter your project ID"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff7200] bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff7200] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#e65f00] transition duration-300"
          >
            Check Status
          </button>
        </form>

        <div className="mt-12 text-sm text-[#332E81] text-center">
          <p>If you don’t have a project ID, please <a href="/contact" className="text-[#ff7200] font-semibold underline">contact our team</a>.</p>
          <p className="mt-2">Need help understanding your dashboard? Visit our <a href="/faqs" className="text-[#ff7200] font-semibold underline">FAQs</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default TrackProject;
