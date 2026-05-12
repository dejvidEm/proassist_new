'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { CONTACT_PHONE_HREF, CONTACT_CALL_CTA, CONTACT_PHONE_LOCAL_DISPLAY, CONTACT_PHONE_LOCAL_HREF } from '@/constants/contact';
import { TORQUE_IMAGES } from '@/constants/torqueMedia';

const roadsideImageSrc = TORQUE_IMAGES.officeContact;

const BookingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nameOrCompany: '',
    emailOrPhone: '',
    question: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="booking" className="py-20 md:py-28 bg-workshop-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center lg:text-left mb-12 lg:mb-14">
          <h2 className="headline-section">Máte otázky?</h2>
        </div>

        {submitted ? (
          <div className="reveal bg-white rounded-2xl border border-border-subtle p-12 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckBadgeIcon" size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-bay-charcoal mb-3">Správa odoslaná</h3>
            <p className="text-tool-steel font-body text-base leading-relaxed">
              Ďakujeme. Čo najskôr sa vám ozveme na zadaný e-mail alebo telefón.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 lg:items-stretch">
            {/* Formulár */}
            <form
              onSubmit={handleSubmit}
              className="reveal-left reveal bg-white rounded-2xl border border-border-subtle p-8 md:p-10 flex flex-col gap-5 h-full min-h-0"
            >
              <label className="block shrink-0">
                <span className="text-xs font-bold font-display text-text-muted uppercase tracking-wider mb-2 block">
                  Meno alebo názov firmy
                </span>
                <input
                  type="text"
                  name="nameOrCompany"
                  value={form.nameOrCompany}
                  onChange={handleChange}
                  placeholder="Ján Novák alebo firma s.r.o."
                  className="form-input"
                  required
                  autoComplete="name"
                />
              </label>
              <label className="block shrink-0">
                <span className="text-xs font-bold font-display text-text-muted uppercase tracking-wider mb-2 block">
                  E-mail alebo telefón
                </span>
                <input
                  type="text"
                  name="emailOrPhone"
                  value={form.emailOrPhone}
                  onChange={handleChange}
                  placeholder="vas@mail.sk alebo +421 ..."
                  className="form-input"
                  required
                  autoComplete="email"
                />
              </label>
              <label className="flex flex-1 flex-col min-h-[140px] gap-2">
                <span className="text-xs font-bold font-display text-text-muted uppercase tracking-wider">
                  Vaša otázka
                </span>
                <textarea
                  name="question"
                  value={form.question}
                  onChange={handleChange}
                  placeholder="Napíšte, čo potrebujete…"
                  className="form-input resize-none flex-1 min-h-[140px] lg:min-h-0"
                  required
                />
              </label>
              <button type="submit" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center shrink-0">
                Odoslať otázku
                <Icon name="ArrowRightIcon" size={18} />
              </button>
            </form>

            {/* Núdzová poznámka — rovnaká výška a rám ako formulár */}
            <div className="reveal-right reveal bg-white rounded-2xl border border-border-subtle p-8 md:p-10 flex flex-col gap-6 h-full min-h-0">
              <p className="text-2xl sm:text-3xl lg:text-[1.65rem] xl:text-3xl font-extrabold font-display text-bay-charcoal leading-snug tracking-tight shrink-0">
                Potrebujete pomoc v núdzi? Ozvite sa nám — na linke sme{' '}
                <span className="text-torque-blue">24 hodín denne</span>,{' '}
                <span className="text-torque-blue">7 dní v týždni</span>.
              </p>

              <a
                href={CONTACT_PHONE_HREF}
                className="btn-primary text-base px-8 py-4 inline-flex w-full sm:w-auto justify-center shrink-0"
              >
                <Icon name="PhoneIcon" size={18} />
                {CONTACT_CALL_CTA}
              </a>

              <div className="shrink-0 space-y-3 border-t border-border-subtle pt-5">
                <p className="text-sm text-tool-steel font-body leading-relaxed">
                  Zo slovenskej siete môžete využiť aj skrátenú linku{' '}
                  <a
                    href={CONTACT_PHONE_LOCAL_HREF}
                    className="font-semibold text-torque-blue hover:text-torque-blue-dark whitespace-nowrap underline-offset-2 hover:underline"
                  >
                    {CONTACT_PHONE_LOCAL_DISPLAY}
                  </a>
                  . Pri dopravnej nehode vždy najprv{' '}
                  <span className="font-semibold text-bay-charcoal">zavolajte</span> — poradíme vám hneď na mieste.
                </p>
                <p className="text-xs text-text-muted font-body leading-relaxed">
                  Formulár vľavo využite pri všeobecných otázkach alebo ak ešte nestojíte pri vozidle. Na správy
                  odpovedáme čo najskôr v pracovných dňoch; v núdzi volajte nepretržite.
                </p>
              </div>

              <div className="image-frame relative flex-1 min-h-[200px] w-full rounded-2xl overflow-hidden lg:min-h-0">
                <AppImage
                  src={roadsideImageSrc}
                  alt="Kontakt s ProAssist — poradenstvo a nepretržitá linka"
                  fill
                  className="rounded-[inherit]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
