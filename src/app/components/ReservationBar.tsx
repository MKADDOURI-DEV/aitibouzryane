'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ReservationBar() {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    adults: '2',
    children: '0',
    room: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const rooms = [
    'Chambre Double (20m²)',
    'Chambre Triple PMR (30m²)',
    'Suite Vue Jardin (150m²)',
    'Chambre Double Vue Jardin (24m²)',
    'Chambre Triple avec Cheminée (40m²)',
    'Chambre Triple avec Terrasse (40m²)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 4000);
  };

  return (
    <div className="relative z-30 -mt-8 mx-4 md:mx-auto container-main">
      <div className="bg-card shadow-xl border border-border p-6 md:p-8">
        {!showForm ? (
          <>
            <p className="text-label text-muted-foreground mb-5">{t('book.title')}</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex flex-col">
                <label className="form-label">{t('book.arrival')}</label>
                <input
                  type="date"
                  className="form-input"
                  value={formData.arrival}
                  onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label className="form-label">{t('book.departure')}</label>
                <input
                  type="date"
                  className="form-input"
                  value={formData.departure}
                  onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label className="form-label">{t('book.adults')}</label>
                <select
                  className="form-input"
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                >
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="form-label">{t('book.children')}</label>
                <select
                  className="form-input"
                  value={formData.children}
                  onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                >
                  {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-end">
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary w-full justify-center"
                >
                  {t('book.check')}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">{t('success.form')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-label text-muted-foreground">{t('book.title')}</p>
                  <button type="button" onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="form-label">{t('book.arrival')}</label>
                    <input type="date" className="form-input" value={formData.arrival} onChange={(e) => setFormData({...formData, arrival: e.target.value})} required />
                  </div>
                  <div>
                    <label className="form-label">{t('book.departure')}</label>
                    <input type="date" className="form-input" value={formData.departure} onChange={(e) => setFormData({...formData, departure: e.target.value})} required />
                  </div>
                  <div>
                    <label className="form-label">{t('book.room')}</label>
                    <select className="form-input" value={formData.room} onChange={(e) => setFormData({...formData, room: e.target.value})}>
                      <option value="">— Sélectionner —</option>
                      {rooms.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">{t('book.name')}</label>
                    <input type="text" className="form-input" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div>
                    <label className="form-label">{t('book.phone')}</label>
                    <input type="tel" className="form-input" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                  </div>
                  <div>
                    <label className="form-label">{t('book.email')}</label>
                    <input type="email" className="form-input" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div className="md:col-span-3">
                    <label className="form-label">{t('book.message')}</label>
                    <textarea className="form-input" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  {t('book.submit')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}