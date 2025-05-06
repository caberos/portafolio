import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();
  const educationList = t('education_list', { returnObjects: true });

  return (
    <section id="education" className="container py-4">
      <h2 className="mb-4 border-bottom pb-2 text-center">{t('education_title')}</h2>

      {educationList.map((edu, idx) => (
        <div key={idx} className="mb-3">
          <h5 className="fw-semibold mb-1">{edu.degree}</h5>
          <span className="text-muted d-block">{edu.institution}</span>
          <small className="text-secondary">{edu.location} · {edu.duration}</small>
        </div>
      ))}
    </section>
  );
}
