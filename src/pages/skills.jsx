import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skills = t('skills_list', { returnObjects: true });

  return (
    <section id="skills" className="container py-4">
      <h2 className="mb-4 border-bottom pb-2">{t('skills_title')}</h2>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="badge bg-primary">{skill}</span>
        ))}
      </div>
    </section>
  );
}
