import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from '@/app/components/HeroSection';
import ReservationBar from '@/app/components/ReservationBar';
import IntroSection from '@/app/components/IntroSection';
import RoomsPreview from '@/app/components/RoomsPreview';
import ExperiencesPreview from '@/app/components/ExperiencesPreview';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import DestinationTeaser from '@/app/components/DestinationTeaser';

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ReservationBar />
        <IntroSection />
        <RoomsPreview />
        <ExperiencesPreview />
        <TestimonialsSection />
        <DestinationTeaser />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}