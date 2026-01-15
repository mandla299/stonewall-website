
import React from "react";
import FaqSection from "../components/contact/FaqSection";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const org = {
    name: "SW Data Solutions",
    email: "mandla@swdatasolutions.com",
    phoneDisplay: "+27 79 408 3701",
    phoneHref: "+27794083701",
    street: "187 Lilian Ngoyi St",
    city: "Johannesburg",
    postalCode: "2000",
    country: "South Africa",
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.875360794026!2d28.041201000000004!3d-26.200732499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea03ce83a4b%3A0x2f4814df28c58053!2s187%20Lilian%20Ngoyi%20St%2C%20Johannesburg%2C%202000!5e0!3m2!1sen!2sza!4v1759328607598!5m2!1sen!2sza";

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-hero-title"
        className="bg-gradient-to-br from-[#e8e3fb] via-[#ecebea] to-[#edf7f1] py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            id="contact-hero-title"
            className="text-3xl sm:text-4xl md:text-5xl text-[#332E81] font-extrabold mb-6 leading-snug"
          >
            Start the Conversation. Let’s Build Your Workflow Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#1e1b4b] leading-relaxed max-w-2xl mx-auto">
            Whether you're digitizing surveys, logging sanitation, or transcribing
            field notes, we're ready to help. Reach out and let’s choreograph clarity.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section
        aria-labelledby="contact-info-title"
        className="mt-10 bg-gradient-to-r from-[#f4f1ff] via-[#fff6e8] to-[#e9faf1] py-12 px-6 md:px-12 lg:px-24 rounded-xl shadow-lg mb-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="contact-info-title"
            className="text-2xl md:text-3xl font-extrabold text-[#332E81] mb-6"
          >
            Contact Information
          </h2>

          <address className="not-italic space-y-4 text-lg text-[#1e1b4b]">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href={`tel:${org.phoneHref}`}
                className="underline decoration-transparent hover:decoration-current focus:decoration-current focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded"
                aria-label={`Call ${org.name} at ${org.phoneDisplay}`}
              >
                {org.phoneDisplay}
              </a>
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${org.email}`}
                className="underline decoration-transparent hover:decoration-current focus:decoration-current focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded"
                aria-label={`Email ${org.name}`}
              >
                {org.email}
              </a>
            </p>

            <p>
              <span className="font-semibold">Working Hours:</span>{" "}
              <time className="text-[#1e1b4b]" dateTime="Mo-Fr 08:00-17:00">
                Mon – Fri: 08:00 – 17:00
              </time>
            </p>

            <p className="text-[#1e1b4b]">
              <span className="font-semibold">Address:</span>{" "}
              <span>
                {org.street}, {org.city}, {org.postalCode}, {org.country}
              </span>
            </p>
          </address>
        </div>
      </section>

      {/* Map */}
      <section
        aria-labelledby="visit-us-title"
        className="bg-white py-16 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <h2
            id="visit-us-title"
            className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#332E81]"
          >
            Visit Us
          </h2>

          {/* Skip link for keyboard users to bypass embedded map */}
          <div className="sr-only focus:not-sr-only mb-4">
            <a href="#contact-form">
              Skip map and go to the contact form
            </a>
          </div>

          <div className="w-full h-[400px]" role="region" aria-label="Map of our office location">
            <iframe
              title="Office Location on Google Maps"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* noscript fallback */}
            <noscript>
              <p>
                Map unavailable without JavaScript. View on{" "}
                <a href="https://maps.google.com/?q=187+Lilian+Ngoyi+St,+Johannesburg,+2000">
                  Google Maps
                </a>
                .
              </p>
            </noscript>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        aria-labelledby="contact-form-title"
        className="py-12 px-6 md:px-12 lg:px-24"
      >
        <h2 id="contact-form-title" className="sr-only">
          Send us a message
        </h2>
        <ContactForm
          // Optional props to consider implementing inside ContactForm:
          // onSuccessMessage="Thanks! We’ll get back to you within one business day."
          // trackEventName="contact_form_submitted"
          // defaultSubject="General enquiry"
        />
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="py-12 px-6 md:px-12 lg:px-24"
      >
        <h2 id="faq-title" className="sr-only">
          Frequently Asked Questions
        </h2>
        <FaqSection />
      </section>

      {/* JSON-LD structured data for LocalBusiness (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": org.name,
            "email": org.email,
            "telephone": org.phoneHref,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": org.street,
              "addressLocality": org.city,
              "postalCode": org.postalCode,
              "addressCountry": org.country,
            },
            "openingHours": "Mo-Fr 08:00-17:00",
          }),
        }}
      />
    </>
  );
};

export default Contact;
``
