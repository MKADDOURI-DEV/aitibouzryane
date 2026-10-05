'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperiencesHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1727946265721-c224a52ec71c"
          alt="Hikers on mountain trail at sunrise with dramatic Atlas peaks and golden light over green valleys"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.8) 0%, rgba(44,26,14,0.35) 55%, transparent 100%)' }} />
      </div>
      <div className="relative z-10 container-main flex flex-col justify-end pb-14 pt-28" style={{ minHeight: '55vh' }}>
        <p className="text-label text-accent mb-4">{t('exp.page.label')}</p>
        <h1 className="text-hero font-display text-white mb-3">{t('exp.page.title')}</h1>
        <p className="text-white/80 font-display" style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 300 }}>
          {t('exp.page.subtitle')}
        </p>
      </div>
    </section>);

}