import React from 'react';
import './About.css';

import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{t.about.title}</h2>

          <p className="about-subtitle">
            {t.about.subtitle}
          </p>

          <div className="about-grid">
            {t.about.cards.map((card, index) => (
              <div key={index} className={`about-card ${index === 3 ? 'highlight' : ''}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p>{card.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;