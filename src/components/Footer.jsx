import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import whiteCubes from "../assets/white-cubes.png";

const companyLinks = [
  { label: "About Stonewall", to: "/about" },
  { label: "Our services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Contact us", to: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Refund Policy", to: "/refund-policy" },
];

const Footer = () => {
  return (
    <footer className="sw-footer">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 rounded-lg">
              <img
                src={whiteCubes}
                alt=""
                className="h-12 w-12 shrink-0 object-contain"
              />

              <div>
                <p className="text-lg font-extrabold tracking-tight text-white">
                  Stonewall Data Solutions
                </p>
                <p className="mt-1 text-xs text-orange-300">
                  Structure the Data &amp; Unlock the Value.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Helping businesses turn scattered information into clear,
              structured records through data capture, cleaning, and
              transcription.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/stonewall-data-solutions-48a2023a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="sw-footer-social"
              >
                LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a
                href="https://facebook.com/profile.php?id=61586404089541"
                target="_blank"
                rel="noopener noreferrer"
                className="sw-footer-social"
              >
                Facebook
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold text-white">Explore</h2>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="sw-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <HashLink
                  smooth
                  to="/contact#frequently-asked-questions"
                  className="sw-footer-link"
                >
                  Frequently asked questions
                </HashLink>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-white">Let's talk</h2>

            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href="mailto:mandla@swdatasolutions.com"
                  className="sw-footer-contact"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span className="min-w-0 break-words">
                    mandla@swdatasolutions.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+27794083701" className="sw-footer-contact">
                  <Phone size={18} aria-hidden="true" />
                  <span>+27 79 408 3701</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=187+Lilian+Ngoyi+St,+Johannesburg,+2000,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sw-footer-contact"
                >
                  <MapPin size={18} aria-hidden="true" />
                  <span className="max-w-xs">
                    187 Lilian Ngoyi St, Johannesburg, 2000, South Africa
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-white/10 py-6 md:flex-row md:items-center">
          <div className="space-y-1">
            <p className="text-xs leading-6 text-slate-400">
              &copy; {new Date().getFullYear()} Stonewall Data Solutions. All
              rights reserved.
            </p>

            <p className="text-xs leading-6 text-slate-400">
              Website designed by{" "}
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sw-footer-link text-xs"
              >
                Next Gen Web Design
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {policyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="sw-footer-link text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
