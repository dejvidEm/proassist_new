'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF, CONTACT_CALL_CTA } from '@/constants/contact';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky-cta hidden md:block fixed top-0 left-0 right-0 z-40 bg-bay-charcoal border-b border-white/10 ${
        visible ? 'visible' : ''
      }`}
      style={{ top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-white text-xs font-semibold font-display tracking-wide truncate">
            Voľná linka · nonstop pohotovosť 24/7
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href={CONTACT_PHONE_HREF}
            className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold font-display transition-colors whitespace-nowrap"
          >
            <Icon name="PhoneIcon" size={13} />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={CONTACT_PHONE_HREF}
            className="bg-torque-blue hover:bg-torque-blue-dark text-white text-xs font-bold font-display px-4 py-1.5 rounded-md transition-colors inline-flex items-center gap-1.5"
          >
            <Icon name="PhoneIcon" size={14} className="sm:hidden" />
            {CONTACT_CALL_CTA}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
