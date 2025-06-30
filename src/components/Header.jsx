'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // State for mobile services dropdown

  // Check if we are on the homepage
  const isHome = pathname === '/';

  // Define main navigation links (excluding Services, as it will have a dropdown)
  const mainNavLinks = [
    { name: 'About', anchor: 'about' },
    { name: 'Rates & FAQs', anchor: 'faq' },
    { name: 'Contact', anchor: 'contact' },
  ];

  // Define service dropdown links
  const serviceDropdownLinks = [
    { name: 'Anxiety & Stress Management', href: '/get-started/services/anxiety-stress-management' },
    { name: 'Relationship Counseling', href: '/get-started/services/relationship-counseling' },
    { name: 'Trauma Recovery', href: '/get-started/services/trauma-recovery' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-screen-xl flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-1 sm:space-y-0">
          <p>
            <a href="tel:+13235550192" className="hover:underline">(323) 555-0192</a> | 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="bg-white bg-opacity-80 backdrop-blur-md shadow-md py-4 px-4 sm:px-6 lg:px-8 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors">
            <span>Dr. Blake Psychology</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Services Dropdown for Desktop */}
            <div className="relative group">
              {/* MODIFIED: "Services" is now a Link to /services */}
              <Link
                href="/#services" // Link to the main services page
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors flex items-center"
              >
                Services
                {/* Optional: Dropdown arrow icon remains */}
                <svg className="inline-block ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-max bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top">
                {serviceDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors text-base whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Desktop Nav Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.anchor}
                href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 px-4">
            {/* Mobile Services Link and Toggle */}
            <div className="flex items-center justify-between">
              {/* MODIFIED: "Services" is now a Link to /services */}
              <Link
                href="/#services"
                className="text-gray-700 hover:text-blue-600 font-medium text-base py-2"
                onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} // Close both menus on click
              >
                Services
              </Link>
              {/* This button is ONLY for toggling the sub-menu */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1 -mr-1 text-gray-700 hover:text-blue-600 rounded-md focus:outline-none"
              >
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="pl-4 border-l border-blue-200 mt-2 space-y-2">
                {serviceDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 hover:text-blue-500 text-sm"
                    onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} // Close both menus
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Other Mobile Nav Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.anchor}
                href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
                className="block text-gray-700 hover:text-blue-600 font-medium text-base py-2"
                onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} // Close all menus
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/get-started"
              className="block w-full text-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full font-semibold transition duration-300 shadow"
              onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }} // Close all menus
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}