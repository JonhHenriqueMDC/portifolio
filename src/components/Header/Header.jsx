import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = ({ activeSection }) => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'hero', label: t.nav.hero },
    { id: 'sobre', label: t.nav.sobre },
    { id: 'skills', label: t.nav.skills },
    { id: 'projetos', label: t.nav.projetos },
    { id: 'timeline', label: t.nav.timeline },
    { id: 'contato', label: t.nav.contato }
  ];
  return (
    <>
      <header className="header premium-header">
        <div className="header-content">
          <div className="logo-jhm">
            &lt;JHM/&gt;
          </div>
          
          <nav className="desktop-nav">
            <div className="nav-items-wrapper">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="nav-text">{item.label}</span>
                  <span className="active-underline"></span>
                </a>
              ))}
            </div>
          </nav>

          <div className="header-right-placeholder">
            <div className="lang-switcher">
              {['pt', 'en', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`lang-btn ${language === lang ? 'active' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE LANGUAGE SWITCHER */}
      <div className="mobile-lang-switcher">
        {[
          { code: 'pt', label: 'PT', flag: '🇧🇷' },
          { code: 'en', label: 'EN', flag: '🇺🇸' },
          { code: 'es', label: 'ES', flag: '🇪🇸' }
        ].map((item) => (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            className={`mobile-lang-btn ${language === item.code ? 'active' : ''}`}
          >
            <span className="mobile-lang-flag">{item.flag}</span>
            <span className="mobile-lang-text">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
