'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { ACCIDENT_REPORT_PDF_PATH } from '@/constants/documents';

const STEPS: { title: string; body: string }[] = [
  {
    title: 'Stiahnite dokument',
    body: 'Stlačte modré tlačidlo „Stiahnuť“ vyššie a uložte si PDF do zariadenia. Overte, že súbor viete otvoriť v čítačke alebo vytlačiť.',
  },
  {
    title: 'Otvorte a predštudujte',
    body: 'V PDF alebo po vytlačení si prečítajte pokyny a presvedčte sa, ktoré polia sa vás týkajú (osoby, vozidlá, poškodenie).',
  },
  {
    title: 'Vyplňte údaje',
    body: 'Doplňte miesto, dátum a čas, účastníkov, SPZ a stručný opis priebehu. Pište jasne a pravdivo — slúži to pri likvidácii škody.',
  },
  {
    title: 'Skontrolujte a podpíšte',
    body: 'Porovnajte údaje s fotkami z miesta alebo záznamom. Ak treba vlastnoručné podpisy, nechajte priestor aj pre druhú stranu.',
  },
  {
    title: 'Odošlite a archivujte',
    body: 'Doručte dokument poisťovni alebo podľa pokynov dispečingu ProAssist (e-mail, portál, pošta). Odložte si kópiu pre prípad dodatočných otázok.',
  },
];

const AccidentReportSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sprava-o-nehode"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white scroll-mt-28 border-b border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="section-label">Tlačivá a dokumenty</span>
          <h2 className="headline-section mt-3 mb-4">
            Správa o nehode
            <br />
            <span className="text-torque-blue">stiahnite a vyplňte</span>
          </h2>
          <p className="text-tool-steel font-body text-base leading-relaxed">
            Nižšie nájdete formulár vo formáte PDF. Po stiahnutí postupujte podľa krokov — od uloženia súboru až po
            odoslanie poisťovni alebo podľa dohovoru s našim dispečingom.
          </p>
        </div>

        <div className="flex justify-center mb-14 md:mb-16 reveal">
          <a
            href={ACCIDENT_REPORT_PDF_PATH}
            download="sprava-o-nehode.pdf"
            className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Icon name="DocumentArrowDownIcon" size={20} />
            Stiahnuť: Správa o nehode (PDF)
          </a>
        </div>

        <div className="reveal">
          <h3 className="text-center font-display font-bold text-bay-charcoal text-sm uppercase tracking-wider mb-10 md:mb-12">
            Postup po stiahnutí
          </h3>

          {/* Desktop: horizontálna čiara + kroky */}
          <div className="hidden lg:block relative px-4">
            <div
              className="absolute left-[5%] right-[5%] top-[1.375rem] h-0.5 bg-gradient-to-r from-torque-blue/15 via-torque-blue/50 to-torque-blue/15 pointer-events-none"
              aria-hidden
            />
            <ol className="relative grid grid-cols-5 gap-4">
              {STEPS.map((step, i) => (
                <li key={i} className="flex flex-col items-center text-center pt-0">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-torque-blue bg-white font-display text-sm font-extrabold text-torque-blue shadow-sm mb-4">
                    {i + 1}
                  </span>
                  <span className="font-display text-sm font-bold text-bay-charcoal leading-snug mb-2 min-h-[2.5rem] flex items-end justify-center text-center">
                    {step.title}
                  </span>
                  <p className="text-xs text-text-muted font-body leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile / tablet: vertikálna čiara cez stred kruhov + text ďalej */}
          <ol className="lg:hidden relative space-y-0 pt-1 pb-1">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[15px] top-3 bottom-3 w-0.5 bg-torque-blue/35"
            />
            {STEPS.map((step, i) => (
              <li key={i} className="relative z-10 flex gap-8 sm:gap-10 pb-10 last:pb-0">
                <div className="flex w-8 shrink-0 justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-torque-blue bg-white font-display text-xs font-extrabold text-torque-blue shadow-sm">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="font-display text-sm font-bold text-bay-charcoal mb-1.5">{step.title}</p>
                  <p className="text-sm text-text-muted font-body leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AccidentReportSection;
