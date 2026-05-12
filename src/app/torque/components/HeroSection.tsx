'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { SocialFacebookIcon, SocialInstagramIcon } from '@/components/SocialBrandIcons';
import { CONTACT_PHONE_HREF, CONTACT_CALL_CTA, CONTACT_PHONE_LOCAL_HREF } from '@/constants/contact';
import { SOCIAL_FACEBOOK_URL, SOCIAL_INSTAGRAM_URL } from '@/constants/social';
import { TORQUE_IMAGES } from '@/constants/torqueMedia';

const heroImageSrc = TORQUE_IMAGES.accidentCall;

const stats = [
  { number: '24', label: 'nonstop asistenčná linka', suffix: '/7' },
  { number: '0', label: 'eur za našu koordináciu pri nehode', suffix: ' €' },
  { number: '15', label: 'rokov s vami pri cestných udalostiach', suffix: '+' },
  { number: '4', label: 'priemerné hodnotenie', suffix: ',9★' },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-28 lg:pb-20 bg-workshop-white overflow-visible"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(74,85,104,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74,85,104,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-1 bg-torque-blue" />

      <div className="relative max-w-5xl lg:max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14 lg:items-start">
          <div className="text-center lg:text-left lg:pt-1">
            <div className="reveal flex flex-col items-center lg:items-start gap-4 mb-8 lg:mb-5">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="section-label">Bezplatná asistenčná služba pri dopravnej nehode · Slovensko</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a
                  href={SOCIAL_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook ProAssist"
                  className="text-text-muted/45 hover:text-text-muted/80 transition-colors"
                >
                  <SocialFacebookIcon className="w-[17px] h-[17px]" />
                </a>
                <a
                  href={SOCIAL_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram ProAssist"
                  className="text-text-muted/45 hover:text-text-muted/80 transition-colors"
                >
                  <SocialInstagramIcon className="w-[17px] h-[17px]" />
                </a>
              </div>
            </div>

            <h1 className="reveal reveal-delay-1 mb-5 lg:mb-4 font-display font-black text-bay-charcoal leading-[1.02] tracking-[-0.03em] text-[clamp(1.92rem,4.5vw,3.35rem)] sm:text-[clamp(1.85rem,3.8vw,3.6rem)]">
              Spoľahlivá asistenčná služba
              <br />
              <span className="text-torque-blue">pri dopravnej nehode</span>
            </h1>

            <p className="reveal reveal-delay-2 text-base md:text-lg text-tool-steel font-body font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-6">
              Zavolajte dispečing ProAssist — poradíme vám čo ďalej, pomôžeme zdokumentovať situáciu a navedieme vás pri
              kontakte s políciou alebo poisťovňou. Služba je pre vás pri dopravnej nehode{' '}
              <span className="font-bold text-bay-charcoal">bez poplatku</span>.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col-reverse sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16 lg:mb-0">
              <button type="button" onClick={scrollToBooking} className="btn-secondary text-base px-8 py-4">
                Napíšte nám
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
              </button>
              <a href={CONTACT_PHONE_HREF} className="btn-primary text-base px-8 py-4">
                <Icon name="PhoneIcon" size={18} />
                {CONTACT_CALL_CTA}
              </a>
            </div>
          </div>

          <div className="w-full lg:min-w-0 mt-10 lg:mt-0 pb-6 sm:pb-8 lg:pb-10">
            <div className="reveal-right reveal-delay-2 relative w-full min-h-[260px] h-[min(40vh,380px)] sm:h-[min(42vh,420px)] sm:min-h-[300px] lg:h-[min(50vh,520px)] lg:min-h-[360px] overflow-visible">
              <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-surface-muted shadow-sm ring-1 ring-black/[0.06]">
                <div className="relative h-full w-full">
                  <Image
                    src={heroImageSrc}
                    alt="Dopravná nehoda na ceste — kontaktovanie asistenčnej služby"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, (max-width: 1536px) 46vw, 600px"
                  />
                </div>
              </div>
              <div
                className="absolute z-20 service-ticket shadow-[0_12px_40px_rgba(26,32,44,0.12)]
                  max-sm:!py-2.5 max-sm:!px-3 max-sm:!rounded-xl sm:!p-[1.25rem]
                  max-sm:max-w-[min(calc(100vw-2rem),216px)] sm:max-w-[min(100%,268px)] lg:max-w-[min(100%,288px)]
                  bottom-3 left-2 sm:bottom-5 sm:left-3 md:bottom-6 md:left-2
                  max-sm:-translate-x-1 max-sm:translate-y-0.5 sm:-translate-x-4 sm:translate-y-2 lg:-translate-x-6 lg:translate-y-2 xl:-translate-x-8"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 rounded-full bg-torque-blue/10 flex items-center justify-center shrink-0 sm:w-10 sm:h-10">
                    <Icon name="PhoneIcon" size={17} className="text-torque-blue sm:!w-5 sm:!h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-bay-charcoal font-display leading-tight sm:text-xs">
                      Dispečing ProAssist
                    </p>
                    <p className="text-[10px] text-text-muted font-body sm:text-xs">Nonstop linka</p>
                    <span className="cert-badge mt-1 max-sm:mt-1 max-sm:!py-0.5 max-sm:!px-2 max-sm:!text-[0.6rem] sm:mt-1.5">
                      Bez poplatku pri nehode
                    </span>
                  </div>
                </div>
                <a
                  href={CONTACT_PHONE_LOCAL_HREF}
                  className="mt-2 max-sm:mt-2 block text-center font-display font-black tabular-nums tracking-[0.06em] max-sm:tracking-[0.04em] text-[#DC2626] hover:text-[#B91C1C] transition-colors no-underline text-[clamp(1.45rem,6vmin,2.1rem)] sm:text-[clamp(2rem,8vmin,3.5rem)] leading-none [text-shadow:0_1px_0_rgba(255,255,255,0.6)]"
                  aria-label="Zavolať na krátku linku 18 001"
                >
                  18001
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-4 mt-16 lg:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-subtle rounded-2xl overflow-hidden border border-border-subtle max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white px-4 sm:px-6 py-6 flex flex-col items-center text-center">
              <span className="stat-number">
                {stat.number}
                <span className="text-torque-blue">{stat.suffix}</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-text-muted mt-1 font-display uppercase tracking-wider leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs font-semibold font-display uppercase tracking-widest">Ako vám vieme pomôcť</span>
            <Icon name="ChevronDownIcon" size={18} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
