import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import GalleryClient from '@/app/gallery/components/GalleryClient';

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <GalleryClient />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}