'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const experiences = [
{
  id: 'randonnee',
  title: 'Randonnée en Montagne',
  desc: 'Partez à la découverte des sentiers de l\'Atlas, avec des vues panoramiques sur les vallées d\'Azilal.',
  image: "https://images.unsplash.com/photo-1697316193042-394bbba8d5ec",
  alt: 'Hikers on mountain trail with dramatic Atlas mountain peaks and blue sky in background',
  tag: 'Nature',
  span: 'large'
},
{
  id: 'equitation',
  title: 'Équitation',
  desc: 'Explorez les paysages environnants à cheval, une façon unique de vivre la région.',
  image: "https://images.unsplash.com/photo-1660794126550-be86ea2c2a4a",
  alt: 'Horse riding through green Moroccan countryside with mountains in distance',
  tag: 'Aventure',
  span: 'small'
},
{
  id: 'villages',
  title: 'Villages Berbères',
  desc: 'Découvrez l\'architecture et la culture authentique des villages de la région d\'Azilal.',
  image: "https://images.unsplash.com/photo-1695865285429-0f5175d6bb9e",
  alt: 'Traditional Berber village with stone houses on hillside in Morocco warm afternoon light',
  tag: 'Culture',
  span: 'small'
},
{
  id: 'gastronomie',
  title: 'Saveurs du Terroir',
  desc: 'Dégustez la cuisine marocaine authentique préparée avec des produits locaux de la région.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff800d67-1772079177554.png",
  alt: 'Moroccan tagine with vegetables and spices served in traditional clay pot on terrace',
  tag: 'Gastronomie',
  span: 'large'
}];


export default function ExperiencesPreview() {
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-label text-accent mb-4 reveal-up">{t('exp.label')}</p>
            <h2 className="text-h2 font-display text-foreground reveal-up">{t('exp.title')}</h2>
          </div>
          <div className="reveal-up">
            <Link href="/experiences" className="btn-outline">
              {t('exp.discover')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        {/* Row 1: [col-1: randonnee cs-2] [col-3: equitation cs-1] */}
        {/* Row 2: [col-1: villages cs-1] [col-2: gastronomie cs-2] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Randonnée — large (col-span-2) */}
          <div className="md:col-span-2 experience-card reveal-fade" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
            <AppImage
              src={experiences?.[0]?.image}
              alt={experiences?.[0]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="experience-card-content">
              <span className="badge-tag badge-tag-filled mb-3 inline-block" style={{ fontSize: '9px' }}>{experiences?.[0]?.tag}</span>
              <h3 className="font-display text-white text-2xl md:text-3xl font-normal mb-2">{experiences?.[0]?.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">{experiences?.[0]?.desc}</p>
            </div>
          </div>

          {/* Équitation — small */}
          <div className="experience-card reveal-fade" style={{ aspectRatio: '3/4', minHeight: '300px' }}>
            <AppImage
              src={experiences?.[1]?.image}
              alt={experiences?.[1]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="experience-card-content">
              <span className="badge-tag badge-tag-filled mb-3 inline-block" style={{ fontSize: '9px' }}>{experiences?.[1]?.tag}</span>
              <h3 className="font-display text-white text-xl font-normal mb-2">{experiences?.[1]?.title}</h3>
              <p className="text-white/80 text-sm">{experiences?.[1]?.desc}</p>
            </div>
          </div>

          {/* Villages — small */}
          <div className="experience-card reveal-fade" style={{ aspectRatio: '3/4', minHeight: '300px' }}>
            <AppImage
              src={experiences?.[2]?.image}
              alt={experiences?.[2]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="experience-card-content">
              <span className="badge-tag badge-tag-filled mb-3 inline-block" style={{ fontSize: '9px' }}>{experiences?.[2]?.tag}</span>
              <h3 className="font-display text-white text-xl font-normal mb-2">{experiences?.[2]?.title}</h3>
              <p className="text-white/80 text-sm">{experiences?.[2]?.desc}</p>
            </div>
          </div>

          {/* Gastronomie — large (col-span-2) */}
          <div className="md:col-span-2 experience-card reveal-fade" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
            <AppImage
              src={experiences?.[3]?.image}
              alt={experiences?.[3]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="experience-card-content">
              <span className="badge-tag badge-tag-filled mb-3 inline-block" style={{ fontSize: '9px' }}>{experiences?.[3]?.tag}</span>
              <h3 className="font-display text-white text-2xl md:text-3xl font-normal mb-2">{experiences?.[3]?.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">{experiences?.[3]?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}