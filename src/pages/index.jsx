import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const { t } = useTranslation();

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <section className="resume-section text-center" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">  
              <span className="text-primary">{t('greeting')}</span>
            </h1>
            <div className="subheading mb-4">
              {t('street')}
              <a href="mailto:cabernaldo010788@email.com" className="ms-1">{t('email')}</a>
            </div>
            <p className="lead text-justify text-center mb-4">
            {t('description')}
            </p>
            <div className="social-icons">
              
            </div>
          </div>
        </section>
      </div>
    );
  }
  
