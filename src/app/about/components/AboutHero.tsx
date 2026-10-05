'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1695865285429-0f5175d6bb9e"
          alt="Traditional Moroccan architecture with stone walls and terrace overlooking mountain valley at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.8) 0%, rgba(44,26,14,0.4) 60%, transparent 100%)' }} />
      </div>
      <div className="relative z-10 container-main flex flex-col justify-end pb-16 pt-32" style={{ minHeight: '60vh' }}>
        <p className="text-label text-accent mb-4">{t('about.label')}</p>
        <h1 className="text-hero font-display text-white mb-4">{t('about.title')}</h1>
        <p className="font-display text-white/80" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 300 }}>
          {t('about.subtitle')}
        </p>
      </div>
    </section>);

}