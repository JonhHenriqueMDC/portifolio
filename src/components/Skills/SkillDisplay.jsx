import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const SkillDisplay = ({ activeSkill }) => {
  const { t } = useLanguage();
  if (!activeSkill) return null;

  return (
    <motion.div
      key={activeSkill.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="col-span-12 grid grid-cols-12 items-center gap-y-3"
    >
      {/* IMAGEM E NOME (136x90 cada, total 272px) */}
      <div className="col-span-12 -ml-5 flex w-[272px]">
        {/* Lado Esquerdo (Logo) */}
        <div className="flex h-[90px] w-[136px] items-center justify-center">
          <div className="flex h-[80px] w-[80px] items-center justify-center">
            {activeSkill.icon}
          </div>
        </div>

        {/* Lado Direito (Nome) */}
        <div className="flex h-[90px] w-[136px] items-center justify-start pl-[4px]">
          <p className="font-['Comfortaa',sans-serif] text-[24px] font-medium text-white">
            {activeSkill.name}
          </p>
        </div>
      </div>

      {/* CONTEÚDO (DOMÍNIO + DESCRIÇÃO) */}
      <div className="col-span-12 -ml-5 mt-[18px] flex w-[272px] justify-center">
        <div className="flex w-[218px] flex-col">
          {/* DOMÍNIO + ESTRELAS */}
          <div className="flex h-[18px] w-full items-center justify-between">
            <p className="font-['Comfortaa',sans-serif] text-[12px] font-medium tracking-wide text-white/90">
              {t.skills.dominio}
            </p>
            <div className="flex items-center gap-[2px] text-[#F2C94C]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`flex h-[20px] w-[20px] items-center justify-center text-[22px] leading-none ${
                    star <= activeSkill.stars ? 'opacity-100' : 'opacity-25'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* DESCRIÇÃO */}
          <div className="mt-[16px] w-full">
            <p className="font-['Sora',sans-serif] text-[12px] font-light leading-[1.6] text-white/80">
              {activeSkill.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillDisplay;