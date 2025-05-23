import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experiences', { returnObjects: true });

  return (
    <section id="experience" className="container py-4">
      <h2 className="mb-2 border-bottom pb-3 text-center">{t('experience_title')}</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-2">
          <h4 className="fw-semibold">{exp.title}</h4>
          <span className="ps-4 text-muted d-block">{exp.company}</span>
          <small className="ps-5 text-secondary fst-italic">{exp.location} · {exp.duration}</small>
          <ul className="ps-5 mt-1">
          {exp.points.map((point, i) => (
            <li key={i} className="ps-3">{point}</li>
          ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
