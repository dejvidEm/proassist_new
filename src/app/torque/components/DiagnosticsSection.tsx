'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { TORQUE_IMAGES } from '@/constants/torqueMedia';

const DiagnosticsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diagnostics" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <div className="image-frame h-[420px] md:h-[520px] relative">
              <AppImage
                src={TORQUE_IMAGES.officeContact}
                alt="Dispečing — telefonický kontakt s klientom po nehode"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <span className="section-label">Krok 1 — prvý kontakt</span>
            <h2 className="headline-section">
              Zavoláte nám
              <br />
              a dostanete jasný postup.
            </h2>
            <blockquote className="border-l-4 border-torque-blue pl-5 py-1">
              <p className="text-tool-steel font-body text-base leading-relaxed italic">
                „Každá nehoda je iná. Najprv sa uistíme, že ste v bezpečí, potom krátko prejdeme miesto, čas a či sú
                zranení. Až potom riešime poisťovňu a dokumenty — krok po kroku, vyrozumiteľne.“
              </p>
              <footer className="mt-3 text-sm font-bold font-display text-bay-charcoal">
                — náš dispečing
              </footer>
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: 'PhoneArrowUpRightIcon' as const,
                  title: 'Nonstop dostupnosť',
                  desc: 'Volať môžete kedykoľvek — deň ani noc nehrá rolu.',
                },
                {
                  icon: 'ShieldCheckIcon' as const,
                  title: 'Bez skrytých poplatkov',
                  desc: 'Asistencia pri koordinácii bezprostredne po dopravnej nehode je voči vám bezplatná.',
                },
                {
                  icon: 'LanguageIcon' as const,
                  title: 'Aj zo zahraničia',
                  desc: 'Máte vlastnú linku zo zahraničia aj štandardný slovenský kontakt.',
                },
                {
                  icon: 'ClipboardDocumentCheckIcon' as const,
                  title: 'Čo pripraviť',
                  desc: 'Povieme vám, aké doklady alebo fotografie sa zvyknú vyžadovať.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl bg-workshop-white border border-border-subtle hover:border-torque-blue/40 transition-colors"
                >
                  <Icon name={item.icon as 'ShieldCheckIcon'} size={20} className="text-torque-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold font-display text-bay-charcoal">{item.title}</p>
                    <p className="text-xs text-text-muted font-body mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsSection;
