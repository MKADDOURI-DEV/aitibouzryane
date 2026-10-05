import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Ait Ibouzryane — Maison d\'Hôtes Authentique à Azilal, Maroc',
  description: 'Maison d\'hôtes authentique à Timoulilte, Province d\'Azilal. Nature, montagne et hospitalité marocaine au cœur des paysages de l\'Atlas. Note 9.2/10.',
  keywords: ['Ait Ibouzryane', 'maison hôtes Azilal', 'hébergement Timoulilte', 'tourisme rural Azilal', 'randonnée Azilal', 'nature Azilal'],
  openGraph: {
    title: 'Ait Ibouzryane — Maison d\'Hôtes Azilal, Maroc',
    description: 'Une expérience authentique au cœur de la nature d\'Azilal. Chambres, terrasse, jardin et hospitalité marocaine.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Faitibouzry1723back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.21" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}