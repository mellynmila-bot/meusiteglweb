import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaFinalProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({ currentLang }) => {
  const t = translations[currentLang].ctaFinal;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25 text-center">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#EED7A1]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0DC] border border-[#B88928]/40 text-xs font-bold text-[#8C641C]">
          <Sparkles className="w-3.5 h-3.5 text-[#8C641C]" />
          <span>Transformação Digital Imediata</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
          {t.title}
        </h2>

        <p className="text-base sm:text-xl text-[#2C2011]/85 font-normal max-w-2xl mx-auto [text-wrap:pretty]">
          {t.subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCtaClick}
            className="gold-gradient-button px-9 py-4 rounded-xl text-base font-semibold text-[#140E06] flex items-center justify-center gap-2 shadow-[0_10px_35px_rgba(184,137,40,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#140E06]" />
            <span>{t.button}</span>
            <ArrowRight className="w-5 h-5 text-[#140E06]" />
          </button>
        </div>

        <p className="text-xs text-[#2C2011]/70 pt-2 tracking-wide font-normal">
          {t.guarantee}
        </p>

      </div>
    </section>
  );
};
