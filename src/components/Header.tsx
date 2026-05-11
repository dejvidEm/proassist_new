'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_CALL_CTA } from '@/constants/contact';

const NAV_ITEMS = [
  { label: 'Služby', id: 'services' },
  { label: 'Postup', id: 'team' },
  { label: 'Recenzie', id: 'reviews' },
  { label: 'Pokrytie', id: 'service-area' },
  { label: 'Poisťovne', id: 'insurers' },
] as const;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-sm border-b border-border-subtle' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center shrink-0 hover:opacity-90 transition-opacity">
          <Image
            src="/logo/logo.jpg"
            alt="ProAssist"
            width={180}
            height={56}
            className="h-9 md:h-10 w-auto max-w-[200px] object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center flex-wrap justify-end gap-x-5 gap-y-1 max-w-[50%] lg:max-w-none">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-sm font-semibold text-tool-steel hover:text-bay-charcoal transition-colors font-display whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CONTACT_PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-tool-steel hover:text-bay-charcoal transition-colors font-display whitespace-nowrap"
          >
            <Icon name="PhoneIcon" size={15} className="text-torque-blue" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={CONTACT_PHONE_HREF} className="btn-primary text-sm px-5 py-2.5">
            <Icon name="PhoneIcon" size={16} className="-ml-0.5" />
            {CONTACT_CALL_CTA}
          </a>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-surface-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} className="text-bay-charcoal" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-subtle px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-semibold text-tool-steel py-2 hover:text-bay-charcoal transition-colors font-display"
            >
              {item.label}
            </button>
          ))}
          <a
            href={CONTACT_PHONE_HREF}
            className="flex items-center gap-2 text-sm font-semibold text-torque-blue py-2 font-display"
          >
            <Icon name="PhoneIcon" size={15} />
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
