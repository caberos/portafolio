import React from 'react';
import { useTranslation } from 'react-i18next';


export default function Navbar() {
  return (
    <>
      <button className="btn btn-primary d-md-none m-3"
        type="button" data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu">
        Menú
      </button>
      <div className="d-none d-md-flex flex-column bg-dark text-white vh-100 p-4 position-fixed" style={{ width: '225px' }}>
        <NavbarContent />
      </div>
      <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex="-1"
        id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Daniel Cabero</h5>
          <button type="button" className="btn-close btn-close-white"       data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div className="offcanvas-body">
          <NavbarContent />
        </div>
      </div>
    </>
  );
}

function NavbarContent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      {/* Contenido centralizado */}
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <ul className="nav flex-column text-center">
          <li className="nav-item"><a className="nav-link text-white" href="#about">{t('about')}</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#experience">{t('experience')}</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#education">{t('education')}</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#projects">{t('projects')}</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#skills">{t('skills')}</a></li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <hr className="bg-light" />
        <div className="btn-group" role="group">
          <button onClick={() => changeLanguage('es')} className="btn btn-sm btn-light">ES</button>
          <button onClick={() => changeLanguage('en')} className="btn btn-sm btn-light">EN</button>
        </div>
      </div>
    </div>
  );
}
