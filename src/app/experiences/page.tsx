import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ExperiencesHero from '@/app/experiences/components/ExperiencesHero';
import ExperiencesList from '@/app/experiences/components/ExperiencesList';

export default function ExperiencesPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <ExperiencesHero />
        <ExperiencesList />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}