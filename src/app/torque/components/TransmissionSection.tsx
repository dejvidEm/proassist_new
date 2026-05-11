'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const TransmissionSection: React.FC = () => {
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
    <section id="team" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <div className="image-frame h-[420px] md:h-[520px] relative">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1c6cebbfe-1772183046116.png"
                alt="Odťah poškodeného vozidla po dopravnej nehode"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 service-ticket max-w-[240px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-torque-blue/10 flex items-center justify-center shrink-0">
                    <Icon name="TruckIcon" size={20} className="text-torque-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bay-charcoal font-display">Sieť partnerov</p>
                    <p className="text-xs text-text-muted font-body">Odťah & servis</p>
                    <span className="cert-badge mt-1.5">Podľa poisťovne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <span className="section-label">Krok 3 — ďalšie kroky</span>
            <h2 className="headline-section">
              Poisťovňa,
              <br />
              odťah, pokojný plán.
            </h2>
            <blockquote className="border-l-4 border-torque-blue pl-5 py-1">
              <p className="text-tool-steel font-body text-base leading-relaxed italic">
                „Smerujeme vás aj na súhrn kontaktov na poisťovne alebo vyplnenie formulárov. Nie sme právnici ani
                likvidátori škôd — pomáhame, aby ste sa v procese nestratili.“
              </p>
              <footer className="mt-3 text-sm font-bold font-display text-bay-charcoal">
                — tím ProAssist
              </footer>
            </blockquote>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: 'Čísla na poisťovne',
                  desc: 'Rýchly prehľad liniek nahliadnete aj v súvislej časti nášho webu.',
                },
                {
                  title: 'Odťah a oprava',
                  desc: 'Pri potrebe koordinácie odkážeme na postup vášej poisťovne alebo miestnych partnerov.',
                },
                {
                  title: 'Písomná komunikácia',
                  desc: 'Odpovieme aj na doplnenie správy e-mailom, ak zostanete radšej offline.',
                },
                {
                  title: 'Ďalšia pomoc po nehode',
                  desc: 'Ak potrebujete len poradiť, využite kontaktný formulár — obráťte sa ako komfort zvládnete.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border-subtle hover:bg-workshop-white hover:border-torque-blue/30 transition-all group"
                >
                  <div className="w-6 h-6 rounded-full bg-torque-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Icon name="CheckIcon" size={12} className="text-white" />
                  </div>
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

export default TransmissionSection;
