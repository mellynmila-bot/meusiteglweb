import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].process;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="processo" className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#EED7A1]/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>{t.tag}</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
            {t.title}
          </h2>

          <p className="text-base text-[#2C2011]/85 leading-relaxed font-normal [text-wrap:pretty]">
            {t.subtitle}
          </p>

          {/* 24h Highlight Pill */}
          <div className="pt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0DC] border border-[#B88928]/40 shadow-sm text-sm text-[#8C641C]">
            <Clock className="w-4 h-4 text-[#8C641C]" />
            <span className="font-semibold">{t.timeline}</span>
          </div>
        </div>

        {/* 4 Process Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] border border-[#B88928]/35 hover:border-[#8C641C] rounded-2xl p-7 flex flex-col justify-between space-y-6 relative group shadow-[0_4px_20px_rgba(90,60,10,0.06)] hover:shadow-[0_12px_30px_rgba(90,60,10,0.12)] transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF1DF] border border-[#B88928]/40 flex items-center justify-center text-lg font-serif font-bold text-[#8C641C] group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-serif font-bold text-[#1A140B] group-hover:text-[#8C641C] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#2C2011]/80 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#B88928]/20 flex items-center justify-between text-[11px] text-[#8C641C]">
                <span>Etapa {idx + 1} de 4</span>
                <span className="font-semibold">Simples & Rápido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-14 text-center">
          <button
            onClick={handleCtaClick}
            className="gold-gradient-button px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#140E06] inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(184,137,40,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#140E06]" />
            <span>Falar no Instagram DM para começar em 24h</span>
            <ArrowRight className="w-4 h-4 text-[#140E06]" />
          </button>
        </div>

      </div>
    </section>
  );
};
