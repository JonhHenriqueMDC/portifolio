import React, { useEffect, useState } from 'react';
import { BatteryMedium, SignalHigh, Wifi } from 'lucide-react';
import SkillDisplay from './SkillDisplay';
import SkillSelector from './SkillSelector';

const PhoneMockup = ({ activeSkill, activeCategoryData, activeSkillId, onSkillSelect }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex h-[543px] w-[288px] flex-col rounded-[40px] border-[8px] border-[#2f2f2f] bg-[#1E0000]">
      {/* Container interno — usa FLEX COLUMN para empurrar o bloco inferior para baixo */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[32px] bg-[#1E0000]">

        {/* TOPO (status bar) */}
        <div className="relative z-20 flex h-[36px] w-full flex-shrink-0 items-center justify-between">
          <div className="flex w-[98px] items-center justify-center">
            <p className="font-['Comfortaa',sans-serif] text-[12px] font-bold leading-none text-white">
              {time || '11:26'}
            </p>
          </div>

          {/* NOTCH / SPEAKER / CAMERA */}
          <div className="absolute left-1/2 -top-[2px] flex -translate-x-1/2 justify-center">
            <div className="flex h-[24px] w-[76px] items-center justify-center rounded-b-[14px] bg-[#2f2f2f]">
              <div className="mr-[8px] h-[4px] w-[28px] rounded-full bg-[#050505]" />
              <div className="h-[6px] w-[6px] rounded-full bg-[#050505]" />
            </div>
          </div>

          <div className="flex w-[98px] items-center justify-center gap-[4px] text-white">
            <SignalHigh size={13} strokeWidth={2.4} />
            <Wifi size={13} strokeWidth={2.4} />
            <BatteryMedium size={15} strokeWidth={2.4} />
          </div>
        </div>

        {/* CONTEÚDO (logo, nome, domínio, descrição) */}
        <div className="flex-1 mt-[22px] px-5">
          <SkillDisplay activeSkill={activeSkill} />
        </div>

        {/* FAIXA INFERIOR — carrossel + home bar */}
        <div
          className="relative flex-shrink-0 flex w-full flex-col items-center rounded-t-[30px]"
          style={{
            height: '220px',
            background: 'linear-gradient(180deg, #b0002c 0%, #8a0021 35%, #1c0003 100%)',
          }}
        >
          {/* Carrossel — centralizado */}
          <div className="flex flex-1 items-center pt-[16px]">
            <SkillSelector
              activeCategoryData={activeCategoryData}
              activeSkillId={activeSkillId}
              onSkillSelect={onSkillSelect}
            />
          </div>

          {/* HOME BAR — sempre visível */}
          <div style={{ flexShrink: 0, paddingBottom: '14px', paddingTop: '8px' }}>
            <div style={{
              width: '100px',
              height: '5px',
              borderRadius: '3px',
              backgroundColor: '#fff',
            }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PhoneMockup;