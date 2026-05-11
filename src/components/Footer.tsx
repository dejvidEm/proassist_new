import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { SocialFacebookIcon, SocialInstagramIcon } from '@/components/SocialBrandIcons';
import {
  CONTACT_PHONE_DISPATCH_DISPLAY,
  CONTACT_PHONE_DISPATCH_HREF,
  CONTACT_PHONE_LOCAL_DISPLAY,
  CONTACT_PHONE_LOCAL_HREF,
  CONTACT_PHONE_ABROAD_DISPLAY,
  CONTACT_PHONE_ABROAD_HREF,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_ADDRESS_STREET,
  CONTACT_ADDRESS_POSTAL_CITY,
  CONTACT_OFFICE_STREET,
  CONTACT_OFFICE_CITY,
} from '@/constants/contact';
import { SOCIAL_FACEBOOK_URL, SOCIAL_INSTAGRAM_URL } from '@/constants/social';

function FooterField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-0.5">
      <p className="text-xs font-bold font-display uppercase tracking-wider text-text-muted">{label}</p>
      <div className="text-sm font-body text-bay-charcoal leading-snug">{children}</div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Horný pás — logo, navigácia, sociálne siete */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:justify-start lg:gap-10">
            <Image
              src="/logo/logo.jpg"
              alt="ProAssist"
              width={110}
              height={33}
              className="h-6 md:h-7 w-auto object-contain object-left shrink-0"
            />
            <nav className="flex flex-wrap justify-start sm:justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-semibold text-tool-steel">
              <a href="#services" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Služby
              </a>
              <a href="#team" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Postup
              </a>
              <a href="#reviews" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Recenzie
              </a>
              <a href="#service-area" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Pokrytie
              </a>
              <a href="#insurers" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Poisťovne
              </a>
              <a href="#booking" className="hover:text-bay-charcoal transition-colors whitespace-nowrap">
                Kontakt
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto lg:self-center shrink-0">
            <a
              href={SOCIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ProAssist na Facebooku"
              className="w-9 h-9 rounded-full border border-border-medium flex items-center justify-center text-tool-steel hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-colors"
            >
              <SocialFacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ProAssist na Instagrame"
              className="w-9 h-9 rounded-full border border-border-medium flex items-center justify-center text-tool-steel hover:text-[#E4405F] hover:border-[#E4405F]/40 transition-colors"
            >
              <SocialInstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_PHONE_DISPATCH_HREF}
              aria-label={`Zavolať dispečing ${CONTACT_PHONE_DISPATCH_DISPLAY}`}
              className="w-9 h-9 rounded-full border border-border-medium flex items-center justify-center text-tool-steel hover:text-bay-charcoal hover:border-bay-charcoal transition-colors"
            >
              <Icon name="PhoneIcon" size={16} />
            </a>
          </div>
        </div>

        <hr className="rule my-10" />

        {/* Tri stĺpce — adresa a kancelárie v jednom stĺpci pod sebou */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 xl:gap-12 items-start">
          <section aria-labelledby="footer-kontakt" className="min-w-0">
            <h2 id="footer-kontakt" className="text-sm font-extrabold font-display text-bay-charcoal tracking-tight mb-3">
              Kontakt
            </h2>
            {/* Telefón: 2 stĺpce; e-mail v pravom stĺpci pod „Zo zahraničia“ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <div className="min-w-0 order-1 sm:order-none">
                <FooterField label="Telefón">
                  <a
                    href={CONTACT_PHONE_LOCAL_HREF}
                    className="font-semibold text-torque-blue hover:text-torque-blue-dark transition-colors whitespace-nowrap"
                  >
                    {CONTACT_PHONE_LOCAL_DISPLAY}
                  </a>
                </FooterField>
              </div>
              <div className="min-w-0 order-2 sm:order-none">
                <FooterField label="Zo zahraničia">
                  <a
                    href={CONTACT_PHONE_ABROAD_HREF}
                    className="font-semibold text-torque-blue hover:text-torque-blue-dark transition-colors whitespace-nowrap"
                  >
                    {CONTACT_PHONE_ABROAD_DISPLAY}
                  </a>
                </FooterField>
              </div>
              <div className="min-w-0 order-4 sm:order-none">
                <FooterField label="Dispečing">
                  <a
                    href={CONTACT_PHONE_DISPATCH_HREF}
                    className="font-semibold text-torque-blue hover:text-torque-blue-dark transition-colors whitespace-nowrap"
                  >
                    {CONTACT_PHONE_DISPATCH_DISPLAY}
                  </a>
                </FooterField>
              </div>
              <div className="min-w-0 order-3 sm:order-none">
                <FooterField label="E-mail">
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="font-semibold text-torque-blue hover:text-torque-blue-dark transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </FooterField>
              </div>
            </div>
          </section>

          <div className="space-y-6 min-w-0">
            <section aria-labelledby="footer-adresa">
              <h2
                id="footer-adresa"
                className="text-sm font-extrabold font-display text-bay-charcoal tracking-tight mb-2"
              >
                Adresa
              </h2>
              <address className="text-sm font-body text-bay-charcoal leading-snug not-italic space-y-0">
                <p>{CONTACT_ADDRESS_STREET}</p>
                <p>{CONTACT_ADDRESS_POSTAL_CITY}</p>
              </address>
            </section>

            <section aria-labelledby="footer-kancelarie">
              <h2
                id="footer-kancelarie"
                className="text-sm font-extrabold font-display text-bay-charcoal tracking-tight mb-2"
              >
                Kancelárie
              </h2>
              <address className="text-sm font-body text-bay-charcoal leading-snug not-italic space-y-0">
                <p>{CONTACT_OFFICE_STREET}</p>
                <p>{CONTACT_OFFICE_CITY}</p>
              </address>
            </section>
          </div>

          <nav aria-labelledby="footer-udaje" className="min-w-0 md:col-span-2 lg:col-span-1">
            <h2 id="footer-udaje" className="text-sm font-extrabold font-display text-bay-charcoal tracking-tight mb-3">
              Údaje a súkromie
            </h2>
            <ul className="flex flex-col gap-2 text-sm font-semibold font-body">
              <li>
                <a href="#" className="text-tool-steel hover:text-bay-charcoal transition-colors">
                  Zásady spracovania os. údajov
                </a>
              </li>
              <li>
                <a href="#" className="text-tool-steel hover:text-bay-charcoal transition-colors">
                  Namietanie spracovania os. údajov
                </a>
              </li>
              <li>
                <a href="#" className="text-tool-steel hover:text-bay-charcoal transition-colors">
                  Odvolanie súhlasu
                </a>
              </li>
              <li>
                <a href="#" className="text-tool-steel hover:text-bay-charcoal transition-colors">
                  Používanie cookies
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 pt-8 border-t border-border-subtle text-center text-xs font-semibold text-text-muted font-display">
          © {new Date().getFullYear()} ProAssist
        </p>
      </div>
    </footer>
  );
};

export default Footer;
