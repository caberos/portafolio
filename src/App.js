import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Index from './pages/index.jsx'
import Projects from './pages/projects.jsx';
import Contacts from './pages/contact.jsx';
import Education from './pages/education.jsx';
import Experience from './pages/experience.jsx';
import Skills from './pages/skills.jsx';
import Navbar from './components/navbar.jsx';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-md-9 offset-md-3 col-lg-10 offset-lg-2 p-4">
          <Index />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contacts />
        </div>
      </div>
    </div>
  );
}
