import React from 'react'

const AboutValues = () => {
  return (
    <section className="bg-white text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Visual Block: Values Organogram */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-xl bg-gradient-to-br from-[#ff7200] to-[#be3c05] shadow-lg p-6">
            <div className="text-white text-center font-bold text-xl mb-4">OUR VALUES</div>
            <div className="bg-white rounded-lg p-4 text-[#1e1b4b] font-semibold text-center mb-4 shadow">
              Integrity
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                <div className="bg-[#1e1b4b] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                    <path d="M14 9l-3 3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1e1b4b] font-medium">Honesty</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                <div className="bg-[#1e1b4b] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1e1b4b] font-medium">Insight</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow">
                <div className="bg-[#1e1b4b] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                    <path d="M6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM6 16a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-[#1e1b4b] font-medium">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div>
          <h2 id="our-values" className="text-3xl md:text-4xl font-extrabold mb-6">
            Our Values
          </h2>
          <p className="text-lg text-[#332E81] mb-4">
            At Stonewall Data Solutions, our values guide every interaction and every decision. We believe that the success of our work is built on a foundation of integrity, insight, and collaboration.
          </p>
          <p className="text-lg text-[#332E81] mb-4">
            We approach every project with honesty and transparency, grounded by deep understanding and shaped through constant communication.
          </p>
          <p className="text-lg text-[#332E81]">
            To us, collaboration isn’t just a practice it’s a principle. We thrive on the exchange of ideas and the shared goal of creating something greater than ourselves.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutValues
