import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactContent from '@/app/contact/components/ContactContent';

export default function ContactPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}