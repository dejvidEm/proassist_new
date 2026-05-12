'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { TORQUE_IMAGES } from '@/constants/torqueMedia';

const AboutSection: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-workshop-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <div className="image-frame h-[420px] md:h-[520px] relative">
              <AppImage
                src={TORQUE_IMAGES.towService}
                alt="Tím a asistenčná služba ProAssist na cestách na Slovensku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <span className="section-label">O nás</span>
            <h2 className="headline-section">ProAssist s.r.o.</h2>
            <div className="border-l-4 border-torque-blue pl-5 py-1">
              <p className="text-tool-steel font-body text-base leading-relaxed">
                Proassist s.r.o. je popredná spoločnosť, ktorá poskytuje rýchlu a spoľahlivú asistenciu pri dopravných
                nehodách a krízových situáciách. Našim cieľom je pomôcť našim klientom prekonať ťažké chvíle s
                minimálnym stresom a maximálnou podporou. Sme tu pre Vás, aby sme Vám poskytli odborné rady, rýchle
                riešenie a osobný prístup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
