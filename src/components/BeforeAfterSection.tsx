import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { XCircle, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].beforeAfter;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25">
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#EED7A1]/35 rounded-full blur-[160px] pointer-events-none" />

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
        </div>

        {/* Comparison Cards Grid */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card ANTES */}
          <div className="rounded-3xl p-8 bg-[#FFFFFF] border border-rose-300 shadow-md flex flex-col justify-between space-y-6 relative">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-200">
                <span className="text-base font-serif font-bold text-rose-700">
                  {t.beforeTitle}
                </span>
                <span className="text-xs text-rose-700 bg-rose-50 font-semibold px-2.5 py-1 rounded-full border border-rose-200">
                  Perda de clientela
                </span>
              </div>

              <div className="space-y-4 pt-6">
                {t.beforeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A140B]/85 font-normal leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-rose-100 text-xs text-rose-700/80 font-medium italic">
              Resultado: Desgaste diário e dificuldade de aumentar preços.
            </div>
          </div>

          {/* Card DEPOIS (COM GLOWSITE) */}
          <div className="rounded-3xl p-8 bg-[#FFFDF8] border-2 border-[#B88928] shadow-[0_15px_45px_rgba(184,137,40,0.18)] flex flex-col justify-between space-y-6 relative scale-[1.02]">
            {/* Top highlight ribbon */}
            <div className="absolute -top-3.5 right-6 bg-[#B88928] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Padrão Europeu de Luxo
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#B88928]/30">
                <span className="text-lg font-serif font-bold text-[#8C641C] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#B88928]" />
                  {t.afterTitle}
                </span>
                <span className="text-xs text-[#140E06] bg-[#F5DE9B] font-bold px-2.5 py-1 rounded-full">
                  Alta Conversão
                </span>
              </div>

              <div className="space-y-4 pt-6">
                {t.afterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B88928] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A140B] font-semibold leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#B88928]/25 flex items-center justify-between">
              <span className="text-xs text-[#8C641C] font-serif italic font-bold">
                Resultado: Posicionamento nobre e agenda valorizada.
              </span>
              <button
                onClick={handleCtaClick}
                className="text-xs font-bold text-[#8C641C] hover:text-[#1A140B] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Quero este padrão</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

