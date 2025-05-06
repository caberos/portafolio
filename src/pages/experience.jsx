import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experiences', { returnObjects: true });

  return (
    <section id="experience" className="container py-4">
      <h2 className="mb-3 border-bottom pb-2 text-center">{t('experience_title')}</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-3">
          <h5 className="fw-semibold">{exp.title}</h5>
          <span className="ps-3 text-muted d-block ">{exp.company}</span>
          <small className="ps-4 text-secondary fst-italic">{exp.location} · {exp.duration}</small>
          <ul className="ps-5 mt-2">
          {exp.points.map((point, i) => (
            <li key={i} className="">{point}</li>
          ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
