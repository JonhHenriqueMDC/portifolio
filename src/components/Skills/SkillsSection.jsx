// src/components/Skills/SkillsSection.jsx
import React, { useState, useCallback } from 'react';
import { skillsData } from '../../data/skillsData';
import PhoneMockup from './PhoneMockup';
import SkillGrid from './SkillGrid';

import { useLanguage } from '../../context/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('frontend');
  const [activeSkillId, setActiveSkillId] = useState(skillsData.frontend[0].id);

  const activeCategoryData = skillsData[activeTab];
  const activeSkill =
    activeCategoryData.find((s) => s.id === activeSkillId) || activeCategoryData[0];

  const handleTabChange = useCallback((tabId) => {
    const newData = skillsData[tabId];
    if (!newData || newData.length === 0) return;
    setActiveTab(tabId);
    setActiveSkillId(newData[0].id);
  }, []);

  const handleSkillSelect = useCallback((skill) => {
    if (skill && skill.id) {
      setActiveSkillId(skill.id);
    }
  }, []);

  // Escala do celular — 0.82 = um pouco maior que antes (0.75)
  const SCALE = 0.9;
  const phoneW = Math.round(288 * SCALE);
  const phoneH = Math.round(543 * SCALE);

  return (
    <section id="skills">
      {/* CSS inline para responsividade via @media — não depende de Tailwind */}
      <style>{`
        #skills {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #000;
        }
        .skills-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 30% 20%, rgba(255, 38, 60, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(255, 38, 60, 0.1) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(88,0,11,0.5), rgba(30,0,0,0.98) 50%, #000 100%);
          z-index: 1;
        }
        .skills-container {
          position: relative;
          z-index: 2;
          max-width: clamp(900px, 90vw, 1300px);
          width: 100%;
          margin: 0 auto;
          padding: 80px 40px 40px;
          display: flex;
          flex-direction: column;
        }
        .skills-title {
          font-family: 'Comfortaa', sans-serif;
          font-size: clamp(20px, 3vw, 24px);
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: clamp(20px, 5vh, 40px);
          text-align: left;
          letter-spacing: 4px;
          opacity: 0.8;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }
        .skills-layout {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: clamp(20px, 5vw, 56px);
          width: 100%;
        }
        .skills-phone-wrapper {
          flex-shrink: 0;
          width: ${phoneW}px;
          height: ${phoneH}px;
        }
        .skills-grid-panel {
          min-width: 0;
          flex: 1;
          max-width: 520px;
          padding-top: 20px;
        }

        /* RESPONSIVO */
        @media (max-width: 900px) {
          .skills-layout {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          .skills-grid-panel {
            max-width: 100%;
          }
        }

        /* Short desktops — scale down the phone slightly */
        @media (min-width: 901px) and (max-height: 780px) {
          .skills-container {
            padding: 60px 40px 20px;
          }
          .skills-title {
            margin-bottom: clamp(10px, 2vh, 25px);
          }
          .skills-phone-wrapper {
            transform: scale(0.85);
            transform-origin: top left;
            width: ${Math.round(phoneW * 0.85)}px;
            height: ${Math.round(phoneH * 0.85)}px;
          }
        }

        @media (min-width: 901px) and (max-height: 680px) {
          .skills-phone-wrapper {
            transform: scale(0.75);
            transform-origin: top left;
            width: ${Math.round(phoneW * 0.75)}px;
            height: ${Math.round(phoneH * 0.75)}px;
          }
        }
      `}</style>

      <div className="skills-bg">
        <div className="skills-container">
          <h2 className="skills-title">SKILLS</h2>

          <div className="skills-layout">
            {/* CELULAR */}
            <div className="skills-phone-wrapper">
              <div
                className="phone-scale-inner"
                style={{ transform: `scale(${SCALE})`, transformOrigin: 'top left' }}
              >
                <PhoneMockup
                  activeSkill={activeSkill}
                  activeCategoryData={activeCategoryData}
                  activeSkillId={activeSkillId}
                  onSkillSelect={handleSkillSelect}
                />
              </div>
            </div>

            {/* PAINEL DIREITO */}
            <div className="skills-grid-panel">
              <SkillGrid
                activeTab={activeTab}
                onTabChange={handleTabChange}
                activeCategoryData={activeCategoryData}
                activeSkillId={activeSkillId}
                onSkillSelect={handleSkillSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;