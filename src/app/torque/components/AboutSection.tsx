'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1c6cebbfe-1772183046116.png"
                alt="Tím a asistenčná služba ProAssist na cestách na Slovensku"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 service-ticket max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-torque-blue/10 flex items-center justify-center shrink-0">
                    <Icon name="BuildingOffice2Icon" size={20} className="text-torque-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bay-charcoal font-display">ProAssist s.r.o.</p>
                    <p className="text-xs text-text-muted font-body">Asistenčné služby</p>
                    <span className="cert-badge mt-1.5">Slovensko</span>
                  </div>
                </div>
              </div>
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
