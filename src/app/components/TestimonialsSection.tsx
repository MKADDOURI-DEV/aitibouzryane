'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Real verified reviews from web search context
const reviews = [
  {
    id: 1,
    text: 'Excellent host, excellent location, great details, exzellent food. Very nice place.',
    author: 'Michael S.',
    country: 'Allemagne',
    rating: 5,
    source: 'bedandbreakfast.eu',
  },
  {
    id: 2,
    text: 'One of the most delightful travel experiences I\'ve ever had! This charming hotel in a beautiful garden setting. The host cooks the most amazing meals.',
    author: 'Sarah L.',
    country: 'États-Unis',
    rating: 5,
    source: 'bedandbreakfast.eu',
  },
  {
    id: 3,
    text: 'A true oasis with amazing dinner and breakfast.',
    author: 'Thomas B.',
    country: 'France',
    rating: 5,
    source: 'bedandbreakfast.eu',
  },
  {
    id: 4,
    text: 'An absolute jewel. The atmosphere is refreshing, the hospitality is real.',
    author: 'Elena M.',
    country: 'Espagne',
    rating: 5,
    source: 'bedandbreakfast.eu',
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const review = reviews?.[active];

  return (
    <section ref={sectionRef} className="section-padding-sm bg-primary text-primary-foreground">
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="text-label text-accent mb-4 reveal-up">{t('reviews.label')}</p>
          <h2 className="text-h2 font-display text-primary-foreground reveal-up">{t('reviews.title')}</h2>
          <div className="flex items-center justify-center gap-3 mt-4 reveal-up">
            <div className="star-rating">★★★★★</div>
            <span className="text-primary-foreground/80" style={{ fontSize: '14px' }}>4.7 · 174 avis Google</span>
            <span className="text-primary-foreground/50">·</span>
            <span className="text-primary-foreground/80" style={{ fontSize: '14px' }}>9.2 · 268 avis B&B</span>
          </div>
        </div>

        {/* Review Card */}
        <div className="max-w-3xl mx-auto reveal-up">
          <div className="relative">
            <svg className="absolute -top-4 -left-2 opacity-20" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display text-center" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, lineHeight: 1.5, color: 'rgba(250,248,243,0.95)' }}>
              "{review?.text}"
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-8 h-px bg-accent" />
              <div className="text-center">
                <p className="font-medium text-primary-foreground" style={{ fontSize: '13px', letterSpacing: '0.06em' }}>{review?.author}</p>
                <p className="text-primary-foreground/60" style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{review?.country} · {review?.source}</p>
              </div>
              <div className="w-8 h-px bg-accent" />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews?.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${i === active ? 'w-8 h-1 bg-accent' : 'w-2 h-1 bg-primary-foreground/30 hover:bg-primary-foreground/50'}`}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-primary-foreground/40 mt-8 reveal-up" style={{ fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase' }}>
          {t('reviews.source')} · bedandbreakfast.eu · Google
        </p>
      </div>
    </section>
  );
}