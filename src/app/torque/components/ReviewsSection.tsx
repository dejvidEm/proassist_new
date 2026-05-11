'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const reviews = [
  {
    name: 'Zuzana K.',
    vehicle: 'Peugeot 308 · Senec',
    service: 'Asistencia DN',
    rating: 5,
    text:
      'Hneď po náraze mi povedali, čo nesmím zabudnúť odfotiť a ako komunikovať s druhou stranou. O tri dni bola škoda nahlásená a ja som bola v kľude.',
    date: '03/2026',
  },
  {
    name: 'Martin O.',
    vehicle: 'Škoda Octavia · Bratislava',
    service: 'Nonstop linka',
    rating: 5,
    text:
      'Volal som o pol druhej v noci z dialnice. Dispečer našiel v mojej mapke aj najbližší odťah a kedy môžem čakať políciu.',
    date: '02/2026',
  },
  {
    name: 'Jana P.',
    vehicle: 'VW Golf · Trnava',
    service: 'Kontakt z zahraničia',
    rating: 5,
    text:
      'Nehoda v Rakúsku. Linka zo zahraničia fungovala hneď, dostala som zoznam vecí, ktoré som mala mať pri sebe pri likvidácii.',
    date: '01/2026',
  },
  {
    name: 'Peter H.',
    vehicle: 'Ford Transit · Nitra',
    service: 'Firemné vozidlo',
    rating: 5,
    text:
      'Vodič našej firmy volal z miesta. ProAssist nás prepli na správny postup s našou flotilovou poisťovňou — ušetrili sme čas na účtovníctve.',
    date: '12/2025',
  },
  {
    name: 'Eva M.',
    vehicle: 'Hyundai i30 · Žilina',
    service: 'Bez stresu',
    rating: 5,
    text:
      'Nechcela som veriť, že je služba skutočne bez poplatku. Nikto ma neťahal do platených balíkov, len uprataný postup po nehode.',
    date: '11/2025',
  },
  {
    name: 'Tomáš R.',
    vehicle: 'BMW 3 · Košice',
    service: 'Poisťovňa & fotky',
    rating: 5,
    text:
      'Sporná bola výška škôd voči druhému účastníkovi. Operátor vysvetlil, ktoré formulárove údaje posudzujú likvidátori najčastejšie — ušetrili sme týždne mailovania.',
    date: '10/2025',
  },
];

const ReviewsSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-workshop-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <span className="section-label">Skúsenosti klientov</span>
          <h2 className="headline-section mt-3 mb-4">
            Skutočné situácie.
            <br />
            Skutočné mená.
          </h2>
          <p className="text-tool-steel font-body max-w-xl mx-auto text-base leading-relaxed">
            Recenzie pochádzajú od ľudí, ktorí volali našu linku po dopravnej nehode alebo potrebovali poradiť s ďalšími
            krokmi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Icon key={s} name="StarIcon" size={14} variant="solid" className="text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold font-display text-torque-blue bg-blue-50 px-2.5 py-1 rounded-full">
                  {review.service}
                </span>
              </div>

              <p className="text-sm text-tool-steel font-body leading-relaxed mb-4">„{review.text}“</p>

              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <div>
                  <p className="text-sm font-bold font-display text-bay-charcoal">{review.name}</p>
                  <p className="text-xs text-text-muted font-body">{review.vehicle}</p>
                </div>
                <span className="text-xs text-text-muted font-display">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
