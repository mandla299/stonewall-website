import React from 'react';

const IndustriesCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#ff7200] via-[#ff8c42] to-[#ffc285] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
          Need a Custom Workflow?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          Whether you're managing clinics, classrooms, or cleaning crews, we choreograph modular solutions that fit your operational rhythm. Let's build something that works for your team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#ff7200] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#fff3e6] transition duration-300"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default IndustriesCTA;
