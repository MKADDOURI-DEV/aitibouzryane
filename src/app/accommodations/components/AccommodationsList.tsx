'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const rooms = [
{
  id: 'double',
  name: 'Chambre Double',
  area: 20,
  capacity: 2,
  bed: 'Lit double',
  bathroom: 'Salle de bain privée',
  view: 'Vue Jardin',
  floor: 'Rez-de-chaussée',
  features: ['Climatisation', 'Terrasse Privée', 'Salle de bain privée', 'Vue Jardin'],
  description: 'Chambre confortable et élégante avec vue sur le jardin fleuri. Espace idéal pour les couples souhaitant profiter du calme de la nature d\'Azilal.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9706d0e-1772204105785.png",
  alt: 'Double room with white linens, wooden furniture and warm natural light, garden view through window',
  images: [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=75',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=75']

},
{
  id: 'triple-pmr',
  name: 'Chambre Triple PMR',
  area: 30,
  capacity: 3,
  bed: 'Lit double + lit simple',
  bathroom: 'Salle de bain privée (accessible PMR)',
  view: 'Vue Jardin',
  floor: 'Rez-de-chaussée',
  features: ['Accessible PMR', 'Climatisation', 'Terrasse Privée', 'Vue Jardin', 'Salle de bain adaptée'],
  description: 'Chambre spacieuse entièrement accessible aux personnes à mobilité réduite. Aménagée avec soin pour garantir confort et autonomie, avec terrasse privée donnant sur le jardin.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_181a5a2e7-1772735240023.png",
  alt: 'Accessible triple room with wide doorways, adapted bathroom and garden terrace view',
  images: [
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=75']

},
{
  id: 'suite',
  name: 'Suite Vue Jardin',
  area: 150,
  capacity: 4,
  bed: 'Grand lit double + canapé-lit',
  bathroom: 'Salle de bain privée avec baignoire',
  view: 'Vue Montagne + Vue Jardin',
  floor: 'Premier étage',
  features: ['150m²', 'Vue Montagne', 'Vue Jardin', 'Climatisation', 'Terrasse Privée', 'Baignoire'],
  description: 'Notre suite la plus spacieuse, avec une vue imprenable sur les montagnes de l\'Atlas et le jardin. Idéale pour les familles ou les séjours prolongés, elle offre un espace de vie exceptionnel.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc1c9287-1773081115121.png",
  alt: 'Luxurious suite with panoramic mountain and garden views, Moroccan decor and private terrace',
  images: [
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=75',
  'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=75']

},
{
  id: 'double-jardin',
  name: 'Chambre Double Vue Jardin',
  area: 24,
  capacity: 2,
  bed: 'Lit double',
  bathroom: 'Salle de bain privée',
  view: 'Vue Jardin',
  floor: 'Premier étage',
  features: ['Climatisation', 'Terrasse Privée', 'Vue Jardin', 'Salle de bain privée'],
  description: 'Chambre double lumineuse avec vue directe sur le jardin fleuri. La terrasse privée permet de profiter du calme et de la fraîcheur du matin dans un cadre naturel exceptionnel.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c1828b7-1773118932479.png",
  alt: 'Double room with direct garden view, private terrace, traditional Moroccan textiles and morning light',
  images: [
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=75']

},
{
  id: 'triple-cheminee',
  name: 'Chambre Triple avec Cheminée',
  area: 40,
  capacity: 3,
  bed: 'Lit double + lit simple',
  bathroom: 'Salle de bain privée',
  view: 'Vue Montagne',
  floor: 'Premier étage',
  features: ['Cheminée', 'Vue Montagne', 'Climatisation', 'Salle de bain privée'],
  description: 'Chambre spacieuse avec cheminée traditionnelle, idéale pour les soirées fraîches de montagne. La vue sur les sommets de l\'Atlas depuis la fenêtre est un spectacle permanent.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1879e8738-1777831584043.png",
  alt: 'Spacious triple room with traditional stone fireplace, mountain views and warm Berber rugs',
  images: [
  'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=75']

},
{
  id: 'triple-terrasse',
  name: 'Chambre Triple avec Terrasse',
  area: 40,
  capacity: 3,
  bed: 'Lit double + lit simple',
  bathroom: 'Salle de bain privée avec baignoire',
  view: 'Vue Montagne',
  floor: 'Deuxième étage',
  features: ['Baignoire', 'Terrasse Privée', 'Vue Montagne', 'Climatisation'],
  description: 'Chambre triple avec grande terrasse privée offrant une vue panoramique sur les montagnes. La baignoire en salle de bain complète cette expérience de séjour privilégiée.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9d9dd45-1764791393123.png",
  alt: 'Triple room with large private terrace overlooking Atlas mountains, bathtub and natural wood finishes',
  images: [
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=75']

}];


export default function AccommodationsList() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-main">
        <div className="space-y-16">
          {rooms?.map((room, i) =>
          <div
            key={room?.id}
            className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center reveal-up ${
            i % 2 === 1 ? 'md:[direction:rtl]' : ''}`
            }
            style={{ transitionDelay: `${i * 60}ms` }}>
            
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className="image-hover-zoom overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <AppImage
                  src={room?.image}
                  alt={room?.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-5 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="badge-tag">{room?.area}{t('acc.sqm')}</span>
                  <span className="badge-tag">{room?.capacity} pers. max</span>
                </div>
                <h2 className="font-display text-foreground" style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400 }}>
                  {room?.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  {room?.description}
                </p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-border">
                  <div>
                    <p className="text-label text-muted-foreground mb-1">{t('acc.bed')}</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{room?.bed}</p>
                  </div>
                  <div>
                    <p className="text-label text-muted-foreground mb-1">{t('acc.view')}</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{room?.view}</p>
                  </div>
                  <div>
                    <p className="text-label text-muted-foreground mb-1">{t('acc.bathroom')}</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{room?.bathroom}</p>
                  </div>
                  <div>
                    <p className="text-label text-muted-foreground mb-1">Étage</p>
                    <p className="text-foreground" style={{ fontSize: '13px' }}>{room?.floor}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {room?.features?.map((f) =>
                <span key={f} className="badge-tag" style={{ fontSize: '9px' }}>{f}</span>
                )}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-2">
                  <Link
                  href="/contact"
                  className="btn-primary">
                  
                    {t('acc.request')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </Link>
                  <a
                  href={`https://wa.me/212662681618?text=${encodeURIComponent(`Bonjour, je souhaite réserver la ${room?.name} à Ait Ibouzryane.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline">
                  
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}