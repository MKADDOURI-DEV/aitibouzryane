'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.accommodations'), href: '/accommodations' },
    { label: t('nav.experiences'), href: '/experiences' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations concernant Ait Ibouzryane et connaître les disponibilités.');

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Left: Logo + Tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={36} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-medium tracking-wide text-foreground">
                  AIT IBOUZRYANE
                </span>
                <span className="text-muted-foreground" style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {t('footer.tagline')}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {t('footer.address')}
            </p>
            <a
              href="tel:+212662681618"
              className="block text-sm text-foreground hover:text-accent transition-colors mt-2 font-medium"
            >
              {t('footer.phone')}
            </a>
            <p className="text-xs text-muted-foreground mt-3">{t('footer.license')}</p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 md:justify-end md:items-start">
            {links?.map((l) => (
              <Link
                key={l?.href}
                href={l?.href}
                className="nav-link text-muted-foreground hover:text-foreground"
              >
                {l?.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ letterSpacing: '0.06em' }}>
              {t('footer.legal')}
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ letterSpacing: '0.06em' }}>
              {t('footer.privacy')}
            </Link>
            <a
              href={`https://wa.me/212662681618?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              style={{ letterSpacing: '0.06em' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}