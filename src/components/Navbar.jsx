
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AboutModal from './modals/AboutModal';
import ServicesModal from './modals/ServicesModal';
import IndustriesModal from './modals/IndustriesModal';
import { ChevronDown, Menu, X } from 'lucide-react';
import whiteCubes from '../assets/white-cubes.png';


const Navbar = () => {
  const location = useLocation();

  // Single source of truth for which modal is open: 'about' | 'services' | 'industries' | null
  const [activeModal, setActiveModal] = useState(null);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile dropdown (collapsible sections inside mobile menu)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // 'about' | 'services' | 'industries' | null

  // Refs for outside-click handling
  const modalBackdropRef = useRef(null);


  // Close overlays on route change
  useEffect(() => {
    closeAllOverlays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAllOverlays();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Lock body scroll when mobile menu or any modal is open
  useEffect(() => {
    const shouldLock = isMobileMenuOpen || Boolean(activeModal);
    document.body.style.overflow = shouldLock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, activeModal]);

  // Close all overlays helper
  const closeAllOverlays = () => {
    setActiveModal(null);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  // Toggle a specific modal
  const toggleModal = (type) => {
    setActiveModal((prev) => (prev === type ? null : type));
  };

  // Mobile dropdown toggles (inside the mobile menu)
  const toggleMobileDropdown = (type) => {
    setOpenMobileDropdown((prev) => (prev === type ? null : type));
  };

  // Utility: active link class handling for NavLink
  const navLinkClasses = ({ isActive }) =>
    `transition-colors hover:text-[#ff7200] ${
      isActive ? 'text-[#ff7200] font-bold' : 'text-[#1e1b4b]'
    }`;

  return (
    <>
      {/* Top navigation bar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow-md px-4 sm:px-6 py-3 sm:py-4"
        role="navigation"
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded-md">
            <img src={whiteCubes} alt="Stonewall Data Solutions Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-[#1e1b4b] font-extrabold text-base sm:text-xl tracking-tight">
                Stonewall Data Solutions
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#ff7200]">
                Structure the Data &amp; Unlock the Value.
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-6 text-[#1e1b4b] font-medium">
            <li>
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>

            {/* About with modal trigger */}
            <li className="relative flex items-center gap-1">
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <button
                type="button"
                onClick={() => toggleModal('about')}
                aria-haspopup="dialog"
                aria-expanded={activeModal === 'about'}
                aria-controls="about-modal"
                className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <ChevronDown
                  size={16}
                  className={`text-[#332E81] hover:text-[#ff7200] transition-transform duration-300 ${
                    activeModal === 'about' ? 'rotate-180' : ''
                  }`}
                />
                <span className="sr-only">Toggle About modal</span>
              </button>
            </li>

            {/* Services with modal trigger */}
            <li className="relative flex items-center gap-1">
              <NavLink to="/services" className={navLinkClasses}>
                Services
              </NavLink>
              <button
                type="button"
                onClick={() => toggleModal('services')}
                aria-haspopup="dialog"
                aria-expanded={activeModal === 'services'}
                aria-controls="services-modal"
                className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <ChevronDown
                  size={16}
                  className={`text-[#332E81] hover:text-[#ff7200] transition-transform duration-300 ${
                    activeModal === 'services' ? 'rotate-180' : ''
                  }`}
                />
                <span className="sr-only">Toggle Services modal</span>
              </button>
            </li>

            {/* Industries with modal trigger */}
            <li className="relative flex items-center gap-1">
              <NavLink to="/industries" className={navLinkClasses}>
                Industries
              </NavLink>
              <button
                type="button"
                onClick={() => toggleModal('industries')}
                aria-haspopup="dialog"
                aria-expanded={activeModal === 'industries'}
                aria-controls="industries-modal"
                className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <ChevronDown
                  size={16}
                  className={`text-[#332E81] hover:text-[#ff7200] transition-transform duration-300 ${
                    activeModal === 'industries' ? 'rotate-180' : ''
                  }`}
                />
                <span className="sr-only">Toggle Industries modal</span>
              </button>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA (desktop only to reduce mobile clutter) */}
          <Link
            to="/services"
            className="hidden md:inline-flex bg-gradient-to-br from-[#ff7200] to-[#be3c05] shadow-md text-white px-6 py-2 rounded-full hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
          >
            Explore
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-[#ff7200] p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (full-screen overlay, slides in) */}
      <aside
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 pt-[4.25rem] bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile menu"
      >
        {/* Content container */}
        <div className="h-full overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-2 py-3 rounded-md text-base ${
                  isActive ? 'text-[#ff7200] font-bold' : 'text-[#1e1b4b]'
                } hover:text-[#ff7200]`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            {/* About dropdown (mobile only) */}
            <div className="border-t border-gray-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('about')}
                aria-expanded={openMobileDropdown === 'about'}
                className="w-full flex items-center justify-between px-2 py-3 rounded-md text-base text-[#1e1b4b] hover:text-[#ff7200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <span>About</span>
                <ChevronDown
                  size={18}
                  className={`text-[#332E81] transition-transform duration-300 ${
                    openMobileDropdown === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'about' && (
                <div className="pl-3 mt-1 space-y-2 text-sm">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block px-2 py-2 rounded-md ${
                        isActive ? 'text-[#ff7200] font-semibold' : 'text-[#1e1b4b]'
                      } hover:text-[#ff7200]`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Overview
                  </NavLink>
                  {/* You can add more About sub-links here if needed */}
                </div>
              )}
            </div>

            {/* Services dropdown (mobile only) */}
            <div className="border-t border-gray-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('services')}
                aria-expanded={openMobileDropdown === 'services'}
                className="w-full flex items-center justify-between px-2 py-3 rounded-md text-base text-[#1e1b4b] hover:text-[#ff7200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`text-[#332E81] transition-transform duration-300 ${
                    openMobileDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'services' && (
                <div className="pl-3 mt-1 space-y-2 text-sm">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `block px-2 py-2 rounded-md ${
                        isActive ? 'text-[#ff7200] font-semibold' : 'text-[#1e1b4b]'
                      } hover:text-[#ff7200]`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services
                  </NavLink>
                  {/* Add individual services links if you have routes */}
                </div>
              )}
            </div>

            {/* Industries dropdown (mobile only) */}
            <div className="border-t border-gray-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('industries')}
                aria-expanded={openMobileDropdown === 'industries'}
                className="w-full flex items-center justify-between px-2 py-3 rounded-md text-base text-[#1e1b4b] hover:text-[#ff7200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                <span>Industries</span>
                <ChevronDown
                  size={18}
                  className={`text-[#332E81] transition-transform duration-300 ${
                    openMobileDropdown === 'industries' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMobileDropdown === 'industries' && (
                <div className="pl-3 mt-1 space-y-2 text-sm">
                  <NavLink
                    to="/industries"
                    className={({ isActive }) =>
                      `block px-2 py-2 rounded-md ${
                        isActive ? 'text-[#ff7200] font-semibold' : 'text-[#1e1b4b]'
                      } hover:text-[#ff7200]`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Industry List
                  </NavLink>
                  {/* Add sub-industry links here if needed */}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-2 py-3 rounded-md text-base ${
                  isActive ? 'text-[#ff7200] font-bold' : 'text-[#1e1b4b]'
                } hover:text-[#ff7200]`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* CTA inside mobile menu */}
            <div className="pt-4">
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full justify-center bg-gradient-to-br from-[#ff7200] to-[#be3c05] shadow-md text-white px-6 py-3 rounded-full hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Modals (desktop + mobile) */}
      {activeModal === 'about' && (
        <div
          id="about-modal"
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#1e1b4b]/30"
          role="dialog"
          aria-modal="true"
          aria-label="About"
          onClick={(e) => {
            // Close when clicking backdrop only
            if (e.target === modalBackdropRef.current) setActiveModal(null);
          }}
        >
          {/* Prevent backdrop click from closing when clicking inside modal */}
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <AboutModal onClose={() => setActiveModal(null)} />
          </div>
        </div>
      )}

      {activeModal === 'services' && (
        <div
          id="services-modal"
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#1e1b4b]/30"
          role="dialog"
          aria-modal="true"
          aria-label="Services"
          onClick={(e) => {
            if (e.target === modalBackdropRef.current) setActiveModal(null);
          }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <ServicesModal onClose={() => setActiveModal(null)} />
          </div>
        </div>
      )}

      {activeModal === 'industries' && (
        <div
          id="industries-modal"
          ref={modalBackdropRef}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#1e1b4b]/30"
          role="dialog"
          aria-modal="true"
          aria-label="Industries"
          onClick={(e) => {
            if (e.target === modalBackdropRef.current) setActiveModal(null);
          }}
        >
        <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <IndustriesModal onClose={() => setActiveModal(null)} />
          </div>
        </div>
      )}

      {/* Spacer to account for fixed navbar height */}
      <div className="h-[4.25rem] md:h-[4.5rem]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
