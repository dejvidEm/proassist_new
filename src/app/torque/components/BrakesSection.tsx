'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { TORQUE_IMAGES } from '@/constants/torqueMedia';

const BrakesSection: React.FC = () => {
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
    <section id="brakes" ref={sectionRef} className="py-20 md:py-28 bg-workshop-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left space-y-6 lg:order-1">
            <span className="section-label">Krok 2 — na mieste udalosti</span>
            <h2 className="headline-section">
              Bezpečnosť, pokoj
              <br />a dokumentácia.
            </h2>
            <blockquote className="border-l-4 border-torque-blue pl-5 py-1">
              <p className="text-tool-steel font-body text-base leading-relaxed italic">
                „Najväčší stres zmizne, keď viete čo robiť prvé. Rozloženie výstražných trojuholníkov, fotenie poškodenia
                bez zbytočných rizík a stručný zápis udalosti vám vie ušetriť týždne komunikácie s poisťovňou neskôr.“
              </p>
              <footer className="mt-3 text-sm font-bold font-display text-bay-charcoal">
                — školení operátori
              </footer>
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'Označenie miesta zrážky', cert: 'reflexné prvky' },
                { label: 'Fotodokumentácia', cert: 'odporúčané zábery' },
              ].map((c, i) => (
                <div key={i} className="service-ticket flex items-center gap-3">
                  <Icon name="CameraIcon" size={16} className="text-torque-blue" />
                  <div>
                    <p className="text-xs font-bold font-display text-bay-charcoal">{c.label}</p>
                    <p className="text-xs text-text-muted">{c.cert}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border-subtle overflow-hidden">
              {[
                { service: 'Zabezpečenie miesta a výstraha ostatných', detail: 'Pred každým ďalším krokom' },
                { service: 'Výmena údajov s druhou stranou', detail: 'Meno, kontakt, poisťovňa, SPZ' },
                { service: 'Polícia na mieste', detail: 'Kedy volať a čo očakávať' },
                { service: 'Záznam udalosti', detail: 'Stručne, pravdivo, dátum a čas' },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 text-sm ${
                    i % 2 === 0 ? 'bg-white' : 'bg-workshop-white'
                  } border-b border-border-subtle last:border-0`}
                >
                  <span className="font-semibold font-display text-bay-charcoal">{row.service}</span>
                  <span className="text-text-muted font-body text-xs sm:text-sm">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right lg:order-2">
            <div className="image-frame h-[420px] md:h-[520px] relative">
              <AppImage
                src={TORQUE_IMAGES.accidentCall}
                alt="Nehoda vozidiel, klientka volá na asistenčnú linku z miesta udalosti"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrakesSection;
