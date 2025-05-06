import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container py-4">
      <h2 className="mb-4 border-bottom pb-2">{t('contact_title')}</h2>
      <p className="mb-3">{t('contact_description')}</p>

      <form action={`mailto:${t('contact_email')}`} method="POST" encType="text/plain">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">{t('contact_button')}</button>
      </form>
    </section>
  );
}
