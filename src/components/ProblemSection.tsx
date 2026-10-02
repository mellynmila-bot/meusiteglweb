import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Instagram, Search, CalendarX, Sparkles, AlertCircle } from 'lucide-react';

interface ProblemSectionProps {
  currentLang: Language;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].problem;

  const cardIcons = [
    <Instagram className="w-6 h-6 text-[#8C641C]" key="instagram" />,
    <Search className="w-6 h-6 text-[#8C641C]" key="search" />,
    <CalendarX className="w-6 h-6 text-[#8C641C]" key="calendar" />,
    <Sparkles className="w-6 h-6 text-[#8C641C]" key="gem" />,
  ];

  return (
    <section id="problema" className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/30">
      {/* Subtle warm light accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FAF0DC]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>{t.tag}</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-[#2C2011]/85 leading-relaxed font-normal [text-wrap:pretty]">
            {t.description}
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((card, idx) => (
            <div
              key={card.id}
              className="bg-[#FFFDF9] border border-[#B88928]/40 hover:border-[#8C641C] rounded-2xl p-7 flex flex-col justify-between space-y-4 relative group shadow-[0_4px_20px_rgba(90,60,10,0.06)] hover:shadow-[0_12px_30px_rgba(90,60,10,0.12)] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF1DF] border border-[#B88928]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {cardIcons[idx]}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A140B] group-hover:text-[#8C641C] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2C2011]/80 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#B88928]/20 flex items-center gap-1.5 text-[11px] text-[#8C641C] font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-[#8C641C]" />
                <span>Oportunidade perdida</span>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Quote Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFDF9]/95 border border-[#B88928]/45 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#8C641C] uppercase tracking-wider block">
              A realidade atual do mercado
            </span>
            <p className="text-sm text-[#1A140B]/90 font-medium">
              Mais de 68% das pessoas que pesquisam serviços de beleza no Google desistem se não encontrarem informações claras e localização em até 10 segundos.
            </p>
          </div>
          <div className="shrink-0 text-xl font-serif font-bold text-[#8C641C]">
            GlowSite Resolve
          </div>
        </div>

      </div>
    </section>
  );
};

