'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactContent() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: '',
    departure: '',
    guests: '2',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappMsg = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations concernant Ait Ibouzryane et connaître les disponibilités.');

  return (
    <>
      {/* Page Header */}
      <section className="section-padding-sm bg-muted/30 border-b border-border">
        <div className="container-main">
          <p className="text-label text-accent mb-4">{t('nav.contact')}</p>
          <h1 className="text-h2 font-display text-foreground mb-3">{t('contact.title')}</h1>
          <p className="text-muted-foreground" style={{ fontSize: '16px', maxWidth: '500px' }}>
            AIT IBOUZRYANE · Douar Iskoutane, Timoulilte, Province d'Azilal, Maroc
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-label text-muted-foreground mb-4">{t('contact.address')}</p>
                <address className="not-italic space-y-1">
                  <p className="font-display text-foreground" style={{ fontSize: '20px', fontWeight: 400 }}>AIT IBOUZRYANE</p>
                  <p className="text-muted-foreground" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                    Douar Iskoutane<br />
                    Timoulilte, Province d'Azilal<br />
                    Maroc
                  </p>
                </address>
              </div>

              <div className="w-full h-px bg-border" />

              <div>
                <p className="text-label text-muted-foreground mb-4">{t('contact.phone')}</p>
                <a
                  href="tel:+212662681618"
                  className="font-display text-foreground hover:text-accent transition-colors"
                  style={{ fontSize: '22px', fontWeight: 400 }}
                >
                  +212 662 681 618
                </a>
                <p className="text-muted-foreground mt-1" style={{ fontSize: '12px', letterSpacing: '0.06em' }}>
                  Téléphone & WhatsApp
                </p>
              </div>

              <div className="w-full h-px bg-border" />

              <div>
                <p className="text-label text-muted-foreground mb-4">WhatsApp Direct</p>
                <a
                  href={`https://wa.me/212662681618?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Envoyer un message WhatsApp
                </a>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Map */}
              <div>
                <p className="text-label text-muted-foreground mb-4">Localisation</p>
                <div className="overflow-hidden border border-border" style={{ aspectRatio: '4/3' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13574.0!2d-6.465643!3d32.216547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEzJzAwLjAiTiA2wrAyNycxNi4zIlc!5e0!3m2!1sfr!2sma!4v1696000000000!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Ait Ibouzryane, Timoulilte, Azilal"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=32.216547,-6.465643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-3 w-full justify-center"
                >
                  Voir l'itinéraire
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <p className="text-label text-muted-foreground mb-6">{t('contact.form')}</p>

              {submitted ? (
                <div className="text-center py-16 border border-border">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="font-display text-foreground text-xl mb-2">Message envoyé</p>
                  <p className="text-muted-foreground" style={{ fontSize: '14px' }}>{t('success.form')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">{t('book.name')} *</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('book.email')} *</label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('book.phone')}</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('contact.guests')}</label>
                      <select
                        className="form-input"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      >
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">{t('book.arrival')}</label>
                      <input
                        type="date"
                        className="form-input"
                        value={formData.arrival}
                        onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">{t('book.departure')}</label>
                      <input
                        type="date"
                        className="form-input"
                        value={formData.departure}
                        onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">{t('contact.subject')}</label>
                    <select
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">— Sélectionner un sujet —</option>
                      <option value="reservation">Demande de réservation</option>
                      <option value="information">Demande d'information</option>
                      <option value="experiences">Expériences & Activités</option>
                      <option value="groupes">Groupes & Événements</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">{t('book.message')}</label>
                    <textarea
                      className="form-input"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('contact.send')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  <p className="text-muted-foreground text-center" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
                    Licence établissement: 22000MH1651
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}