'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function DestinationTeaser() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-label text-accent reveal-up">{t('dest.label')}</p>
            <h2 className="text-h2 font-display text-foreground reveal-up">{t('dest.title')}</h2>
            <p className="text-muted-foreground leading-relaxed reveal-up" style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: '520px' }}>
              {t('dest.desc')}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 reveal-up">
              {[
              { icon: '⛰️', label: 'Montagnes de l\'Atlas' },
              { icon: '🏘️', label: 'Villages Berbères' },
              { icon: '🌿', label: 'Nature Préservée' },
              { icon: '🎭', label: 'Culture Millénaire' }]?.
              map((item) =>
              <div key={item?.label} className="flex items-center gap-3">
                  <span style={{ fontSize: '20px' }}>{item?.icon}</span>
                  <span className="text-muted-foreground" style={{ fontSize: '13px' }}>{item?.label}</span>
                </div>
              )}
            </div>
            <div className="pt-2 reveal-up">
              <Link href="/contact" className="btn-primary">
                {t('dest.explore')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 md:order-2 reveal-fade">
            <div
              className="overflow-hidden image-hover-zoom"
              style={{ borderBottomLeftRadius: '80px', aspectRatio: '4/5' }}>
              
              <AppImage
                src="https://images.unsplash.com/photo-1621843470334-057e17a886e6"
                alt="Panoramic view of Atlas mountains with snow-capped peaks, green valleys and clear blue sky"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
            </div>
            <div className="absolute -bottom-4 left-6 bg-card p-4 shadow-lg border border-border">
              <p className="text-label text-muted-foreground mb-1">Province d'Azilal</p>
              <p className="font-display text-foreground" style={{ fontSize: '18px' }}>Béni Mellal-Khénifra</p>
              <p className="text-muted-foreground mt-1" style={{ fontSize: '12px' }}>Maroc · Haut Atlas</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}