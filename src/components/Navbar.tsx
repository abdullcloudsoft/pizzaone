import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Why Pizza 1', href: '#why-visit' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3'
          : 'bg-[#FAF8F5] border-b border-neutral-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-logo-link"
          className="flex items-center gap-2 group text-neutral-900 no-underline focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-lg shadow-xs group-hover:bg-red-700 transition-colors">
            P1
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-red-600 transition-colors leading-none">
              Pizza 1
            </span>
            <span className="text-[11px] font-medium text-neutral-500 tracking-wide mt-0.5 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-red-500 inline" /> Rawalpindi
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-semibold text-neutral-700 hover:text-red-600 transition-colors no-underline py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT_INFO.primaryPhoneLink}
            id="nav-call-btn"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 active:scale-98 transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Call Now:</span>
            <span>{RESTAURANT_INFO.primaryPhone}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors focus:outline-hidden focus:ring-2 focus:ring-red-500"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#FAF8F5] border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200/80 flex flex-col gap-2">
            <div className="text-xs text-neutral-500 px-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>1, Peshawar Road, Rawalpindi</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={RESTAURANT_INFO.primaryPhoneLink}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-red-600 text-white text-xs font-semibold text-center hover:bg-red-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0336 7111124</span>
              </a>
              <a
                href={RESTAURANT_INFO.secondaryPhoneLink}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-neutral-300 bg-white text-neutral-800 text-xs font-semibold text-center hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-600" />
                <span>0314 5169922</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
