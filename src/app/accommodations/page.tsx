import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AccommodationsHero from '@/app/accommodations/components/AccommodationsHero';
import AccommodationsList from '@/app/accommodations/components/AccommodationsList';

export default function AccommodationsPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <AccommodationsHero />
        <AccommodationsList />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}