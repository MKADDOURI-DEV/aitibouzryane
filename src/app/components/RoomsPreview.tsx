'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const rooms = [
{
  id: 'double',
  name: 'Chambre Double',
  area: '20',
  capacity: '2',
  view: 'Vue Jardin',
  image: "https://images.unsplash.com/photo-1727993401095-50cd84abb41b",
  alt: 'Bright double room with white linens, wooden furniture and warm natural light through curtains',
  tags: ['Climatisation', 'Terrasse Privée', 'Salle de bain privée']
},
{
  id: 'triple-pmr',
  name: 'Chambre Triple PMR',
  area: '30',
  capacity: '3',
  view: 'Vue Jardin',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_181a5a2e7-1772735240023.png",
  alt: 'Spacious accessible triple room with garden view, warm terracotta tones and natural materials',
  tags: ['Accessible PMR', 'Climatisation', 'Terrasse Privée']
},
{
  id: 'suite',
  name: 'Suite Vue Jardin',
  area: '150',
  capacity: '4',
  view: 'Vue Montagne',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1833b180d-1767906056565.png",
  alt: 'Luxurious suite with panoramic mountain view, elegant Moroccan decor and private terrace',
  tags: ['150m²', 'Vue Montagne', 'Terrasse Privée']
},
{
  id: 'double-jardin',
  name: 'Chambre Double Vue Jardin',
  area: '24',
  capacity: '2',
  view: 'Vue Jardin',
  image: "https://images.unsplash.com/photo-1721216596273-586bfde422e7",
  alt: 'Double room overlooking lush garden with morning light and traditional Moroccan textiles',
  tags: ['Climatisation', 'Terrasse Privée', 'Vue Jardin']
},
{
  id: 'triple-cheminee',
  name: 'Chambre Triple Cheminée',
  area: '40',
  capacity: '3',
  view: 'Vue Montagne',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_43c62365c-1791197402312.png",
  alt: 'Triple room with traditional stone fireplace, mountain views and authentic Berber rugs',
  tags: ['Cheminée', 'Vue Montagne', 'Climatisation']
},
{
  id: 'triple-terrasse',
  name: 'Chambre Triple Terrasse',
  area: '40',
  capacity: '3',
  view: 'Vue Montagne',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1879e8738-1777831584043.png",
  alt: 'Triple room with private terrace overlooking Atlas mountains, baignoire and natural wood finishes',
  tags: ['Baignoire', 'Terrasse Privée', 'Vue Montagne']
}];


export default function RoomsPreview() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-label text-accent mb-4 reveal-up">{t('rooms.label')}</p>
          <h2 className="text-h2 font-display text-foreground mb-4 reveal-up">{t('rooms.title')}</h2>
          <p className="text-muted-foreground reveal-up" style={{ fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Grid — 6 cards: 3+3 */}
        {/* Row 1: [col-1: double cs-1] [col-2: triple-pmr cs-1] [col-3: suite cs-1] */}
        {/* Row 2: [col-1: double-jardin cs-1] [col-2: triple-cheminee cs-1] [col-3: triple-terrasse cs-1] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms?.map((room, i) =>
          <div
            key={room?.id}
            className="card-room reveal-up"
            style={{ transitionDelay: `${i * 60}ms` }}>
            
              <div className="image-hover-zoom" style={{ aspectRatio: '4/3' }}>
                <AppImage
                src={room?.image}
                alt={room?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-foreground" style={{ fontSize: '22px', fontWeight: 400 }}>{room?.name}</h3>
                  <span className="text-muted-foreground font-medium" style={{ fontSize: '13px' }}>{room?.area}m²</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {room?.tags?.map((tag) =>
                <span key={tag} className="badge-tag" style={{ fontSize: '9px' }}>{tag}</span>
                )}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-5" style={{ fontSize: '13px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>{room?.capacity} pers. · {room?.view}</span>
                </div>
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Link href="/accommodations" className="btn-outline flex-1 justify-center" style={{ padding: '0.6rem 1rem', fontSize: '10px' }}>
                    {t('rooms.view')}
                  </Link>
                  <Link href="/contact" className="btn-primary flex-1 justify-center" style={{ padding: '0.6rem 1rem', fontSize: '10px' }}>
                    {t('rooms.book')}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10 reveal-up">
          <Link href="/accommodations" className="btn-outline">
            Voir tous les hébergements
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}