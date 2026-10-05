'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

type Category = 'all' | 'property' | 'rooms' | 'nature' | 'mountains' | 'gastronomy' | 'experiences';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Category;
  span?: 'wide' | 'normal';
}

const images: GalleryImage[] = [
{ id: 1, src: "https://images.unsplash.com/photo-1491768745792-05a0e946a3ca", alt: 'Panoramic Atlas mountains with dramatic clouds and green valley at sunrise', category: 'mountains', span: 'wide' },
{ id: 2, src: "https://images.unsplash.com/photo-1721573153882-76b288b20a9e", alt: 'Lush garden with flowering plants, stone pathways and traditional terrace', category: 'property' },
{ id: 3, src: "https://images.unsplash.com/photo-1672122576707-8810cf58d0f5", alt: 'Bright double room with white linens and warm natural light through curtains', category: 'rooms' },
{ id: 4, src: "https://images.unsplash.com/photo-1726660174766-d6d304c19cea", alt: 'Traditional Moroccan tagine with colorful vegetables and aromatic spices', category: 'gastronomy' },
{ id: 5, src: "https://images.unsplash.com/photo-1724125894882-3b9aaeff7e8c", alt: 'Hiking trail through mountain landscape with wildflowers and panoramic views', category: 'experiences' },
{ id: 6, src: "https://images.unsplash.com/photo-1508444029032-cfa1f52eba1c", alt: 'Snow-capped Atlas mountain peaks with green valleys and clear blue sky', category: 'mountains', span: 'wide' },
{ id: 7, src: "https://images.unsplash.com/photo-1695865285429-0f5175d6bb9e", alt: 'Traditional Berber village with stone houses on hillside in warm afternoon light', category: 'experiences' },
{ id: 8, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1068933b0-1784052318635.png", alt: 'Luxurious suite with panoramic mountain view and elegant Moroccan decor', category: 'rooms' },
{ id: 9, src: "https://images.unsplash.com/photo-1625982441160-fe4861e634e4", alt: 'Aerial view of green valleys and mountain landscape in Morocco at golden hour', category: 'nature', span: 'wide' },
{ id: 10, src: "https://img.rocket.new/generatedImages/rocket_gen_img_181a5a2e7-1772735240023.png", alt: 'Spacious accessible room with garden view and warm terracotta tones', category: 'rooms' },
{ id: 11, src: "https://images.unsplash.com/photo-1619265180726-6c11823ebf6a", alt: 'Horse riding through Moroccan countryside with mountains in distance', category: 'experiences' },
{ id: 12, src: "https://img.rocket.new/generatedImages/rocket_gen_img_45ec35cce-1791211289247.png", alt: 'Triple room with traditional stone fireplace and warm Berber rugs', category: 'rooms' },
{ id: 13, src: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa67946-1773142201273.png", alt: 'Room with large private terrace overlooking Atlas mountains', category: 'property' },
{ id: 14, src: "https://images.unsplash.com/photo-1721216596273-586bfde422e7", alt: 'Double room overlooking lush garden with traditional Moroccan textiles', category: 'rooms' },
{ id: 15, src: "https://images.unsplash.com/photo-1562967170-0e5a41a715d2", alt: 'Mountain trail at dusk with golden light and dramatic cloud formations', category: 'nature' }];


export default function GalleryClient() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: {key: Category;label: string;}[] = [
  { key: 'all', label: t('gallery.all') },
  { key: 'property', label: t('gallery.property') },
  { key: 'rooms', label: t('gallery.rooms') },
  { key: 'nature', label: t('gallery.nature') },
  { key: 'mountains', label: t('gallery.mountains') },
  { key: 'gastronomy', label: t('gallery.gastro') },
  { key: 'experiences', label: t('gallery.experiences') }];


  const filtered = activeCategory === 'all' ?
  images :
  images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, prevImage, nextImage]);

  return (
    <>
      {/* Header */}
      <div className="section-padding-sm bg-background">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-label text-accent mb-4">{t('gallery.label')}</p>
            <h1 className="text-h2 font-display text-foreground mb-8">{t('gallery.title')}</h1>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) =>
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-label px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat.key ?
                'bg-primary text-primary-foreground border-primary' :
                'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground'}`
                }>
                
                  {cat.label}
                </button>
              )}
            </div>
          </div>

          {/* Gallery Grid */}
          {/* Bento Grid Audit for filtered 'all' (15 images): */}
          {/* Row 1: [col-1-2: img1 span-wide] [col-3: img2 normal] */}
          {/* Row 2: [col-1: img3 normal] [col-2: img4 normal] [col-3: img5 normal] */}
          {/* Row 3: [col-1-2: img6 span-wide] [col-3: img7 normal] */}
          {/* Row 4: [col-1: img8 normal] [col-2-3: img9 span-wide] */}
          {/* Row 5: [col-1: img10] [col-2: img11] [col-3: img12] */}
          {/* Row 6: [col-1: img13] [col-2: img14] [col-3: img15] */}
          {/* Placed 15/15 ✓ */}
          <div className="gallery-grid">
            {filtered.map((img, index) =>
            <div
              key={img.id}
              className={`overflow-hidden cursor-pointer image-hover-zoom ${
              img.span === 'wide' ? 'col-span-2-gallery' : ''}`
              }
              style={{ aspectRatio: img.span === 'wide' ? '16/9' : '4/3' }}
              onClick={() => openLightbox(index)}>
              
                <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" />
              
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null &&
      <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
          onClick={closeLightbox}
          aria-label="Fermer">
          
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-3"
          onClick={(e) => {e.stopPropagation();prevImage();}}
          aria-label="Image précédente">
          
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-3"
          onClick={(e) => {e.stopPropagation();nextImage();}}
          aria-label="Image suivante">
          
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
          className="relative max-w-5xl max-h-screen w-full mx-4"
          style={{ aspectRatio: '16/10' }}
          onClick={(e) => e.stopPropagation()}>
          
            <AppImage
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority />
          
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      }
    </>);

}