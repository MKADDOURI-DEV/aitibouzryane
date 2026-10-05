'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const experiences = [
{
  id: 'randonnee',
  title: 'Randonnée en Montagne',
  desc: 'Partez à la découverte des sentiers balisés de la région d\'Azilal. Les paysages de l\'Atlas offrent des panoramas grandioses, entre vallées verdoyantes et sommets enneigés. Des itinéraires adaptés à tous les niveaux sont disponibles.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4f1179171-1791211289354.png",
  alt: 'Mountain hiking trail with dramatic Atlas peaks, wildflowers and panoramic valley views',
  duration: 'Demi-journée à journée complète',
  difficulty: 'Facile à Difficile',
  tag: 'Nature',
  icon: '⛰️'
},
{
  id: 'equitation',
  title: 'Équitation',
  desc: 'Explorez les environs d\'Ait Ibouzryane à cheval. Une façon unique et authentique de découvrir les paysages ruraux de la région, accompagné de guides locaux expérimentés.',
  image: "https://images.unsplash.com/photo-1679612867076-2424ec60aaa3",
  alt: 'Horse riding through Moroccan countryside with mountains and olive trees in golden afternoon light',
  duration: '2h à journée complète',
  difficulty: 'Tous niveaux',
  tag: 'Aventure',
  icon: '🐎'
},
{
  id: 'balades',
  title: 'Balades à Pied',
  desc: 'Promenades tranquilles dans les environs immédiats d\'Ait Ibouzryane. Découvrez la flore locale, les sources d\'eau et les paysages bucoliques de la commune de Timoulilte.',
  image: "https://images.unsplash.com/photo-1482707967165-44ff0000000c",
  alt: 'Peaceful walking path through green Moroccan countryside with wildflowers and mountain backdrop',
  duration: '1h à 3h',
  difficulty: 'Facile',
  tag: 'Détente',
  icon: '🚶'
},
{
  id: 'velo',
  title: 'Excursions à Vélo',
  desc: 'Partez à vélo sur les routes et pistes de la région. La location de vélos est disponible sur place. Un excellent moyen de couvrir plus de terrain tout en restant en contact avec la nature.',
  image: "https://images.unsplash.com/photo-1549311986-87f53aece52e",
  alt: 'Cycling through mountain landscape on rural Moroccan road with Atlas mountains in background',
  duration: '2h à journée complète',
  difficulty: 'Facile à Modéré',
  tag: 'Sport',
  icon: '🚴'
},
{
  id: 'villages',
  title: 'Découverte des Villages',
  desc: 'Immersion dans la culture berbère authentique des villages environnants. Rencontrez les habitants, découvrez l\'architecture traditionnelle et les modes de vie ancestraux de la région d\'Azilal.',
  image: "https://images.unsplash.com/photo-1695865285429-0f5175d6bb9e",
  alt: 'Traditional Berber village with stone houses on hillside, narrow alleys and mountain backdrop',
  duration: 'Demi-journée',
  difficulty: 'Facile',
  tag: 'Culture',
  icon: '🏘️'
},
{
  id: 'gastronomie',
  title: 'Gastronomie Locale',
  desc: 'Découvrez les saveurs authentiques de la cuisine marocaine préparée avec des produits frais et locaux. Tajines, couscous, thé à la menthe et spécialités régionales sont au menu.',
  image: "https://images.unsplash.com/photo-1697754670540-7b0e5b52f38e",
  alt: 'Traditional Moroccan tagine with colorful vegetables and aromatic spices served on terrace',
  duration: 'Sur place',
  difficulty: 'Non applicable',
  tag: 'Gastronomie',
  icon: '🍽️'
}];


export default function ExperiencesList() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const whatsappMsg = (title: string) =>
  encodeURIComponent(`Bonjour, je souhaite obtenir des informations sur l'expérience "${title}" à Ait Ibouzryane.`);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-main">
        <div className="space-y-20">
          {experiences.map((exp, i) =>
          <div
            key={exp.id}
            className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center reveal-up ${
            i % 2 === 1 ? 'md:[direction:rtl]' : ''}`
            }
            style={{ transitionDelay: `${i * 50}ms` }}>
            
              {/* Image */}
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <div className="image-hover-zoom overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <AppImage
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-5 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: '28px' }}>{exp.icon}</span>
                  <span className="badge-tag badge-tag-filled" style={{ fontSize: '9px' }}>{exp.tag}</span>
                </div>
                <h2 className="font-display text-foreground" style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 400 }}>
                  {exp.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                  {exp.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-border">
                  <div>
                    <p className="text-label text-muted-foreground mb-1">{t('exp.page.duration')}</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{exp.duration}</p>
                  </div>
                  <div>
                    <p className="text-label text-muted-foreground mb-1">{t('exp.page.difficulty')}</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{exp.difficulty}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                  href={`https://wa.me/212662681618?text=${whatsappMsg(exp.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary">
                  
                    {t('exp.page.inquire')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}