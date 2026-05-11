import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ProAssist — bezplatná asistencia pri dopravnej nehode',
  description:
    'Nonstop bezplatná asistenčná linka pri dopravných nehodách na Slovensku. Pomôžeme vám zorientovať sa, zdokumentovať priebeh a komunikovať s poisťovňou. Volajte kedykoľvek.',
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
