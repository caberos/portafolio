import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects_list', { returnObjects: true });

  return (
    <section id="projects" className="container py-2">
      <h2 className="mb-3 border-bottom pb-2 text-center">{t('projects_title')}</h2>

      <div className="row">
        {projects.map((proj, idx) => (
          <div className="col-md-4 mb-2" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{proj.name}</h5>
                <p className="card-text text-justify">{proj.description}</p>
                <div className="mb-2">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-success me-1">{tech}</span>
                  ))}
                </div>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                    {t('view_code')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
