'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function IntroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative reveal-fade">
            <div
              className="overflow-hidden image-hover-zoom"
              style={{ borderTopRightRadius: '100px', aspectRatio: '4/5' }}>
              
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_448ad6292-1790935445838.png"
                alt="Moroccan garden courtyard with lush greenery, terrace and warm morning light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-accent text-accent-foreground p-5 shadow-lg">
              <p className="font-display text-4xl font-normal leading-none">9.2</p>
              <p className="text-xs mt-1 font-medium tracking-wider opacity-90">/ 10 · 268 avis</p>
              <p className="text-xs opacity-75 mt-0.5">bedandbreakfast.eu</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-label text-accent reveal-up">{t('intro.label')}</p>
            <h2 className="text-h2 text-foreground reveal-up font-display">
              {t('intro.title')}
            </h2>
            <div className="divider-ornament reveal-up">
              <span className="text-accent text-lg">✦</span>
            </div>
            <p className="text-muted-foreground leading-relaxed reveal-up" style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: '520px' }}>
              {t('intro.desc')}
            </p>
            <div className="flex flex-wrap gap-3 pt-2 reveal-up">
              {['Jardin', 'Terrasse', 'Restaurant', 'Wi-Fi Gratuit', 'Parking Gratuit', 'Climatisation']?.map((tag) =>
              <span key={tag} className="badge-tag">{tag}</span>
              )}
            </div>
            <div className="pt-2 reveal-up">
              <Link href="/about" className="btn-outline">
                {t('intro.more')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}