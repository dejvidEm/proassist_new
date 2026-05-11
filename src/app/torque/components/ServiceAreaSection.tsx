'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_ADDRESS_STREET,
  CONTACT_ADDRESS_POSTAL_CITY,
} from '@/constants/contact';

const regions = [
  'Bratislava',
  'Trnava',
  'Nitra',
  'Trenčín',
  'Žilina',
  'Banská Bystrica',
  'Prešov',
  'Košice',
  'Celé Slovensko',
  'Hraničné priechody',
];

const ServiceAreaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <div className="map-container h-[420px] md:h-[480px] flex flex-col items-center justify-center relative">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full border-2 border-torque-blue/15 bg-torque-blue/3" />
                <div className="absolute w-52 h-52 rounded-full border-2 border-torque-blue/25 bg-torque-blue/5" />
                <div className="absolute w-28 h-28 rounded-full border-2 border-torque-blue/40 bg-torque-blue/10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-torque-blue shadow-lg flex items-center justify-center">
                    <Icon name="MapPinIcon" size={24} className="text-white" />
                  </div>
                  <div className="mt-2 bg-white px-3 py-1.5 rounded-full shadow-md border border-border-subtle">
                    <span className="text-xs font-bold font-display text-bay-charcoal">ProAssist</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                {[
                  { label: 'Bratislava', top: '72%', left: '18%' },
                  { label: 'Košice', top: '28%', left: '78%' },
                  { label: 'Žilina', top: '22%', left: '38%' },
                  { label: 'Trnava', top: '58%', left: '22%' },
                ].map((loc, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center gap-1.5"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div className="w-2 h-2 rounded-full bg-torque-blue" />
                    <span className="text-xs font-semibold font-display text-bay-charcoal bg-white/80 px-1.5 py-0.5 rounded">
                      {loc.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 service-ticket">
                <div className="flex items-center gap-2">
                  <Icon name="GlobeAltIcon" size={16} className="text-torque-blue" />
                  <span className="text-xs font-bold font-display text-bay-charcoal">Celé územie SR + linka zo zahraničia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <span className="section-label">Kde vám pomôžeme</span>
            <h2 className="headline-section">
              Asistencia
              <br />
              pri cestách po Slovensku.
            </h2>
            <p className="text-tool-steel font-body text-base leading-relaxed">
              Dispečing ProAssist slúži vodičom na celom Slovensku a poskytuje aj samostatnú linku pre volania zo
              zahraničia. Kritický je prvý kontakt — ten zvládnete odkiaľkoľvek.
            </p>

            <div className="service-ticket">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-torque-blue/10 flex items-center justify-center shrink-0">
                  <Icon name="BuildingStorefrontIcon" size={20} className="text-torque-blue" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold font-display text-bay-charcoal">ProAssist</p>
                  <p className="text-sm text-text-secondary font-body">
                    {CONTACT_ADDRESS_STREET}
                    <br />
                    {CONTACT_ADDRESS_POSTAL_CITY}
                  </p>
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="inline-flex items-center gap-1.5 text-sm font-bold font-display text-torque-blue hover:text-torque-blue-dark transition-colors mt-1"
                  >
                    <Icon name="PhoneIcon" size={14} />
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold font-display text-text-muted uppercase tracking-wider mb-3">
                Pokrytie
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((n, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold font-display text-tool-steel bg-workshop-white border border-border-medium px-3 py-1.5 rounded-full"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
