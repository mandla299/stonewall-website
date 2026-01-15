import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const linkSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'FAQs', path: '/contact#frequently-asked-questions', isHash: true },
        { label: 'Refund Policy', path: '/refund-policy' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Service', path: '/terms-of-service' },
      ],
    },
    
{
  title: 'Contact',
  links: [
    {
      label: 'Phone',
      path: 'tel:+27794083701',
      isExternal: false, // still handled as a link
      display: '+27 79 408 3701',
    },
    {
      label: 'Email',
      path: 'mailto:mandla@swdatasolutions.com',
      isExternal: false,
      display: 'mandla@swdatasolutions.com',
    },
    {
      label: 'Address',
      path: 'https://maps.google.com/?q=187+Lilian+Ngoyi+St,+Johannesburg,+2000,+South+Africa',
      isExternal: true,
      display: '187 Lilian Ngoyi St, Johannesburg, 2000, South Africa',
    },
  ],
}
,
    {
      title: 'Follow Us',
      links: [
        { label: 'LinkedIn', path: 'https://linkedin.com/in/stonewall-data-solutions-48a2023a6/' },
        { label: 'Facebook', path: 'https://facebook.com/profile.php?id=61586404089541' },
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200] rounded-md">
                    <img src="/favicon_128x128.png" alt="Stonewall Data Solutions Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                    <div className="flex flex-col leading-tight">
                      <span className="text-[#1e1b4b] font-extrabold text-base sm:text-xl tracking-tight">
                        Stonewall Data Solutions
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#ff7200]">
                        Structure the Data. &amp; Unlock the Value.
                      </span>
                    </div>
                  </Link>

        {/* Link Sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map(({ label, path, isHash }, i) => (
                  <li key={i}>
                    {path.startsWith('http') ? (
                      <a href={path} target="_blank" rel="noopener noreferrer" className="hover:underline transition">
                        {label}
                      </a>
                    ) : isHash ? (
                      <HashLink to={path} smooth className="hover:underline transition">
                        {label}
                      </HashLink>
                    ) : (
                      <Link to={path} className="hover:underline transition">
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © <Link to="/">Stonewall Data Solutions</Link> All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
