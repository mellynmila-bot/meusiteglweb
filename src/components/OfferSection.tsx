import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, Check, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface OfferSectionProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
  onOpenWhatsapp?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].offer;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EED7A1]/40 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>{t.tag}</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A140B] font-normal leading-tight">
            {t.title}
          </h2>

          <p className="text-lg font-serif text-[#8C641C] italic font-semibold">
            {t.subtitle}
          </p>

          <p className="text-sm text-[#2C2011]/80 font-normal">
            {t.priceNote}
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-[#FFFDF9] border-2 border-[#B88928] shadow-[0_20px_60px_rgba(184,137,40,0.15)] relative overflow-hidden">
          
          {/* Top Banner Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#B88928]/25">
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1A140B] block">
                Pacote Tudo-em-Um
              </span>
              <span className="text-xs text-[#8C641C] font-medium">
                Especialmente projetado para profissionais da beleza em Espanha e Europa
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0DC] border border-[#B88928]/40 text-xs font-bold text-[#8C641C]">
              <Clock className="w-4 h-4 text-[#8C641C]" />
              <span>Entrega Express em 24h</span>
            </div>
          </div>

          {/* 6 Core Inclusions Checklist */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.checklist.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#B88928]/25 hover:border-[#8C641C] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#FAF0DC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#8C641C] stroke-[3]" />
                </div>
                <span className="text-sm text-[#1A140B] font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Value Stack & Final Action */}
          <div className="pt-8 border-t border-[#B88928]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#8C641C] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#8C641C]" />
                <span>Sem mensalidades nem taxas ocultas</span>
              </div>
              <div className="text-sm text-[#2C2011]/80">
                Pague apenas uma vez pela criação e estrutura completa.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleCtaClick}
                className="gold-gradient-button px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#140E06] flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(184,137,40,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#140E06]" />
                <span>Garantir meu GlowSite agora</span>
              </button>

              <button
                onClick={handleCtaClick}
                className="px-5 py-4 rounded-xl text-sm font-semibold text-[#8C641C] bg-[#FAF0DC] border border-[#B88928]/40 hover:bg-[#F3E5C2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#8C641C]" />
                <span>Falar no Instagram DM</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
