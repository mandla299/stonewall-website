import { HashLink } from "react-router-hash-link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";
import FaqSection from "../components/contact/FaqSection";
import ContactForm from "../components/contact/ContactForm";

const org = {
  name: "Stonewall Data Solutions",
  email: "mandla@swdatasolutions.com",
  phoneDisplay: "+27 79 408 3701",
  phoneHref: "+27794083701",
  street: "187 Lilian Ngoyi St",
  city: "Johannesburg",
  postalCode: "2000",
  country: "South Africa",
};

const mapLink =
  "https://maps.google.com/?q=187+Lilian+Ngoyi+St,+Johannesburg,+2000,+South+Africa";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.875360794026!2d28.041201000000004!3d-26.200732499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea03ce83a4b%3A0x2f4814df28c58053!2s187%20Lilian%20Ngoyi%20St%2C%20Johannesburg%2C%202000!5e0!3m2!1sen!2sza!4v1759328607598!5m2!1sen!2sza";

const Contact = () => {
  return (
    <main>
      <section aria-labelledby="contact-hero-title" className="sw-hero">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
            Contact Stonewall
          </p>

          <h1
            id="contact-hero-title"
            className="max-w-4xl text-5xl leading-[1.1] font-extrabold tracking-[-0.05em] text-white sm:text-6xl"
          >
            Tell us what you need.
            <br />
            <span className="sw-gradient-text">
              Let's find a clear next step.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Have documents to capture, records to clean, or recordings to
            transcribe? Share your requirements and we'll discuss a suitable
            approach.
          </p>

          <HashLink
            smooth
            to="/contact#contact-form"
            className="sw-button sw-button-primary mt-8"
          >
            Send an enquiry
            <ArrowRight size={18} aria-hidden="true" />
          </HashLink>
        </div>
      </section>

      <section aria-labelledby="contact-info-title" className="sw-services">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
              Get in touch
            </p>

            <h2
              id="contact-info-title"
              className="text-3xl font-extrabold tracking-tight text-[#10152f] sm:text-4xl"
            >
              Start with a conversation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Use the enquiry form, email us, or give us a call.
            </p>

            <address className="mt-8 space-y-6 not-italic">
              <a href={`mailto:${org.email}`} className="sw-contact-detail">
                <span className="sw-service-icon">
                  <Mail size={22} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-slate-500">
                    Email
                  </span>
                  <span className="mt-1 block break-words text-sm font-bold">
                    {org.email}
                  </span>
                </span>
              </a>

              <a href={`tel:${org.phoneHref}`} className="sw-contact-detail">
                <span className="sw-service-icon">
                  <Phone size={22} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-bold">
                    {org.phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="sw-contact-detail">
                <span className="sw-service-icon">
                  <Clock3 size={22} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Working hours · South African time
                  </span>
                  <span className="mt-1 block text-sm font-bold">
                    Monday–Friday, 08:00–17:00
                  </span>
                </span>
              </div>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sw-contact-detail"
              >
                <span className="sw-service-icon">
                  <MapPin size={22} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Address
                  </span>
                  <span className="mt-1 block text-sm font-bold leading-7">
                    {org.street}
                    <br />
                    {org.city}, {org.postalCode}
                    <br />
                    {org.country}
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </address>

            <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50/70 p-6">
              <h3 className="text-sm font-bold text-[#10152f]">
                Helpful details to include
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>The service you're interested in.</li>
                <li>The approximate volume and file formats.</li>
                <li>Your required output and preferred deadline.</li>
              </ul>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                Start with a description of the project. We can discuss how to
                share source files afterward.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            role="region"
            aria-label="Send an enquiry"
            className="min-w-0"
          >
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-us-title" className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#b84300] uppercase">
                Our location
              </p>
              <h2
                id="visit-us-title"
                className="text-3xl font-extrabold tracking-tight text-[#10152f]"
              >
                Find us in Johannesburg.
              </h2>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sw-services-link inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-[#10152f]"
            >
              Open Google Maps
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <a
            href="#contact-faq"
            className="sr-only focus:not-sr-only focus:mb-4 focus:inline-block"
          >
            Skip the map and go to frequently asked questions
          </a>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <iframe
              title="Stonewall Data Solutions office location"
              src={mapSrc}
              className="h-[320px] w-full border-0 sm:h-[400px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div id="contact-faq" className="bg-[#faf8f5] px-6 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <FaqSection />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: org.name,
            email: org.email,
            telephone: org.phoneHref,
            address: {
              "@type": "PostalAddress",
              streetAddress: org.street,
              addressLocality: org.city,
              postalCode: org.postalCode,
              addressCountry: "ZA",
            },
            openingHours: "Mo-Fr 08:00-17:00",
          }),
        }}
      />
    </main>
  );
};

export default Contact;
