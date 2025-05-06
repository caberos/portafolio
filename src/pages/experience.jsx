import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experiences', { returnObjects: true });

  return (
    <section id="experience" className="container py-3">
      <h2 className="">{t('experience_title')}</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="">
          <h4>{exp.title}</h4>
          <h5 className="text-muted">{exp.company}</h5>
          <p className="">{exp.location} · {exp.duration}</p>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
