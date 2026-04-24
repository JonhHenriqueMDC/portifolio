// src/components/Skills/SkillsSection.jsx
import React, { useState, useCallback } from 'react';
import { skillsData } from '../../data/skillsData';
import PhoneMockup from './PhoneMockup';
import SkillGrid from './SkillGrid';

const SkillsSection = () => {
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
        .skills-bg {
          background: radial-gradient(circle at top, rgba(88,0,11,0.45), rgba(30,0,0,0.98) 45%, #000 100%);
        }
        .skills-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 80px 40px 100px;
        }
        .skills-title {
          font-family: 'Comfortaa', sans-serif;
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 56px;
        }
        .skills-layout {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 56px;
        }
        .skills-phone-wrapper {
          flex-shrink: 0;
          width: ${phoneW}px;
          height: ${phoneH}px;
          overflow: hidden;
          order: 0;
        }
        .skills-grid-panel {
          min-width: 0;
          flex: 1;
          max-width: 520px;
          padding-top: 4px;
          order: 1;
        }

        /* RESPONSIVO: quando a tela é pequena, empilhar */
        @media (max-width: 820px) {
          .skills-container {
            padding: 60px 24px 80px;
          }
          .skills-layout {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          .skills-phone-wrapper {
            order: 1; /* celular vai para baixo */
          }
          .skills-grid-panel {
            order: 0; /* grid vai para cima */
            max-width: 100%;
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .skills-container {
            padding: 48px 16px 60px;
          }
          .skills-title {
            font-size: 20px;
            margin-bottom: 36px;
          }
          .skills-phone-wrapper {
            width: ${Math.round(288 * 0.75)}px;
            height: ${Math.round(543 * 0.75)}px;
          }
          .skills-phone-wrapper .phone-scale-inner {
            transform: scale(0.75) !important;
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