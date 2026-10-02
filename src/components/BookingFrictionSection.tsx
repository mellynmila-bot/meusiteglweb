import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { MessageSquareOff, CheckCircle2, ArrowRight } from 'lucide-react';

interface BookingFrictionSectionProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
}

export const BookingFrictionSection: React.FC<BookingFrictionSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].booking;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  const quickPillLabels = [
    { label: t.buttons[0], icon: '✨' },
    { label: t.buttons[1], icon: '💎' },
    { label: t.buttons[2], icon: '📍' },
    { label: t.buttons[3], icon: '⭐' },
    { label: t.buttons[4], icon: '📸' },
    { label: t.buttons[5], icon: '📅' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/35">
      {/* Ambient background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FAF0DC]/40 rounded-full blur-[140px] pointer-events-none" />

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
        </div>

        {/* The 4 Friction Questions vs The Unified GlowSite Hub */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Frustrating Endless DMs (Before) */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl p-6 border border-rose-400/40 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-700 pb-2 border-b border-rose-200">
              <MessageSquareOff className="w-4 h-4 text-rose-600" />
              <span>Perguntas desgastantes no direct:</span>
            </div>

            <div className="space-y-2 pt-2">
              {t.questions.map((question, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FFF6F6] border border-rose-200/80 text-xs sm:text-sm text-[#1A140B] flex items-center justify-between"
                >
                  <span className="italic font-medium">{question}</span>
                  <span className="text-[10px] text-rose-600 font-bold">Fricção</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#1A140B]/60 pt-2 leading-relaxed">
              Cada mensagem sem resposta imediata é uma potencial cliente que abre o Instagram da concorrente.
            </p>
          </div>

          {/* Center Connector */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#FFFDF9] border border-[#B88928]/60 flex items-center justify-center text-[#8C641C] shadow-md">
              <ArrowRight className="w-5 h-5 hidden lg:block" />
              <span className="lg:hidden text-lg">↓</span>
            </div>
            <span className="text-xs font-serif font-bold text-[#8C641C] mt-2">
              Unificado
            </span>
          </div>

          {/* Right: The GlowSite Single Hub (After) */}
          <div className="lg:col-span-5 bg-[#FFFDF9] border-2 border-[#B88928] rounded-2xl p-6 space-y-4 shadow-lg">
            <div className="flex items-center justify-between pb-2 border-b border-[#B88928]/25">
              <span className="text-xs font-bold text-[#8C641C] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B88928]" />
                Tudo reunido num único endereço
              </span>
              <span className="text-[10px] text-[#8C641C] bg-[#FAF0DC] font-bold px-2 py-0.5 rounded">
                Sem atrito
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#1A140B]/90 leading-relaxed font-normal">
              {t.solutionText}
            </p>

            {/* Quick Access Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {quickPillLabels.map((pill, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#FAF3E4] border border-[#B88928]/35 text-center flex flex-col items-center justify-center gap-1 hover:border-[#8C641C] transition-colors shadow-2xs"
                >
                  <span className="text-base">{pill.icon}</span>
                  <span className="text-xs font-semibold text-[#1A140B]">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleCtaClick}
                className="w-full py-2.5 rounded-xl gold-gradient-button text-xs font-semibold text-[#140E06] flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Ter essa organização no meu negócio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#140E06]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

