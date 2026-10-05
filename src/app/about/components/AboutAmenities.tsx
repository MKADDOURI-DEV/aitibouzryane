'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const amenities = [
  { icon: '🌿', label: 'Jardin', desc: 'Grand jardin fleuri avec coin détente' },
  { icon: '☀️', label: 'Terrasse', desc: 'Terrasse ensoleillée avec vue panoramique' },
  { icon: '🍽️', label: 'Restaurant', desc: 'Cuisine marocaine et spécialités locales' },
  { icon: '📶', label: 'Wi-Fi Gratuit', desc: 'Connexion Wi-Fi disponible dans tout l\'établissement' },
  { icon: '🚗', label: 'Parking Gratuit', desc: 'Parking privé sécurisé sur place' },
  { icon: '❄️', label: 'Climatisation', desc: 'Toutes les chambres climatisées' },
  { icon: '🔥', label: 'Barbecue', desc: 'Espace barbecue disponible' },
  { icon: '🧺', label: 'Aire de pique-nique', desc: 'Espace pique-nique dans le jardin' },
  { icon: '♿', label: 'Accès PMR', desc: 'Chambre accessible aux personnes à mobilité réduite' },
  { icon: '🚲', label: 'Location de vélos', desc: 'Service de location de vélos disponible' },
  { icon: '🚙', label: 'Location de voitures', desc: 'Service de location de voitures' },
  { icon: '✈️', label: 'Navette aéroport', desc: 'Aéroport de Béni Mellal à 28 km' },
];

export default function AboutAmenities() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
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
        <div className="text-center mb-12">
          <p className="text-label text-accent mb-4 reveal-up">{t('about.amenities')}</p>
          <h2 className="text-h2 font-display text-foreground reveal-up">Services & Équipements</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities?.map((item, i) => (
            <div
              key={item?.label}
              className="bg-card p-5 border border-border hover:border-accent transition-colors reveal-up"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="block text-2xl mb-3">{item?.icon}</span>
              <h3 className="font-medium text-foreground mb-1" style={{ fontSize: '14px' }}>{item?.label}</h3>
              <p className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: 1.6 }}>{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}