'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function AccommodationsHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '50vh' }}>
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1683229285179-428ffbb1906f"
          alt="Elegant hotel room interior with white linens, warm wood tones and natural light from large windows"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.75) 0%, rgba(44,26,14,0.35) 60%, transparent 100%)' }} />
      </div>
      <div className="relative z-10 container-main flex flex-col justify-end pb-14 pt-28" style={{ minHeight: '50vh' }}>
        <p className="text-label text-accent mb-4">{t('acc.label')}</p>
        <h1 className="text-hero font-display text-white mb-3">{t('acc.title')}</h1>
        <p className="text-white/80 font-display" style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 300 }}>
          {t('acc.subtitle')}
        </p>
      </div>
    </section>);

}