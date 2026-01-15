import React from 'react'

const AboutIdentity = () => {
  return (
    <section className="bg-gradient-to-br from-[#f2f9f2] via-[#e6ebf4] to-[#bcb1b1] text-[#1e1b4b] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Who We Are */}
        <div>
          <h2 id="who-we-are" className="text-3xl md:text-4xl font-extrabold mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-[#332E81] mb-4">
            At Stonewall Data Solutions, we are architects of clarity. We transform raw, messy data into structured, intuitive systems that empower confident decision-making.
          </p>
          <p className="text-lg text-[#332E81] mb-4">
            Our work lives at the intersection of precision and empathy where technical rigor meets expressive design. We are not just developers or analysts. We are storytellers, educators, and collaborators.
          </p>
          <p className="text-lg text-[#332E81]">
            Every dataset we clean, every interface we choreograph, and every schedule we visualize is crafted with intention. We believe data should feel human modular, accessible, and emotionally intelligent.
          </p>
        </div>

        {/* Our Commitment */}
        <div>
          <h2 id="our-commitment" className="text-3xl md:text-4xl font-extrabold mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-[#332E81] mb-4">
            Our commitment is simple but unwavering: to honor complexity without overwhelming, and to build systems that scale without losing soul.
          </p>
          <p className="text-lg text-[#332E81] mb-4">
            We empower teams, clients, and communities with tools they can trust designed for clarity, fairness, and emotional resonance.
          </p>
          <p className="text-lg text-[#332E81]">
            We commit to transparency in every interaction, insight in every solution, and collaboration in every step. Because at Stonewall, clarity isn’t just a deliverable it’s a promise.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutIdentity
