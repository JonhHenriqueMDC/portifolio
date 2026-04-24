import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const SkillSelector = ({ activeCategoryData, activeSkillId, onSkillSelect }) => {
  const rawIndex = activeCategoryData.findIndex((s) => s.id === activeSkillId);
  const activeIndex = rawIndex === -1 ? 0 : rawIndex;

  // Mostra no máximo 3 cards (ou menos se a categoria tiver menos itens)
  const count = Math.min(3, activeCategoryData.length);
  const visibleSkills = [];
  for (let i = 0; i < count; i++) {
    const index = (activeIndex + i) % activeCategoryData.length;
    visibleSkills.push(activeCategoryData[index]);
  }

  const handleDragEnd = useCallback(
    (_event, info) => {
      const threshold = 40;
      if (info.offset.x < -threshold) {
        const nextIndex = (activeIndex + 1) % activeCategoryData.length;
        onSkillSelect(activeCategoryData[nextIndex]);
      } else if (info.offset.x > threshold) {
        const prevIndex = (activeIndex - 1 + activeCategoryData.length) % activeCategoryData.length;
        onSkillSelect(activeCategoryData[prevIndex]);
      }
    },
    [activeIndex, activeCategoryData, onSkillSelect]
  );

  return (
    <div style={{ width: '100%', padding: '0 14px' }}>
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'grab',
          touchAction: 'pan-y',
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {visibleSkills.map((skill, i) => {
          const isActive = i === 0;

          return (
            <div
              key={skill.id}
              onClick={() => onSkillSelect(skill)}
              style={{
                display: 'flex',
                height: isActive ? '130px' : '120px',
                width: '80px',
                flexShrink: 0,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                transition: 'all 0.25s ease-out',
                transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : '#3a0010',
                boxShadow: isActive ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isActive ? '48px' : '40px',
                  height: isActive ? '48px' : '40px',
                  transition: 'all 0.25s ease-out',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                }}
              >
                {skill.icon}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillSelector;
