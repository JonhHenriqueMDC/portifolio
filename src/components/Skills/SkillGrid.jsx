import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const SkillGrid = ({
  activeTab,
  onTabChange,
  activeCategoryData,
  activeSkillId,
  onSkillSelect,
}) => {
  const { t } = useLanguage();
  const TABS = [
    { id: 'frontend', label: t.skills.tabs.frontend },
    { id: 'backend', label: t.skills.tabs.backend },
    { id: 'outros', label: t.skills.tabs.outros },
  ];
  return (
    <div style={{ width: '100%' }}>
      <style>{`
        .skill-grid-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          margin-bottom: 36px;
        }
        .skill-grid-icons {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .skill-grid-cell {
          height: 94px;
        }
        .skill-grid-icon {
          height: 64px;
          width: 64px;
        }

        @media (max-width: 820px) {
          .skill-grid-icons {
            grid-template-columns: repeat(5, 1fr);
            gap: 14px;
          }
          .skill-grid-cell {
            height: 80px;
          }
          .skill-grid-icon {
            height: 52px;
            width: 52px;
          }
        }

        @media (max-width: 560px) {
          .skill-grid-tabs {
            gap: 24px;
            margin-bottom: 24px;
          }
          .skill-grid-icons {
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }
          .skill-grid-cell {
            height: 68px;
          }
          .skill-grid-icon {
            height: 44px;
            width: 44px;
          }
        }
      `}</style>

      {/* TABS */}
      <div className="skill-grid-tabs">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              style={{
                position: 'relative',
                paddingBottom: '14px',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: isActive ? '#ff2157' : 'rgba(255,255,255,0.5)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
            >
              {tab.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '3px',
                  borderRadius: '9999px',
                  width: isActive ? '100%' : '0',
                  backgroundColor: isActive ? '#ff2157' : 'transparent',
                  transition: 'all 0.3s',
                }}
              />
            </button>
          );
        })}
      </div>

      {/* GRID DE ÍCONES */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="skill-grid-icons"
      >
        {activeCategoryData.map((skill) => {
          const isActive = activeSkillId === skill.id;

          return (
            <motion.button
              key={skill.id}
              type="button"
              onClick={() => onSkillSelect(skill)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="skill-grid-cell"
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: isActive ? '#4c0410' : 'transparent',
                boxShadow: isActive ? '0 0 24px rgba(255,20,70,0.12)' : 'none',
              }}
            >
              <div
                className="skill-grid-icon"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {skill.icon}
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillGrid;