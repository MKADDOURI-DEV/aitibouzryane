import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AboutHero from '@/app/about/components/AboutHero';
import AboutStory from '@/app/about/components/AboutStory';
import AboutAmenities from '@/app/about/components/AboutAmenities';

export default function AboutPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <AboutHero />
        <AboutStory />
        <AboutAmenities />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}