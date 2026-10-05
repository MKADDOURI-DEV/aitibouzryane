'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsHero(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.accommodations'), href: '/accommodations' },
    { label: t('nav.experiences'), href: '/experiences' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations concernant Ait Ibouzryane et connaître les disponibilités.');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'scrolled-header' : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <AppLogo size={36} />
              <div className="flex flex-col leading-none">
                <span
                  className={`font-display text-base font-medium tracking-wide transition-colors ${
                    isHero && !scrolled ? 'text-white' : 'text-foreground'
                  }`}
                >
                  AIT IBOUZRYANE
                </span>
                <span
                  className={`text-label transition-colors ${
                    isHero && !scrolled ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                  style={{ fontSize: '9px', letterSpacing: '0.14em' }}
                >
                  TIMOULILTE — AZILAL
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    isHero && !scrolled ? 'nav-link-light' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-1">
                {(['fr', 'en', 'ar'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`lang-switcher-btn ${lang === l ? 'active' : ''} ${
                      isHero && !scrolled ? 'text-white/70 hover:text-white' : ''
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              <a
                href={`https://wa.me/212662681618?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${isHero && !scrolled ? 'nav-link-light' : ''}`}
                style={{ fontSize: '11px' }}
              >
                WhatsApp
              </a>

              <Link href="/contact" className="btn-accent" style={{ padding: '0.6rem 1.25rem' }}>
                {t('nav.book')}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span className={`block w-6 h-px transition-colors ${isHero && !scrolled ? 'bg-white' : 'bg-foreground'}`} />
              <span className={`block w-6 h-px transition-colors ${isHero && !scrolled ? 'bg-white' : 'bg-foreground'}`} />
              <span className={`block w-4 h-px transition-colors ${isHero && !scrolled ? 'bg-white' : 'bg-foreground'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <AppLogo size={32} />
            <span className="font-display text-base font-medium">AIT IBOUZRYANE</span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-2" aria-label="Fermer le menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 flex-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-normal text-foreground hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            {(['fr', 'en', 'ar'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false); }}
                className={`lang-switcher-btn ${lang === l ? 'active' : ''}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-accent w-full justify-center"
          >
            {t('nav.book')}
          </Link>
        </div>
      </div>
    </>
  );
}