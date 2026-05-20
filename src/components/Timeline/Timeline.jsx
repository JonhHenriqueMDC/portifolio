import React from 'react';
import './Timeline.css';
import { useLanguage } from '../../context/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="timeline-title">{t.timeline.title}</h2>
        
        <div className="timeline-grid">
          {/* EDUCATION */}
          <div className="timeline-column">
            <h3 className="column-title">{t.timeline.eduTitle}</h3>
            <div className="timeline-items">
              {t.timeline.education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-date">{edu.date}</span>
                    <h4 className="timeline-item-title">{edu.title}</h4>
                    <p className="timeline-desc">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
