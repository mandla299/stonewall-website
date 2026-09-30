import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import whiteCubes from "../assets/white-cubes.png";

const groups = [
  {
    label: "About",
    to: "/about",
    description: "Get to know the people and purpose behind Stonewall.",
    links: [
      { label: "Who we are", to: "/about#who-we-are" },
      { label: "Our mission", to: "/about#our-mission" },
      { label: "Our commitment", to: "/about#our-commitment" },
      { label: "Our values", to: "/about#values" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    description: "Practical support for clearer, more usable information.",
    links: [
      { label: "Data capture", to: "/services#data-entry-capture" },
      { label: "Data cleaning", to: "/services#data-cleaning" },
      { label: "Transcription", to: "/services#transcription-services" },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    description: "Find practical data support for your sector.",
    links: [
      { label: "Healthcare & clinics", to: "/industries#healthcare" },
      { label: "Education & research", to: "/industries#education" },
      { label: "Field operations & NGOs", to: "/industries#research" },
      { label: "Facilities management", to: "/industries#facilities" },
      { label: "Finance & insurance", to: "/industries#finance" },
      { label: "Legal & compliance", to: "/industries#legal" },
      { label: "Retail & commerce", to: "/industries#retail" },
      { label: "Logistics & operations", to: "/industries#logistics" },
    ],
  },
];

const Navigation = () => {
  const [openGroup, setOpenGroup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenus = () => {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileGroup(null);
  };

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpenGroup(null);
        setMobileOpen(false);
        setMobileGroup(null);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
        setMobileGroup(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navClass = ({ isActive }) =>
    `sw-nav-link${isActive ? " is-active" : ""}`;

  return (
    <header
      ref={headerRef}
      className="sw-header"
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;

        const group = event.target.closest("[data-nav-group]");
        group?.querySelector("button")?.focus();

        if (mobileOpen) menuButtonRef.current?.focus();
        closeMenus();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenus();
        }
      }}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <Link
          to="/"
          onClick={closeMenus}
          className="flex min-w-0 items-center gap-3 rounded-lg"
        >
          <img
            src={whiteCubes}
            alt=""
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <p className="text-sm font-extrabold tracking-tight text-[#10152f] sm:text-lg">
              Stonewall Data Solutions
            </p>
            <p className="mt-1 text-[10px] text-[#b84300] sm:text-xs">
              Structure the Data &amp; Unlock the Value.
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            <li>
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
            </li>

            {groups.map((group) => (
              <li
                key={group.label}
                data-nav-group
                className="sw-nav-group"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    setOpenGroup(group.label);
                  }
                }}
                onPointerLeave={(event) => {
                  if (
                    event.pointerType === "mouse" &&
                    !event.currentTarget.contains(document.activeElement)
                  ) {
                    setOpenGroup(null);
                  }
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenGroup(null);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <NavLink to={group.to} className={navClass}>
                    {group.label}
                  </NavLink>

                  <button
                    type="button"
                    aria-label={`Show ${group.label.toLowerCase()} links`}
                    aria-expanded={openGroup === group.label}
                    aria-controls={`dropdown-${group.label}`}
                    onClick={() =>
                      setOpenGroup((current) =>
                        current === group.label ? null : group.label,
                      )
                    }
                    className="sw-nav-toggle"
                  >
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={openGroup === group.label ? "rotate-180" : ""}
                    />
                  </button>
                </div>

                {openGroup === group.label && (
                  <div
                    id={`dropdown-${group.label}`}
                    className="sw-dropdown-wrap"
                  >
                    <div className="sw-dropdown">
                      <p className="text-xs font-bold tracking-widest text-[#b84300] uppercase">
                        {group.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {group.description}
                      </p>

                      <ul className="mt-5 space-y-1">
                        {group.links.map((link) => (
                          <li key={link.to}>
                            <HashLink
                              smooth
                              to={link.to}
                              onClick={closeMenus}
                              className="sw-dropdown-link"
                            >
                              {link.label}
                              <ArrowUpRight size={17} aria-hidden="true" />
                            </HashLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}

            <li>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link
          to="/contact"
          className="sw-button sw-button-primary hidden! xl:inline-flex!"
        >
          Let's talk
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#10152f] xl:hidden"
        >
          {mobileOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="sw-mobile-navigation xl:hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8">
            <NavLink to="/" end onClick={closeMenus} className="sw-mobile-link">
              Home
            </NavLink>

            {groups.map((group) => (
              <div key={group.label} className="border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={group.to}
                    onClick={closeMenus}
                    className="sw-mobile-link border-0!"
                  >
                    {group.label}
                  </NavLink>

                  <button
                    type="button"
                    aria-label={`Show ${group.label.toLowerCase()} links`}
                    aria-expanded={mobileGroup === group.label}
                    aria-controls={`mobile-${group.label}`}
                    onClick={() =>
                      setMobileGroup((current) =>
                        current === group.label ? null : group.label,
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-[#10152f]"
                  >
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={
                        mobileGroup === group.label ? "rotate-180" : ""
                      }
                    />
                  </button>
                </div>

                {mobileGroup === group.label && (
                  <ul
                    id={`mobile-${group.label}`}
                    className="mb-4 rounded-xl bg-orange-50 p-2"
                  >
                    {group.links.map((link) => (
                      <li key={link.to}>
                        <HashLink
                          smooth
                          to={link.to}
                          onClick={closeMenus}
                          className="sw-dropdown-link"
                        >
                          {link.label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenus}
              className="sw-mobile-link"
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={closeMenus}
              className="sw-button sw-button-primary mt-6 w-full"
            >
              Discuss your project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

const Navbar = () => {
  const location = useLocation();

  // Reset open menus whenever navigation changes.
  return <Navigation key={location.key} />;
};

export default Navbar;
