'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutStory() {
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="space-y-6">
            <p className="text-label text-accent reveal-up">{t('about.label')}</p>
            <h2 className="text-h2 font-display text-foreground reveal-up">{t('about.title')}</h2>
            <p className="text-muted-foreground leading-relaxed reveal-up" style={{ fontSize: '16px', lineHeight: 1.85 }}>
              {t('about.desc1')}
            </p>
            <p className="text-muted-foreground leading-relaxed reveal-up" style={{ fontSize: '16px', lineHeight: 1.85 }}>
              {t('about.desc2')}
            </p>
            <div className="flex items-center gap-4 pt-2 reveal-up">
              <div className="text-center">
                <p className="font-display text-foreground" style={{ fontSize: '40px', fontWeight: 300 }}>9.2</p>
                <p className="text-label text-muted-foreground">Note B&B</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-foreground" style={{ fontSize: '40px', fontWeight: 300 }}>268</p>
                <p className="text-label text-muted-foreground">Avis vérifiés</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-foreground" style={{ fontSize: '40px', fontWeight: 300 }}>6</p>
                <p className="text-label text-muted-foreground">Hébergements</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground reveal-up">{t('about.license')}: 22000MH1651</p>
          </div>
          <div className="reveal-fade">
            <div className="overflow-hidden image-hover-zoom" style={{ borderTopRightRadius: '80px', borderBottomLeftRadius: '40px', aspectRatio: '3/4' }}>
              <AppImage
                src="https://images.unsplash.com/photo-1529435016353-95f28e4a8c5d"
                alt="Lush garden with flowering plants, stone pathways and traditional Moroccan terrace in warm afternoon light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
          {
            img: "https://images.unsplash.com/photo-1658173800718-753b4159077c",
            alt: 'Mountain peaks with dramatic clouds and green valley below at sunrise',
            label: 'Montagnes'
          },
          {
            img: "https://images.unsplash.com/photo-1726660174766-d6d304c19cea",
            alt: 'Traditional Moroccan tagine with colorful vegetables and aromatic spices',
            label: 'Gastronomie'
          },
          {
            img: "https://images.unsplash.com/photo-1724125894882-3b9aaeff7e8c",
            alt: 'Hiking trail through mountain landscape with wildflowers and panoramic views',
            label: 'Randonnée'
          }]?.
          map((item) =>
          <div key={item?.label} className="reveal-fade">
              <div className="overflow-hidden image-hover-zoom" style={{ aspectRatio: '4/3' }}>
                <AppImage
                src={item?.img}
                alt={item?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              </div>
              <p className="text-label text-muted-foreground mt-3">{item?.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}