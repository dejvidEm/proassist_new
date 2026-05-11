'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { INSURANCE_HOTLINES } from '@/constants/insurers';

function revealStaggerClass(index: number): string {
  const d = (index % 4) + 1;
  return `reveal-delay-${d}`;
}

const InsuranceNumbersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="insurers"
      className="py-20 md:py-28 bg-workshop-white border-t border-border-subtle/60 scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-10 md:mb-12">
          <h2 className="headline-section">Čísla na poisťovne</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {INSURANCE_HOTLINES.map((insurer, i) => (
            <article
              key={insurer.name}
              className={`reveal ${revealStaggerClass(i)} flex gap-3 rounded-xl border border-border-subtle bg-white p-3.5 md:p-4 shadow-sm hover:shadow-[0_8px_28px_rgba(26,32,44,0.06)] transition-shadow duration-300`}
            >
              <div
                className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border-subtle/80 bg-white"
                aria-hidden
              >
                <Image
                  src={insurer.logoSrc}
                  alt=""
                  width={44}
                  height={44}
                  className="object-contain p-1.5"
                  sizes="44px"
                />
              </div>
              <div className="min-w-0 flex-1 flex flex-col justify-center gap-0.5">
                <h3 className="text-sm font-bold font-display text-bay-charcoal leading-snug">{insurer.name}</h3>
                <a
                  href={insurer.telHref}
                  className="text-sm font-semibold text-torque-blue hover:text-torque-blue-dark transition-colors whitespace-nowrap w-fit font-body"
                >
                  {insurer.telDisplay}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceNumbersSection;
