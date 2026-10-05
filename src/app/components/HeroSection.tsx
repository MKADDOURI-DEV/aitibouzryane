'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef?.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el?.classList?.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations concernant Ait Ibouzryane et connaître les disponibilités.');

  return (
    <section
      className="relative w-full overflow-hidden organic-corner grain-overlay"
      style={{ minHeight: '100vh' }}>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1689628971044-f5f9fc40dd55"
          alt="Mountain landscape at dusk with golden light over rocky peaks and valley, dark atmospheric sky"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Scrim */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.75) 0%, rgba(44,26,14,0.4) 40%, rgba(44,26,14,0.25) 70%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(44,26,14,0.35) 0%, transparent 60%)' }} />
      </div>

      {/* Floating Info Card */}
      <div className="absolute top-24 right-6 md:right-12 hidden md:block z-20">
        <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-6 w-72 shadow-2xl" style={{ backdropFilter: 'blur(12px)' }}>
          <div className="flex justify-between items-start mb-5">
            <h3 className="font-display text-lg font-normal">Réservations</h3>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse mt-1" />
          </div>
          <div className="space-y-4 text-xs text-white/80">
            <div>
              <span className="block text-white font-medium mb-1 tracking-wider" style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Note vérifiée</span>
              <div className="flex items-center gap-2">
                <span className="star-rating">★★★★★</span>
                <span className="text-white font-medium">9.2 / 10</span>
              </div>
              <p className="text-white/60 mt-1" style={{ fontSize: '10px' }}>268 avis · bedandbreakfast.eu</p>
            </div>
            <div>
              <span className="block text-white font-medium mb-1" style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Localisation</span>
              <p>Douar Iskoutane, Timoulilte</p>
              <p className="text-white/60">Province d'Azilal, Maroc</p>
            </div>
            <div>
              <span className="block text-white font-medium mb-1" style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact direct</span>
              <a href="tel:+212662681618" className="text-accent hover:text-white transition-colors">
                +212 662 681 618
              </a>
            </div>
          </div>
          <div className="mt-5">
            <Link href="/contact" className="btn-accent w-full justify-center text-center block" style={{ padding: '0.6rem 1rem' }}>
              {t('nav.book')}
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-main flex flex-col justify-end pb-20 md:pb-28"
        style={{ minHeight: '100vh', paddingTop: '120px' }}>
        
        <div className="max-w-3xl reveal-up">
          {/* Label */}
          <p className="text-label text-white/70 mb-4">
            Douar Iskoutane · Timoulilte · Azilal
          </p>

          {/* Title with highlight treatment */}
          <h1 className="text-hero text-white mb-6">
            <span className="text-highlight font-display">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-white/90 mb-4" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, lineHeight: 1.3 }}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-white/75 mb-8 max-w-xl leading-relaxed" style={{ fontSize: '15px' }}>
            {t('hero.desc')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="/accommodations" className="btn-accent">
              {t('hero.discover')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
              {t('hero.book')}
            </Link>
            <a
              href={`https://wa.me/212662681618?text=${encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations concernant Ait Ibouzryane.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
              
              {t('hero.contact')}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div className="w-px h-12 bg-white/40" style={{ animation: 'fadeUp 2s ease-in-out infinite' }} />
          <p className="text-white/50 rotate-90 origin-center" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>SCROLL</p>
        </div>
      </div>
    </section>);

}